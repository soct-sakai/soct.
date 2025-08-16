"use client"

import { useState } from "react"
import { usePlanSelection, type SizeSelection, type MountSelection } from "@/context/plan-selection-context"

interface SizeOption {
  size: string
  price: string
  priceValue?: number
}

interface MountOption {
  name: string
  price: string
  priceValue: number
}

interface StarterPlanSelectorProps {
  sizeOptions: SizeOption[]
}

export function StarterPlanSelector({ sizeOptions }: StarterPlanSelectorProps) {
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: number }>({})
  const [selectedMounts, setSelectedMounts] = useState<{ [key: number]: boolean }>({})
  const [totalPrice, setTotalPrice] = useState(0)

  // Context から状態と更新関数を取得
  const planSelection = usePlanSelection()

  // 金具オプションのリスト
  const mountOptions: MountOption[] = [
    { name: "壁のみテレビ施工のみ", price: "0円", priceValue: 0 },
    { name: "汎用壁固定式金具 小(～32)", price: "13,200円", priceValue: 13200 },
    { name: "汎用壁固定式金具 中(42～65まで)", price: "16,500円", priceValue: 16500 },
    { name: "汎用壁固定式金具 中フレームタイプ", price: "19,800円", priceValue: 19800 },
    { name: "汎用壁固定式金具 大(75～85まで)", price: "19,800円", priceValue: 19800 },
    { name: "汎用スイングモーション式金具 小ワンアーム(～32)", price: "16,500円", priceValue: 16500 },
    { name: "汎用スイングモーション式金具 中(42～65まで)", price: "19,800円", priceValue: 19800 },
    { name: "汎用スイングモーション式金具 中ワンアーム", price: "22,000円", priceValue: 22000 },
    { name: "汎用スイングモーション式金具 大(75～85まで)", price: "29,800円", priceValue: 29800 },
    { name: "その他の金具(100インチ対応や、天釣り金具等)", price: "応相談", priceValue: 0 },
  ]

  const handleSizeChange = (index: number, checked: boolean, quantity = 1) => {
    const newSelectedSizes = { ...selectedSizes }

    if (checked) {
      newSelectedSizes[index] = quantity
    } else {
      delete newSelectedSizes[index]
    }

    setSelectedSizes(newSelectedSizes)
    calculateTotal(newSelectedSizes, selectedMounts)
  }

  const handleQuantityChange = (index: number, quantity: number) => {
    if (selectedSizes[index]) {
      const newSelectedSizes = { ...selectedSizes, [index]: quantity }
      setSelectedSizes(newSelectedSizes)
      calculateTotal(newSelectedSizes, selectedMounts)
    }
  }

  const handleMountChange = (index: number, checked: boolean) => {
    const newSelectedMounts = { ...selectedMounts }

    // 金具は一つだけ選択できるようにする
    if (checked) {
      // 他の金具の選択を解除
      Object.keys(newSelectedMounts).forEach((key) => {
        newSelectedMounts[Number.parseInt(key)] = false
      })
      newSelectedMounts[index] = true
    } else {
      newSelectedMounts[index] = false
    }

    setSelectedMounts(newSelectedMounts)
    calculateTotal(selectedSizes, newSelectedMounts)
  }

  const calculateTotal = (selectedSizes: { [key: number]: number }, selectedMounts: { [key: number]: boolean }) => {
    let total = 0

    // サイズオプションの合計
    Object.entries(selectedSizes).forEach(([indexStr, quantity]) => {
      const index = Number.parseInt(indexStr)
      const option = sizeOptions[index]
      const priceValue = option.priceValue || Number.parseInt(option.price.replace(/[^0-9]/g, "")) || 0

      if (!isNaN(priceValue)) {
        total += priceValue * quantity
      }
    })

    // 金具オプションの合計
    Object.entries(selectedMounts).forEach(([indexStr, selected]) => {
      if (selected) {
        const index = Number.parseInt(indexStr)
        const option = mountOptions[index]
        total += option.priceValue
      }
    })

    setTotalPrice(total)

    // Context に選択内容を保存
    updatePlanSelectionContext(selectedSizes, selectedMounts, total)
  }

  // Context に選択内容を保存する関数
  const updatePlanSelectionContext = (
    sizes: { [key: number]: number },
    mounts: { [key: number]: boolean },
    total: number,
  ) => {
    // 選択されたサイズを配列に変換
    const sizeSelections: SizeSelection[] = Object.entries(sizes).map(([indexStr, quantity]) => {
      const index = Number.parseInt(indexStr)
      const option = sizeOptions[index]
      return {
        size: option.size,
        price: option.price,
        quantity: quantity,
      }
    })

    // 選択された金具を取得
    let mountSelection: MountSelection | null = null
    for (const [indexStr, selected] of Object.entries(mounts)) {
      if (selected) {
        const index = Number.parseInt(indexStr)
        const option = mountOptions[index]
        mountSelection = {
          name: option.name,
          price: option.price,
        }
        break
      }
    }

    // Context を更新
    planSelection.setSelectedSizes(sizeSelections)
    planSelection.setSelectedMount(mountSelection)
    planSelection.setTotalPrice(total)
  }

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-3">インチサイズ別料金：</h4>
        <div className="space-y-3">
          {sizeOptions.map((option, i) => (
            <div key={i} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`size-option-${i}`}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  onChange={(e) => handleSizeChange(i, e.target.checked, selectedSizes[i] || 1)}
                  checked={selectedSizes[i] !== undefined}
                />
                <label htmlFor={`size-option-${i}`} className="font-medium">
                  {option.size}：{option.price}
                </label>
              </div>
              <div className="flex items-center">
                <select
                  className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  value={selectedSizes[i] || 1}
                  onChange={(e) => handleQuantityChange(i, Number.parseInt(e.target.value))}
                  disabled={selectedSizes[i] === undefined}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}台
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">金具オプション：</h4>
        <div className="space-y-3">
          {mountOptions.map((option, i) => (
            <div key={i} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`mount-option-${i}`}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  onChange={(e) => handleMountChange(i, e.target.checked)}
                  checked={selectedMounts[i] === true}
                />
                <label htmlFor={`mount-option-${i}`} className="font-medium">
                  {option.name}：{option.price}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPrice > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="font-semibold text-lg">合計金額: {totalPrice.toLocaleString()}円</p>
          <p className="text-sm text-gray-600">※ 選択したサイズと金具に基づく概算です</p>
        </div>
      )}
    </div>
  )
}


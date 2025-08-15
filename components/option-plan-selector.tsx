"use client"

import { useState } from "react"
import { usePlanSelection, type OptionSelection } from "@/context/plan-selection-context"

interface OptionItem {
  name: string
  price: string
  priceValue: number
  allowQuantity?: boolean
  quantityLabel?: string
}

export function OptionPlanSelector() {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: boolean }>({})
  const [totalPrice, setTotalPrice] = useState(0)
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({})

  // コンテキストを取得
  const planSelection = usePlanSelection()

  // オプションのリスト
  const optionItems: OptionItem[] = [
    // 一般オプション
    { name: "Wifi設定 1台毎", price: "3,300円", priceValue: 3300, allowQuantity: true, quantityLabel: "台数" },
    { name: "周辺機器接続設定 1台毎", price: "2,200円", priceValue: 2200, allowQuantity: true, quantityLabel: "台数" },
    {
      name: "電源ケーブルL字変換 1台毎",
      price: "1,320円",
      priceValue: 1320,
      allowQuantity: true,
      quantityLabel: "台数",
    },
    {
      name: "電源ケーブル1ｍ延長 1ｍ毎",
      price: "1,320円",
      priceValue: 1320,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    {
      name: "USB延長ケーブル1ｍ延長 1ｍ毎",
      price: "1,320円",
      priceValue: 1320,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    {
      name: "4K8K5C同軸ケーブル(アンテナ線)1.5ｍ",
      price: "1,650円",
      priceValue: 1650,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    {
      name: "4K8K5C同軸ケーブル(アンテナ線)2ｍ",
      price: "2,200円",
      priceValue: 2200,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    {
      name: "4K8K5C同軸ケーブル(アンテナ線)3ｍ",
      price: "3,300円",
      priceValue: 3300,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    {
      name: "4K8K5C同軸ケーブル(アンテナ線)5ｍ",
      price: "6,600円",
      priceValue: 6600,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    {
      name: "4K8K5C同軸ケーブル(アンテナ線)10ｍ",
      price: "11,000円",
      priceValue: 11000,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    { name: "4K8KHDMIケーブル1.5ｍ", price: "1,650円", priceValue: 1650, allowQuantity: true, quantityLabel: "本数" },
    { name: "4K8KHDMIケーブル2ｍ", price: "2,200円", priceValue: 2200, allowQuantity: true, quantityLabel: "本数" },
    { name: "4K8KHDMIケーブル3ｍ", price: "3,300円", priceValue: 3300, allowQuantity: true, quantityLabel: "本数" },
    { name: "4K8KHDMIケーブル5ｍ", price: "6,600円", priceValue: 6600, allowQuantity: true, quantityLabel: "本数" },
    { name: "4K8KHDMIケーブル10ｍ", price: "11,000円", priceValue: 11000, allowQuantity: true, quantityLabel: "本数" },
    { name: "4K8K分配器", price: "4,400円", priceValue: 4400, allowQuantity: true, quantityLabel: "個数" },
    { name: "4K8K分波器", price: "2,750円", priceValue: 2750, allowQuantity: true, quantityLabel: "個数" },

    // 下地補強オプション（900×450サイズ）
    { name: "下地補強厚さ12㎜(～55インチまで)　900×450×12㎜", price: "11,000円", priceValue: 11000 },
    { name: "下地補強厚さ18㎜(65～75インチまで)　900×450×18㎜", price: "16,500円", priceValue: 16500 },
    { name: "下地補強厚さ24㎜(65～85インチまで)　900×450×24㎜", price: "22,000円", priceValue: 22000 },
    { name: "下地補強厚さ36㎜(85～100インチまで)　900×450×36㎜", price: "33,000円", priceValue: 33000 },

    // 下地補強オプション（1800×900サイズ）
    { name: "下地補強厚さ12㎜(～55インチまで)　1800×900×12㎜", price: "33,000円", priceValue: 33000 },
    { name: "下地補強厚さ18㎜(65～75インチまで)　1800×900×18㎜", price: "44,000円", priceValue: 44000 },
    { name: "下地補強厚さ24㎜(65～85インチまで)　1800×900×24㎜", price: "59,800円", priceValue: 59800 },
    { name: "下地補強厚さ36㎜(85～100インチまで)　1800×900×36㎜", price: "77,000円", priceValue: 77000 },

    // 隠ぺい配線作業（数量選択可能）
    {
      name: "隠ぺい配線作業　1経路(3ｍまで)",
      price: "2,200円",
      priceValue: 2200,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    {
      name: "隠ぺい配線作業　1経路(5ｍまで)",
      price: "3,300円",
      priceValue: 3300,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    {
      name: "隠ぺい配線作業　1経路(10ｍまで)",
      price: "5,500円",
      priceValue: 5500,
      allowQuantity: true,
      quantityLabel: "本数",
    },
    { name: "隠ぺい配線ダクト工事(石膏ボード上下2か所)", price: "22,000円", priceValue: 22000 },
    { name: "隠ぺい配線ダクト工事(下地あり上下2か所)", price: "33,000円", priceValue: 33000 },

    // 特殊壁テクニカル料金
    { name: "コンクリート壁への壁掛けテレビ施工", price: "11,000円", priceValue: 11000 },
    { name: "エコカラットへの壁掛けテレビ施工", price: "11,000円", priceValue: 11000 },
    { name: "タイル壁への壁掛けテレビ施工", price: "22,000円", priceValue: 22000 },
    { name: "磁器タイル壁への壁掛けテレビ施工", price: "33,000円", priceValue: 33000 },
    { name: "超硬質セラミックタイル壁への壁掛けテレビ施工", price: "55,000円", priceValue: 55000 },

    // その他オプション
    { name: "電源とアンテナの増設工事(石膏ボード) 1カ所", price: "33,000円", priceValue: 33000 },
    { name: "電源とアンテナの増設工事(下地ボード加工) 1カ所", price: "55,000円", priceValue: 55000 },
    { name: "スマートホーム", price: "応相談", priceValue: 0 },
    { name: "空中テレビボード(フロートボード)取付設置 ～1200mm", price: "44,000円", priceValue: 44000 },
    { name: "空中テレビボード(フロートボード)取付設置 ～1400mm", price: "55,000円", priceValue: 55000 },
    { name: "空中テレビボード(フロートボード)取付設置 ～1600mm", price: "77,000円", priceValue: 77000 },
    { name: "空中テレビボード(フロートボード)取付設置 ～2000mm", price: "99,000円", priceValue: 99000 },
    { name: "空中テレビボード(フロートボード)取付設置 ～2400mm", price: "110,000円", priceValue: 110000 },
    { name: "キャットウォーク フローティングシェルフ", price: "応相談", priceValue: 0 },
    // インテリアリフォームオプション
    // デザインクロス
    { name: "アクセントクロスの貼り替え 12平米(縦3ｍ横4ｍ)", price: "110,000円", priceValue: 110000 },
    { name: "アクセントクロスの貼り替え 15平米(縦3ｍ横5ｍ)", price: "165,000円", priceValue: 165000 },
    { name: "アクセントクロスの貼り替え 20平米(縦3.4ｍ横6ｍ)", price: "220,000円", priceValue: 220000 },

    // 既製品クロス
    { name: "ノリ付きクロスの貼り替え 12平米(縦3ｍ横4ｍ)", price: "77,000円", priceValue: 77000 },
    { name: "ノリ付きクロスの貼り替え 15平米(縦3ｍ横5ｍ)", price: "99,000円", priceValue: 99000 },
    { name: "ノリ付きクロスの貼り替え 20平米(縦3.4ｍ横6ｍ)", price: "110,000円", priceValue: 110000 },

    // クロスの加工
    { name: "クロスの加工(窓枠などのカッティング)壁1面毎", price: "5,500円", priceValue: 5500 },

    // エコカラット
    { name: "エコカラットの取付 12平米(縦3ｍ横4ｍ)", price: "318,000円", priceValue: 318000 },
    { name: "エコカラットの取付 15平米(縦3ｍ横5ｍ)", price: "397,500円", priceValue: 397500 },
    { name: "エコカラットの取付 20平米(縦3.4ｍ横6ｍ)", price: "530,000円", priceValue: 530000 },

    // タイル壁
    { name: "軟質タイルの取付 12平米(縦3ｍ横4ｍ)", price: "420,000円", priceValue: 420000 },
    { name: "軟質タイルの取付 15平米(縦3ｍ横5ｍ)", price: "525,000円", priceValue: 525000 },
    { name: "軟質タイルの取付 20平米(縦3.4ｍ横6ｍ)", price: "700,000円", priceValue: 700000 },

    // リブパネル
    { name: "木製縦目桐デザインリブパネルの取付 6平米(縦3ｍ横2ｍ)", price: "238,800円", priceValue: 238800 },
    { name: "木製縦目木目デザインリブパネルの取付 6平米(縦3ｍ横2ｍ)", price: "238,800円", priceValue: 238800 },
    { name: "大理石調リブパネルの取付 6平米(縦3ｍ横2ｍ)", price: "238,800円", priceValue: 238800 },

    // アクセントウォール
    { name: "アクセントウォール(ふかし壁) 壁付け 12平米(縦3ｍ横4ｍ)", price: "110,000円", priceValue: 110000 },
    { name: "アクセントウォール(ふかし壁) 壁裏収納付き 12平米(縦3ｍ横4ｍ)", price: "330,000円", priceValue: 330000 },
  ]

  const handleOptionChange = (index: number, checked: boolean) => {
    const newSelectedOptions = { ...selectedOptions, [index]: checked }
    setSelectedOptions(newSelectedOptions)

    // チェックが外れた場合は数量をリセット
    if (!checked && quantities[index]) {
      const newQuantities = { ...quantities }
      delete newQuantities[index]
      setQuantities(newQuantities)
    }

    calculateTotal(newSelectedOptions, quantities)
  }

  const handleQuantityChange = (index: number, quantity: number) => {
    const newQuantities = { ...quantities, [index]: quantity }
    setQuantities(newQuantities)
    calculateTotal(selectedOptions, newQuantities)
  }

  // 計算関数を修正
  const calculateTotal = (selected: { [key: number]: boolean }, itemQuantities: { [key: number]: number }) => {
    let total = 0
    const selectedOptionsList: OptionSelection[] = []

    Object.entries(selected).forEach(([indexStr, isSelected]) => {
      if (isSelected) {
        const index = Number.parseInt(indexStr)
        const option = optionItems[index]
        const quantity = itemQuantities[index] || 1

        if (!isNaN(option.priceValue)) {
          total += option.priceValue * quantity
        }

        // 選択されたオプションをリストに追加
        selectedOptionsList.push({
          name: option.name,
          price: option.price,
          quantity: quantity,
        })
      }
    })

    setTotalPrice(total)

    // コンテキストに選択内容を保存
    planSelection.setSelectedOptions(selectedOptionsList)
    planSelection.setOptionsTotalPrice(total)
  }

  // オプションをカテゴリーごとにグループ化
  const generalOptions = optionItems.slice(0, 17)
  const reinforcement900Options = optionItems.slice(17, 21)
  const reinforcement1800Options = optionItems.slice(21, 25)
  const hiddenWiringOptions = optionItems.slice(25, 30)
  const specialWallOptions = optionItems.slice(30, 35)
  const otherOptions = optionItems.slice(35, 44)
  const interiorOptions = optionItems.slice(44)

  // 数量選択UIを表示する関数
  const renderQuantitySelector = (option: OptionItem, index: number) => {
    if (option.allowQuantity && selectedOptions[index]) {
      return (
        <div className="flex items-center">
          <label htmlFor={`quantity-${index}`} className="mr-2 text-sm">
            {option.quantityLabel || "数量"}:
          </label>
          <select
            id={`quantity-${index}`}
            className="block w-16 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
            value={quantities[index] || 1}
            onChange={(e) => handleQuantityChange(index, Number.parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-6">
      {/* 一般オプション */}
      <div>
        <h4 className="font-semibold mb-3">一般オプション：</h4>
        <div className="space-y-3">
          {generalOptions.map((option, i) => (
            <div key={i} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`option-item-${i}`}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  onChange={(e) => handleOptionChange(i, e.target.checked)}
                  checked={selectedOptions[i] === true}
                />
                <label htmlFor={`option-item-${i}`} className="font-medium">
                  {option.name}：{option.price}
                </label>
              </div>
              {renderQuantitySelector(option, i)}
            </div>
          ))}
        </div>
      </div>

      {/* 下地補強オプション（900×450） */}
      <div>
        <h4 className="font-semibold mb-3">下地補強オプション（900×450）：</h4>
        <div className="space-y-3">
          {reinforcement900Options.map((option, i) => {
            const index = i + 17 // オフセットを追加
            return (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`option-item-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => handleOptionChange(index, e.target.checked)}
                    checked={selectedOptions[index] === true}
                  />
                  <label htmlFor={`option-item-${index}`} className="font-medium">
                    {option.name}：{option.price}
                  </label>
                </div>
                {renderQuantitySelector(option, index)}
              </div>
            )
          })}
        </div>
      </div>

      {/* 下地補強オプション（1800×900） */}
      <div>
        <h4 className="font-semibold mb-3">下地補強オプション（1800×900）：</h4>
        <div className="space-y-3">
          {reinforcement1800Options.map((option, i) => {
            const index = i + 21 // オフセットを追加
            return (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`option-item-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => handleOptionChange(index, e.target.checked)}
                    checked={selectedOptions[index] === true}
                  />
                  <label htmlFor={`option-item-${index}`} className="font-medium">
                    {option.name}：{option.price}
                  </label>
                </div>
                {renderQuantitySelector(option, index)}
              </div>
            )
          })}
        </div>
      </div>

      {/* 隠ぺい配線作業 */}
      <div>
        <h4 className="font-semibold mb-3">隠ぺい配線作業：</h4>
        <div className="space-y-3">
          {hiddenWiringOptions.map((option, i) => {
            const index = i + 25 // オフセットを追加
            return (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`option-item-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => handleOptionChange(index, e.target.checked)}
                    checked={selectedOptions[index] === true}
                  />
                  <label htmlFor={`option-item-${index}`} className="font-medium">
                    {option.name}：{option.price}
                  </label>
                </div>
                {renderQuantitySelector(option, index)}
              </div>
            )
          })}
        </div>
      </div>

      {/* 特殊壁テクニカル料金 */}
      <div>
        <h4 className="font-semibold mb-3">特殊壁テクニカル料金：</h4>
        <div className="space-y-3">
          {specialWallOptions.map((option, i) => {
            const index = i + 30 // オフセットを追加
            return (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`option-item-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => handleOptionChange(index, e.target.checked)}
                    checked={selectedOptions[index] === true}
                  />
                  <label htmlFor={`option-item-${index}`} className="font-medium">
                    {option.name}：{option.price}
                  </label>
                </div>
                {renderQuantitySelector(option, index)}
              </div>
            )
          })}
        </div>
      </div>

      {/* その他オプション */}
      {otherOptions.length > 0 && (
        <div>
          <h4 className="font-semibold mb-3">その他オプション：</h4>
          <div className="space-y-3">
            {otherOptions.map((option, i) => {
              const index = i + 35 // オフセットを更新
              return (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`option-item-${index}`}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      onChange={(e) => handleOptionChange(index, e.target.checked)}
                      checked={selectedOptions[index] === true}
                    />
                    <label htmlFor={`option-item-${index}`} className="font-medium">
                      {option.name}：{option.price}
                    </label>
                  </div>
                  {renderQuantitySelector(option, index)}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* インテリアリフォームオプション */}
      {interiorOptions.length > 0 && (
        <div>
          <h4 className="font-semibold mb-3">インテリアリフォームオプション：</h4>
          <div className="space-y-3">
            {interiorOptions.map((option, i) => {
              const index = i + 44 // オフセットを更新
              return (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`option-item-${index}`}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      onChange={(e) => handleOptionChange(index, e.target.checked)}
                      checked={selectedOptions[index] === true}
                    />
                    <label htmlFor={`option-item-${index}`} className="font-medium">
                      {option.name}：{option.price}
                    </label>
                  </div>
                  {renderQuantitySelector(option, index)}
                </div>
              )
            })}
          </div>
          <div className="mt-3 text-sm text-gray-600">
            <p>※ デザインクロス：デザインはサンゲツWebカタログから選択できます。</p>
            <p>※ エコカラット：デザインはLIXILWebカタログから選択できます。</p>
            <p>
              ※ アクセントウォールとクロスやエコカラット、リブパネルを組み合わせると最高のお部屋へと生まれ変わります。
            </p>
          </div>
        </div>
      )}

      {totalPrice > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="font-semibold text-lg">合計金額: {totalPrice.toLocaleString()}円</p>
          <p className="text-sm text-gray-600">※ 選択したオプションに基づく概算です</p>
          <p className="text-sm text-gray-600">※ 「応相談」の項目は現地調査後に正確な金額をご案内します</p>
        </div>
      )}
    </div>
  )
}


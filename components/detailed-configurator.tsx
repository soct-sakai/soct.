"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface ConfigItem {
  cat: string
  code: string
  name: string
  unit: string
  price: number
  notes: string
}

interface SelectedItem extends ConfigItem {
  quantity: number
  subtotal: number
}

export function DetailedConfigurator() {
  const [items, setItems] = useState<ConfigItem[]>([])
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // Load items from JSON
    fetch("/assets/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .catch(() => {
        // Fallback data if JSON fails to load
        setItems([
          {
            cat: "reinforce",
            code: "INW-24-1809-1",
            name: "壁内下地補強 24mm 1800×900 1枚",
            unit: "式",
            price: 198000,
            notes: "推奨：65–85インチ/有機EL",
          },
          {
            cat: "wiring",
            code: "WIR-HIDE-5M",
            name: "壁内隠蔽配線 5m",
            unit: "式",
            price: 33000,
            notes: "配線を壁内に隠蔽",
          },
        ])
      })
  }, [])

  const categories = [
    { id: "reinforce", name: "補強方式", icon: "🔧" },
    { id: "wiring", name: "配線", icon: "⚡" },
    { id: "wall", name: "壁材・難工事", icon: "🧱" },
    { id: "electrical", name: "電気・通信", icon: "🔌" },
    { id: "finish", name: "仕上げ拡張", icon: "✨" },
    { id: "cable", name: "ケーブル", icon: "📺" },
  ]

  const handleItemToggle = (item: ConfigItem, checked: boolean) => {
    if (checked) {
      const newItem: SelectedItem = {
        ...item,
        quantity: 1,
        subtotal: item.price,
      }
      setSelectedItems((prev) => [...prev, newItem])
    } else {
      setSelectedItems((prev) => prev.filter((selected) => selected.code !== item.code))
    }
  }

  const handleQuantityChange = (code: string, quantity: number) => {
    setSelectedItems((prev) =>
      prev.map((item) => (item.code === code ? { ...item, quantity, subtotal: item.price * quantity } : item)),
    )
  }

  useEffect(() => {
    const newTotal = selectedItems.reduce((sum, item) => sum + item.subtotal, 0)
    setTotal(newTotal)
  }, [selectedItems])

  const scrollToQuoteForm = () => {
    // GTM Event for quote view
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "quote_view",
        total: total,
      })
    }

    // Prepare display text for form
    let displayText = "【詳細カスタム見積もり】\n\n"
    selectedItems.forEach((item) => {
      displayText += `・${item.name}`
      if (item.quantity > 1) {
        displayText += ` × ${item.quantity}`
      }
      displayText += ` … ${formatPrice(item.subtotal)}\n`
    })
    displayText += `\n概算合計（税込）: ${formatPrice(total)}\n\n`
    displayText += "※価格は概算。壁内状態・配線経路で前後\n※確定は現地調査後となります"

    // Prepare JSON data for hidden field
    const jsonData = {
      items: selectedItems.map((item) => ({
        cat: item.cat,
        code: item.code,
        name: item.name,
        qty: item.quantity,
        unit: item.unit,
        price: item.price,
        subtotal: item.subtotal,
        notes: item.notes,
      })),
      total: total,
      timestamp: Date.now(),
    }

    // Store data in sessionStorage
    sessionStorage.setItem(
      "configuratorData",
      JSON.stringify({
        displayText,
        jsonData,
      }),
    )

    const quoteForm = document.getElementById("contact-form")
    quoteForm?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLineConsultation = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "line_click",
      })
    }

    if (selectedItems.length > 0) {
      let lineText = "【詳細カスタム見積もり】\n\n"
      selectedItems.forEach((item) => {
        lineText += `・${item.name}`
        if (item.quantity > 1) {
          lineText += ` × ${item.quantity}`
        }
        lineText += ` … ${formatPrice(item.subtotal)}\n`
      })
      lineText += `\n概算合計: ${formatPrice(total)}\n\n`
      lineText += "この内容で相談したいです。"

      // Try to copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(lineText)
          .then(() => {
            alert("見積もり内容をクリップボードにコピーしました。LINEに貼り付けてお送りください。")
          })
          .catch(() => {
            console.log("Clipboard copy failed, opening LINE directly")
          })
      }
    }

    window.open("https://lin.ee/4pVYnlI", "_blank")
  }

  const handlePhoneCall = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "call_60s",
      })
    }
    window.open("tel:0524332799")
  }

  const getItemsByCategory = (categoryId: string) => {
    return items.filter((item) => item.cat === categoryId)
  }

  const isItemSelected = (code: string) => {
    return selectedItems.some((item) => item.code === code)
  }

  const getSelectedQuantity = (code: string) => {
    const item = selectedItems.find((item) => item.code === code)
    return item?.quantity || 1
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section id="detailed-configurator" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">詳細カスタム</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configurator */}
            <div className="lg:col-span-2">
              <TooltipProvider>
                <Accordion type="multiple" className="space-y-4">
                  {categories.map((category) => {
                    const categoryItems = getItemsByCategory(category.id)
                    if (categoryItems.length === 0) return null

                    return (
                      <AccordionItem key={category.id} value={category.id}>
                        <Card>
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{category.icon}</span>
                              <span className="text-lg font-semibold">{category.name}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <CardContent className="px-6 pb-6">
                              <div className="space-y-4">
                                {categoryItems.map((item) => {
                                  const isSelected = isItemSelected(item.code)
                                  const quantity = getSelectedQuantity(item.code)

                                  return (
                                    <div
                                      key={item.code}
                                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                                    >
                                      <div className="flex items-center gap-3 flex-1">
                                        <Checkbox
                                          checked={isSelected}
                                          onCheckedChange={(checked) => handleItemToggle(item, checked as boolean)}
                                        />
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2">
                                            <span className="font-medium">{item.name}</span>
                                            <Tooltip>
                                              <TooltipTrigger>
                                                <Info className="w-4 h-4 text-gray-400" />
                                              </TooltipTrigger>
                                              <TooltipContent>
                                                <p>{item.notes}</p>
                                              </TooltipContent>
                                            </Tooltip>
                                          </div>
                                          <div className="text-sm text-gray-600">
                                            {formatPrice(item.price)} / {item.unit}
                                          </div>
                                        </div>
                                      </div>

                                      {isSelected && (
                                        <div className="flex items-center gap-3">
                                          <Select
                                            value={quantity.toString()}
                                            onValueChange={(value) =>
                                              handleQuantityChange(item.code, Number.parseInt(value))
                                            }
                                          >
                                            <SelectTrigger className="w-20">
                                              <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                              {[1, 2, 3, 4, 5].map((num) => (
                                                <SelectItem key={num} value={num.toString()}>
                                                  {num}
                                                </SelectItem>
                                              ))}
                                            </SelectContent>
                                          </Select>
                                          <div className="text-right min-w-[100px]">
                                            <div className="font-semibold text-blue-600">
                                              {formatPrice(item.price * quantity)}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                            </CardContent>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </TooltipProvider>
            </div>

            {/* Sticky Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">見積もりサマリー</h3>

                    {selectedItems.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">項目を選択してください</p>
                    ) : (
                      <div className="space-y-4">
                        {selectedItems.map((item) => (
                          <div key={item.code} className="flex justify-between items-start text-sm">
                            <div className="flex-1 pr-2">
                              <div className="font-medium">{item.name}</div>
                              {item.quantity > 1 && (
                                <div className="text-gray-500">
                                  {formatPrice(item.price)} × {item.quantity}
                                </div>
                              )}
                            </div>
                            <div className="font-semibold text-blue-600">{formatPrice(item.subtotal)}</div>
                          </div>
                        ))}

                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center text-lg font-bold">
                            <span>概算合計（税込）</span>
                            <span className="text-blue-600">{formatPrice(total)}</span>
                          </div>
                        </div>

                        <div className="space-y-3 pt-4">
                          <Button
                            onClick={scrollToQuoteForm}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            この内容で見積もり依頼
                          </Button>
                          <Button
                            onClick={handleLineConsultation}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                          >
                            LINEで30分見積
                          </Button>
                          <Button
                            onClick={handlePhoneCall}
                            variant="outline"
                            className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                          >
                            今すぐ電話
                          </Button>
                        </div>

                        <div className="text-xs text-gray-500 pt-4 border-t">
                          <p>※価格は概算。壁内状態・配線経路で前後</p>
                          <p>※確定は現地調査後となります</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

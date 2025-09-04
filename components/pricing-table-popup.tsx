"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"
import Image from "next/image"

export function PricingTablePopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="w-full max-w-md mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none hover:from-blue-600 hover:to-purple-700 shadow-lg"
        >
          <Calculator className="mr-2 h-5 w-5" />
          セットメニュー価格早見表を見る
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">セットメニュー価格早見表</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-gray-600 text-center">
            各テレビサイズとオプションの組み合わせによる総合価格をご確認いただけます
          </p>

          <div className="relative w-full bg-white rounded-lg shadow-sm border">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E6%97%A9%E8%A6%8B%E8%A1%A801.JPG-jzAa9WTTP3nu2ATheEOAqsWU7d2f6w.jpeg"
              alt="セットメニュー価格早見表"
              width={1200}
              height={400}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">価格表の見方</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• 左列：テレビサイズ（55インチ〜85インチ）</li>
              <li>• 上段：各種オプション（スタンダードから吸音リブパネル+アクセントウォール+アクセントクロスまで）</li>
              <li>• 表内の金額：該当サイズ×オプションの組み合わせ価格</li>
              <li>• 全て税込価格、3年保証付きです</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-orange-800">ご注意</h3>
            <ul className="text-sm space-y-1 text-orange-700">
              <li>• 価格は目安です。実際の費用は現地調査後に正確に算出いたします</li>
              <li>• 壁の材質や配線状況により追加費用が発生する場合があります</li>
              <li>• 詳細なお見積もりは無料でご提供いたします</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

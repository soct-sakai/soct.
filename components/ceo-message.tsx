"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function CEOMessage() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <Card className="overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-48 h-48 relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240312_160142.jpg-ZkHAEKjRUt5JrsgijLQFNDIkbwwHqi.jpeg"
                  alt="代表取締役 坂井と娘"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">株式会社速人 代表取締役 坂井より</h2>
              <p className="text-xl text-gray-600 italic">～未来の安心と快適な暮らしを目指して～</p>
            </div>
            <div className={`space-y-4 ${isExpanded ? "" : "max-h-48 overflow-hidden"}`}>
              <p>皆さま、こんにちは。私たちのホームページをご覧いただき、本当にありがとうございます。</p>
              <p>
                速人は「壁掛けテレビ施工
                日本一」を目指し、日々挑戦を続けています。なぜ、私が壁掛けテレビ施工にこれほどの情熱を注ぐのか──その想いをお伝えします。
              </p>
              <p>
                2024年1月1日、能登半島地震で震度7の大地震が発生しました。そのとき、テレビを必死に抑えるおじいさんの映像を見て、私は強い衝撃を受けました。
              </p>
              <p>「テレビなんて命よりも大事なものじゃないのに…」</p>
              <p>
                その1秒、10秒があれば、安全に避難できたかもしれない。そう考えたとき、壁掛けテレビの普及が命を守る一助になると確信しました。
              </p>
              <p>
                愛知県は南海トラフ地震のリスクが高い地域です。私たちは、柱や間柱にしっかりと金具を固定し、耐荷重160kg以上を確保する施工を徹底しています。震度5、6、7にも耐えうる安全な壁掛けテレビを、すべての家庭に届けたい──それが私たちの使命です。
              </p>
              <p>
                壁掛けテレビは、安全性だけでなく、空間の有効活用やデザイン性も兼ね備えた、これからの暮らしに欠かせない存在です。私たち速人は、施工からアフターサポートまで一貫してお手伝いし、お客様の大切な家族と暮らしを守るパートナーでありたいと考えています。
              </p>
              <p>
                壁掛けテレビの施工やお悩みがございましたら、ぜひお気軽にご相談ください。一緒に未来の安心と快適な生活を創っていきましょう。
              </p>
              <p className="font-bold text-right">
                株式会社速人
                <br />
                代表取締役 坂井
              </p>
            </div>
            <div className="text-center mt-6">
              <Button variant="ghost" onClick={() => setIsExpanded(!isExpanded)} className="flex items-center">
                {isExpanded ? "閉じる" : "もっと読む"}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


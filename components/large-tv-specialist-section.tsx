"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react"

export function LargeTVSpecialistSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">なぜ大型テレビは専門業者が必要なのか</h2>

          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%BB%E5%83%8F%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B31.jpg-9vMaAZ3aNdFnO83D7MNKqFPbrcIiAE.jpeg"
                alt="キャラクターアイコン"
                className="w-20 h-20 rounded-full border-4 border-blue-300 shadow-lg"
              />
              <div className="absolute -right-4 -top-2 bg-white rounded-full p-2 shadow-lg border-2 border-blue-200">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="ml-6 bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-200 relative max-w-2xl">
              <div className="absolute -left-3 top-6 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></div>
              <p className="text-lg text-gray-700">
                それは65インチ以上の大型テレビとスイングモーション式金具との総重量は50kg超。壁の下地を正確に見つけなければ落下の危険があります。テレビを付けたい位置と下地がある場所が必ずしも一致するとは限りません。
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* DIY失敗例 */}
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-2" />
                <Badge variant="destructive" className="text-sm">
                  DIYで失敗
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-3">壁に複数の穴</h3>
              <ul className="text-sm text-red-600 space-y-2 text-left">
                <li>• 下地が見つからず何度も穴あけ</li>
                <li>• 75インチテレビが落下寸前</li>
                <li>• 壁の修復費用10万円</li>
                <li>• エコカラットが破損</li>
                <li>• 新築戸建てが台無し</li>
              </ul>
            </CardContent>
          </Card>

          {/* 一般業者の問題 */}
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <AlertTriangle className="h-16 w-16 text-orange-500 mx-auto mb-2" />
                <Badge variant="secondary" className="text-sm bg-orange-200">
                  一般業者
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-3">経験不足で傾き</h3>
              <ul className="text-sm text-orange-600 space-y-2 text-left">
                <li>• どこまで知識が精通しているかわからない</li>
                <li>• 有機ELテレビと金具の重量に対応できず</li>
                <li>• 配線が見えて美しくない</li>
                <li>• コンクリート壁で断られた</li>
                <li>• やり直し費用が発生</li>
                <li>• 保証が不十分</li>
              </ul>
            </CardContent>
          </Card>

          {/* ソクト専門技術 */}
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-2" />
                <Badge className="text-sm bg-green-600">ソクト専門技術</Badge>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">一発で完璧仕上がり</h3>
              <ul className="text-sm text-green-600 space-y-2 text-left">
                <li>• 98インチ・100インチまで対応</li>
                <li>• 壁内隠蔽配線で美しい仕上がり</li>
                <li>• エコカラット・タイル壁OK</li>
                <li>• 3年保証+地震落下保証</li>
                <li>• 最大1億円損害保険完備</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

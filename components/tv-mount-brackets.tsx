"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const brackets = [
  {
    id: 1,
    name: "壁固定式金具",
    size: "小型テレビ用（～50インチ、想定耐久重量30㎏）",
    type: "壁固定式",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E9%87%91%E5%85%B703.JPG-Kf4sAi2AV4mb3w4rtjbnslro3H9DhF.jpeg",
    features: ["金具が軽量で地震に強い", "下地補強(厚さ9㎜)必須", "シンプルで取り付けも簡単"],
    description: "小型・中型テレビに最適なコンパクトな金具。シンプルで取り付けも簡単です。",
    merits: ["金具が軽量で地震に強いとはいえ、下地補強(厚さ9㎜)必須です"],
    demerits: ["壁とテレビの全面との隙間が12～14㎝。手が入らないから配線がしづらい。長期的に見ると使いづらさが目立つ"],
    recommended: "テレビの視聴時間が短い。ニュースや天気予報だけ見る人へ",
  },
  {
    id: 2,
    name: "壁固定式金具",
    size: "中型テレビ用（30～65インチ、想定耐久重量60㎏）",
    type: "壁固定式",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E9%87%91%E5%85%B704.JPG-oOWNwTQfdo77tXtiIUK8BCa4BgEBYp.jpeg",
    features: ["チルト式で下向きもできる", "安定性が高く最もポピュラー", "下地補強(厚さ12㎜)必須"],
    description: "チルト式で下向きもできます。安定性が高く最もポピュラーな金具です。",
    merits: ["金具が軽量で地震に強いとはいえ、下地補強(厚さ12㎜)必須です"],
    demerits: [
      "壁とテレビの全面との隙間が12～14㎝。手が入らないから配線がしづらい。設置時にパーフェクトな配線をしましょう",
    ],
    recommended: "テレビの買い替え時に同じサイズのテレビにしたい人に",
  },
  {
    id: 3,
    name: "壁固定フレーム式金具",
    size: "大型テレビ用（50～85インチ、想定耐久重量80㎏）",
    type: "壁固定式",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E9%87%91%E5%85%B705.JPG-Ox3q9Nue2FmK6RgG4AaSA3lMXICUFL.jpeg",
    features: ["大型テレビ対応", "下地補強(厚さ18㎜)必須", "壁の真ん中に電源がある場合に最適"],
    description: "壁の真ん中に電源がある場合はこれ。大きいテレビ用です。",
    merits: ["金具が軽量で地震に強いとはいえ、下地補強(厚さ18㎜)必須です"],
    demerits: [
      "壁とテレビの全面との隙間が10～12㎝。手が入らないから配線がしづらい。設置時にパーフェクトな配線をしましょう",
    ],
    recommended: "大型テレビを安全に設置したい人へ",
  },
  {
    id: 4,
    name: "スイングモーション式金具",
    size: "中型テレビ用（40～65インチ、想定耐久重量50㎏）",
    type: "スイングモーション式",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E9%87%91%E5%85%B702.JPG-G7xnu6GZfSBrSuaSdStr2Q27avebZ3.jpeg",
    features: ["角度調整、自由自在", "左右スイング可能", "配線の追加がしやすい"],
    description:
      "テレビの角度を自由に調整できる便利な金具。キッチンからもダイニングテーブルからも見やすい！リビングの様々な位置から快適に視聴できます。小さい子供がいる家庭では、視聴位置に合わせて調整できる人気の金具です。",
    merits: ["配線の追加がしやすい"],
    demerits: ["重量があり壁の下地補強(厚さ18㎜)必須です"],
    recommended: "テレビ関連機器が多いご家庭向け",
  },
  {
    id: 5,
    name: "スイングモーション式金具",
    size: "大型テレビ用（65～93インチ、想定耐久重量70㎏）",
    type: "スイングモーション式",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E9%87%91%E5%85%B701.JPG-KTdZ8kwG9vJklobAmeMLZHE9nAePwG.jpeg",
    features: [
      "テレビを支えるアーム部分が強い",
      "長期使用に耐えるプレミアムタイプ",
      "角度調整、自由自在に左右スイング可能",
    ],
    description: "大型テレビでも自由な角度調整が可能。最高級のスイングモーション機能を搭載。",
    merits: ["配線の追加がしやすい"],
    demerits: ["重量があり壁の壁の下地補強(厚さ24㎜)必須です"],
    recommended: "地震が来ても安心したい人向けです",
  },
  {
    id: 6,
    name: "上下昇降式金具",
    size: "中・大型テレビ用（40～75インチ、想定耐久重量60㎏）",
    type: "上下昇降式",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E9%87%91%E5%85%B706.JPG-MrTNI0peJ4DxconojTjhVaGZono5is.jpeg",
    features: ["上下の高さ調整が可能", "視聴位置に合わせて最適化", "プロ仕様の高機能金具"],
    description:
      "テレビの高さを上下に調整できる高機能金具。座る位置や立つ位置に合わせて最適な視聴角度に調整可能です。ありそうで無かった上下可動式金具。",
    merits: ["配線の追加がしやすい", "テレビの位置を近くで見える"],
    demerits: ["30㎏ちかい重量があり壁の下地補強(厚さ30㎜)必須です", "金具が超高級です"],
    recommended: "地震が来ても安心したい人向けです",
  },
]

export function TVMountBrackets() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextBracket = () => {
    setCurrentIndex((prev) => (prev + 1) % brackets.length)
  }

  const prevBracket = () => {
    setCurrentIndex((prev) => (prev - 1 + brackets.length) % brackets.length)
  }

  const currentBracket = brackets[currentIndex]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            🔧 選択できる壁掛けテレビ用の金具各種取り揃えています
          </h2>
          <p className="text-lg text-gray-600">お客様のテレビサイズと設置環境に最適な金具をプロがご提案いたします</p>
        </div>

        {/* メインカルーセル */}
        <div className="max-w-5xl mx-auto mb-8">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* 画像部分 */}
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={currentBracket.image || "/placeholder.svg"}
                    alt={currentBracket.name}
                    fill
                    className="object-contain p-8"
                  />

                  {/* ナビゲーションボタン */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={prevBracket}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={nextBracket}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* タイプバッジ */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        currentBracket.type === "スイングモーション式"
                          ? "bg-orange-500 hover:bg-orange-600"
                          : currentBracket.type === "上下昇降式"
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-blue-500 hover:bg-blue-600"
                      } text-white`}
                    >
                      {currentBracket.type}
                    </Badge>
                  </div>
                </div>

                {/* 詳細情報部分 */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2">{currentBracket.name}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">{currentBracket.size}</p>

                  <p className="text-gray-600 mb-6 leading-relaxed">{currentBracket.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">特徴：</h4>
                      <ul className="space-y-1">
                        {currentBracket.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">メリット：</h4>
                      <ul className="space-y-1">
                        {currentBracket.merits.map((merit, index) => (
                          <li key={index} className="flex items-start text-sm text-green-600">
                            <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                            {merit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">デメリット：</h4>
                      <ul className="space-y-1">
                        {currentBracket.demerits.map((demerit, index) => (
                          <li key={index} className="flex items-start text-sm text-red-600">
                            <span className="text-red-500 mr-2 flex-shrink-0">⚠</span>
                            {demerit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">こんな方におススメ：</h4>
                      <p className="text-sm text-blue-700">{currentBracket.recommended}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* インジケーター */}
        <div className="flex justify-center gap-2 mb-8">
          {brackets.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* サムネイル一覧 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brackets.map((bracket, index) => (
            <button
              key={bracket.id}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-blue-500 shadow-lg scale-105"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={bracket.image || "/placeholder.svg"}
                alt={bracket.name}
                fill
                className="object-contain p-2 bg-gray-50"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2">
                <p className="text-xs font-medium truncate">{bracket.name}</p>
                <p className="text-xs opacity-80 truncate">{bracket.size.split("（")[0]}</p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2 text-blue-900">💡 どの金具が最適かわからない？</h3>
            <p className="text-blue-700 mb-4">
              プロの技術者が、お客様のテレビサイズ・設置環境・ご要望に合わせて最適な金具をご提案いたします！
            </p>
            <a
              href="#contact-form"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              無料相談・見積もりはこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

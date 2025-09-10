"use client"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

const streamingComments = [
  "帰宅したら、みんなスマホ越し…最後に家族で声を合わせて笑ったのはいつだろう？",
  "休日、今日も子供が元気に走り回ってリビングが散らかって・・・もっとリラックスできる場所がほしい",
  "最近、地震速報を見るたびにテレビの転倒が心配で夜しか眠れない…",
  "3歳の息子がコードを引っ張ってヒヤリ…もう物投げないでよ！？",
  "お父さんの書斎にで、友達とオンライン対戦。ゲーム音や騒いでるとお母さんがうるさい。吸音とか防音とかもっと集中したいよ",
  "夫と向かい合って会話する時間が減った…ゆっくり映画を観たいのに",
  "仕事は忙しいし、気分転換に部屋の模様替えもしたいけど、賃貸でも壁掛けテレビとかしちゃダメなのかなー？",
  "スマートホームにこんな使い方があったんだ、おじいちゃんおばあちゃんでも簡単にできる、遠く離れた孫をテレビで見守り保育",
  "DIY大好きパパ、いつか自分で壁掛けにするって言って、もう何年？友達の家はタイル壁でエレガントなのに…理想のリビングが遠のくばかり",
  "SNSに載せる写真が撮れない…フォロワーを驚かせたい",
]

export function HeroUnified() {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0)
  const [showComment, setShowComment] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowComment(true)
      setTimeout(() => {
        setShowComment(false)
        setCurrentCommentIndex((prev) => (prev + 1) % streamingComments.length)
      }, 3000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231104_190331.jpg-Dpbxoz9pYxZiKrVxgKLhshXzDRETcE.jpeg"
            alt="プロの技術者による壁掛けテレビ施工作業風景"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-2xl ml-8 md:ml-16">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                <span>ハートFM主催『クローズアップ愛知』ノミネート！</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                名古屋の壁掛けテレビ専門店
                <br />
                <span className="text-4xl md:text-5xl text-blue-800 font-black">ソクトノカベカケ</span>
              </h1>

              <p className="text-lg font-bold text-blue-800 mb-2">
                高価な有機ELや75インチ85インチの大型テレビなら速人へお任せください！
              </p>

              <p className="text-sm text-gray-600 mb-6">プロの専門技術で安心・安全な壁掛け施工を実現</p>

              <a
                href="#contact-form"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                🎯 無料相談はLINEで30秒
              </a>
            </div>

            <div className="absolute bottom-8 right-8 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6 shadow-2xl max-w-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">🎁</div>
                <div className="text-xl font-black">特別プレゼント</div>
              </div>
              <div className="text-sm font-bold leading-tight">
                9月中に成約のお客様にスティック型SSD1TBプレゼント！録りためた番組や、スマホの中の家族の動画や写真を、新しい大画面テレビで楽しみ尽くそう！
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231230_114455.jpg-WkDz2urqNWU5BcgihbOrWJzKuHeAgi.jpeg"
            alt="モダンなロフト空間での壁掛けテレビ設置例"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-4xl mx-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%BB%E5%83%8F%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B33.jpg-or8TyykVK3wZLWNqi6vodl7mC8gVmq.jpeg"
                    alt="ソクトちゃん"
                    fill
                    className="object-cover rounded-full border-4 border-yellow-400"
                    sizes="96px"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-black text-blue-800 mb-4">大型テレビの壁掛けで失敗したくないあなたへ</h2>

                <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                  <p className="text-xl font-bold text-blue-800 mb-3">
                    65インチ以上の大型テレビは重量50kg超 専門技術が必要です
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-red-600 font-bold flex items-center gap-2">
                      <span className="text-xl">❌</span>
                      <span>DIYで失敗 → 壁に複数の穴、修復費用10万円</span>
                    </p>
                    <p className="text-red-600 font-bold flex items-center gap-2">
                      <span className="text-xl">❌</span>
                      <span>一般業者 → 経験不足で傾き、やり直し費用</span>
                    </p>
                    <p className="text-green-600 font-bold flex items-center gap-2">
                      <span className="text-xl">⭕</span>
                      <span>ソクト専門技術 → 一発で完璧、美しい仕上がり</span>
                    </p>
                  </div>

                  <p className="text-lg font-bold text-blue-800">75インチ・85インチ・98インチ・100インチまで対応</p>
                  <p className="text-sm text-gray-600 mt-1">新築戸建ての配線計画もお任せ！</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-blue-50 to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-black text-center text-blue-800 mb-12">お客様の声が続々と届いています</h2>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F.png.jpg-enOiZlZet2SX5ivBU3UH8VykSXN5nv.jpeg"
                    alt="壁掛け作業員"
                    fill
                    className="object-cover rounded-full border-3 border-blue-400"
                    sizes="80px"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-blue-50 rounded-2xl p-6 min-h-[100px] flex items-center">
                  <div className="text-gray-800 leading-relaxed">
                    {showComment && (
                      <p className="text-lg font-medium animate-fade-in-out">
                        {streamingComments[currentCommentIndex]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#package-plans"
              className="inline-block bg-gradient-to-r from-blue-700 to-purple-700 text-white px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-2xl font-black mb-2">🎯 75インチ大型テレビ壁掛け工事なら77,000円！</div>
              <div className="text-lg font-bold">65インチ以上専門だから安心の技術力</div>
              <div className="text-sm mt-2 opacity-90">まずは無料相談でお気軽にご相談ください</div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-blue-600 bg-white rounded-full p-2 shadow-lg" />
      </div>
    </div>
  )
}

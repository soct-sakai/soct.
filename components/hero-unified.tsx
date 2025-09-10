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
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-yellow-50">
      {/* Main Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231104_190331.jpg-Dpbxoz9pYxZiKrVxgKLhshXzDRETcE.jpeg"
            alt="プロの技術者による壁掛けテレビ施工作業風景"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-4 py-8">
          {/* Authority Badge & Main Headline */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>ハートFM主催</span>
              <span>『クローズアップ愛知』ノミネート！</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              名古屋の壁掛けテレビ専門店
              <br />
              <span className="text-blue-600">ソクトノカベカケ</span>
            </h1>

            <p className="text-xl font-bold text-gray-700 mb-6">
              高価な有機ELや75インチ85インチの大型テレビなら速人へお任せください！
            </p>

            <a
              href="#contact-form"
              style={{
                display: "inline-block",
                padding: "16px 32px",
                fontWeight: "bold",
                fontSize: "20px",
                borderRadius: "16px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                background: "linear-gradient(to right, #f97316, #ef4444)",
                color: "#ffffff",
                textDecoration: "none",
                transition: "all 0.3s ease",
                transform: "scale(1)",
                marginBottom: "32px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
            >
              🎯 無料相談はLINEで30秒
            </a>
          </div>

          {/* Photo Gallery Section */}
          <div className="relative mb-12">
            {/* Polaroid-style photos scattered */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="transform rotate-3 bg-white p-3 shadow-lg rounded-lg">
                <div className="w-48 h-36 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231104_190331.jpg-Dpbxoz9pYxZiKrVxgKLhshXzDRETcE.jpeg"
                    alt="施工作業風景"
                    fill
                    className="object-cover rounded"
                    sizes="192px"
                  />
                </div>
                <p className="text-center text-sm font-medium mt-2">プロの施工技術</p>
              </div>

              <div className="transform -rotate-2 bg-white p-3 shadow-lg rounded-lg">
                <div className="w-48 h-36 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC008.jpg-KZ5el4DTHW5C7M5tl96NiDZqwMoxa8.jpeg"
                    alt="完成例"
                    fill
                    className="object-cover rounded"
                    sizes="192px"
                  />
                </div>
                <p className="text-center text-sm font-medium mt-2">美しい仕上がり</p>
              </div>

              <div className="transform rotate-1 bg-white p-3 shadow-lg rounded-lg">
                <div className="w-48 h-36 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3791.jpg-PkcYHd8OwCZdeoi20YSkrAPbNyAIBW.jpeg"
                    alt="大型テレビ設置例"
                    fill
                    className="object-cover rounded"
                    sizes="192px"
                  />
                </div>
                <p className="text-center text-sm font-medium mt-2">大型テレビ対応</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-orange-600 text-3xl animate-pulse">✨</div>
            <div className="absolute top-8 right-8 text-blue-400 text-2xl animate-pulse">⭐</div>
            <div className="absolute bottom-4 left-8 text-green-700 text-2xl animate-pulse">🌟</div>
          </div>

          {/* Character Speech Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl mb-8 border-4 border-yellow-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%BB%E5%83%8F%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B33.jpg-or8TyykVK3wZLWNqi6vodl7mC8gVmq.jpeg"
                    alt="ソクトちゃん"
                    fill
                    className="object-cover rounded-full border-3 border-yellow-400"
                    sizes="80px"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-yellow-100 rounded-2xl p-4 relative">
                  <div className="absolute left-0 top-4 transform -translate-x-2">
                    <div className="w-0 h-0 border-t-[10px] border-t-yellow-100 border-r-[15px] border-r-transparent"></div>
                  </div>

                  <div className="text-gray-800 font-medium leading-relaxed">
                    <p className="font-bold text-blue-600 mb-2">大型テレビの壁掛けで失敗したくないあなたへ</p>
                    <p className="font-bold text-lg text-blue-600 mb-2">
                      65インチ以上の大型テレビは重量50kg超 専門技術が必要です
                    </p>
                    <p className="text-red-600 font-semibold mb-1">❌ DIYで失敗 → 壁に複数の穴、修復費用10万円</p>
                    <p className="text-red-600 font-semibold mb-1">❌ 一般業者 → 経験不足で傾き、やり直し費用</p>
                    <p className="text-green-600 font-bold mb-2">⭕ ソクト専門技術 → 一発で完璧、美しい仕上がり</p>
                    <p className="font-bold text-blue-600">
                      75インチ・85インチ・98インチ・100インチまで対応 新築戸建ての配線計画もお任せ！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Voice Section */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-6 shadow-xl mb-8">
            <div className="flex items-start gap-4">
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
                <div className="bg-white/80 rounded-2xl p-4 relative min-h-[80px] flex items-center">
                  <div className="absolute left-0 top-4 transform -translate-x-2">
                    <div className="w-0 h-0 border-t-[10px] border-t-white/80 border-r-[15px] border-r-transparent"></div>
                  </div>

                  <div className="text-gray-800 font-medium leading-relaxed">
                    {showComment && (
                      <p className="text-lg animate-fade-in-out">{streamingComments[currentCommentIndex]}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offer Section */}
          <div
            className="rounded-3xl p-6 shadow-2xl mb-8 transform rotate-1"
            style={{
              background: "linear-gradient(to right, #dc2626, #ea580c)",
            }}
          >
            <div
              className="rounded-2xl p-4"
              style={{
                backgroundColor: "#dc2626",
                color: "#ffffff",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27476792_3.jpg-T8VJ0izYeHpAb4bIP1zkCXKGrSO5Yy.jpeg"
                    alt="スティック型SSD 1TB"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div className="text-2xl font-black" style={{ color: "#ffffff" }}>
                  🎁 特別プレゼント
                </div>
              </div>
              <div className="font-bold leading-tight" style={{ color: "#ffffff" }}>
                9月中に成約のお客様にスティック型SSD1TBプレゼント！録りためた番組や、スマホの中の家族の動画や写真を、新しい大画面テレビで楽しみ尽くそう！
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a
              href="#package-plans"
              className="inline-block px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(to right, #2563eb, #9333ea)",
                color: "#ffffff",
              }}
            >
              <div className="text-2xl font-black mb-2" style={{ color: "#ffffff" }}>
                🎯 75インチ大型テレビ壁掛け工事なら77,000円！
              </div>
              <div className="text-lg" style={{ color: "#ffffff" }}>
                65インチ以上専門だから安心の技術力
              </div>
            </a>
          </div>

          {/* Decorative bottom elements */}
          <div className="flex justify-center mt-8 gap-4">
            <div className="text-4xl animate-bounce">🌸</div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              🌿
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.4s" }}>
              🌸
            </div>
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

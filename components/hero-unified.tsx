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
    <div className="relative min-h-screen bg-white font-sans">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231104_190331.jpg-bR4dWmVNicVl6upZUEvS296hjz1WMb.jpeg"
            alt="プロの技術者による壁掛けテレビ施工作業風景"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(44,62,80,0.8), rgba(52,73,94,0.8))",
            }}
          ></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div
            className="max-w-2xl w-full text-center rounded-3xl p-12 shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            }}
          >
            {/* Authority badge with luxury styling */}
            <div
              className="inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "linear-gradient(45deg, #f39c12, #e67e22)",
                color: "white",
              }}
            >
              『クローズアップ愛知』で特集された
            </div>

            {/* Main headline with luxury typography */}
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ color: "#2c3e50" }}>
              名古屋の大型テレビ
              <br />
              壁掛け専門店
            </h1>

            <div className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#f39c12" }}>
              ソクトノカベカケ
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "#34495e" }}>
              高価な有機ELや75インチ・85インチの大型テレビなら
              <br />
              プロの専門技術で安心・安全な壁掛け施工を実現
            </p>

            {/* Luxury CTA button */}
            <button
              className="w-full max-w-md px-10 py-5 rounded-full text-lg font-bold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              style={{
                background: "linear-gradient(45deg, #27ae60, #2ecc71)",
                boxShadow: "0 10px 25px rgba(39,174,96,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(39,174,96,0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(39,174,96,0.3)"
              }}
            >
              🎯 無料相談はLINEで30秒
            </button>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div
        className="h-24 relative"
        style={{
          background: "linear-gradient(to right, transparent, #ecf0f1, transparent)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 rounded-full"
          style={{ background: "#f39c12" }}
        ></div>
      </div>

      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231230_114455.jpg-nQHtjXGIDqv0LammOZXMmXwcxdD8CD.jpeg"
            alt="モダンなロフト空間での壁掛けテレビ設置例"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 h-full flex items-center px-4">
          <div className="max-w-6xl mx-auto w-full">
            <div
              className="rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-8" style={{ color: "#2c3e50" }}>
                大型テレビの壁掛けで失敗したくないあなたへ
              </h2>

              <div className="rounded-2xl p-8 mb-8" style={{ background: "linear-gradient(135deg, #f8f9fa, #ffffff)" }}>
                <p className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#2c3e50" }}>
                  65インチ以上の大型テレビは重量50kg超
                  <br />
                  <span className="text-red-600">専門技術が必要です</span>
                </p>

                <div className="space-y-4 mb-6">
                  <p className="text-red-600 font-bold flex items-center gap-3 text-lg">
                    <span className="text-2xl">❌</span>
                    <span>DIYで失敗 → 壁に複数の穴、修復費用10万円</span>
                  </p>
                  <p className="text-red-600 font-bold flex items-center gap-3 text-lg">
                    <span className="text-2xl">❌</span>
                    <span>一般業者 → 経験不足で傾き、やり直し費用</span>
                  </p>
                  <p className="font-bold flex items-center gap-3 text-lg" style={{ color: "#27ae60" }}>
                    <span className="text-2xl">⭕</span>
                    <span>ソクト専門技術 → 一発で完璧、美しい仕上がり</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div
        className="h-24 relative"
        style={{
          background: "linear-gradient(to right, transparent, #ecf0f1, transparent)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 rounded-full"
          style={{ background: "#f39c12" }}
        ></div>
      </div>

      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC008.jpg-fVu0fVvFSnQi9n9H8ieiRdU4YhzizR.jpeg"
            alt="完成した壁掛けテレビ設置例"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-5xl w-full">
            <div
              className="rounded-3xl p-8 md:p-12 shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-center mb-8" style={{ color: "#2c3e50" }}>
                お客様の声が続々と届いています
              </h2>

              <div className="bg-gray-50 rounded-2xl p-6 min-h-[120px] flex items-center">
                <div className="text-gray-800 leading-relaxed w-full text-center">
                  {showComment && (
                    <p className="text-lg font-medium animate-fade-in-out">{streamingComments[currentCommentIndex]}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div
        className="h-24 relative"
        style={{
          background: "linear-gradient(to right, transparent, #ecf0f1, transparent)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 rounded-full"
          style={{ background: "#f39c12" }}
        ></div>
      </div>

      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC004.jpg-xPyq3vbNKvjIAvhsHzoLicudgiIiS1.jpeg"
            alt="エレガントな壁掛けテレビ設置完成例"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <div
              className="rounded-3xl p-8 md:p-12 shadow-2xl mb-8"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "#2c3e50" }}>
                プロの仕上がりをご覧ください
              </h2>

              {/* Elegant pricing section */}
              <div className="rounded-2xl p-8 mb-8" style={{ background: "linear-gradient(135deg, #f8f9fa, #ffffff)" }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#2c3e50" }}>
                  料金例
                </h3>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-lg font-medium" style={{ color: "#34495e" }}>
                    75インチ大型テレビ壁掛け工事
                  </span>
                  <span className="text-4xl font-black" style={{ color: "#2c3e50" }}>
                    77,000円〜
                  </span>
                  <span className="text-sm text-gray-600">※現地調査・お見積もり無料</span>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                配線も美しく隠し、まるで最初からそこにあったかのような自然な仕上がり。
                <br />
                これが
                <span className="font-bold" style={{ color: "#f39c12" }}>
                  ソクトの専門技術
                </span>
                です。
              </p>

              <button
                className="px-12 py-6 rounded-full text-white text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(45deg, #27ae60, #2ecc71)",
                  boxShadow: "0 10px 25px rgba(39,174,96,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(39,174,96,0.4)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(39,174,96,0.3)"
                }}
              >
                まずは無料相談でお気軽にご相談ください
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          className="h-10 w-10 text-white rounded-full p-2 shadow-lg"
          style={{ background: "rgba(0,0,0,0.2)" }}
        />
      </div>
    </div>
  )
}

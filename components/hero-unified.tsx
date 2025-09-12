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
            <div
              className="inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "#e67e22 !important",
                color: "white !important",
              }}
            >
              壁掛けテレビで失敗したくないあなたへ
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ color: "#2c3e50" }}>
              名古屋の壁掛けテレビと壁の専門店
              <br />
              『ソクトノカベカケ』は
            </h1>

            <div className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#f39c12" }}>
              ハートFM主催『クローズアップ愛知』の25名にノミネート！
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "#34495e" }}>
              あなたの大切な有機ELモデルや75インチ・85インチの大型テレビの
              <br />
              壁掛けを得意としております。
              <br />
              専門技術で、高価なテレビを守り無事に使い続けられる安心・安全
              <br />
              な壁掛け施工を実現
            </p>

            <button
              className="w-full max-w-md px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              style={{
                backgroundColor: "#27ae60 !important",
                color: "white !important",
                boxShadow: "0 10px 25px rgba(39,174,96,0.3)",
                border: "none",
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

        {/* This section is now empty and will show just the background image */}
        <div className="relative z-10 h-full flex items-center px-4">
          <div className="max-w-6xl mx-auto w-full"></div>
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
            alt="エレガントな壁掛けテレビ設置完成例"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto w-full"></div>
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
          <div className="max-w-6xl mx-auto w-full"></div>
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
            alt="エレガントな壁掛けテレビ設置完成例"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-5xl w-full">
            <div
              className="rounded-3xl p-8 md:p-12 shadow-2xl mb-8"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "#2c3e50" }}>
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
          <div className="max-w-6xl mx-auto w-full"></div>
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

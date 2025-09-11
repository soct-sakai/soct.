"use client"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

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
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 font-sans">
      <div className="absolute top-10 left-10 text-orange-600 text-4xl opacity-70 animate-pulse">🌸</div>
      <div className="absolute top-32 right-20 text-green-700 text-3xl opacity-80 animate-bounce">🌿</div>
      <div className="absolute bottom-40 left-16 text-pink-600 text-2xl opacity-70">🌺</div>
      <div className="absolute bottom-20 right-32 text-amber-600 text-3xl opacity-70">✨</div>

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
              background: "linear-gradient(135deg, rgba(255,248,220,0.85), rgba(255,237,213,0.9))",
            }}
          ></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div
            className="max-w-2xl w-full text-center rounded-3xl p-12 shadow-2xl border-4 border-yellow-200"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,252,240,0.98))",
              backdropFilter: "blur(10px)",
              boxShadow: "0 25px 50px rgba(255,193,7,0.2)",
            }}
          >
            <div
              className="inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 border-2 border-yellow-300"
              style={{
                backgroundColor: "#fbbf24 !important",
                color: "white !important",
              }}
            >
              壁掛けテレビで失敗したくないあなたへ
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ color: "#f59e0b" }}>
              名古屋の壁掛けテレビと壁の専門店
              <br />
              『ソクトノカベカケ』は
            </h1>

            <div className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#ea580c" }}>
              ハートFM主催『クローズアップ愛知』の25名にノミネート！
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "#92400e" }}>
              あなたの大切な有機ELモデルや75インチ・85インチの大型テレビの
              <br />
              壁掛けを得意としております。
              <br />
              専門技術で、高価なテレビを守り無事に使い続けられる安心・安全
              <br />
              な壁掛け施工を実現
            </p>

            <button
              className="w-full max-w-md px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 border-orange-300"
              style={{
                background: "linear-gradient(45deg, #f59e0b, #ea580c) !important",
                color: "white !important",
                boxShadow: "0 10px 25px rgba(245,158,11,0.4)",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(245,158,11,0.5)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(245,158,11,0.4)"
              }}
            >
              🎯 無料相談はLINEで30秒
            </button>
          </div>
        </div>
      </div>

      <div
        className="h-24 relative"
        style={{
          background: "linear-gradient(to right, transparent, #fef3c7, transparent)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 rounded-full"
          style={{ background: "#f59e0b" }}
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
          <div className="absolute inset-0" style={{ background: "rgba(255,248,220,0.3)" }}></div>
        </div>

        {/* This section is now empty and will show just the background image */}
        <div className="relative z-10 h-full flex items-center px-4">
          <div className="max-w-6xl mx-auto w-full"></div>
        </div>
      </div>

      <div
        className="h-24 relative"
        style={{
          background: "linear-gradient(to right, transparent, #fef3c7, transparent)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 rounded-full"
          style={{ background: "#f59e0b" }}
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
          <div className="max-w-6xl mx-auto w-full">
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg font-medium" style={{ color: "#34495e" }}>
                      75インチを壁掛けテレビ取付設置と金具のセット
                    </span>
                    <span className="text-4xl font-black" style={{ color: "#2c3e50" }}>
                      88,000円〜
                    </span>
                    <span className="text-sm text-gray-600">※現地調査・お見積もり無料</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg font-medium" style={{ color: "#34495e" }}>
                      隠ぺい配線工事とのセット
                    </span>
                    <span className="text-4xl font-black" style={{ color: "#2c3e50" }}>
                      121,000円
                    </span>
                    <span className="text-sm text-gray-600">※配線を美しく隠します</span>
                  </div>
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

              <div className="mb-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105"
                      style={{
                        background: "linear-gradient(45deg, #f39c12, #e67e22) !important",
                        color: "white !important",
                        boxShadow: "0 8px 20px rgba(243,156,18,0.3)",
                        border: "none",
                      }}
                    >
                      <span style={{ color: "white !important" }}>セットメニュ価格早見表を見る</span>
                      <br />
                      <span className="text-sm" style={{ color: "white !important" }}>
                        65インチや隠ぺい配線工事のセット金額がすぐわかる！
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#2c3e50" }}>
                        セットメニュー価格早見表
                      </h3>
                      <div className="flex justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E6%97%A9%E8%A6%8B%E8%A1%A801.JPG-b7v6rFRUnvGaCKYga0ZBKjm2jtYBVG.jpeg"
                          alt="セットメニュー価格早見表"
                          width={1200}
                          height={400}
                          className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                      </div>
                      <p className="text-center text-sm text-gray-600 mt-4">
                        ※現地調査・お見積もり無料　※価格は税込み表示
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <button
                className="px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(45deg, #8e44ad, #9b59b6) !important",
                  color: "white !important",
                  boxShadow: "0 10px 25px rgba(142,68,173,0.3)",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(142,68,173,0.4)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(142,68,173,0.3)"
                }}
                onClick={() => {
                  const beforeAfterSection = document.getElementById("before-after-section")
                  if (beforeAfterSection) {
                    beforeAfterSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                施工事例Before → Afterへジャンプする
              </button>
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg font-medium" style={{ color: "#34495e" }}>
                      75インチを壁掛けテレビ取付設置と金具のセット
                    </span>
                    <span className="text-4xl font-black" style={{ color: "#2c3e50" }}>
                      88,000円〜
                    </span>
                    <span className="text-sm text-gray-600">※現地調査・お見積もり無料</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg font-medium" style={{ color: "#34495e" }}>
                      隠ぺい配線工事とのセット
                    </span>
                    <span className="text-4xl font-black" style={{ color: "#2c3e50" }}>
                      121,000円
                    </span>
                    <span className="text-sm text-gray-600">※配線を美しく隠します</span>
                  </div>
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

              <div className="mb-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105"
                      style={{
                        background: "linear-gradient(45deg, #f39c12, #e67e22) !important",
                        color: "white !important",
                        boxShadow: "0 8px 20px rgba(243,156,18,0.3)",
                        border: "none",
                      }}
                    >
                      <span style={{ color: "white !important" }}>セットメニュ価格早見表を見る</span>
                      <br />
                      <span className="text-sm" style={{ color: "white !important" }}>
                        65インチや隠ぺい配線工事のセット金額がすぐわかる！
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#2c3e50" }}>
                        セットメニュー価格早見表
                      </h3>
                      <div className="flex justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E6%97%A9%E8%A6%8B%E8%A1%A801.JPG-b7v6rFRUnvGaCKYga0ZBKjm2jtYBVG.jpeg"
                          alt="セットメニュー価格早見表"
                          width={1200}
                          height={400}
                          className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                      </div>
                      <p className="text-center text-sm text-gray-600 mt-4">
                        ※現地調査・お見積もり無料　※価格は税込み表示
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <button
                className="px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(45deg, #8e44ad, #9b59b6) !important",
                  color: "white !important",
                  boxShadow: "0 10px 25px rgba(142,68,173,0.3)",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(142,68,173,0.4)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(142,68,173,0.3)"
                }}
                onClick={() => {
                  const beforeAfterSection = document.getElementById("before-after-section")
                  if (beforeAfterSection) {
                    beforeAfterSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                施工事例Before → Afterへジャンプする
              </button>
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg font-medium" style={{ color: "#34495e" }}>
                      75インチを壁掛けテレビ取付設置と金具のセット
                    </span>
                    <span className="text-4xl font-black" style={{ color: "#2c3e50" }}>
                      88,000円〜
                    </span>
                    <span className="text-sm text-gray-600">※現地調査・お見積もり無料</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg font-medium" style={{ color: "#34495e" }}>
                      隠ぺい配線工事とのセット
                    </span>
                    <span className="text-4xl font-black" style={{ color: "#2c3e50" }}>
                      121,000円
                    </span>
                    <span className="text-sm text-gray-600">※配線を美しく隠します</span>
                  </div>
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

              <div className="mb-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105"
                      style={{
                        background: "linear-gradient(45deg, #f39c12, #e67e22) !important",
                        color: "white !important",
                        boxShadow: "0 8px 20px rgba(243,156,18,0.3)",
                        border: "none",
                      }}
                    >
                      <span style={{ color: "white !important" }}>セットメニュ価格早見表を見る</span>
                      <br />
                      <span className="text-sm" style={{ color: "white !important" }}>
                        65インチや隠ぺい配線工事のセット金額がすぐわかる！
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#2c3e50" }}>
                        セットメニュー価格早見表
                      </h3>
                      <div className="flex justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E6%97%A9%E8%A6%8B%E8%A1%A801.JPG-b7v6rFRUnvGaCKYga0ZBKjm2jtYBVG.jpeg"
                          alt="セットメニュー価格早見表"
                          width={1200}
                          height={400}
                          className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                      </div>
                      <p className="text-center text-sm text-gray-600 mt-4">
                        ※現地調査・お見積もり無料　※価格は税込み表示
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <button
                className="px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(45deg, #8e44ad, #9b59b6) !important",
                  color: "white !important",
                  boxShadow: "0 10px 25px rgba(142,68,173,0.3)",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(142,68,173,0.4)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(142,68,173,0.3)"
                }}
                onClick={() => {
                  const beforeAfterSection = document.getElementById("before-after-section")
                  if (beforeAfterSection) {
                    beforeAfterSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                施工事例Before → Afterへジャンプする
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

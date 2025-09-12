"use client"
import Image from "next/image"
import { ScrollLink } from "@/components/scroll-link"
import { useState } from "react"

export function SNSChallengeSection() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChallengeClick = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3500)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div
            className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "#ec4899",
              color: "#ffffff",
              border: "2px solid #ec4899",
            }}
          >
            SNSで話題
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">#ソクトノカベカケチャレンジ</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/images/sns-character-icon.png"
                alt="キャラクターアイコン"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <div className="relative bg-blue-500 text-white p-6 rounded-2xl shadow-lg max-w-2xl">
              <div className="absolute -left-4 top-6 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-blue-500 md:block hidden"></div>
              <div className="absolute -top-4 left-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-blue-500 md:hidden block"></div>
              <p className="text-sm md:text-base font-medium leading-relaxed">
                撮ってシェア📷
                SNS投稿で背中押して！応援投稿でみんなの"壁掛け愛"速人＝壁掛けテレビ、目指せ日本一📣拡散希望！#ソクトノカベチャレ
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            お客様の美しい壁掛けテレビ設置をSNSでシェアして、みんなで成功事例を共有しましょう
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC008.jpg-fVu0fVvFSnQi9n9H8ieiRdU4YhzizR.jpeg"
              alt="美しい壁掛けテレビ設置例"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC004.jpg-xPyq3vbNKvjIAvhsHzoLicudgiIiS1.jpeg"
              alt="プロの施工による完璧な仕上がり"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto relative">
          {showSuccess && (
            <div className="absolute inset-0 bg-green-500/90 rounded-2xl flex items-center justify-center z-10 animate-bounce">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">✨</div>
                <div className="text-2xl font-bold">これ反映されたよ！</div>
                <div className="text-lg">お問い合わせフォームへ移動します</div>
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-lg font-semibold text-navy-900 mb-4">
              お客様の大型テレビも、DIYの失敗例ではなく
              <br />
              美しい成功例として残しませんか？
            </p>
            <ScrollLink href="#contact-form">
              <button
                onClick={handleChallengeClick}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-3 shadow-lg hover:shadow-xl hover:scale-105 transform"
                style={{
                  backgroundColor: "#ec4899",
                  color: "#000000",
                  border: "none",
                }}
              >
                #ソクトノカベカケチャレンジ に参加する
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  )
}

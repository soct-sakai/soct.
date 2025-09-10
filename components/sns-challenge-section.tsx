"use client"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function SNSChallengeSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pink-500 text-white px-4 py-2">SNSで話題</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">#ソクトノカベカケチャレンジ</h2>
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

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-lg font-semibold text-navy-900 mb-4">
              あなたの大型テレビも、DIYの失敗例ではなく
              <br />
              美しい成功例として残しませんか？
            </p>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-3 shadow-lg"
              style={{
                backgroundColor: "#ec4899",
                color: "#000000",
                border: "none",
              }}
            >
              #ソクトノカベカケチャレンジ に参加する
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

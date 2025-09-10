"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2, Play } from "lucide-react"
import Image from "next/image"

export function SNSChallengeSection() {
  const snsExamples = [
    {
      user: "一般の方",
      avatar: "/diverse-user-avatars.png",
      content: "DIY挑戦したけど壁に穴だらけ...😭 75インチテレビが傾いてる...",
      likes: 23,
      comments: 8,
      type: "failure",
    },
    {
      user: "ソクト公式",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%BB%E5%83%8F%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B33.jpg-or8TyykVK3wZLWNqi6vodl7mC8gVmq.jpeg",
      content: "プロなら一発で下地発見、完璧設置✨ #ソクトノカベカケチャレンジ",
      likes: 1247,
      comments: 89,
      type: "success",
    },
    {
      user: "お客様",
      avatar: "/customer-avatar.png",
      content: "85インチの有機ELテレビ、他社で断られたけどソクトさんで完璧に！ #ソクトノカベカケチャレンジ",
      likes: 456,
      comments: 34,
      type: "testimonial",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pink-500 text-white px-4 py-2">SNSで話題</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">#ソクトノカベカケチャレンジ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            お客様から許可をいただいて撮影している施工動画が「プロの技術すごすぎ！」とSNSで話題に
          </p>
        </div>

        {/* SNS投稿例 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {snsExamples.map((post, index) => (
            <Card
              key={index}
              className={`${
                post.type === "failure"
                  ? "border-red-200 bg-red-50"
                  : post.type === "success"
                    ? "border-green-200 bg-green-50"
                    : "border-blue-200 bg-blue-50"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden">
                    <Image
                      src={post.avatar || "/placeholder.svg"}
                      alt={`${post.user}のアバター`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{post.user}</p>
                    <p className="text-xs text-gray-500">2時間前</p>
                  </div>
                </div>

                <p className="text-sm mb-3 leading-relaxed">{post.content}</p>

                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 施工動画プレビュー */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">プロの施工技術を動画で公開中</h3>
            <p className="text-gray-600">75インチ大型テレビの壁掛け施工から配線隠蔽まで、全工程を公開</p>
          </div>

          <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC003.jpg-9Os5R1wVccCEiSz4QP2reuZmupZ5nz.jpeg"
              alt="施工動画サムネイル"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full p-4">
                <Play className="h-8 w-8 text-white" />
              </Button>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">3:24</div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-navy-900 mb-4">
              あなたの大型テレビも、DIYの失敗例ではなく
              <br />
              美しい成功例として残しませんか？
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-3"
              style={{
                background: "linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68))",
                color: "white",
              }}
            >
              #ソクトノカベカケチャレンジ に参加する
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

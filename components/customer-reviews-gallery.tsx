"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviewImages = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E5%8F%A3%E3%82%B3%E3%83%9F01.JPG-7qubtzItlOwcadZZKtT4FzoDgKBVcE.jpeg",
    alt: "なーちゃんさんの口コミ - テレビの取り付けをしてもらい、説明や対応がとても丁寧で安心してお願いできました",
    customerName: "なーちゃん",
    rating: 5,
    timeAgo: "1週間前",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E5%8F%A3%E3%82%B3%E3%83%9F02.JPG-fG0Ox9YULTvACAsmq0T3hm3ssaV8tZ.jpeg",
    alt: "岡田功基さんの口コミ - 大変良かった、急な対応にも関わらず丁寧な説明で作業もスムーズ",
    customerName: "岡田功基",
    rating: 5,
    timeAgo: "3週間前",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E5%8F%A3%E3%82%B3%E3%83%9F03.JPG-MKKpTyvG4DCDwVIX8NGMskH8xGezH0.jpeg",
    alt: "わたなさんの口コミ - すごく綺麗に取り付けてもらえました",
    customerName: "わたな",
    rating: 5,
    timeAgo: "4週間前",
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E5%8F%A3%E3%82%B3%E3%83%9F04.JPG-m9TctaerxTGTYVuqsNXjX9unghUha5.jpeg",
    alt: "atsupacaさんの口コミ - 石膏ボードの下地なしの壁への補強をつけて壁掛けにした施工について、丁寧な説明と綺麗な仕上がりを評価",
    customerName: "atsupaca",
    rating: 5,
    timeAgo: "6週間前",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E5%8F%A3%E3%82%B3%E3%83%9F05.JPG-5PxVDbLG1zwfjtuCuTqJIVEaF996lP.jpeg",
    alt: "大野雄平さんの口コミ - とても綺麗に丁寧に施工してもらい、設置高さのアドバイスも大満足",
    customerName: "大野雄平",
    rating: 5,
    timeAgo: "7週間前",
  },
  {
    id: 6,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E5%8F%A3%E3%82%B3%E3%83%9F06.JPG-9MaGzDCBtjRYqiL1GRtJDWJUogoWye.jpeg",
    alt: "たまいやすしさんの口コミ - 第一印象は話し方が丁寧でキチンとした仕事をしてくれそう、実際にこちらの希望をしっかり聞いてくれて作業にかかる",
    customerName: "たまいやすし",
    rating: 5,
    timeAgo: "7週間前",
  },
  {
    id: 7,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E5%8F%A3%E3%82%B3%E3%83%9F08.JPG-EG1mq3a5NZBvGouCsAVhSOUbXN2nLJ.jpeg",
    alt: "テレビの購入自体久しぶりで、金具はどのタイプがいいのかなどよく知りませんでしたが見積もりの際に丁寧にご説明いただけて良かったです。取付作業もスムーズに取り付けていただけて仕上がりも満足しています！子供も喜んでくれそうで楽しみです♪",
    customerName: "お客様",
    rating: 5,
    timeAgo: "12週間前",
  },
  {
    id: 8,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E5%8F%A3%E3%82%B3%E3%83%9F09.JPG-Y6pisQUPHHyDOddSGDBobIv9DK8ooe.jpeg",
    alt: "75インチテレビの壁掛け施工をお願いしました。ケーブル配線と掃除までしていただけました。",
    customerName: "アリ",
    rating: 5,
    timeAgo: "23週間前",
  },
  {
    id: 9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E5%8F%A3%E3%82%B3%E3%83%9F07.JPG-9xdB5E0R0BBlNYwA7eWy5HPX7VZmTG.jpeg",
    alt: "早くて親切な対応でした。また、保証も3年間ついているので、安心です。",
    customerName: "黒木栄治",
    rating: 5,
    timeAgo: "11週間前",
  },
]

export function CustomerReviewsGallery() {
  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center mb-8">
        <div className="flex items-center gap-4">
          {/* Character image */}
          <div className="w-24 h-24 relative flex-shrink-0">
            <Image
              src="/images/character-icon-3.png"
              alt="キャラクター"
              fill
              className="object-cover rounded-full border-2 border-blue-300"
            />
          </div>
          {/* Speech bubble */}
          <div className="bg-white border-2 border-blue-300 rounded-2xl p-4 shadow-lg relative max-w-md">
            <div className="text-xl font-bold text-blue-800 mb-2">📱 実際のお客様からの口コミ</div>
            <div className="text-lg text-gray-700">
              Googleマップやその他のプラットフォームに投稿された、リアルなお客様の声をご紹介します
            </div>
            {/* Speech bubble arrow pointing left */}
            <div className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-[12px] border-r-blue-300 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
            <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-[10px] border-r-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent"></div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviewImages.map((review) => (
          <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.alt}
                  fill
                  className="object-contain bg-gray-50"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.timeAgo}</span>
                </div>
                <p className="font-semibold text-gray-800">{review.customerName}さん</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto">
          <h4 className="text-xl font-bold mb-2 text-blue-900">⭐口コミ43件、4.8点！</h4>
          <p className="text-blue-700">
            くらしのマーケットやミツモアなど含めると500件以上の実績です♪(*´ω｀*)
            <br />
            丁寧な対応に信用が置けるという、ご意見がとても嬉しいです(*´ω｀*)
          </p>
        </div>
      </div>
    </div>
  )
}

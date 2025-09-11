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
    <div className="relative bg-white font-sans">
      {/* Decorative elements scattered throughout - matching the floral elements from the sweets design */}
      <div className="absolute top-20 left-16 text-orange-500 text-2xl opacity-80 animate-pulse">🌸</div>
      <div className="absolute top-40 right-24 text-green-600 text-xl opacity-90 animate-bounce">🌿</div>
      <div className="absolute bottom-96 left-20 text-pink-500 text-lg opacity-80">🌺</div>
      <div className="absolute bottom-40 right-16 text-amber-600 text-2xl opacity-90">✨</div>
      <div className="absolute top-80 left-1/3 text-orange-600 text-sm opacity-70">🍃</div>
      <div className="absolute bottom-80 right-1/3 text-purple-600 text-sm opacity-70">🌼</div>

      {/* Main hero section - bright and airy like the sweets restaurant */}
      <div className="relative min-h-screen bg-gradient-to-b from-white via-yellow-50 to-white">
        <div className="container mx-auto px-4 py-20">
          {/* Large central logo/brand section - mimicking the "Eggs 'n Things" style */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <div className="bg-yellow-700 text-white px-12 py-6 rounded-full text-4xl md:text-5xl font-black shadow-2xl transform rotate-1">
                ソクトノカベカケ
              </div>
              <div className="absolute -bottom-2 -right-2 bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold transform -rotate-12">
                壁掛けテレビ専門店
              </div>
            </div>
          </div>

          {/* Main content area with bright white background */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12 mb-16 border border-yellow-200">
            {/* Subtitle section */}
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                ホワイトクリームたっぷりのパンケーキまで
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-2">
                メディア各社に取材されて、1年間で多くの人気店となった
              </p>
              <p className="text-2xl md:text-3xl font-bold text-yellow-600 mt-4">壁掛けテレビ『ソクトノカベカケ』。</p>
            </div>

            {/* Description text */}
            <div className="text-center mb-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                でも実はいただく、パンケーキ一枚門外不出でいただきます。
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-2">
                正しくは、『ハワイのブレックファースト』が楽しめるお店。
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4 font-medium">
                すてきな食事文化をーえーんとも楽しめるように、
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                食事とケースでの新商品オープン、新メニュー開発など、
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                今後も『お客様一番満足』として愛される店舗の実現のもとで、
              </p>
            </div>

            {/* Pricing section with bright styling */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">料金例</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center bg-white rounded-xl p-6 shadow-md">
                  <p className="text-lg font-medium text-gray-700 mb-2">75インチを壁掛けテレビ取付設置と金具のセット</p>
                  <p className="text-4xl font-black text-yellow-600 mb-2">88,000円〜</p>
                  <p className="text-sm text-gray-600">※現地調査・お見積もり無料</p>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-md">
                  <p className="text-lg font-medium text-gray-700 mb-2">隠ぺい配線工事とのセット</p>
                  <p className="text-4xl font-black text-orange-600 mb-2">121,000円</p>
                  <p className="text-sm text-gray-600">※配線を美しく隠します</p>
                </div>
              </div>
            </div>

            {/* Popup button */}
            <div className="text-center mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    セットメニュ価格早見表を見る
                    <br />
                    <span className="text-sm">65インチや隠ぺい配線工事のセット金額がすぐわかる！</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">セットメニュー価格早見表</h3>
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

            {/* Main CTA button */}
            <div className="text-center">
              <button
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-12 py-6 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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

          {/* About section - mimicking the "about Eggs 'n Things" style */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-12 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: "cursive" }}>
                  about ソクトノカベカケ
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">1974年にハワイで誕生して以来、</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  40年以上にわたって愛され続けるカジュアルレストラン。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">コンセプトは『All Day Breakfast』！</p>
                <p className="text-gray-700 leading-relaxed">
                  おいしくて、健康的なボリューム満点の
                  <br />
                  ブレックファーストをお好きな時間にどうぞ。
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231104_190331.jpg-bR4dWmVNicVl6upZUEvS296hjz1WMb.jpeg"
                    alt="壁掛けテレビ施工の様子"
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC004.jpg-xPyq3vbNKvjIAvhsHzoLicudgiIiS1.jpeg"
                      alt="完成した壁掛けテレビ"
                      width={120}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Staff section with bright yellow background */}
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-3xl p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                日本上陸7年目の<span className="text-yellow-600">人気ブランド</span>。
              </h2>
              <p className="text-xl text-gray-700 mb-2">お客様会社も、一緒にハッピーになりたい。</p>
              <p className="text-gray-700 leading-relaxed">
                新しい店舗のオープンが続いているのは、
                <br />
                全社員がみんな成長をしているから。
              </p>
              <p className="text-gray-700 leading-relaxed">
                毎日の仕事に対する情熱と愛情があるから。
                <br />
                みんなで学ぶ楽しさチャンスがたくさん！
              </p>
            </div>

            {/* Staff photos section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231104_190331.jpg-bR4dWmVNicVl6upZUEvS296hjz1WMb.jpeg"
                  alt="スタッフの施工風景"
                  width={300}
                  height={200}
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                  スタッフは大切な<span className="bg-yellow-300 px-2 py-1 rounded">"Ohana"</span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">私たちとともにこだわりが。</p>
                <p className="text-gray-700 leading-relaxed">
                  スタッフのことをかわいがり大切にするのは、
                  <br />
                  人ひとりが幸せになってこそ最高品質だから。
                  <br />
                  月日の外食、美味しさ、楽しさに情熱を持続。
                  <br />
                  大切なあなたとお客様が幸せでいられるように。
                </p>
              </div>
            </div>
          </div>

          {/* Final section with customer happiness theme */}
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-yellow-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                <span className="text-yellow-600">ソクトノカベカケ</span>でたらふく、
              </h2>
              <p className="text-2xl font-bold text-gray-700 mb-6">
                自分のことが<span className="text-pink-500">好き</span>になる。
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                おいしいものが好き。楽しいことが好き。
                <br />
                好きまでの道筋をここにご大切。
                <br />
                『好き』がいっぱいつまった料理を食べて、
                <br />
                いつも笑顔、ハッピーな気持ちで過ごしてほしいです。
              </p>
            </div>

            {/* Photo collage section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231230_114455.jpg-nQHtjXGIDqv0LammOZXMmXwcxdD8CD.jpeg"
                alt="施工事例1"
                width={200}
                height={150}
                className="rounded-lg shadow-md object-cover w-full h-32"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC004.jpg-xPyq3vbNKvjIAvhsHzoLicudgiIiS1.jpeg"
                alt="施工事例2"
                width={200}
                height={150}
                className="rounded-lg shadow-md object-cover w-full h-32"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231104_190331.jpg-bR4dWmVNicVl6upZUEvS296hjz1WMb.jpeg"
                alt="施工事例3"
                width={200}
                height={150}
                className="rounded-lg shadow-md object-cover w-full h-32"
              />
            </div>

            {/* Final message */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "cursive" }}>
                All We need is LOVE and ALOHA ♡
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Customer comments section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">お客様の声が続々と届いています</h2>
            <div className="bg-yellow-50 rounded-2xl p-8 min-h-[120px] flex items-center border border-yellow-200">
              <div className="text-gray-800 leading-relaxed w-full text-center">
                {showComment && (
                  <p className="text-lg font-medium animate-fade-in-out">{streamingComments[currentCommentIndex]}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-yellow-500 bg-white rounded-full p-2 shadow-lg" />
      </div>
    </div>
  )
}

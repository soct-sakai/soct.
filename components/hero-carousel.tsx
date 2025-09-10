"use client"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

const heroImages = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231230_114455.jpg-Jbm8YPoigbWexTBVGSad6Ae1IVVtwJ.jpeg",
    alt: "壁掛けテレビ施工例1",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC008.jpg-KZ5el4DTHW5C7M5tl96NiDZqwMoxa8.jpeg",
    alt: "壁掛けテレビ施工完成例 - モダンなリビング",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3791.jpg-PkcYHd8OwCZdeoi20YSkrAPbNyAIBW.jpeg",
    alt: "壁掛けテレビ施工完成例 - REGZAテレビ アニメキャラクター表示",
  },
]

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
  "1日中パソコンで疲れ果て、帰っても落ち着く場所がない…寝室で寝ながらテレビでYouTubeの旅動画見ながら寝たい。",
  "スタンド式のテレビ台したけど、思ったよりスペース使って不便だった、明るい海のような水色のクロスに、壁掛けテレビ憧れるなー",
  "漆喰壁なのに壁掛けテレビなんて、できるわけないよ",
  "最近、子どもの笑い声を聞いてない気がする…",
  "憧れるような人が住むような部屋にしたいけど、オシャってお金掛かるけど、モダンな雰囲気の部屋にしたら、きっと自分の感性も育つと思うのよね",
  "仕事を理由にコミュニケーション不足...まともに会話したのはいつだろう？",
  "帰ってきて宿題したの？って帰ってくるのは、今やるとこ！(怒)。勉強も大切だけど、子供と話しをして、悩みを知ってあげたい",
  "今年はあと何回、君(嫁)と一緒に映画を見れるかな？",
  "大好きな推しのMV、気兼ねなく家族にも『面白いね！』って言ってもらえたら…",
]

// HeroCarousel関数
export function HeroCarousel() {
  // スクロール処理を管理するための状態
  const [atBottom, setAtBottom] = useState(false)
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0)
  const [showComment, setShowComment] = useState(false)

  // スクロール位置を監視する効果
  useEffect(() => {
    const checkScrollPosition = () => {
      // ページの最下部に達したかどうかを確認
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      setAtBottom(isAtBottom)
    }

    // スクロールイベントリスナーを追加
    window.addEventListener("scroll", checkScrollPosition)

    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      window.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowComment(true)
      setTimeout(() => {
        setShowComment(false)
        setCurrentCommentIndex((prev) => (prev + 1) % streamingComments.length)
      }, 3000) // 3秒間表示
    }, 4000) // 4秒間隔で次のコメント

    return () => clearInterval(interval)
  }, [])

  // 1920pxずつスクロールする関数
  const scrollDown = () => {
    const currentScrollY = window.scrollY
    const targetScrollY = currentScrollY + 1920 // 1920px分下にスクロール

    // スムーズにスクロール
    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative">
      <div className="flex flex-col">
        {heroImages.map((image, index) => (
          <div key={index} className="relative w-full" style={{ height: "80vh" }}>
            <Image
              src={image.image || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />

            {index === 0 && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-5"></div>
            )}

            {index === 0 && (
              <div className="absolute top-8 left-0 right-0 flex justify-center px-4 z-10">
                {/* Authority Badge and Main Headline */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl border border-white/30 max-w-4xl text-center">
                  {/* Authority Badge */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">TV出演</div>
                    <span className="text-lg font-bold text-gray-800">『クローズアップ愛知』で特集された</span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-navy-900 mb-4 leading-tight">
                    名古屋の大型テレビ壁掛け専門店
                  </h1>

                  {/* Key Features */}
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-bold text-lg">
                      【65インチ以上専門】
                    </div>
                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full font-bold">
                      【新築・エコカラット対応】
                    </div>
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold">
                      【3年+地震W保証】
                    </div>
                  </div>

                  {/* Service Areas */}
                  <div className="text-gray-700 text-sm md:text-base mb-4">
                    <span className="font-semibold">対応エリア：</span>
                    <span>名古屋市・愛知県・三重県・岐阜県</span>
                    <br />
                    <span className="text-xs">日進市・長久手市・一宮市・豊田市・岡崎市・刈谷市・春日井市</span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#contact-form"
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    🎯 無料相談はLINEで30秒
                  </a>
                </div>
              </div>
            )}

            {index === 0 && (
              <div className="absolute bottom-8 left-0 right-0 flex items-end justify-center px-4 z-10">
                <div className="flex items-end gap-4 max-w-5xl">
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%BB%E5%83%8F%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B33.jpg-or8TyykVK3wZLWNqi6vodl7mC8gVmq.jpeg"
                        alt="ソクトちゃん"
                        fill
                        className="object-cover rounded-full border-4 border-white shadow-lg"
                        loading="lazy"
                        sizes="(max-width: 768px) 128px, 160px"
                      />
                    </div>
                  </div>

                  <div className="relative bg-white/30 backdrop-blur-md rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border border-white/20 min-w-0 flex-1 max-w-3xl">
                    {/* 吹き出しの尻尾を左下に配置して喋っているような形に */}
                    <div className="absolute bottom-6 left-0 transform -translate-x-3">
                      <div className="w-0 h-0 border-t-[20px] border-t-white/30 border-r-[30px] border-r-transparent"></div>
                    </div>

                    <div className="text-gray-800 font-medium leading-relaxed">
                      <div className="flex flex-wrap items-center gap-1 mb-3 text-sm md:text-base lg:text-lg">
                        <span className="font-bold text-blue-600">大型テレビの壁掛けで失敗したくないあなたへ</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 mb-3 text-base md:text-lg lg:text-xl">
                        <span className="font-bold animate-pulse text-blue-600">
                          65インチ以上の大型テレビは重量50kg超
                        </span>
                        <span className="font-bold animate-pulse text-blue-600">専門技術が必要です</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 mb-3 text-sm md:text-base lg:text-lg">
                        <span className="font-semibold text-red-600">❌ DIYで失敗 → 壁に複数の穴、修復費用10万円</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 mb-3 text-sm md:text-base lg:text-lg">
                        <span className="font-semibold text-red-600">❌ 一般業者 → 経験不足で傾き、やり直し費用</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 mb-3 text-sm md:text-base">
                        <span className="font-bold text-green-600">⭕ ソクト専門技術 → 一発で完璧、美しい仕上がり</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 mb-3 text-sm md:text-base lg:text-lg">
                        <span className="font-semibold">エコカラットやコンクリート壁で</span>
                        <span className="text-red-600 font-bold">断られた</span>
                        <span className="font-semibold">方もお任せください</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 text-base md:text-lg lg:text-xl">
                        <span className="font-bold animate-pulse text-blue-600">
                          75インチ・85インチ・98インチ・100インチまで対応
                        </span>
                        <span className="font-bold animate-pulse text-blue-600">新築戸建ての配線計画もお任せ！</span>
                      </div>
                    </div>

                    {/* キラキラエフェクト */}
                    <div className="absolute top-2 right-4 text-orange-500 text-xl md:text-2xl animate-pulse">✨</div>
                    <div className="absolute bottom-4 right-6 text-blue-600 text-lg md:text-xl animate-pulse">⭐</div>
                  </div>
                </div>
              </div>
            )}

            {index === 1 && (
              <div className="absolute bottom-8 left-0 right-0 flex items-end justify-center px-4 z-10">
                <div className="flex items-end gap-4 max-w-5xl">
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC%E7%94%BB%E5%83%8F.png.jpg-enOiZlZet2SX5ivBU3UH8VykSXN5nv.jpeg"
                        alt="壁掛け作業員"
                        fill
                        className="object-cover rounded-full border-4 border-blue-500 shadow-lg"
                        loading="lazy"
                        sizes="(max-width: 768px) 128px, 160px"
                      />
                    </div>
                  </div>

                  <div className="relative bg-white/30 backdrop-blur-md rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border border-white/20 min-w-0 flex-1 max-w-3xl">
                    {/* 吹き出しの尻尾を左下に配置 */}
                    <div className="absolute bottom-6 left-0 transform -translate-x-3">
                      <div className="w-0 h-0 border-t-[20px] border-t-white/30 border-r-[30px] border-r-transparent"></div>
                    </div>

                    <div className="text-gray-800 font-medium leading-relaxed">
                      {showComment && (
                        <div className="text-base md:text-lg lg:text-xl animate-fade-in-out">
                          {streamingComments[currentCommentIndex]}
                        </div>
                      )}
                    </div>

                    {/* キラキラエフェクト */}
                    <div className="absolute top-2 right-4 text-orange-500 text-xl md:text-2xl animate-pulse">✨</div>
                    <div className="absolute bottom-4 right-6 text-blue-600 text-lg md:text-xl animate-pulse">⭐</div>
                  </div>
                </div>
              </div>
            )}

            {index === 2 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 px-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-xl text-center max-w-sm md:max-w-2xl lg:max-w-4xl">
                  <a
                    href="#package-plans"
                    className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-lg mb-2 md:mb-3 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <div className="text-xs md:text-base lg:text-lg font-black">
                      🎯 75インチ大型テレビ壁掛け工事なら77,000円！
                    </div>
                    <div className="text-xs md:text-sm mt-1">65インチ以上専門だから安心の技術力</div>
                  </a>

                  <div className="text-gray-800 text-xs md:text-sm font-bold leading-tight mt-3">
                    <div className="flex flex-wrap justify-center items-center gap-1 text-center">
                      <span className="text-blue-600">ソクトノカベカケ</span>
                      <span>は</span>
                      <span className="font-bold text-blue-600">大型テレビ壁掛け専門店</span>
                      <span>として</span>
                      <span className="text-blue-600 font-black">最大1億円の損害保険完備</span>
                      <span>で</span>
                      <span className="text-blue-600 font-black">安心・安全</span>
                      <span>！</span>
                    </div>
                    <div className="text-blue-600 font-semibold text-xs mt-1">
                      高価な有機ELテレビも安心してお任せください♪
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 md:px-3 md:py-2 rounded-full shadow-lg animate-pulse mt-2">
                    <div className="flex items-center justify-center gap-1 md:gap-2">
                      <div className="w-4 h-4 md:w-6 md:h-6 relative flex-shrink-0">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27476792_3.jpg-T8VJ0izYeHpAb4bIP1zkCXKGrSO5Yy.jpeg"
                          alt="スティック型SSD 1TB"
                          fill
                          className="object-contain"
                          loading="lazy"
                          sizes="(max-width: 768px) 16px, 24px"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-xs md:text-sm font-black leading-tight">
                          🎁
                          9月中に成約のお客様にスティック型SSD1TBプレゼント！録りためた番組や、スマホの中の家族の動画や写真を、新しい大画面テレビで楽しみ尽くそう！
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {image.comment && (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white p-3 rounded-lg max-w-xs">
                <p>{image.comment}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* スクロールアイコン - 最下部に達していない場合のみ表示 */}
      {!atBottom && (
        <button
          onClick={scrollDown}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce focus:outline-none"
          aria-label="下にスクロール"
        >
          <div className="flex flex-col items-center">
            <ChevronDown className="h-10 w-10 text-white bg-blue-600 rounded-full p-2 shadow-lg" />
            <span className="sr-only">下にスクロール</span>
          </div>
        </button>
      )}
    </div>
  )
}

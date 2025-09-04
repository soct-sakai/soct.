"use client"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { FloatingComments } from "./floating-comments"

// 画像のデータ配列（2枚目と4枚目を削除）
const heroImages = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231230_114455.jpg-Jbm8YPoigbWexTBVGSad6Ae1IVVtwJ.jpeg",
    alt: "壁掛けテレビ施工例1",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3791.jpg-GLatnRHGk9mWuAOWGfTnj3sPD1mwmV.jpeg",
    alt: "壁掛けテレビ施工例2",
  },
]

// HeroCarousel関数
export function HeroCarousel() {
  // スクロール処理を管理するための状態
  const [atBottom, setAtBottom] = useState(false)

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
            />

            <FloatingComments section={index === 0 ? 1 : 2} />

            {/* 1枚目の画像にアニメキャラクターと吹き出しを表示 */}
            {index === 0 && (
              <div className="absolute bottom-8 left-0 right-0 flex items-end justify-center px-4 z-10">
                <div className="flex items-end gap-4 max-w-5xl">
                  {/* アニメキャラクター */}
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%BB%E5%83%8F%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B33.jpg-or8TyykVK3wZLWNqi6vodl7mC8gVmq.jpeg"
                        alt="ソクトちゃん"
                        fill
                        className="object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>

                  {/* 吹き出し */}
                  <div className="relative bg-white/30 backdrop-blur-md rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl max-w-2xl border border-white/20">
                    {/* 吹き出しの尻尾 */}
                    <div className="absolute bottom-6 left-0 transform -translate-x-3">
                      <div className="w-0 h-0 border-t-[20px] border-t-white/30 border-r-[30px] border-r-transparent"></div>
                    </div>

                    <div className="text-gray-800 text-xs md:text-sm lg:text-base font-medium leading-relaxed">
                      <p className="mb-3 font-bold text-sm md:text-base lg:text-lg text-blue-600">
                        あなたの事をおしえてください
                      </p>

                      <p className="mb-3 font-semibold text-sm md:text-base text-gray-800">
                        あなたの大切なご家族の事やテレビの視聴スタイルは？
                      </p>

                      <p className="mb-3 font-bold text-base md:text-lg animate-pulse text-blue-600">
                        テレビは壁掛けになって、あの頃みたいに家族の「笑顔の真ん中」へ。
                      </p>

                      <p className="mb-3 font-semibold text-sm md:text-base text-gray-800">
                        あなたの『<span className="text-blue-600 font-bold">好き</span>
                        』をもっと家族に伝えたいと思いませんか？
                      </p>

                      <p className="mb-3 font-medium text-gray-800">
                        私たち<span className="font-bold text-blue-600">ソクトノカベカケ</span>は知っています。
                      </p>

                      <p className="mb-3 font-medium text-gray-800">
                        壁掛けテレビが、夫婦の穏やかな時間や、親子の共通の話題をくれることを。
                      </p>

                      <p className="font-bold text-base md:text-lg animate-pulse text-blue-600">
                        さあ、リビングを家族みんなが「ホッとする」素敵で最高でもっと特別な場所にしませんか？
                      </p>
                    </div>

                    {/* キラキラエフェクト */}
                    <div className="absolute top-2 right-4 text-yellow-400 text-xl md:text-2xl animate-pulse">✨</div>
                    <div className="absolute bottom-4 right-6 text-blue-400 text-lg md:text-xl animate-pulse">⭐</div>
                  </div>
                </div>
              </div>
            )}

            {/* 2枚目の画像にキャンペーンバナーとメッセージを表示 */}
            {index === 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 px-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 md:p-4 lg:p-6 shadow-xl text-center max-w-sm md:max-w-2xl lg:max-w-4xl">
                  <a
                    href="#package-plans"
                    className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-lg mb-3 md:mb-4 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <div className="text-sm md:text-lg lg:text-xl font-black">
                      🎯 65インチ施工なら金具セットで66,000円！
                    </div>
                    <div className="text-xs md:text-sm lg:text-base mt-1">くわしくはプランをご確認ください！</div>
                  </a>

                  <div className="text-gray-800 text-xs md:text-sm lg:text-base font-bold leading-tight mb-3 md:mb-4">
                    <div className="space-y-1">
                      <div>
                        <span className="text-blue-600">ソクトノカベカケ</span>
                        <span>があなたの暮らしを</span>
                        <span className="text-blue-600 font-black text-sm md:text-base">素敵にメイク</span>
                        <span>する。</span>
                      </div>
                      <div>
                        <span className="text-blue-600 font-black text-sm md:text-base">壁掛けテレビ専門店</span>
                        <span>だから、プロの技術で</span>
                        <span className="text-blue-600 font-black text-sm md:text-base">安心・安全</span>
                        <span>！</span>
                      </div>
                      <div className="text-blue-600 font-semibold text-xs md:text-sm">
                        公式LINEかお問い合わせから無料相談受付中♪
                      </div>
                    </div>
                  </div>

                  {/* キャンペーンバナー */}
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-2 md:px-4 md:py-3 rounded-full shadow-lg animate-pulse">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 relative flex-shrink-0">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27476792_3.jpg-T8VJ0izYeHpAb4bIP1zkCXKGrSO5Yy.jpeg"
                          alt="スティック型SSD 1TB"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-xs md:text-sm font-black">
                          🎁 9月中に成約のお客様にスティック型SSD1TBプレゼント！
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

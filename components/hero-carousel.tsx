"use client"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

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

            {/* 1枚目の画像にアニメキャラクターと吹き出しを表示 */}
            {index === 0 && (
              <div className="absolute bottom-8 left-0 right-0 flex items-end justify-center px-4">
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
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl max-w-2xl">
                    {/* 吹き出しの尻尾 */}
                    <div className="absolute bottom-6 left-0 transform -translate-x-3">
                      <div className="w-0 h-0 border-t-[20px] border-t-white/80 border-r-[30px] border-r-transparent"></div>
                    </div>

                    <h1 className="text-gray-800 text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
                      <span className="text-blue-600">ソクトノカベカケ</span>があなたの暮らしを
                      <span className="text-pink-500">素敵にメイク</span>する。
                      <br />
                      <span className="text-orange-500">壁掛けテレビ専門店</span>だから、
                      <br />
                      プロの技術で<span className="text-green-600">安心・安全</span>！
                    </h1>

                    {/* キラキラエフェクト */}
                    <div className="absolute top-2 right-4 text-yellow-400 text-2xl animate-pulse">✨</div>
                    <div className="absolute top-8 right-12 text-pink-400 text-lg animate-bounce">💖</div>
                    <div className="absolute bottom-4 right-6 text-blue-400 text-xl animate-pulse">⭐</div>
                  </div>
                </div>
              </div>
            )}

            {/* 2枚目の画像にキャンペーンバナーを表示 */}
            {index === 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative flex-shrink-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27476792_3.jpg-T8VJ0izYeHpAb4bIP1zkCXKGrSO5Yy.jpeg"
                        alt="スティック型SSD 1TB"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">🎁 9月成約限定特典！</div>
                      <div className="text-lg font-black">スティック型SSD 1TB プレゼント！</div>
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

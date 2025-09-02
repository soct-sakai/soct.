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

            {/* 1枚目の画像にのみキャッチコピーを表示 */}
            {index === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 mx-4 max-w-4xl">
                  <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
                    壁掛けテレビ設置なら、プロの技術で安心・安全！
                    <br className="hidden md:block" />
                    <span className="text-orange-400">ソクトノカベカケ</span>があなたの暮らしを変えます！
                  </h1>
                </div>
              </div>
            )}

            {/* 2枚目の画像にキャンペーンバナーを表示 */}
            {index === 1 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
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

"use client"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

// 画像のデータ配列を修正し、3枚目を4番目に移動
const heroImages = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231230_114455.jpg-Jbm8YPoigbWexTBVGSad6Ae1IVVtwJ.jpeg",
    alt: "壁掛けテレビ施工例1",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0345.jpg-OyaAQdMwXv4Q6uDDp2cAtogYLk95U4.jpeg",
    alt: "壁掛けテレビ施工例2",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3791.jpg-GLatnRHGk9mWuAOWGfTnj3sPD1mwmV.jpeg",
    alt: "壁掛けテレビ施工例4",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-nSZicg2uRZEtrzHQSrx5I3X3Sg5u5d.jpeg",
    alt: "壁掛けテレビ施工例3",
  },
]

// HeroCarousel関数を完全に書き換え
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


"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImages: string[]
  title: string
  description: string
  caseId: string
}

export function BeforeAfterSlider({ beforeImage, afterImages, title, description, caseId }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [currentAfterIndex, setCurrentAfterIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const currentAfterImage = afterImages[currentAfterIndex]

  const caseStudies = [
    {
      title: "施工事例　施工 Before → After",
      content:
        "SHARPのAQUOS65インチ。実は、もともとスタンド式で設置されていたのを壁掛けに。人気のエコカラット、ストーングレース柄の壁面へのTV取り付けスタイリッシュでモダンは壁は、しっかりとテレビを固定して安全バッチリ！お客様希望で隠ぺい配線はなしでモール仕上げ。隠ぺい配線ならより高級感のある仕上がりに。基本料金とエコカラットへの取付、モールの金額で約81000円でした！",
    },
    {
      title: "施工事例　施工 Before → After",
      content:
        "SONY BRAVIA 75インチの大型テレビを美しく設置。ふかし壁(アクセントウォール)と空中テレビボード(フロートボード)の収納を組み合わせた、上質なリビング空間を実現。配線は全て隠蔽し、スマートな仕上がりに。この壁とテレビと施工セットで100万円コースですね！",
    },
    {
      title: "施工事例　施工 Before → After",
      content:
        "SONY BRAVIA75インチも、広いリビングで主役になれる。ベニヤの壁に大理石調のリブパネルへの設置高級感ある大理石調の壁面に、配線を完全に隠蔽した美しい仕上がり。壁裏は収納スペースになっていてBlu-rayレコーダーやゲーム機も完全に見えないよ。バックの収納棚数の多さも必見ですが、この壁は吹き抜けホールにもなっていてお金掛かってます。",
    },
    {
      title: "施工事例　施工 Before → After",
      content:
        "65インチのPanasonic VIERA。空中テレビボード(フロートボード)と調和する観葉植物で眼に優しいデザイン。壁もテレビもとっても素敵！夜はムーディな映画を大好きな人とみていたくなる。Blu-rayレコーダーやゲーム機もフロートボード内に完全収納。エコカラットと空中テレビボードで施工費も含めるとこちらも50万掛かりますね！",
    },
    {
      title: "施工事例　施工 Before → After",
      content:
        "寝室にも、ミドルクラスのテレビを壁掛けに。クールなライトグレークロス×石膏ボードの壁面にTOSHIBA REGZA 55インチを設置。寝ながらYouTube動画を楽しむだけじゃない！？ってどぉいうこと？アクセントクロスと壁掛けのみのセットでも、25万円。睡眠が楽しくなるなら安い投資になるのかな！？",
    },
  ]

  const currentCaseStudy = caseStudies[0] // Always use the first case study

  // 次のAfter画像に切り替え（3秒間隔）
  // useEffect(() => {
  //   if (afterImages.length <= 1) return

  //   const interval = setInterval(() => {
  //     setCurrentAfterIndex((prev) => (prev + 1) % afterImages.length)
  //   }, 3000)

  //   return () => clearInterval(interval)
  // }, [afterImages.length])

  // 初回操作時のイベント送信
  const fireInteractionEvent = () => {
    if (hasInteracted) return
    setHasInteracted(true)

    // カスタムイベントを送信（GA4等で計測可能）
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("ba_interaction", {
          detail: { id: caseId },
        }),
      )
    }
  }

  // マウス/タッチ位置から割合を計算
  const getPositionFromEvent = (e: MouseEvent | TouchEvent): number => {
    if (!sliderRef.current) return 50

    const rect = sliderRef.current.getBoundingClientRect()
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

    return percentage
  }

  // ドラッグ開始
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const position = getPositionFromEvent(e.nativeEvent)
    setSliderPosition(position)
    fireInteractionEvent()
  }

  // ドラッグ中
  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return
    const position = getPositionFromEvent(e)
    setSliderPosition(position)
  }

  // ドラッグ終了
  const handleEnd = () => {
    setIsDragging(false)
  }

  // グローバルイベントリスナー
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMove)
      document.addEventListener("mouseup", handleEnd)
      document.addEventListener("touchmove", handleMove)
      document.addEventListener("touchend", handleEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleMove)
      document.removeEventListener("mouseup", handleEnd)
      document.removeEventListener("touchmove", handleMove)
      document.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging])

  // レンジ入力の変更
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    setSliderPosition(value)
    fireInteractionEvent()
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center mb-6">
          {/* Character image */}
          <div className="w-24 h-24 relative flex-shrink-0 mr-4">
            <Image
              src="/images/character-icon-installation.png"
              alt="キャラクター"
              fill
              className="object-cover rounded-full border-2 border-green-300"
            />
          </div>
          {/* Speech bubble with dynamic content */}
          <div className="bg-white border-2 border-green-300 rounded-2xl p-4 shadow-lg relative max-w-2xl">
            <div className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{currentCaseStudy.title}</div>
            <div className="text-sm text-gray-700 space-y-3 text-left">
              <div>{currentCaseStudy.content}</div>
            </div>
            {/* Speech bubble arrow pointing left */}
            <div className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-[12px] border-r-green-300 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
            <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-[10px] border-r-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent"></div>
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg cursor-ew-resize select-none"
        style={{ touchAction: "none" }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* After画像（背景全体） */}
        <div className="absolute inset-0">
          <Image src={currentAfterImage || "/placeholder.svg"} alt="施工後" fill className="object-cover" priority />
        </div>

        {/* Before画像（左側からクリップ） */}
        <div
          className="absolute inset-0 overflow-hidden transition-all duration-75 ease-linear"
          style={{ width: `${100 - sliderPosition}%` }}
        >
          <Image src={beforeImage || "/placeholder.svg"} alt="施工前" fill className="object-cover" priority />
        </div>

        {/* 分割線 */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none z-10"
          style={{ left: `${100 - sliderPosition}%`, transform: "translateX(-1px)" }}
        />

        {/* ハンドル */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg pointer-events-none z-10 border-2 border-gray-200"
          style={{ left: `${100 - sliderPosition}%` }}
        >
          <div className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold text-lg">↔</div>
        </div>

        {/* レンジ入力（アクセシビリティ用） */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleRangeChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          aria-label="Before/After比較スライダー"
        />

        {/* ラベル */}
        <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-sm font-bold tracking-wider !bg-black !text-white !border-2 !border-black z-[9999]">
          BEFORE
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-sm font-bold tracking-wider !bg-black !text-white !border-2 !border-black z-[9999]">
          AFTER
        </div>

        {/* After画像インジケーター（右上のドット） */}
        {afterImages.length > 1 && (
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            {afterImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentAfterIndex ? "bg-white shadow-lg scale-110" : "bg-white/60 hover:bg-white/80"
                }`}
                onClick={() => setCurrentAfterIndex(index)}
                aria-label={`After画像 ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center space-y-3">
        {afterImages.length > 1 && (
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="text-sm font-medium text-gray-600">アフター画像:</span>
            <div className="flex gap-2">
              {afterImages.map((_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    index === currentAfterIndex
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setCurrentAfterIndex(index)}
                >
                  {index + 1}枚目
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="text-sm text-gray-600 leading-relaxed font-semibold">
          作業時間約2時間/見積無料/施工日から3年保証付き
        </p>
      </div>
    </div>
  )
}

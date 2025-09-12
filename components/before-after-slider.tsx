"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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

  // 次のAfter画像に切り替え（3秒間隔）
  useEffect(() => {
    if (afterImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentAfterIndex((prev) => (prev + 1) % afterImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [afterImages.length])

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
          <div className="relative">
            {/* Speech bubble */}
            <div className="bg-white border-2 border-green-300 rounded-2xl p-4 shadow-lg relative mr-4 max-w-md">
              <div className="text-2xl md:text-3xl font-bold text-green-800 mb-2">施工事例</div>
              <div className="text-lg text-gray-700">施工 Before → After</div>
              {/* Speech bubble arrow */}
              <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[12px] border-l-green-300 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
              <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent"></div>
            </div>
            {/* Character image */}
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src="/images/character-icon.png"
                alt="キャラクター"
                fill
                className="object-cover rounded-full border-2 border-green-300"
              />
            </div>
          </div>
        </div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-gray-600">{description}</p>
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
        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-bold tracking-wider">
          BEFORE
        </div>
        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-bold tracking-wider">
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
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg"
          onClick={() => window.open("https://lin.ee/pL2yRZ7", "_blank")}
        >
          📱 LINEで「壁チェック」を予約
        </Button>
        <p className="text-sm text-gray-600 leading-relaxed">
          作業時間約2時間/見積無料/施工日から3年保証付き/
          <br className="md:hidden" />
          <span className="text-orange-600 font-semibold">
            9月限定　TV録画用スティック型SSD
            1TBプレゼント！録りためた番組や、スマホの中の家族の動画や写真を、新しい大画面テレビで楽しみ尽くそう！
          </span>
        </p>
      </div>
    </div>
  )
}

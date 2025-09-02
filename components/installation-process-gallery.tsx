"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const processSteps = [
  {
    title: "Step 1: 下地補強・配線工事",
    description: "必要に応じて下地補強を行い、配線を美しく隠します",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A3%81007.jpg-0qP10uqSJRlhoFZ7xuH7rKzT871dDy.jpeg",
    points: ["下地補強工事", "壁内隠ぺい配線", "配線の保護と固定"],
  },
  {
    title: "Step 2: 現地調査・マーキング",
    description: "壁の状態を確認し、最適な取り付け位置をマーキングします",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-aXPwD1br8C6GXoXuNIOSW7sGsgymVF.jpeg",
    points: ["壁内の配線ルートを確認", "必要な開口部を計画", "安全な施工のための準備"],
  },
  {
    title: "Step 3: 金具取り付け",
    description: "耐荷重160kg以上の専用金具を確実に取り付けます",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231104_190331.jpg-W1q5uwK51el9UXmVhwu9jdS7zFyrwK.jpeg",
    points: ["専用金具の取り付け", "水平器による正確な位置決め", "電動工具による確実な固定"],
  },
  {
    title: "Step 4: テレビ設置・完成",
    description: "テレビを慎重に設置し、動作確認を行って完成です",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231104_201447.jpg-t2uVfMEbSr7Ob8CQ9myLiQZmHUtCni.jpeg",
    points: ["テレビの設置", "動作確認・映像チェック", "最終調整と清掃完了"],
  },
]

export function InstallationProcessGallery() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)
  }

  const currentProcess = processSteps[currentStep]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">🔧 施工プロセス</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            プロの技術者による安全で美しい壁掛けテレビ施工の流れをご紹介します
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* メイン画像 */}
              <div className="relative aspect-video">
                <Image
                  src={currentProcess.image || "/placeholder.svg"}
                  alt={currentProcess.title}
                  fill
                  className="object-cover"
                />

                {/* ナビゲーションボタン */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={prevStep}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={nextStep}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* ステップインジケーター */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {processSteps.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentStep ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentStep(index)}
                    />
                  ))}
                </div>
              </div>

              {/* 説明部分 */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{currentProcess.title}</h3>
                <p className="text-gray-600 mb-4">{currentProcess.description}</p>

                <div className="grid md:grid-cols-3 gap-4">
                  {currentProcess.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ステップ一覧（小さく表示） */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {processSteps.map((step, index) => (
              <button
                key={index}
                className={`p-3 rounded-lg border-2 transition-colors text-left ${
                  index === currentStep ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <div className="text-sm font-semibold mb-1">Step {index + 1}</div>
                <div className="text-xs text-gray-600">{step.title.replace("Step " + (index + 1) + ": ", "")}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

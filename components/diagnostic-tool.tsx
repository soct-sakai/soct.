"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface DiagnosticAnswers {
  tvSize: string
  wallMaterial: string
  priority: string
}

interface RecommendationResult {
  method: "wall-internal" | "front-mount"
  showAlternative: boolean
  nonRecommendedLabel?: boolean
}

export function DiagnosticTool() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<DiagnosticAnswers>({
    tvSize: "",
    wallMaterial: "",
    priority: "",
  })
  const [showResult, setShowResult] = useState(false)
  const [showAlternative, setShowAlternative] = useState(false)

  const questions = [
    {
      id: 1,
      title: "テレビサイズ",
      options: [
        { value: "small", label: "〜55インチ" },
        { value: "large", label: "65–75インチ" },
        { value: "xlarge", label: "85インチ前後" },
        { value: "xxlarge", label: "100インチ〜" },
      ],
    },
    {
      id: 2,
      title: "壁材",
      options: [
        { value: "gypsum", label: "石膏ボード" },
        { value: "ecocarat", label: "エコカラット" },
        { value: "concrete", label: "コンクリート" },
        { value: "unknown", label: "不明" },
      ],
    },
    {
      id: 3,
      title: "重視するポイント",
      options: [
        { value: "beauty", label: "美観" },
        { value: "budget", label: "予算" },
        { value: "earthquake", label: "耐震性" },
      ],
    },
  ]

  const getRecommendation = (): RecommendationResult => {
    const isLargeTV = ["large", "xlarge", "xxlarge"].includes(answers.tvSize)
    const isSpecialWall = ["ecocarat", "concrete"].includes(answers.wallMaterial)
    const isPriorityBeautyOrEarthquake = ["beauty", "earthquake"].includes(answers.priority)

    if (isLargeTV || isSpecialWall || isPriorityBeautyOrEarthquake) {
      return {
        method: "wall-internal",
        showAlternative: true,
        nonRecommendedLabel: isLargeTV,
      }
    } else {
      return {
        method: "front-mount",
        showAlternative: true,
      }
    }
  }

  const handleAnswerChange = (value: string) => {
    const questionKey = currentQuestion === 1 ? "tvSize" : currentQuestion === 2 ? "wallMaterial" : "priority"

    setAnswers((prev) => ({
      ...prev,
      [questionKey]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < 3) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // GTM Event for diagnostic completion
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "config_complete",
          tv_size: answers.tvSize,
          wall: answers.wallMaterial,
          priority: answers.priority,
        })
      }
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(1)
    setAnswers({ tvSize: "", wallMaterial: "", priority: "" })
    setShowResult(false)
    setShowAlternative(false)
  }

  const scrollToConfigurator = () => {
    const configurator = document.getElementById("detailed-configurator")
    configurator?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById("contact-form")
    quoteForm?.scrollIntoView({ behavior: "smooth" })
  }

  const currentQuestionData = questions[currentQuestion - 1]
  const currentAnswer =
    currentQuestion === 1 ? answers.tvSize : currentQuestion === 2 ? answers.wallMaterial : answers.priority

  if (showResult) {
    const recommendation = getRecommendation()

    return (
      <section id="diagnostic-tool" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">診断結果</h2>

            {/* Recommended Card */}
            <Card className="mb-8 border-2 border-blue-500">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">推奨</span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {recommendation.method === "wall-internal"
                        ? "壁内下地補強（65–85インチ・有機EL/意匠壁に最適）"
                        : "前出し簡易補強（低予算・短工期）"}
                    </h3>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    {recommendation.method === "wall-internal" ? (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          平面のままで美観◎／配線隠蔽との相性◎
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          水平±1mm検査写真／3年＋地震保証
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          将来のアクセント壁・棚にも拡張しやすい
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          低コスト・短工期で強度付与
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-500">⚠</span>
                          テレビが＋12〜36mm前に出る／撤去痕△
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">!</span>
                          大型・有機ELは非推奨
                        </li>
                      </>
                    )}
                  </ul>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">仕様目安（表示のみ）：</p>
                    <p className="text-gray-800">
                      {recommendation.method === "wall-internal"
                        ? "合板 18/24/36mm／1800×900（横連結可）"
                        : "合板 12/18/24/36mm／900×450"}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                      {recommendation.method === "wall-internal"
                        ? "¥110,000〜¥330,000（概算。壁材・厚みで変動）"
                        : "¥16,500〜¥33,000（厚みで変動）"}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={scrollToQuoteForm}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                      >
                        この内容で見積もり依頼
                      </Button>
                      <Button
                        onClick={scrollToConfigurator}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 bg-transparent"
                      >
                        詳細をカスタム
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Option */}
            {recommendation.showAlternative && (
              <div className="text-center mb-6">
                <Button
                  variant="ghost"
                  onClick={() => setShowAlternative(!showAlternative)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  他の方法も見る {showAlternative ? "▲" : "▼"}
                </Button>
              </div>
            )}

            {showAlternative && (
              <Card className="mb-8 border border-gray-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      {recommendation.nonRecommendedLabel && (
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          非推奨
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900">
                        {recommendation.method === "wall-internal"
                          ? "前出し簡易補強（低予算・短工期）"
                          : "壁内下地補強（65–85インチ・有機EL/意匠壁に最適）"}
                      </h3>
                    </div>

                    <p className="text-gray-600">
                      {recommendation.method === "wall-internal"
                        ? "テレビが＋12/18/24/36mm前に出る／撤去痕△。大型/有機ELは非推奨。"
                        : "平面のままで美観◎。隠蔽配線・意匠壁と相性◎。"}
                    </p>

                    <p className="text-lg font-semibold text-gray-800">
                      価格：
                      {recommendation.method === "wall-internal"
                        ? "¥16,500〜¥33,000（厚みで変動）"
                        : "¥110,000〜¥330,000（概算。壁材・厚みで変動）"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="text-center">
              <Button onClick={handleRestart} variant="outline" className="px-6 py-3 bg-transparent">
                診断をやり直す
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="diagnostic-tool" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">3問診断</h2>
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step === currentQuestion
                      ? "bg-blue-600 text-white"
                      : step < currentQuestion
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step < currentQuestion ? "✓" : step}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">
                  Q{currentQuestion}. {currentQuestionData.title}
                </h3>

                <RadioGroup value={currentAnswer} onValueChange={handleAnswerChange}>
                  <div className="space-y-3">
                    {currentQuestionData.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-3">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label
                          htmlFor={option.value}
                          className="text-lg cursor-pointer flex-1 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>

                <div className="text-center pt-4">
                  <Button
                    onClick={handleNext}
                    disabled={!currentAnswer}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  >
                    {currentQuestion === 3 ? "診断結果を見る" : "次へ"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

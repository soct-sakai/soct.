"use client"

import { Button } from "@/components/ui/button"

export function HeroRedesigned() {
  const scrollToPathSelection = () => {
    const pathSection = document.getElementById("path-selection")
    pathSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLineClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "line_click",
      })
    }
    window.open("https://lin.ee/4pVYnlI", "_blank")
  }

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "call_60s",
      })
    }
    window.open("tel:0524332799")
  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white luxury-grid-bg-fine">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              名古屋｜大型・有機ELの壁掛け専科
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">配線が消える × 水平±1mm × 3年＋地震保証</p>
          </div>

          {/* Authority Badges */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md border">
              <span className="text-sm font-medium text-gray-800">ハートFM『クローズアップ愛知』選出</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md border">
              <span className="text-sm font-medium text-gray-800">壁のコンシェルジュ</span>
            </div>
          </div>

          {/* Fixed CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={handleLineClick}
            >
              LINEで30分見積
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
              onClick={handlePhoneClick}
            >
              今すぐ電話
            </Button>
          </div>

          {/* Path Selection CTA */}
          <div className="pt-8">
            <Button
              onClick={scrollToPathSelection}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              どう進めるか選ぶ ↓
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

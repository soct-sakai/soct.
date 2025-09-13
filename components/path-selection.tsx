"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function PathSelection() {
  const scrollToDiagnostic = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "config_start",
      })
    }

    const diagnosticSection = document.getElementById("diagnostic-tool")
    diagnosticSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleOnSiteBooking = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "onsite_booking_attempt",
      })
    }

    // For now, scroll to contact form. Later can be replaced with external booking system
    const contactForm = document.getElementById("contact-form")
    contactForm?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="path-selection" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">どう進めますか？</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Option A: Online Simple Estimate */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={scrollToDiagnostic}>
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">写真2枚で30分概算</h3>
                <p className="text-gray-600">オンライン簡易見積もり</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={scrollToDiagnostic}>
                  3問診断を始める
                </Button>
              </CardContent>
            </Card>

            {/* Option B: On-site Consultation */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleOnSiteBooking}>
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">壁のコンシェルジュ現調</h3>
                <p className="text-gray-600">60分で最適解をご提案</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleOnSiteBooking}>
                  現調を予約する
                </Button>
                <p className="text-xs text-gray-500">
                  <a href="#coming-soon" className="underline">
                    資料ダウンロード
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

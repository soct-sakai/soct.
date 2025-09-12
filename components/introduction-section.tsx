"use client"

export function IntroductionSection() {
  return (
    <section
      className="py-16 relative text-gray-800"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231230_114455.jpg-nQHtjXGIDqv0LammOZXMmXwcxdD8CD.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#1a1a1a", // Added dark fallback background color
      }}
    >
      {/* メインコンテンツ */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="space-y-4">
              <p className="text-lg mb-4">
                壁掛けテレビと壁の専門店のプロが、あなたのリビングを
                <span className="text-blue-600 font-bold mx-1">劇的変化</span>
                させます✨
              </p>
              <p className="text-xl font-bold text-blue-600">あなたの理想の空間、ソクトノカベカケが全力でお手伝い！</p>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-2">📍 対応エリア</h3>
                <div className="text-sm text-blue-700">
                  <p className="font-semibold mb-1">🏢 主要対応地域：名古屋市</p>
                  <p>🌏 対応県：愛知県・岐阜県・三重県・静岡県</p>
                  <p className="text-xs mt-2 text-blue-600">※詳細なエリアについてはお気軽にお問い合わせください</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

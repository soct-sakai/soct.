const regions = [
  {
    name: "名古屋市",
    color: "#FF9EAA",
    cities: [
      "中区",
      "東区",
      "北区",
      "西区",
      "南区",
      "中村区",
      "昭和区",
      "瑞穂区",
      "熱田区",
      "中川区",
      "港区",
      "守山区",
      "名東区",
      "天白区",
      "緑区",
      "千種区",
    ],
  },
  {
    name: "名古屋近郊外",
    color: "#FFB366",
    cities: ["清須市", "北名古屋市", "豊山町", "日進市", "愛知郡東郷町", "豊明市", "大府市", "東海市"],
  },
  {
    name: "尾張地方",
    color: "#FFDD66",
    cities: [
      "一宮市",
      "岩倉市",
      "江南市",
      "犬山市",
      "大口町",
      "扶桑町",
      "小牧市",
      "春日井市",
      "瀬戸市",
      "尾張旭市",
      "長久手市",
    ],
  },
  {
    name: "名古屋西部",
    color: "#FFE5B3",
    cities: ["愛西市", "弥富市", "あま市", "津島市", "稲沢市", "海部郡大治町", "蟹江町", "飛島村"],
  },
  {
    name: "西三河",
    color: "#66B3FF",
    cities: ["豊田市", "岡崎市", "碧南市", "刈谷市", "安城市", "西尾市", "知立市", "高浜市", "みよし市", "幸田町"],
  },
  {
    name: "東三河",
    color: "#66E5FF",
    cities: ["豊橋市", "豊川市", "蒲郡市", "新城市", "田原市", "設楽町", "東栄町", "豊根村"],
  },
  {
    name: "知多半島",
    color: "#99FF99",
    cities: ["半田市", "常滑市", "知多市", "阿久比町", "東浦町", "南知多町", "美浜町", "武豊町"],
  },
]

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
        {/* 対応エリア */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mt-12 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h4 className="text-2xl font-bold mb-6 text-blue-700">
              🔹 対応エリア - 愛知・岐阜・三重・静岡・特に名古屋市では信頼の実績！
            </h4>

            {/* エリア一覧 */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {regions.map((region) => (
                <div key={region.name} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h5 className="text-lg font-bold mb-3 flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: region.color }} />
                    {region.name}
                  </h5>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-gray-600">
                    {region.cities.map((city) => (
                      <div key={city} className="text-center">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-lg mb-4">
                壁掛けテレビと壁の専門店のプロが、あなたのリビングを
                <span className="text-blue-600 font-bold mx-1">劇的変化</span>
                させます✨
              </p>
              <p className="text-xl font-bold text-blue-600">あなたの理想の空間、ソクトノカベカケが全力でお手伝い！</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

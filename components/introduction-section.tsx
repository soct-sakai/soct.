import Image from "next/image"

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
    <section className="py-16 relative text-gray-800 bg-gray-50">
      {/* 格子状背景パターン */}
      <div className="absolute inset-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="opacity-20">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* メインコンテンツ */}
      <div className="container px-4 md:px-6 relative z-10">
        {/* メインコピー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            🏡 壁掛けテレビ × リフォーム × スマートホーム 🌟
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-blue-700">✨ 見慣れたお部屋が、まるでラグジュアリー空間に！ ✨</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A3%81005.jpg-JmGTVSoNDlJvE0hPIgFf7tR55XA4SW.jpeg"
                alt="エコカラット・高級タイル壁"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* サービス紹介 */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-800">
            🖥️ ソクトノカベカケで理想のリビングを実現！
          </h3>
          <p className="text-xl text-center mb-8 text-blue-700">
            「壁掛けテレビにしたい！」その想い、すべてお任せください💪
          </p>

          <div className="bg-white p-6 rounded-lg mb-12 shadow-md border border-gray-200">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span> 今すぐ設置したい方
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span> 1か月後の新しいテレビと一緒に設置したい方
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span> 3か月後の新居への引越しに合わせたい方
              </li>
            </ul>
            <p className="mt-4 text-blue-600 font-semibold">💡 どんなスケジュールにも対応可能！</p>
          </div>
        </div>

        {/* テレビサイズ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-800">
            📺 テレビのサイズ、こだわりませんか？
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">視聴しやすい 55インチ</span>（使いやすいサイズ感！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">リビングの王道 65インチ</span>（これを選ぶ人が多い！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">迫力の映像 75インチ</span>（映画好きにはたまらない！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">憧れの 85インチ</span>（大画面でスポーツ観戦！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">特別な空間に 90インチ以上</span>（本物のシアタールームを作りたいなら！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">100インチでリゾート気分</span>（リビングがラグジュアリーホテルに！）
                </span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-blue-600">💡 65インチ以上の大型テレビの施工が得意な会社です！</p>
            </div>
          </div>
        </div>

        {/* 対応可能な施工 */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-800">🏠 あらゆる壁に対応！</h3>
          <div className="bg-white p-6 rounded-lg mb-8 shadow-md border border-gray-200">
            <p className="font-bold text-xl mb-4 text-blue-700">💪 「壁掛けって、うちの壁でもできるの？」</p>
            <p className="text-lg mb-6">→ はい、できます！どんな壁でもプロの技術でしっかり施工！</p>

            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">下地補強がない壁</span>（補強ナシでもOKな方法をご提案！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">隠ぺい配線</span>（配線が見えないスッキリ施工！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">エコカラットやタイル壁</span>（おしゃれな壁にも取付可能！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">コンクリート壁</span>（専門の工具と技術で対応！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">テレビの買い替えもおまかせ！</span>（古い金具の取り外しもOK）
                </span>
              </li>
            </ul>
            <p className="mt-4 text-center text-lg">「うちでも壁掛けできる？」と気になったら、まずは無料相談を！</p>
          </div>
        </div>

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

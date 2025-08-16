"use client"

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

export function ServiceArea() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">対応エリア</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <div key={region.name} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: region.color }} />
                {region.name}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                {region.cities.map((city) => (
                  <div key={city}>{city}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


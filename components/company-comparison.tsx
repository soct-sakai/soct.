import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// 評価マークの定義
const ComparisonMark = ({ type }: { type: "★" | "〇" | "△" | "×" | "-" | string }) => {
  const getColor = () => {
    switch (type) {
      case "★":
        return "text-yellow-500"
      case "〇":
        return "text-blue-500"
      case "△":
        return "text-red-500" // △の色を赤に変更
      case "×":
        return "text-red-500"
      case "-":
        return "text-gray-300"
      default:
        return "text-gray-800" // 範囲表記用
    }
  }

  return <span className={`text-lg font-bold ${getColor()}`}>{type}</span>
}

// 比較データ
const comparisonData = [
  { category: "壁掛けテレビ施工の施工品質", soct: "★", housemaker: "△", individual: "×～〇" },
  { category: "75インチ以上大型テレビ施工品質", soct: "★", housemaker: "〇", individual: "×～△" },
  { category: "壁掛け金具の用意", soct: "〇", housemaker: "-", individual: "△" },
  { category: "壁補強への適切な知識", soct: "★", housemaker: "△", individual: "-" },
  { category: "下地補強工事", soct: "〇", housemaker: "★", individual: "×～△" },
  { category: "隠ぺい配線ダクト工事", soct: "〇", housemaker: "△", individual: "△～〇" },
  { category: "電気工事", soct: "〇", housemaker: "★", individual: "-～〇" },
  { category: "特殊壁へ取付工事", soct: "★", housemaker: "★", individual: "×～△" },
  { category: "保証内容", soct: "★", housemaker: "-", individual: "×" },
  { category: "損害保険対応", soct: "〇", housemaker: "★", individual: "×～△" },
  { category: "即日対応", soct: "★", housemaker: "-", individual: "△～〇" },
]

export function CompanyComparison() {
  return (
    <div className="space-y-6">
      {/* デスクトップ表示用 */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px] text-base">カテゴリー</TableHead>
              <TableHead className="text-center text-base">速人（Soct）</TableHead>
              <TableHead className="text-center text-base whitespace-normal">
                ハウスメーカー
                <br />
                リフォーム工務店
              </TableHead>
              <TableHead className="text-center text-base">個人事業者</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-base">{row.category}</TableCell>
                <TableCell className="text-center">
                  <ComparisonMark type={row.soct as "★" | "〇" | "△" | "×" | "-"} />
                </TableCell>
                <TableCell className="text-center">
                  <ComparisonMark type={row.housemaker as "★" | "〇" | "△" | "×" | "-"} />
                </TableCell>
                <TableCell className="text-center">
                  <ComparisonMark type={row.individual} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* モバイル表示用 */}
      <div className="md:hidden space-y-4">
        {comparisonData.map((row, index) => (
          <div key={index} className="border rounded-lg p-3 bg-white">
            <h3 className="font-bold text-base mb-2">{row.category}</h3>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-600">速人</span>
                <ComparisonMark type={row.soct as "★" | "〇" | "△" | "×" | "-"} />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-600">HM/R</span>
                <ComparisonMark type={row.housemaker as "★" | "〇" | "△" | "×" | "-"} />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-600">個人</span>
                <ComparisonMark type={row.individual} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
        <div>
          <h3 className="font-bold mb-2 text-sm md:text-base flex items-center">
            <span className="text-yellow-500 mr-1">★</span> 理解度が高い
          </h3>
          <p className="text-xs md:text-sm">サービスに対しての理解度が高い</p>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-sm md:text-base flex items-center">
            <span className="text-blue-500 mr-1">〇</span> 遂行できる
          </h3>
          <p className="text-xs md:text-sm">サービスを遂行できる</p>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-sm md:text-base flex items-center">
            <span className="text-red-500 mr-1">△</span> 技術力不足
          </h3>
          <p className="text-xs md:text-sm">3流ぐらいの技術力</p>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-sm md:text-base flex items-center">
            <span className="text-red-500 mr-1">×</span> リスクあり
          </h3>
          <p className="text-xs md:text-sm">リスクがある</p>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-sm md:text-base flex items-center">
            <span className="text-gray-300 mr-1">-</span> 未提供
          </h3>
          <p className="text-xs md:text-sm">サービスを提供してない</p>
        </div>
      </div>

      {/* 補足説明を追加 */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
        <h3 className="font-bold text-base mb-2">個人事業者についての補足</h3>
        <p className="text-sm">
          個人事業者の場合は、業者によって技術力やサービス内容に大きな差があります。「×～〇」のような表記は、その幅を示しています。
        </p>
        <p className="text-sm mt-2 text-red-600 font-semibold">
          特に注意: 壁への適切な知識がない業者さんは、何かあっても保険適用も保証もない可能性があります。
        </p>
      </div>
    </div>
  )
}

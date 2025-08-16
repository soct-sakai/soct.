import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Star } from "lucide-react"

const reviews = [
  {
    content:
      "壁掛けテレビの設置をお願いしました。壁の状態をしっかり見ていただき、どういう固定方法が良いのかを提案して頂けました。お値段は決して安くはありませんが、それ以上に丁寧に作業してくださったので満足しています。",
    date: "2024年11月",
    rating: 5,
  },
  {
    content: "テレビの設置をお願いしましたが、すごく丁寧で安心できました。部屋もスッキリして大満足です！",
    date: "2024年11月",
    rating: 5,
  },
  {
    content: "自分でやるのは無理だと思い、ソクリにお願いしました。価格も手ごろで、仕上がりも完璧！",
    date: "2024年11月",
    rating: 5,
  },
  {
    content:
      "壁掛けテレビの設置を依頼しました。壁の状態を確認し、最適な固定方法を提案してもらいました。作業は丁寧で、非常に満足しています。",
    date: "2024年8月",
    rating: 5,
  },
  {
    content:
      "他社より少し高かったが、迅速なレスポンスで日程が決まり助かりました。作業前後の説明も丁寧で、安心して利用できました。",
    date: "2024年7月",
    rating: 5,
  },
  {
    content:
      "設置方法を色々検討してもらい、見積もりよりも安くなりました。設置後のゴミ処理もお願いできればさらに良かったです。非常に満足しています。",
    date: "2022年6月",
    rating: 5,
  },
]

export function ReviewTable() {
  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-24">評価</TableHead>
            <TableHead>口コミ内容</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review, index) => (
            <TableRow key={index}>
              <TableCell className="align-top">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">{review.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


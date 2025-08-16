import { Card, CardContent } from "@/components/ui/card"
import { Shield, ThumbsUp, Clock, PenToolIcon as Tool, PiggyBank, Zap, UserCheck, Award } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "信頼性",
    description: "壁に穴をあける作業だからこそ、信頼できる業者選びが重要",
  },
  {
    icon: ThumbsUp,
    title: "高品質な施工",
    description: "イメージ通りの仕上がりを実現する確かな技術力",
  },
  {
    icon: Clock,
    title: "スムーズな対応",
    description: "見積もりから施工までのスピーディーな流れ",
  },
  {
    icon: Tool,
    title: "プロの技術",
    description: "落ちない、グラつかない、安心の壁掛け施工",
  },
  {
    icon: Zap,
    title: "柔軟な設置",
    description: "スイングモーション式金具で自由自在な角度調整",
  },
  {
    icon: Shield,
    title: "安全性",
    description: "子供がいる家庭でも安心して使える設計",
  },
  {
    icon: Award,
    title: "美しい仕上がり",
    description: "高級感のある仕上がりで満足度の高い施工",
  },
  {
    icon: UserCheck,
    title: "充実サポート",
    description: "安心のアフターサポート体制",
  },
  {
    icon: PiggyBank,
    title: "コストパフォーマンス",
    description: "価格以上の価値を感じる施工品質",
  },
]

export function CustomerReasons() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">ソクトがお客様に選ばれる9つの理由</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <reason.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{reason.title}</h3>
                    <p className="text-sm text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


import { Card, CardContent } from "@/components/ui/card"
import { Shield, ThumbsUp, Clock, PenTool as Tool, PiggyBank, Zap, UserCheck, Award } from "lucide-react"

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
    <section className="py-12">
      {/* タイトル部分 - 背景画像の外に配置 */}
      <div className="container px-4 md:px-6 mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">ソクトがお客様に選ばれる9つの理由</h2>
          <p className="text-lg text-gray-700 font-medium">プロの技術者による確かな施工品質</p>
        </div>
      </div>

      {/* 背景画像付きのカード部分 */}
      <div className="relative overflow-hidden">
        {/* 背景画像 - オーバーレイをさらに薄くして人物画像を鮮明に */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240312_103749.jpg-j2bq6q7YgmfECdB71qQzPFXMGekCo0.jpeg')`,
          }}
        >
          {/* オーバーレイ - さらに薄くして人物画像を鮮明に */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/15 to-white/20"></div>
        </div>

        {/* カードコンテンツ */}
        <div className="container px-4 md:px-6 relative z-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white/40 backdrop-blur-sm border border-white/30 shadow-lg hover:bg-white/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full shadow-lg border border-white/40">
                      <reason.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1 drop-shadow-sm">{reason.title}</h3>
                      <p className="text-sm text-gray-800 font-medium leading-relaxed drop-shadow-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tv, Zap, Shield, Ruler, Clock, ThumbsUp } from "lucide-react"

const services = [
  {
    icon: Tv,
    title: "省スペース活用",
    description: "壁掛けテレビで、テレビ台が不要になりお部屋を広々と使える空間に変身させます。",
  },
  {
    icon: Zap,
    title: "スマートホーム連携",
    description: "IoTデバイスと連携し、音声操作や自動化で快適な生活を実現します。",
  },
  {
    icon: Shield,
    title: "耐震設計",
    description: "地震にも耐える強固な設置で、安心・安全な暮らしをサポートします。",
  },
  {
    icon: Ruler,
    title: "カスタム設計",
    description: "お部屋の雰囲気に合わせて、壁紙やデザインをカスタマイズします。",
  },
  {
    icon: Clock,
    title: "迅速施工",
    description: "経験豊富な技術者による、スピーディーで丁寧な施工を提供します。",
  },
  {
    icon: ThumbsUp,
    title: "アフターサポート",
    description: "施工後も安心の保証とサポート体制で、長期的に対応します。",
  },
]

export function ServiceDetails() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">サービス内容</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollLink } from "@/components/scroll-link"

const plans = [
  {
    name: "スタータープラン",
    price: "29,800円〜",
    description: "基本的な壁掛けテレビ施工",
    features: ["壁掛けテレビ施工", "基本的な金具", "簡易的な配線整理"],
  },
  {
    name: "スタンダードプラン",
    price: "49,800円〜",
    description: "人気No.1！隠ぺい配線付き",
    features: ["壁掛けテレビ施工", "高品質な金具", "壁内隠ぺい配線", "簡易的な下地補強"],
    highlighted: true,
  },
  {
    name: "プレミアムプラン",
    price: "79,800円〜",
    description: "フルカスタマイズ対応",
    features: [
      "壁掛けテレビ施工",
      "最高級金具",
      "壁内隠ぺい配線",
      "全面下地補強",
      "スマートホーム連携",
      "アクセントウォール作成",
    ],
  },
]

export function PricingPlans() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">料金プラン</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.highlighted ? "border-blue-500 border-2" : ""}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{plan.price}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <ScrollLink href="#contact-form" className="w-full">
                  <Button className="w-full">今すぐ見積もり</Button>
                </ScrollLink>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-gray-600">
          ※ 価格は目安です。実際の費用は現地調査後に正確に算出いたします。
        </p>
      </div>
    </section>
  )
}


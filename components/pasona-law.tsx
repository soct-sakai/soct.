import { AlertTriangle, Home, Key, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function PasonaLaw() {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">お部屋のお悩みはありませんか？</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            殺風景なお部屋にサヨナラ！イメージチェンジを続ける進化する壁掛けテレビ
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
          {/* 子供の安全性カード */}
          <Card className="lg:w-1/2 border-none shadow-lg">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col gap-4">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">子供の安全性</h3>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">お客様の悩み:</h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    子供がテレビを押して倒れて怪我をしないか不安、同様に大地震がきたらと思うと大きいテレビを置くのが怖い
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">原因:</h4>
                  <p className="text-gray-600 text-xs md:text-sm">子供は悪くありません。原因がテレビがグラつくこと</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">解決策:</h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    プロが施工する壁掛けテレビなら落ちない、グラつかないから安心
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 右側の画像 */}
          <div className="lg:w-1/2">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0194.JPG-7QdxAbdLVdfeQEHS0Rs79Cl6hN0uwJ.jpeg"
                alt="テレビ台の前の赤ちゃん"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* 残りのカード */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8">
          {[
            {
              icon: Home,
              title: "新居への引越し",
              concern: "新居に引越しをしたが、テレビを壁掛けにしたいが、設置方法や配線の処理に不安がある。",
              cause:
                "壁掛けテレビの設置には、適切な金具の選定や壁の状態確認、配線の隠蔽が必要であり、これらを自分で行うのは難しいと感じている。",
              solution:
                "専門の業者に依頼することで、事前に壁の状態を確認し、最適な金具を選定してもらい、配線を隠蔽する工事を行う。これにより、安心して新居でのテレビ視聴を楽しむことができる。",
            },
            {
              icon: Key,
              title: "賃貸物件での設置",
              concern:
                "賃貸物件に住んでおり、壁に穴を開けることができないため、壁掛けテレビを設置するのが難しいと感じている。",
              cause:
                "賃貸契約の規約により、壁に穴を開けたり、金具を取り付けたりすることが禁止されているため、設置方法に制約がある。",
              solution:
                "賃貸でも使用できるホッチキスで取り付けられる金具や、壁に穴を開けずに設置できる方法を提案する業者に依頼する。これにより、賃貸でも安心して壁掛けテレビを楽しむことができる。",
            },
            {
              icon: RefreshCw,
              title: "テレビの買い替え",
              concern: "新しいテレビを購入したが、壁掛けにしているため、再設置が面倒で不安を感じている。",
              cause:
                "壁掛けテレビは一度設置すると、簡単に移動や再設置ができないため、買い替え時に手間がかかることが多い。",
              solution:
                "専門業者に依頼し、テレビのサイズや重量に適した金具を選定してもらうことで、スムーズに再設置を行う。これにより、手間を省き、安心して新しいテレビを楽しむことができる。",
            },
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col gap-4">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">お客様の悩み:</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{item.concern}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">原因:</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{item.cause}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">解決策:</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{item.solution}</p>
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


import { Card, CardContent } from "@/components/ui/card"
import { Phone, ClipboardCheck, CreditCard, WrenchIcon, MessageSquare } from "lucide-react"
import Image from "next/image"

export function ApplicationFlow() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">依頼までのシンプル4ステップ</h2>
          <p className="text-lg text-gray-600">お問い合わせから作業完了まで、スピーディーに対応</p>
          <p className="text-lg font-semibold text-blue-600 mt-4">
            金具用意なら、最短翌日施工可能！
            <br />
            金具も壁固定式、スイングモーション式どちらも在庫完備
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">①申し込み</h3>
                <p className="text-gray-600">メール、電話、LINE、Webから</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">②見積書</h3>
                <p className="text-gray-600">現調または写真で確認</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">③入金</h3>
                <p className="text-gray-600">施工日決定</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <WrenchIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">④施工</h3>
                <p className="text-gray-600">これが3日後でも2か月後でも内容は同様です</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <MessageSquare className="w-6 h-6" />
              <p className="font-semibold">現調でなく、LINEで画像のやり取りなら更にスムーズに！</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://lin.ee/JWfPvbcB"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S_gainfriends_2dbarcodes_GW-L8z3DQmMuv2FPMxsYC4NueKmYV34HX.png"
                  alt="LINE友だち追加QRコード"
                  width={120}
                  height={120}
                  className="rounded-lg shadow-md"
                />
              </a>
              <p className="text-sm text-blue-600 font-medium">QRコードでLINE友だち追加</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollLink } from "@/components/scroll-link"
import Image from "next/image"

export function CampaignSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-red-500 text-white">期間限定</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">新生活応援キャンペーン</h2>
          <p className="text-xl text-gray-600">5月末まで特別価格でご提供！</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* TCL 75インチ */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">TCL 75型 ゲーミングTV</CardTitle>
              <p className="text-3xl font-bold text-red-500">298,000円〜</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tcltv001.jpg-RSlXOlCuDnx4Db4I1QhMfgmKoBmleV.jpeg"
                    alt="TCL 75インチテレビ"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">特徴</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>4K液晶テレビ</li>
                    <li>量子ドット技術採用で鮮やかな色彩を実現</li>
                    <li>120Hzのゲームモード & HDMI2.1対応</li>
                    <li>大画面でモンハンやスプラトゥーンを楽しもう！</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TCL 85インチ */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">TCL 85型 ミニLED</CardTitle>
              <p className="text-3xl font-bold text-red-500">398,000円〜</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tcltv002.jpg-EEhTiID1OuUatxXy99bGWYPkfCGCfj.jpeg"
                    alt="TCL 85インチテレビ"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">施工内容</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>VESA規格対応の専用金具使用</li>
                    <li>十分な強度を持つ下地補強工事</li>
                    <li>配線を目立たなくする壁内配線工事</li>
                    <li>美しく安全な取り付けを実現</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <ScrollLink href="#contact-form">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              キャンペーンについて問い合わせる
            </Button>
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}

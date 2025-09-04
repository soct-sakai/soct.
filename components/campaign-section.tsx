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
          <Badge className="mb-4 bg-blue-500 text-white">新品テレビ販売</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">新品テレビ75インチ85インチも用意可能です！</h2>
          <p className="text-xl text-gray-600">高品質な超大型テレビも是非ご検討ください！</p>
          <p className="text-sm text-gray-500 mt-2">
            ※テレビは販売時期によって内容が異なる場合がございます。現調時かお問い合わせ時にご相談くださいませ。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* TCL 75インチ */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                衝撃の！198,000円
              </div>
            </div>
            <CardHeader className="pt-16">
              <CardTitle className="text-2xl">TCL 75型 大型75インチゲーミングTV新品テレビ 単体</CardTitle>
              <p className="text-lg font-semibold text-blue-600">SONY65インチ4Kテレビと同価格で75インチ！</p>
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
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                衝撃の！298,000円
              </div>
            </div>
            <CardHeader className="pt-16">
              <CardTitle className="text-2xl">TCL 85型 大型85インチミニLED新品テレビ 単体</CardTitle>
              <p className="text-lg font-semibold text-blue-600">SONY65インチ有機ELテレビと同価格で85インチ！</p>
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-8">
          {/* TCL 98インチ */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                衝撃の！598,000円
              </div>
            </div>
            <CardHeader className="pt-16">
              <CardTitle className="text-2xl">TCL 98型 超大型98インチミニLED新品テレビ 単体</CardTitle>
              <p className="text-lg font-semibold text-blue-600">
                考えられない！？ほぼ100インチが10年前の65インチの価格帯まで下がってきました！
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3TV01.JPG-samHQ0zDE7wuI0o5lEPtEYSzN65dH9.jpeg"
                    alt="TCL 98インチテレビ"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">特徴</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>98V型MiniLED量子ドット技術</li>
                    <li>AiPQ Proプロセッサー搭載</li>
                    <li>TCL全域ハロー制御</li>
                    <li>精密ディミングゾーン</li>
                    <li>Google TV、Netflix、YouTube対応</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 100インチ */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                衝撃の！770,000円
              </div>
            </div>
            <CardHeader className="pt-16">
              <CardTitle className="text-2xl">100型 超大型4Kテレビ新品テレビ 単体</CardTitle>
              <p className="text-lg font-semibold text-blue-600">
                100インチ1,000,000円以上から大きく値下げに！壁にも超強度の下地が必要ですが、映画館級なリビングは手に入る時代です！ゲーム好きはここを目指して欲しい！
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3TV02.JPG-YNZURzZnGB6wCXQc0cikmO7FtHvshd.jpeg"
                    alt="100インチテレビ"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">特徴</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>100V型4K ULTRA HD HDR10対応</li>
                    <li>Google TV搭載</li>
                    <li>Netflix、YouTube、Prime Video対応</li>
                    <li>hulu、Disney+、FOD、U-NEXT、ABEMA対応</li>
                    <li>映画館級の大迫力映像体験</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <ScrollLink href="#contact-form">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              新品テレビについて問い合わせる
            </Button>
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}

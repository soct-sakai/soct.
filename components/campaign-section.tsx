import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollLink } from "@/components/scroll-link"
import Image from "next/image"

export function CampaignSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <div
            className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "#1f2937",
              color: "#ffffff",
              border: "2px solid #1f2937",
            }}
          >
            新品テレビ販売
          </div>

          <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
            <div className="relative">
              <Image
                src="/images/character-icon.png"
                alt="キャラクターアイコン"
                width={120}
                height={120}
                className="rounded-full border-4 border-blue-300 shadow-lg"
              />
            </div>
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200 max-w-md">
              <div className="absolute -left-3 top-6 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-white"></div>
              <div className="absolute -left-4 top-6 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-[21px] border-r-blue-200"></div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">
                新品テレビ75インチ85インチ、最上位の98インチや100インチも用意可能です！
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md mb-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">取り扱いブランド</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="text-blue-600 font-medium">
                ・SONY BRAVIA
                <br />
                （ソニー ブラビア）
              </div>
              <div className="text-blue-600 font-medium">
                ・Panasonic VIERA
                <br />
                （パナソニック ビエラ）
              </div>
              <div className="text-blue-600 font-medium">
                ・SHARP AQUOS
                <br />
                （シャープ アクオス）
              </div>
              <div className="text-blue-600 font-medium">
                ・TOSHIBA REGZA
                <br />
                （東芝 レグザ）
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">新品テレビ75インチ85インチも用意可能です！</h2>
          <p className="text-xl text-gray-600">75インチ・85インチの大型サイズも対応</p>
          <p className="text-lg text-blue-600 mt-2 font-semibold">
            98インチや100インチといった超大型テレビも取り扱っています！
          </p>
          <p className="text-sm text-gray-500 mt-2">詳細はお問い合わせください</p>
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
                  <h4 className="font-semibold">特徴</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>85V型MiniLED量子ドット技術</li>
                    <li>AiPQ Proプロセッサー搭載</li>
                    <li>120Hzのゲームモード & HDMI2.1対応</li>
                    <li>Google TV、Netflix、YouTube対応</li>
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
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-8 py-4">
              新品テレビのお問い合わせ
              <br />
              <span className="text-sm">詳細はお問い合わせください</span>
            </Button>
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}

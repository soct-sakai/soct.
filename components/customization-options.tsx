import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CaravanIcon as Campground, MountainIcon as Marble, Speaker, Tv, Fan } from "lucide-react"
import Image from "next/image"

export function CustomizationOptions() {
  const options = [
    { icon: Campground, title: "お部屋でキャンプベース" },
    { icon: Marble, title: "インスタで見た大理石調の壁" },
    { icon: Speaker, title: "天井にスピーカー" },
    { icon: Tv, title: "天井吊りテレビ" },
    { icon: Fan, title: "くるくる回るプロペラのライト" },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">あなたが見た【壁やお部屋を】再現します！</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {options.map((option, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <option.icon className="w-6 h-6" />
                  <span>{option.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">詳細はお問い合わせください。</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 海外の高級壁面デザイン事例 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            主に海外の富裕層にされている壁は、決して手が届かない金額じゃない！
            <br />
            ご相談お待ちしております♪
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B5%B7%E5%A4%96%E3%81%AE%E5%87%84%E3%81%84%E5%A3%81%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B802.jpg-wBFaJQidOgVwcp0fy7yKqoIcSToCr0.jpeg"
                    alt="高級感のある壁面デザイン例1"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B5%B7%E5%A4%96%E3%81%AE%E5%87%84%E3%81%84%E5%A3%81%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B803.jpg-qDThbbicpZq93xP7tyJ5Ub874sdbRx.jpeg"
                    alt="高級感のある壁面デザイン例2"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B5%B7%E5%A4%96%E3%81%AE%E5%87%84%E3%81%84%E5%A3%81%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B801.jpg-PtrGlBtacydmWUCejK4NaPZJH3fI8z.jpeg"
                    alt="高級感のある壁面デザイン例3"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B5%B7%E5%A4%96%E3%81%AE%E5%87%84%E3%81%84%E5%A3%81%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B804.jpg-zHdB9Zx2s5NpP33W93cdH62XBOTaxV.jpeg"
                    alt="高級感のある壁面デザイン例4"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

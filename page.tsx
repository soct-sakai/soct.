"use client"

import { SiteHeader } from "@/components/site-header"
import { HeroCarousel } from "@/components/hero-carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Check, CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"
import { PasonaLaw } from "@/components/pasona-law"
import { ServiceArea } from "@/components/service-area"
import { InstallationExample } from "@/components/installation-example"
import { AccordionInstallationExamples } from "@/components/accordion-installation-examples"
import { WallTypes } from "@/components/wall-types"
import { InstallationProcess } from "@/components/installation-process"
import { ReviewTable } from "@/components/review-table"
import { FAQAccordion } from "@/components/faq-accordion"
import { CEOMessage } from "@/components/ceo-message"
import { WarrantySlider } from "@/components/warranty-slider"
import { ContactForm } from "@/components/contact-form"
import { CompanyInfo } from "@/components/company-info"
import { CompanyComparison } from "@/components/company-comparison"
import { Instagram, Facebook, Linkedin, Link } from "lucide-react"
import { ScrollLink } from "@/components/scroll-link"
import { ServiceDetails } from "@/components/service-details"
import { TrustBadges } from "@/components/trust-badges"
import { CustomerReasons } from "@/components/customer-reasons"
import { Button } from "@/components/ui/button"
import { CustomizationOptions } from "@/components/customization-options"
import { CustomerBenefits } from "@/components/customer-benefits"

const RoomSimulatorIcon = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2">
      {/* お問い合わせボタン */}
      <a href="#contact-form" className="group">
        <div className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse flex items-center gap-2 min-w-[140px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-sm font-medium">お問い合わせ</span>
        </div>
      </a>

      {/* プランボタン */}
      <a href="#package-plans" className="group">
        <div
          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse flex items-center gap-2 min-w-[140px]"
          style={{ animationDelay: "0.5s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-600"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-sm font-medium">プランはこちら</span>
        </div>
      </a>
    </div>
  )
}

export default function Page() {
  return (
    <div className="h-screen">
      <div className="min-h-screen bg-white">
        <SiteHeader />

        <section id="hero">
          <HeroCarousel />
        </section>

        {/* Main CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4">壁掛けテレビ×リフォーム×スマートホーム</h2>
            <p className="mb-6 text-xl">見慣れたお部屋から、非日常に劇的変化！</p>
            <p className="mb-8 text-2xl font-semibold">ソクトノカベカケで叶うあなたの理想のリビング</p>
            <ScrollLink href="#contact-form">
              <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-100">
                今すぐ無料見積もり
              </Button>
            </ScrollLink>
          </div>
        </section>

        <TrustBadges />
        <ServiceDetails />
        <CEOMessage />
        <PasonaLaw />

        {/* Benefits and Drawbacks */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
              壁掛けテレビのメリット・デメリット
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl md:text-3xl text-green-600">メリット</CardTitle>
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "スペースの有効活用",
                      "安全性の向上（子供がテレビを押して不安を解消）",
                      "見やすい位置に設置可能（キッチンからでも見渡せる）",
                      "家族とのコミュニケーション時間が増える！",
                      "大好きなゲームや映画(動画)への集中力高まり楽しい！",
                    ].map((merit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                        <span>{merit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl md:text-3xl text-red-600">デメリット</CardTitle>
                  <XCircle className="h-10 w-10 text-red-500" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "施工時に壁に穴をあける必要がある",
                      "業者選びが重要",
                      "模様替えが出来ない",
                      "テレビの買い替えの取外し",
                    ].map((demerit, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-1" />
                        <span>{demerit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-center">壁の種類と必要な施工</h3>
              <WallTypes />
            </div>
            <div className="space-y-8 mt-12" id="installation-process">
              <InstallationProcess />
            </div>
          </div>
        </section>

        {/* Installation Examples */}
        <section id="installation-examples" className="py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">施工事例</h2>
            <div className="space-y-16">
              <InstallationExample
                title="モダンな壁面へのTV取り付け"
                description="スタイリッシュな石目調の壁面に、配線を完全に隠蔽したスッキリとした取り付けを実現。テレビ周りがすっきりとし、高級感のある仕上がりに。"
                beforeImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%93%E3%83%95%E3%82%A9%E3%83%BC001.jpg-Sj6CExf7btsJccfMK2iPGA2Bzo60Fj.jpeg"
                afterImages={[
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC001.jpg-ilFqalmRczB6w2MfdlMFNInYdyoBzO.jpeg",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC002.jpg-QZOcbZSgPuln1ZmPhaniF4bQPuBZKN.jpeg",
                ]}
              />

              <InstallationExample
                title="75インチ大型テレビの壁掛け施工"
                description="SONY BRAVIA 75インチの大型テレビを美しく設置。アクセントウォールと浮遊式の収納を組み合わせた、上質なリビング空間を実現。配線は全て隠蔽し、スマートな仕上がりに。"
                beforeImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%93%E3%83%95%E3%82%A9%E3%83%BC002.jpg-N1wJ4SaOadPw7uA6nriL2jroak7Jhm.jpeg"
                afterImages={[
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC003.jpg-9Os5R1wVccCEiSz4QP2reuZmupZ5nz.jpeg",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC004.jpg-zh2Fd8vQPfxIr364EcRayGMBS01nqe.jpeg",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC005.jpg-JGNqhIw0cQFGjNoVJtiWMt41mFZCvw.jpeg",
                ]}
              />

              <AccordionInstallationExamples
                examples={[
                  {
                    title: "大理石調の高級壁面への設置",
                    description:
                      "大理石調の高級感ある壁面に、配線を完全に隠蔽した美しい仕上がり。スマートTVの機能を最大限に活かせる設置位置で、快適な視聴環境を実現。",
                    beforeImage:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%93%E3%83%95%E3%82%A9%E3%83%BC003.jpg-itownsE7aGurXvIoe5tC5QWoCBppNX.jpeg",
                    afterImages: [
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC006.jpg-8TeYGbLN9FUzmT1qvoROWXeDbYWrI9.jpeg",
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC007.jpg-CmT3E9eyhv4Kg6DXufuQpatI3ILwSJ.jpeg",
                    ],
                  },
                  {
                    title: "フローティング収納と調和する設置",
                    description:
                      "グレーストーン調の壁面に、フローティング収納とマッチする配置でテレビを設置。観葉植物とも調和した、洗練された空間デザインを実現。配線は壁内に完全収納。",
                    beforeImage:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%93%E3%83%95%E3%82%A9%E3%83%BC004.jpg-DnWwS1Jd8mjM16zUTkIJGT4MH4A0QU.jpeg",
                    afterImages: [
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC008.jpg-qB08PTabi4OHFfhEfa2Jmxg2jdkZPt.jpeg",
                    ],
                  },
                  {
                    title: "一般的な壁面への美しい設置",
                    description:
                      "一般的なクロス×石膏ボードの壁面にTOSHIBA REGZA 55C350Xを設置。どんな一般住宅でも美しく仕上げられる確かな技術で、配線を完全に隠蔽し、スッキリとした空間を実現。",
                    beforeImage:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%93%E3%83%95%E3%82%A9%E3%83%BC005.jpg-FlFHQ0NReKzoPrXJc4UEFemcJvbK06.jpeg",
                    afterImages: [
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC009.jpg-TUvRV5R4hg2sYKTkNHfU5BfEIUY9pc.jpeg",
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Updated Customer Reviews */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">お客様の声</h2>
            </div>
            <div className="mb-16">
              <CustomerBenefits />
              <ReviewTable />
            </div>
            <CustomerReasons />
          </div>
        </section>

        {/* Company Comparison Section */}
        <section className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">サービス比較</h2>
            <CompanyComparison />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="support" className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">よくある質問</h2>
            <FAQAccordion />
          </div>
        </section>

        <section className="py-24">
          <div className="container px-4 md:px-6">
            <ServiceArea />
          </div>
        </section>

        {/* Staff Introduction */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">スタッフのご紹介</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  name: "坂井 社長",
                  role: "代表取締役 工事総責任者",
                  experience: "経験15年",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%87%AA%E5%88%86%E3%81%AE%E7%94%BB%E5%83%8F%E5%88%87%E3%82%8A%E6%8A%9C%E3%81%8D01.jpg-Lxke7zyE0dbgcP1e5lIxESxMaEqMIn.jpeg",
                },
                {
                  name: "鈴木 大介",
                  role: "頼れるチームリーダー",
                  experience: "経験3年",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%BF%E3%83%83%E3%83%9502.jpg-GIMZRRnSwpDnYAYf9wdQjqyyn3siEW.jpeg",
                },
                {
                  name: "エリちゃん",
                  role: "HPLP製作デザイナー\nたまに施工補助入ります。\n女性スタッフが欲しい時は希望してね。",
                  experience: "経験2年",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%BF%E3%83%83%E3%83%9501.jpg-mYk1icvxR8SlcbiPcsph48BOsnK8BA.jpeg",
                },
              ].map((staff, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 relative mx-auto mb-4 rounded-full overflow-hidden">
                      <Image src={staff.image || "/placeholder.svg"} alt={staff.name} fill className="object-cover" />
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl mb-2">{staff.name}</h3>
                    <div className="text-gray-600 mb-2 whitespace-pre-line">{staff.role}</div>
                    <p className="text-sm text-gray-500">{staff.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Package Plans */}
        <section id="package-plans" className="py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">パッケージプラン</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">基本料金パッケージ</h3>
                  <p className="mb-4">すべてのプランに含まれるもの：</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>取付工事一式</li>
                    <li>3年保証</li>
                    <li>地震落下時の再施工保証</li>
                    <li>基本配線工事</li>
                  </ul>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">40インチまで：</p>
                      <p>22,000円</p>
                    </div>
                    <div>
                      <p className="font-semibold">41-49インチ：</p>
                      <p>33,000円</p>
                    </div>
                    <div>
                      <p className="font-semibold">50-59インチ：</p>
                      <p>44,000円</p>
                    </div>
                    <div>
                      <p className="font-semibold">60-69インチ：</p>
                      <p>55,000円</p>
                    </div>
                    <div>
                      <p className="font-semibold">70-79インチ：</p>
                      <p>66,000円</p>
                    </div>
                    <div>
                      <p className="font-semibold">80-89インチ：</p>
                      <p>88,000円</p>
                    </div>
                    <div>
                      <p className="font-semibold">90-99インチ：</p>
                      <p>110,000円</p>
                    </div>
                    <div>
                      <p className="font-semibold">100インチ以上：</p>
                      <p>応相談</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {[
                {
                  name: "スターター",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-IHQR1w4YlGdkxWQ1su9nKEp2UfpzKV.jpeg",
                  options: ["壁掛けテレビ施工のみ"],
                  price: "22,000円〜",
                  description: "インチサイズに応じた料金",
                },
                {
                  name: "スタンダードA",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-wXLginPbnmoF2YjSARnaoSvbtg5uaL.jpeg",
                  options: ["壁掛けテレビ施工", "壁固定式金具"],
                  price: "35,200円〜",
                  description: "インチサイズ料金 + 壁固定式金具（13,200円）",
                  highlighted: true,
                },
                {
                  name: "スタンダードB",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-wXLginPbnmoF2YjSARnaoSvbtg5uaL.jpeg",
                  options: ["壁掛けテレビ施工", "スイングモーション式金具"],
                  price: "41,800円〜",
                  description: "インチサイズ料金 + スイングモーション式金具（19,800円）",
                },
                {
                  name: "ダイヤモンド",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-NyXWhf5lKMeYeH058g9sl1I7iNERNa.jpeg",
                  options: ["壁掛けテレビ施工", "壁固定式金具", "壁内隠ぺい配線", "アクセントクロス貼り換え"],
                  price: "213,800円〜",
                  description:
                    "インチサイズ料金 + 金具（19,800円）+ 隠ぺい配線（22,000円）+ アクセントクロス（150,000円〜）",
                },
                {
                  name: "プラチナ",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-2Jaj9kuUDB6k6NUUFIqM2BwrLXg9U7.jpeg",
                  options: [
                    "壁掛けテレビ施工",
                    "壁固定式金具",
                    "壁内隠ぺい配線",
                    "下地補強設置工事",
                    "エコカラットタイル壁",
                  ],
                  price: "459,800円〜",
                  description:
                    "インチサイズ料金 + 金具（19,800円）+ 隠ぺい配線（22,000円）+ 下地補強（66,000円）+ エコカラット（330,000円〜）",
                },
                {
                  name: "プレミアム",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-fMGsNyP2p9W75QwENKFATm755Ce1TZ.jpeg",
                  options: [
                    "壁掛けテレビ施工",
                    "壁固定式金具",
                    "壁内隠ぺい配線",
                    "下地補強設置工事",
                    "アクセントウォール",
                    "リブパネル",
                  ],
                  price: "1,009,800円〜",
                  description:
                    "インチサイズ料金 + 金具（19,800円）+ 隠ぺい配線（22,000円）+ 下地補強（66,000円）+ アクセントウォール（550,000円〜）+ リブパネル（330,000円〜）",
                },
              ].map((plan, index) => (
                <Card key={index} className={`overflow-hidden ${plan.highlighted ? "border-blue-500 border-2" : ""}`}>
                  <div className="relative h-[300px] w-full bg-gray-50">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={`${plan.name}パッケージプラン`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{plan.name}プラン</h3>
                      {plan.highlighted && <Badge className="bg-blue-500">おすすめ</Badge>}
                    </div>
                    <p className="text-2xl font-bold mb-4">{plan.price}</p>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {plan.options.map((option, i) => (
                          <li key={i} className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            {option}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                      <p className="text-sm text-blue-600 font-semibold">※ 全プラン3年間無料保証付き</p>
                      <ScrollLink
                        href="#contact-form"
                        className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-center"
                      >
                        見積もりを依頼する
                      </ScrollLink>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Additional Options */}
              <Card className="overflow-hidden">
                <div className="relative h-[300px] w-full bg-gray-50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-svSF5yxQItuUKpXmSD0MM6izM752rC.jpeg"
                    alt="オプションプラン"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">オプションプラン</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "クロス貼替",
                      "エコカラット取付",
                      "スマートホーム",
                      "フローティングシェルフ",
                      "壁固定式金具",
                      "スイング式金具",
                      "下地補強",
                      "特殊壁テクニカル料金",
                      "電源とアンテナの増設工事",
                    ].map((option, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-8 text-sm text-gray-600">
              ※ 価格は目安です。実際の費用は現地調査後に正確に算出いたします。TV
              サイズや追加サービスにより変動する場合があります。
            </p>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">ご利用可能なお支払い方法</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Credit Card Announcement */}
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold">※ソクトからのお知らせ※</h3>
                      <div className="relative">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A303.JPG-bfPUV3iS9D9RtXGhna1dz2nyXIt2BW.jpeg"
                          alt="クレジットカード決済対応のお知らせ"
                          width={600}
                          height={400}
                          className="mx-auto"
                        />
                      </div>
                    </div>

                    {/* Payment Methods List */}
                    <div className="grid gap-6">
                      <div className="border-b pb-4">
                        <h4 className="font-bold text-lg md:text-xl mb-2">現金決済</h4>
                        <p className="text-gray-600">
                          施工開始前の決済となります。追加作業が発生した場合は要相談となります。
                        </p>
                      </div>

                      <div className="border-b pb-4">
                        <h4 className="font-bold text-lg md:text-xl mb-2">振込決済</h4>
                        <p className="text-gray-600">施工開始前の決済となります。</p>
                      </div>

                      <div className="border-b pb-4">
                        <h4 className="font-bold text-lg md:text-xl mb-2">クレジットカード決済</h4>
                        <p className="text-gray-600 mb-2">以下のカードブランドをご利用いただけます：</p>
                        <ul className="list-disc list-inside text-gray-600 ml-4">
                          <li>VISA</li>
                          <li>Mastercard</li>
                          <li>JCB</li>
                          <li>American Express（アメリカンエクスプレス）</li>
                          <li>Discover（ディスカバーカード）</li>
                          <li>Diners Club（ダイナースクラブ）</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg md:text-xl mb-2">キャッシュレス決済</h4>
                        <p className="text-gray-600">
                          一部の決済方法に対応しております。お使いの決済方法が利用可能かどうか、お問い合わせください。
                        </p>
                        <p className="text-gray-600 mt-2">※ QUICPayにも対応開始です！</p>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-orange-800">
                        ※ お支払い方法についてご不明な点がございましたら、お気軽にお問い合わせください。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Warranty Slider */}
        <section className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">安心の返金対応と保証制度</h2>
            <WarrantySlider />
          </div>
        </section>

        {/* Custom Options Section */}
        <CustomizationOptions />

        {/* Contact Form Section */}
        <section id="contact-form" className="py-24 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CompanyInfo />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4 md:mb-6">
                  <div className="h-5 w-5 md:h-6 md:w-6 bg-blue-500" />
                  <span className="font-bold text-sm md:text-base">ソクトノカベカケ</span>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">プロフェッショナルな壁掛けテレビ施工サービス</p>
              </div>
              <div>
                <h3 className="font-bold mb-4 md:mb-6 text-sm md:text-base">サービス</h3>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li>壁掛けテレビ施工</li>
                  <li>金具の提案</li>
                  <li>下地補強</li>
                  <li>壁内隠ぺい配線工事</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 md:mb-6 text-sm md:text-base">サポート</h3>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li>施工ガイド</li>
                  <li>よくある質問</li>
                  <li>お問い合わせ</li>
                  <li>保証について</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 md:mb-6 text-sm md:text-base">お問い合わせ</h3>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li>kabekaketv@soct.jp.net</li>
                  <li>052-433-2799</li>
                  <li>営業時間: 平日 9:00-18:00</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8">
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">シェアして特典をゲット！</h3>
                <p className="text-gray-400 text-sm md:text-base mb-4">イイナ！と思ったらシェアしてね c(＞ω＜)ゞ</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("プロフェッショナルな壁掛けテレビ施工サービス - ソクトノカベカケ")}&url=${encodeURIComponent("https://soct.website/")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Xでシェア"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.instagram.com/share?url=${encodeURIComponent("https://soct.website/")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagramでシェア"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://soct.website/")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Facebookでシェア"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://soctwebsite/")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedInでシェア"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("https://soct.website/")
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="URLをコピー"
                  >
                    <Link className="h-6 w-6" />
                  </button>
                </div>
              </div>{" "}
            </div>
            <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
              <p>&copy; 2024 ソクトノカベカケ. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <RoomSimulatorIcon />
      </div>
    </div>
  )
}

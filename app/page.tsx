"use client"

import { SiteHeader } from "@/components/site-header"
import { HeroCarousel } from "@/components/hero-carousel"
import { PasonaLaw } from "@/components/pasona-law"
import { ServiceArea } from "@/components/service-area"
import { BeforeAfterSlider } from "@/components/before-after-slider"
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
import { ScrollLink } from "@/components/scroll-link"
import { ServiceDetails } from "@/components/service-details"
import { TrustBadges } from "@/components/trust-badges"
import { CustomerReasons } from "@/components/customer-reasons"
import { CustomizationOptions } from "@/components/customization-options"
import { Card, CardContent } from "@/components/ui/card" // Import Card and CardContent
import Image from "next/image"
import { CampaignSection } from "@/components/campaign-section"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer" // インポートを追加
import { StarterPlanSelector } from "@/components/starter-plan-selector"
import { OptionPlanSelector } from "@/components/option-plan-selector"
import { ApplicationFlow } from "@/components/application-flow"
import { IntroductionSection } from "@/components/introduction-section"

const RoomSimulatorIcon = () => {
  return (
    <>
      {/* スマホ用固定フッターCTA */}
      <nav className="soct-fixed-cta md:hidden" role="navigation" aria-label="主要アクション">
        <a className="cta-btn plan" href="#package-plans" aria-label="料金プランを見る">
          <span className="ico">📺</span>
          <span className="label">料金プランはこちら！</span>
        </a>
        <a className="cta-btn contact" href="#contact-form" aria-label="お問い合わせフォーム">
          <span className="ico">📞</span>
          <span className="label">お問い合わせはこちら！</span>
        </a>
      </nav>

      {/* PC用は従来通り（右下の小さいアイコン） */}
      <div className="hidden md:block fixed right-4 bottom-4 z-50 flex flex-col gap-2">
        <a href="#contact-form" className="group">
          <div className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 min-w-[140px]">
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

        <a href="#package-plans" className="group">
          <div className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 min-w-[140px]">
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
    </>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <section id="hero">
          <HeroCarousel />
        </section>

        <section id="introduction">
          <IntroductionSection />
        </section>

        {/* Main CTA */}
        {/*
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
        */}

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
            <WallTypes />
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
              <BeforeAfterSlider
                caseId="case-01"
                title="モダンな壁面へのTV取り付け"
                description="スタイリッシュな石目調の壁面に、配線を完全に隠蔽したスッキリとした取り付けを実現。テレビ周りがすっきりとし、高級感のある仕上がりに。"
                beforeImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%93%E3%83%95%E3%82%A9%E3%83%BC001.jpg-Sj6CExf7btsJccfMK2iPGA2Bzo60Fj.jpeg"
                afterImages={[
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC001.jpg-ilFqalmRczB6w2MfdlMFNInYdyoBzO.jpeg",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC002.jpg-QZOcbZSgPuln1ZmPhaniF4bQPuBZKN.jpeg",
                ]}
              />

              <BeforeAfterSlider
                caseId="case-02"
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
            <CustomerReasons />
            <div className="mt-16">
              <ReviewTable />
            </div>
          </div>
        </section>

        {/* Application Flow */}
        <ApplicationFlow />

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
                  comment: "心は赤く熱い、頭は青くクールに",
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
                    {staff.comment && (
                      <p className="mt-4 text-sm italic text-blue-600 font-semibold">&quot;{staff.comment}&quot;</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Options Section */}
        <CustomizationOptions />

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

        {/* キャンペーンセクションを追加（パッケージプランの前に） */}
        <CampaignSection />

        {/* パッケージプラン */}
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
                    <li>配線まとめ</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    ※ インチサイズに応じた料金はスタータープランでご確認いただけます。
                  </p>
                </CardContent>
              </Card>

              {[
                {
                  name: "スターター",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-IHQR1w4YlGdkxWQ1su9nKEp2UfpzKV.jpeg",
                  options: ["壁掛けテレビ施工のみ"],
                  price: "",
                  description: "",
                  isDetailedPrice: true,
                  isSelectable: true,
                  sizeOptions: [
                    { size: "40インチまで", price: "22,000円" },
                    { size: "41-49インチ", price: "33,000円" },
                    { size: "50-59インチ", price: "44,000円" },
                    { size: "60-69インチ", price: "55,000円" },
                    { size: "70-79インチ", price: "66,000円" },
                    { size: "80-89インチ", price: "88,000円" },
                    { size: "90-99インチ", price: "110,000円" },
                    { size: "100インチ以上", price: "応相談" },
                  ],
                },
                {
                  name: "オプション",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-svSF5yxQItuUKpXmSD0MM6izM752rC.jpeg",
                  options: [],
                  price: "",
                  description:
                    "※ アクセントウォールとクロスやエコカラット、リブパネルを組み合わせると最高のお部屋へと生まれ変わります。\nスタータープランと組み合わせて選択できます",
                  isDetailedPrice: true,
                  isOptionSelector: true,
                },
                {
                  name: "ダイヤモンド",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-NyXWhf5lKMeYeH058g9sl1I7iNERNa.jpeg",
                  options: ["壁掛けテレビ施工", "壁固定式金具", "壁内隠ぺい配線", "アクセントクロス貼り換え"],
                  price: "ご担当にお問い合わせください",
                  description: "インチサイズ料金 + 金具 + 隠ぺい配線 + アクセントクロス",
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
                  price: "ご担当にお問い合わせください",
                  description: "インチサイズ料金 + 金具 + 隠ぺい配線 + 下地補強 + エコカラット",
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
                  price: "ご担当にお問い合わせください",
                  description: "インチサイズ料金 + 金具 + 隠ぺい配線 + 下地補強 + アクセントウォール + リブパネル",
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
                    {plan.isDetailedPrice ? (
                      <>
                        <div className="mb-4">
                          {plan.isOptionSelector ? (
                            <OptionPlanSelector />
                          ) : (
                            <>
                              <h4 className="font-semibold mb-2">インチサイズ別料金：</h4>
                              <StarterPlanSelector
                                sizeOptions={plan.sizeOptions?.map((option) => ({
                                  ...option,
                                  priceValue:
                                    option.price !== "応相談"
                                      ? Number.parseInt(option.price.replace(/[^0-9]/g, ""))
                                      : 0,
                                }))}
                              />
                            </>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-2xl font-bold mb-4">{plan.price}</p>
                        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                      </>
                    )}
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
            </div>
            <p className="text-center mt-8 text-sm text-gray-600">
              ※ 価格は目安です。実際の費用は現地調査後に正確に算出いたします。TV
              サイズや追加サービスにより変動する場合があります。
            </p>
          </div>
        </section>

        {/* 支払い方法セクション */}
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
                    <div className="grid gap-6">{/* ... 既存の支払い方法リスト ... */}</div>
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
      </main>
      <SiteFooter />
      <RoomSimulatorIcon />
    </div>
  )
}

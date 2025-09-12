"use client"

import { SiteHeader } from "@/components/site-header"
import { HeroUnified } from "@/components/hero-unified"
import { LargeTVSpecialistSection } from "@/components/large-tv-specialist-section"
import { SNSChallengeSection } from "@/components/sns-challenge-section"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { AccordionInstallationExamples } from "@/components/accordion-installation-examples"
import { InstallationProcessGallery } from "@/components/installation-process-gallery"
import { CustomerReviewsGallery } from "@/components/customer-reviews-gallery"
import { CEOMessage } from "@/components/ceo-message"
import { WarrantySlider } from "@/components/warranty-slider"
import { ContactForm } from "@/components/contact-form"
import { CompanyInfo } from "@/components/company-info"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { CampaignSection } from "@/components/campaign-section"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { StarterPlanSelector } from "@/components/starter-plan-selector"
import { OptionPlanSelector } from "@/components/option-plan-selector"
import { ApplicationFlow } from "@/components/application-flow"
import { IntroductionSection } from "@/components/introduction-section"
import { CustomerReasons } from "@/components/customer-reasons"
import { TVMountBrackets } from "@/components/tv-mount-brackets"
import { WarrantyBanner } from "@/components/warranty-banner"
import { PricingTablePopup } from "@/components/pricing-table-popup"

const RoomSimulatorIcon = () => {
  return (
    <>
      {/* スマホ用固定フッターCTA - リッチメニュー形式 */}
      <nav className="soct-fixed-cta md:hidden" role="navigation" aria-label="主要アクション">
        <a className="cta-btn phone" href="tel:0524332799" aria-label="電話で相談">
          <span className="ico">📞</span>
          <span className="label">電話相談</span>
        </a>
        <a className="cta-btn email" href="mailto:kabekaketv@soct.jp.net" aria-label="メールで相談">
          <span className="ico">✉️</span>
          <span className="label">メール相談</span>
        </a>
        <a
          className="cta-btn line line-primary"
          href="https://lin.ee/4pVYnlI"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LINEで相談"
        >
          <span className="ico">💬</span>
          <span className="label">LINEで相談</span>
        </a>
        <a className="cta-btn menu" href="#package-plans" aria-label="基本メニューを見る">
          <span className="ico text-gray-900">📋</span>
          <span className="label text-gray-900">基本メニュー</span>
        </a>
      </nav>

      {/* PC用リッチメニュー - Updated to use unified color scheme */}
      <div className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-md luxury-grid-bg-fine">
          <div className="grid grid-cols-2 gap-3">
            <a href="tel:0524332799" className="group">
              <div className="bg-red-50 hover:bg-red-100 text-red-700 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <span className="text-lg">📞</span>
                <span className="text-sm font-medium">電話相談</span>
              </div>
            </a>
            <a href="mailto:kabekaketv@soct.jp.net" className="group">
              <div className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <span className="text-lg">✉️</span>
                <span className="text-sm font-medium">メール相談</span>
              </div>
            </a>
            <a href="https://lin.ee/4pVYnlI" target="_blank" rel="noopener noreferrer" className="group col-span-2">
              <div className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span className="text-lg">💬</span>
                <span className="text-sm font-medium">LINEで相談（おすすめ）</span>
              </div>
            </a>
            <a href="#package-plans" className="group col-span-2">
              <div className="bg-blue-50 hover:bg-blue-100 text-blue-800 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span className="text-lg">📋</span>
                <span className="text-sm font-medium">基本メニュー</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Page() {
  const handleQuoteRequest = (planName: string, planDetails?: string) => {
    // Store the plan information in sessionStorage to pass to contact form
    const quoteData = {
      planName,
      planDetails: planDetails || `${planName}プランの見積もりを希望します。`,
      timestamp: Date.now(),
    }
    sessionStorage.setItem("quoteRequest", JSON.stringify(quoteData))

    // Scroll to contact form
    const contactForm = document.getElementById("contact-form")
    contactForm?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white luxury-grid-bg-fine">
      <SiteHeader />
      <main>
        <section id="hero">
          <HeroUnified />
        </section>

        <LargeTVSpecialistSection />

        <section id="introduction">
          <IntroductionSection />
        </section>

        <CEOMessage />

        {/* Customer Reasons - Added subtle grid background */}
        <section className="py-12 bg-gray-50 luxury-grid-bg-fine">
          <div className="container px-4 md:px-6">
            <CustomerReasons />
          </div>
        </section>

        {/* Customer Reviews - CustomerReasonsの直後に移動、新しいギャラリー形式 */}
        <section className="py-12 luxury-grid-bg">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="luxury-heading">お客様の声</h2>
            </div>
            <CustomerReviewsGallery />
          </div>
        </section>

        <SNSChallengeSection />

        <section id="service-area" className="py-24 bg-gray-50 luxury-grid-bg-fine">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="luxury-heading">対応エリア</h2>
              <p className="text-lg text-gray-600 mt-4">
                愛知県を中心に、高品質な壁掛けテレビ施工サービスを提供しています
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm luxury-grid-bg-fine">
                <h3 className="text-xl font-bold mb-4 text-primary">主要対応エリア</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• 名古屋市全区</p>
                  <p>• 豊田市、岡崎市、一宮市</p>
                  <p>• 春日井市、豊橋市、安城市</p>
                  <p>• 西尾市、刈谷市、小牧市</p>
                  <p>• 稲沢市、東海市、大府市</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm luxury-grid-bg-fine">
                <h3 className="text-xl font-bold mb-4 text-primary">その他対応可能エリア</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• 愛知県内全域</p>
                  <p>• 岐阜県南部</p>
                  <p>• 三重県北部</p>
                  <p className="text-sm text-gray-500 mt-4">
                    ※ エリア外でもご相談ください。出張費が発生する場合があります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TV Mount Brackets Section */}
        <TVMountBrackets />

        {/* Installation Examples */}
        <section id="installation-examples" className="py-24 luxury-grid-bg-fine">
          <div className="container px-4 md:px-6">
            <h2 className="luxury-heading text-center mb-12">施工事例</h2>
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

        {/* Installation Process Gallery - 動画の代わりに画像ギャラリー */}
        <InstallationProcessGallery />

        {/* Application Flow */}
        <ApplicationFlow />

        {/* キャンペーンセクションを追加（パッケージプランの前に） */}
        <CampaignSection />

        {/* パッケージプラン - Added subtle grid background */}
        <section id="package-plans" className="py-24 luxury-grid-bg-fine">
          <div className="container px-4 md:px-6">
            <h2 className="luxury-heading text-center mb-12">パッケージプラン</h2>

            <div className="flex justify-center mb-8">
              <PricingTablePopup />
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
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
                    { size: "40インチまで", price: "33,000円" },
                    { size: "41-49インチ", price: "44,000円" },
                    { size: "50-59インチ", price: "55,000円" },
                    { size: "60-69インチ", price: "66,000円" },
                    { size: "70-79インチ", price: "88,000円" },
                    { size: "80-89インチ", price: "110,000円" },
                    { size: "90-99インチ", price: "165,000円" },
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
                <Card key={index} className={`overflow-hidden ${plan.highlighted ? "border-primary border-2" : ""}`}>
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
                      <h3 className="luxury-subheading">{plan.name}プラン</h3>
                      {plan.highlighted && <Badge className="bg-primary">おすすめ</Badge>}
                    </div>
                    {plan.isDetailedPrice && (
                      <div className="mb-4">
                        {plan.isOptionSelector ? (
                          <OptionPlanSelector />
                        ) : (
                          <StarterPlanSelector
                            sizeOptions={plan.sizeOptions?.map((option) => ({
                              ...option,
                              priceValue:
                                option.price !== "応相談" ? Number.parseInt(option.price.replace(/[^0-9]/g, "")) : 0,
                            }))}
                          />
                        )}
                      </div>
                    )}
                    {!plan.isDetailedPrice && (
                      <>
                        <p className="text-2xl font-bold mb-4">{plan.price}</p>
                        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                      </>
                    )}
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {plan.options.map((option, i) => (
                          <li key={i} className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-accent" />
                            {option}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                      <p className="text-sm text-primary font-semibold">※ 全プラン3年間無料保証付き</p>
                      <button
                        onClick={() =>
                          handleQuoteRequest(
                            plan.name,
                            `${plan.name}プランの見積もりを希望します。\n\n含まれるサービス:\n${plan.options.map((option) => `・${option}`).join("\n")}\n\n${plan.description}`,
                          )
                        }
                        className="block w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-center transition-colors"
                      >
                        見積もりを依頼する
                      </button>
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

        {/* Warranty Banner - 3年保証の詳細 */}
        <WarrantyBanner />

        {/* Warranty Slider - Added subtle grid background */}
        <section className="py-24 bg-gray-50 luxury-grid-bg-fine">
          <div className="container px-4 md:px-6">
            <h2 className="luxury-heading text-center mb-12">安心の返金対応と保証制度</h2>
            <WarrantySlider />
          </div>
        </section>

        {/* Contact Form Section - Updated to use primary color */}
        <section id="contact-form" className="py-24 bg-primary">
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

        {/* Company Info Section */}
        <section id="company-info">
          <CompanyInfo />
        </section>
      </main>
      <SiteFooter />
      <RoomSimulatorIcon />
    </div>
  )
}

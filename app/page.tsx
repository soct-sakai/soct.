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
import { CampaignSection } from "@/components/campaign-section"
import { SiteFooter } from "@/components/site-footer"
import { ApplicationFlow } from "@/components/application-flow"
import { IntroductionSection } from "@/components/introduction-section"
import { CustomerReasons } from "@/components/customer-reasons"
import { TVMountBrackets } from "@/components/tv-mount-brackets"
import { WarrantyBanner } from "@/components/warranty-banner"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { ScrollLink } from "@/components/scroll-link"
import Image from "next/image"

const RoomSimulatorIcon = () => {
  const emailTemplate = `【お客様情報】
✅現地調査(見積)第1希望日：
　　月　　　日(　　)　　　　：　
✅現地調査(見積)第2希望日：
　　月　　　日(　　)　　　　：　
✅現地調査(見積)第3希望日：
　　月　　　日(　　)　　　　：　

※現調はなくてもおおよその見積料金は算出可能です。
施工当日に再度ご説明させて頂き、プラスの追加工事が
合った場合に料金が上乗せとなります。もちろん事前に
確認をさせていただきますのでご安心くださいませ。

✅施工希望日：
　　月　　　日(　　)　　　　：　

✅お名前：　　　　　　様
✅お電話番号：
✅住所(設置場所)：
✅テレビのメーカー：
✅テレビのインチサイズ：
✅ 設置したい壁の全体画像とアップの画像：
✅ 電源がある場所の画像（ここから電源を取る予定の場所）：

【設置に関する確認事項】
✅ 弊社に対して、どこまでを依頼したいかの内容
　①金具の用意
　お客様　　　弊社

　②金具の種類
　壁固定式　　スイングモーション式

　③下地補強の有無　
　ある　　　　なし

　④下地補強無い場合、補強を
　したい　　　しない
　(しない場合、テレビのサイズによっては不可となります)

　⑤隠ぺい配線隠しのダクト作成(壁内隠ぺい配線工事)
　したい　　　しない`

  const createMailtoLink = () => {
    const subject = encodeURIComponent("壁掛けテレビ設置のご相談")
    const body = encodeURIComponent(emailTemplate)
    return `mailto:kabekaketv@soct.jp.net?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* スマホ用固定フッターCTA - リッチメニュー形式 */}
      <nav className="soct-fixed-cta md:hidden" role="navigation" aria-label="主要アクション">
        <a className="cta-btn phone" href="tel:0524332799" aria-label="電話で相談">
          <span className="ico">📞</span>
          <span className="label">電話相談</span>
        </a>
        <a className="cta-btn email" href={createMailtoLink()} aria-label="メールで相談">
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
            <a href={createMailtoLink()} className="group">
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

        {/* 1. 株式会社速人の代表取締役 坂井より */}
        <CEOMessage />

        {/* 2. なぜ大型テレビは専門業者が必要なのか */}
        <LargeTVSpecialistSection />

        {/* 3. ソクトがお客様に選ばれる9つの理由 */}
        <section className="py-12 bg-gray-50 luxury-grid-bg-fine">
          <div className="container px-4 md:px-6">
            <CustomerReasons />
          </div>
        </section>

        {/* Customer Reviews - CustomerReasonsの直後に移動、新しいギャラリー形式 */}
        <section className="py-12 luxury-grid-bg">
          <div className="container px-4 md:px-6">
            <CustomerReviewsGallery />
          </div>
        </section>

        {/* 4. 🔧 施工プロセス */}
        <InstallationProcessGallery />

        {/* 5. 施工事例　施工 Before → After */}
        <section id="installation-examples" className="py-24 luxury-grid-bg-fine">
          <div className="container px-4 md:px-6">
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

        <SNSChallengeSection />

        <section id="introduction">
          <IntroductionSection />
        </section>

        {/* キャンペーンセクションを追加（パッケージプランの前に） */}
        <CampaignSection />

        {/* TV Mount Brackets Section */}
        <TVMountBrackets />

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
                  name: "スタータープラン",
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
                  name: "プラチナプラン",
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
                  name: "ダイヤモンドプラン",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-NyXWhf5lKMeYeH058g9sl1I7iNERNa.jpeg",
                  options: ["壁掛けテレビ施工", "壁固定式金具", "壁内隠ぺい配線", "アクセントクロス貼り換え"],
                  price: "213,800円〜",
                  description:
                    "インチサイズ料金 + 金具（19,800円）+ 隠ぺい配線（22,000円）+ アクセントクロス（150,000円〜）",
                },
                {
                  name: "プレミアムプラン",
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
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{plan.name}</h3>
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

        {/* Application Flow */}
        <ApplicationFlow />

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

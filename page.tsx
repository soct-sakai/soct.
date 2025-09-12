"use client"

import { SiteHeader } from "@/components/site-header"
import { HeroCarousel } from "@/components/hero-carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Image from "next/image"
import { ServiceArea } from "@/components/service-area"
import { ReviewTable } from "@/components/review-table"
import { CompanyComparison } from "@/components/company-comparison"
import { Instagram, Facebook, Linkedin, Link } from "lucide-react"
import { ScrollLink } from "@/components/scroll-link"
import { ServiceDetails } from "@/components/service-details"
import { TrustBadges } from "@/components/trust-badges"
import { CustomerReasons } from "@/components/customer-reasons"
import { Button } from "@/components/ui/button"
import { CustomizationOptions } from "@/components/customization-options"
import { CustomerBenefits } from "@/components/customer-benefits"
import { CompanyInfo } from "@/components/company-info"
import ContactForm from "@/components/contact-form" // Import ContactForm component

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
        <CompanyInfo />

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

        <section className="py-24">
          <div className="container px-4 md:px-6">
            <ServiceArea />
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
            </div>
            <p className="text-center mt-8 text-sm text-gray-600">
              ※ 価格は目安です。実際の費用は現地調査後に正確に算出いたします。TV
              サイズや追加サービスにより変動する場合があります。
            </p>
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

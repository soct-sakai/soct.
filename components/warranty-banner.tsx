"use client"

import { Shield, ExternalLink, CheckCircle, Clock, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WarrantyBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container px-4 md:px-6">
        {/* Comprehensive Pricing Section */}
        <Card className="overflow-hidden border-2 border-orange-200 shadow-xl mb-8">
          <CardContent className="p-0">
            <div className="text-white p-4 md:p-6 bg-orange-600">
              <div className="flex items-center justify-center gap-3 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 md:h-10 md:w-10 text-white"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="6" x2="12" y2="10" />
                  <line x1="12" y1="14" x2="12" y2="18" />
                </svg>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">
                  パッケージプラン料金表
                </h2>
              </div>
              <p className="text-center text-lg md:text-xl font-semibold text-white">セットメニュー価格早見表</p>
            </div>

            <div className="p-6 md:p-8">
              {/* Basic Package Information */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 md:p-6 mb-8">
                <h3 className="font-bold text-xl mb-4 text-blue-800">基本料金パッケージ</h3>
                <p className="text-sm text-gray-700 mb-3">すべてのプランに含まれるもの：</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">取付工事一式</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">3年保証</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">地震落下時の再施工保証</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">配線まとめ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Starter Package */}
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4 text-orange-800">スターターパッケージプラン</h3>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 md:p-6">
                  <h4 className="font-bold text-lg mb-4">インチサイズ別料金：</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-center">
                        <p className="font-bold text-lg">40インチまで</p>
                        <p className="text-2xl font-bold text-orange-600">33,000円</p>
                        <p className="text-sm text-gray-600">1台</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-center">
                        <p className="font-bold text-lg">41-49インチ</p>
                        <p className="text-2xl font-bold text-orange-600">44,000円</p>
                        <p className="text-sm text-gray-600">1台</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-center">
                        <p className="font-bold text-lg">50-59インチ</p>
                        <p className="text-2xl font-bold text-orange-600">55,000円</p>
                        <p className="text-sm text-gray-600">1台</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-center">
                        <p className="font-bold text-lg">60-69インチ</p>
                        <p className="text-2xl font-bold text-orange-600">66,000円</p>
                        <p className="text-sm text-gray-600">1台</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-center">
                        <p className="font-bold text-lg">70-79インチ</p>
                        <p className="text-2xl font-bold text-orange-600">77,000円</p>
                        <p className="text-sm text-gray-600">1台</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-center">
                        <p className="font-bold text-lg">80-89インチ</p>
                        <p className="text-2xl font-bold text-orange-600">110,000円</p>
                        <p className="text-sm text-gray-600">1台</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-center">
                        <p className="font-bold text-lg">90-99インチ</p>
                        <p className="text-2xl font-bold text-orange-600">165,000円</p>
                        <p className="text-sm text-gray-600">1台</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-center">
                        <p className="font-bold text-lg">100インチ以上</p>
                        <p className="text-xl font-bold text-orange-600">応相談</p>
                        <p className="text-sm text-gray-600">1台</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Package Plans */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-lg p-6">
                  <div className="text-center">
                    <h4 className="font-bold text-xl mb-2 text-yellow-800">ダイヤモンドプラン</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      インチサイズ料金 + 金具 + 隠ぺい配線 + アクセントクロス
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>壁掛けテレビ施工</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>壁固定式金具</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>壁内隠ぺい配線</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>アクセントクロス貼り換え</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-4">ご担当にお問い合わせください</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-lg p-6">
                  <div className="text-center">
                    <h4 className="font-bold text-xl mb-2 text-gray-800">プラチナプラン</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      インチサイズ料金 + 金具 + 隠ぺい配線 + 下地補強 + エコカラット
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>壁掛けテレビ施工</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>壁固定式金具</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>壁内隠ぺい配線</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>下地補強設置工事</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>エコカラットタイル壁</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-4">ご担当にお問い合わせください</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-6">
                  <div className="text-center">
                    <h4 className="font-bold text-xl mb-2 text-purple-800">プレミアムプラン</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      インチサイズ料金 + 金具 + 隠ぺい配線 + 下地補強 + アクセントウォール + リブパネル
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>壁掛けテレビ施工</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>壁固定式金具</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>壁内隠ぺい配線</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>下地補強設置工事</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>アクセントウォール</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>リブパネル</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-4">ご担当にお問い合わせください</p>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 md:p-6 mb-6">
                <div className="text-center">
                  <p className="text-sm text-red-800 font-semibold mb-2">
                    ※ 価格は目安です。実際の費用は現地調査後に正確に算出いたします。
                  </p>
                  <p className="text-xs text-red-700">TVサイズや追加サービスにより変動する場合があります。</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="text-center space-y-4">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mr-4"
                  style={{ backgroundColor: "#ea580c", color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>見積もりを依頼する</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  詳細オプションを見る
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods Section */}
        <Card className="overflow-hidden border-2 border-blue-200 shadow-xl mb-8">
          <CardContent className="p-0">
            <div className="text-white p-4 md:p-6" style={{ backgroundColor: "#1d4ed8", color: "#ffffff" }}>
              <div className="flex items-center justify-center gap-3 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 md:h-10 md:w-10 text-white"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">
                  株式会社速人 決済方法につきまして
                </h2>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">現金決済</h3>
                      <p className="text-sm text-gray-600">施工開始前の決済となります</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">銀行振込</h3>
                      <p className="text-sm text-gray-600">施工開始前の決済となります</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">クレジットカード決済</h3>
                      <p className="text-sm text-gray-600 mb-2">カードの与信枠に問題が無ければ分割払いも可能です</p>
                      <p className="text-xs text-blue-600 font-semibold">
                        リフォームが含まれる高額工事の場合は、分割払いが人気です
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 md:p-6">
                <div className="text-center">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>※複数回のローン払い希望の方は、要相談くださいませ。</strong>
                  </p>
                  <p className="text-xs text-gray-600">
                    お支払い方法についてご不明な点がございましたら、お気軽にお問い合わせください。
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warranty Section */}
        <Card className="overflow-hidden border-2 border-green-200 shadow-xl">
          <CardContent className="p-0">
            <div className="text-white p-4 md:p-6" style={{ backgroundColor: "#059669", color: "#ffffff" }}>
              <div className="flex items-center justify-center gap-3 mb-2">
                <Shield className="h-8 w-8 md:h-10 md:w-10 text-white" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">安心の3年保証</h2>
                <Shield className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <p className="text-center text-lg md:text-xl font-semibold text-white">
                施工後も長期間サポート！業界最高水準の保証制度
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">施工品質保証</h3>
                  <p className="text-sm text-gray-600">
                    施工不良による問題は
                    <br />
                    <span className="font-bold text-green-600">完全無料で対応</span>
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">迅速対応</h3>
                  <p className="text-sm text-gray-600">
                    保証期間中のトラブルは
                    <br />
                    <span className="font-bold text-blue-600">最短当日対応</span>
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">安心サポート</h3>
                  <p className="text-sm text-gray-600">
                    専門スタッフによる
                    <br />
                    <span className="font-bold text-purple-600">充実のアフターケア</span>
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 md:p-6 mb-6">
                <h4 className="font-bold text-lg md:text-xl mb-3 text-center text-yellow-800">🛡️ 3年保証の詳細内容</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0 mt-1">✓</span>
                    <span>
                      <strong>金具の不具合・破損</strong> → 無料交換・修理
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0 mt-1">✓</span>
                    <span>
                      <strong>壁掛け部分のゆるみ・ガタつき</strong> → 無料点検・調整
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0 mt-1">✓</span>
                    <span>
                      <strong>配線トラブル</strong> → 無料診断・修理
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0 mt-1">✓</span>
                    <span>
                      <strong>地震による落下</strong> → 再施工保証付き
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="https://soct.website/%ef%bc%93%e5%b9%b4%e4%bf%9d%e8%a8%bc%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    style={{ backgroundColor: "#1d4ed8", color: "#ffffff" }}
                  >
                    <Shield className="mr-2 h-5 w-5 text-white" />
                    <span style={{ color: "#ffffff" }}>3年保証の詳細を見る</span>
                    <ExternalLink className="ml-2 h-5 w-5 text-white" />
                  </Button>
                </a>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">
                    📞 保証に関するお問い合わせ：<strong className="text-blue-600">052-433-2799</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    📧 メール：<strong className="text-blue-600">kabekaketv@soct.jp.net</strong>
                  </p>
                  <p className="text-xs text-gray-500">※ 営業時間：平日 9:00-18:00 / LINE登録なら24時間受付可能</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

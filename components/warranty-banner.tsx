"use client"

import { Shield, ExternalLink, CheckCircle, Clock, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WarrantyBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <Card className="overflow-hidden border-2 border-blue-200 shadow-xl mb-8">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 md:p-6">
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
                  className="h-8 w-8 md:h-10 md:w-10"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
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

        <Card className="overflow-hidden border-2 border-green-200 shadow-xl">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 md:p-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Shield className="h-8 w-8 md:h-10 md:w-10" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">安心の3年保証</h2>
                <Shield className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <p className="text-center text-lg md:text-xl font-semibold">
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
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    3年保証の詳細を見る
                    <ExternalLink className="ml-2 h-5 w-5" />
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

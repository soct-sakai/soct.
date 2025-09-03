"use client"

import { Shield, ExternalLink, CheckCircle, Clock, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WarrantyBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container px-4 md:px-6">
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

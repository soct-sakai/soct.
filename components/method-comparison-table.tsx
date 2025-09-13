"use client"

import { Card, CardContent } from "@/components/ui/card"

export function MethodComparisonTable() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            下地補強は"前出し"と"壁内"。
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">仕上がりもリスクも、まったく別です。</p>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left p-4 font-semibold text-gray-900 min-w-[120px]">方式</th>
                      <th className="text-left p-4 font-semibold text-gray-900 min-w-[200px]">仕上がり</th>
                      <th className="text-left p-4 font-semibold text-gray-900 min-w-[80px]">強度</th>
                      <th className="text-left p-4 font-semibold text-gray-900 min-w-[80px]">工期</th>
                      <th className="text-left p-4 font-semibold text-gray-900 min-w-[150px]">概算</th>
                      <th className="text-left p-4 font-semibold text-gray-900 min-w-[200px]">注意</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 前出し簡易補強 */}
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <div className="font-semibold text-gray-900">前出し簡易補強</div>
                      </td>
                      <td className="p-4">
                        <div className="text-gray-700">
                          <div className="font-medium text-orange-600 mb-1">＋12/18/24/36mm 前に出る</div>
                          <div className="text-sm text-gray-600">撤去痕△</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-bold">
                            ○
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">短</span>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold text-blue-600">¥16,500〜</div>
                        <div className="font-semibold text-blue-600">¥33,000</div>
                      </td>
                      <td className="p-4">
                        <div className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-sm">
                          <div className="font-medium">大画面・有機ELは非推奨</div>
                        </div>
                      </td>
                    </tr>

                    {/* 壁内下地補強 */}
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <div className="font-semibold text-gray-900">壁内下地補強</div>
                      </td>
                      <td className="p-4">
                        <div className="text-gray-700">
                          <div className="font-medium text-green-600 mb-1">平面のまま（美観◎）</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                            ◎
                          </span>
                          <span className="ml-2 text-xs text-gray-500">（厚みで調整）</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-medium">中</span>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold text-blue-600">¥110,000〜</div>
                        <div className="font-semibold text-blue-600">¥330,000</div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-2">
                          <div className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded text-sm">開口復旧あり</div>
                          <div className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm">将来拡張◎</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-gray-50 border-t">
                <p className="text-sm text-gray-600 text-center">※価格は概算。現地確認後に確定見積。</p>
              </div>
            </CardContent>
          </Card>

          {/* Additional explanation cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">前出し簡易補強とは</h3>
                <p className="text-gray-600 leading-relaxed">
                  低コスト・短工期で強度付与。テレビが＋12〜36mm前に出る／撤去痕△。大型・有機ELは非推奨。
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">壁内下地補強とは</h3>
                <p className="text-gray-600 leading-relaxed">
                  クロス/石膏を開口→内部に合板組込み→復旧。平面のまま。隠蔽配線・意匠壁と相性◎。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

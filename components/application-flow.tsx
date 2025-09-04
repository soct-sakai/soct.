"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, ClipboardCheck, CreditCard, WrenchIcon, MessageSquare, Upload, Copy, Check, Mail } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"

export function ApplicationFlow() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [copyText] = useState(`【お客様情報】
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
　したい　　　しない`)
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("コピーに失敗しました:", err)
    }
  }

  const sendToLine = () => {
    const lineUrl = `https://lin.ee/4pVYnlI`
    window.open(lineUrl, "_blank")
  }

  const sendImageByEmail = () => {
    if (uploadedImage) {
      const subject = encodeURIComponent("壁掛けテレビ設置 - 壁画像添付")
      const body = encodeURIComponent(`壁掛けテレビ設置のご相談です。

壁の画像を添付いたします。
お見積もりをお願いいたします。

${copyText}`)
      const mailtoUrl = `mailto:kabekaketv@soct.jp.net?subject=${subject}&body=${body}`
      window.location.href = mailtoUrl
    }
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">依頼までのシンプル4ステップ</h2>
          <p className="text-lg text-gray-600">お問い合わせから作業完了まで、スピーディーに対応</p>
          <p className="text-lg font-semibold text-blue-600 mt-4">
            金具用意なら、最短翌日施工可能！
            <br />
            金具も壁固定式、スイングモーション式どちらも在庫完備
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">①申し込み</h3>
                <p className="text-gray-600">メール、電話、LINE、Webから</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">②見積書</h3>
                <p className="text-gray-600">現調または写真で確認</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">③入金</h3>
                <p className="text-gray-600">施工日決定</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <WrenchIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">④施工</h3>
                <p className="text-gray-600">これが3日後でも2か月後でも内容は同様です</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <MessageSquare className="w-6 h-6" />
              <p className="font-semibold">現調でなく、LINEで画像のやり取りなら更にスムーズに！</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* 壁画像アップロード機能 */}
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-dashed border-gray-300 hover:border-green-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {uploadedImage ? (
                      <div className="relative">
                        <Image
                          src={uploadedImage || "/placeholder.svg"}
                          alt="アップロードされた壁画像"
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                          <Check className="w-3 h-3" />
                        </div>
                      </div>
                    ) : (
                      <Upload className="w-8 h-8 text-gray-400" />
                    )}
                    <span className="text-xs text-gray-600 font-medium">
                      {uploadedImage ? "画像を変更" : "壁画像をアップロード"}
                    </span>
                  </button>
                </div>
                {uploadedImage && (
                  <div className="flex gap-2">
                    <button
                      onClick={sendToLine}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                    >
                      LINEで送信
                    </button>
                    <button
                      onClick={sendImageByEmail}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      メールで送信
                    </button>
                  </div>
                )}
              </div>

              {/* QRコード */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://lin.ee/4pVYnlI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S_gainfriends_2dbarcodes_GW-L8z3DQmMuv2FPMxsYC4NueKmYV34HX.png"
                    alt="LINE友だち追加QRコード"
                    width={120}
                    height={120}
                    className="rounded-lg shadow-md"
                  />
                </a>
                <p className="text-sm text-blue-600 font-medium">QRコードでLINE友だち追加</p>
              </div>

              {/* コピーボード機能 */}
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 max-w-xs">
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">問い合わせテンプレート</h4>
                    <div className="bg-gray-50 p-2 rounded text-xs text-gray-600 max-h-20 overflow-y-auto">
                      {copyText.split("\n").slice(0, 5).join("\n")}...
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full justify-center ${
                      copied ? "bg-green-500 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        コピー完了！
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        テンプレートをコピー
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  詳細な問い合わせ項目を
                  <br />
                  LINEに貼り付けて送信！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

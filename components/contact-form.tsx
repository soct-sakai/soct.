"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const packagePlans = [
  { id: "tcl75", label: "TCL 75インチ施工セットプラン" },
  { id: "tcl85", label: "TCL 85インチ施工セットプラン" },
  { id: "starter", label: "スタータープラン" },
  { id: "diamond", label: "ダイヤモンドプラン" },
  { id: "platinum", label: "プラチナプラン" },
  { id: "premium", label: "プレミアムプラン" },
  { id: "option", label: "オプションプラン" },
  { id: "consultation", label: "今回は相談" },
]

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    postalCode: "",
    address: "",
    phone: "",
    email: "",
    message: "",
    preferredContact: "",
    packagePlan: ["starter"],
  })

  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 基本的なバリデーション
    if (!formData.name || !formData.email || !formData.phone) {
      alert("必須項目を入力してください")
      return
    }

    const packagePlanLabels = formData.packagePlan
      .map((id) => packagePlans.find((plan) => plan.id === id)?.label)
      .join(", ")

    const subject = encodeURIComponent("壁掛けテレビ施工のお問い合わせ")
    const body = encodeURIComponent(`
名前: ${formData.name}
郵便番号: ${formData.postalCode}
住所: ${formData.address}
電話番号: ${formData.phone}
メールアドレス: ${formData.email}
希望する連絡の手段: ${formData.preferredContact}
希望パッケージプラン: ${packagePlanLabels}
その他ご要望: ${formData.message || "なし"}
    `)

    // メーラーを開く
    window.location.href = `mailto:kabekaketv@soct.jp.net?subject=${subject}&body=${body}`

    alert("メーラーが開きます。送信を完了してください。")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (planId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      packagePlan: checked ? [...prev.packagePlan, planId] : prev.packagePlan.filter((id) => id !== planId),
    }))
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
        <p className="text-gray-600">壁掛けテレビの施工やご相談について、お気軽にお問い合わせください。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            氏名 <span className="text-red-500">*</span>
          </label>
          <Input
            required
            placeholder="山田 太郎"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr,2fr]">
          <div>
            <label className="block text-sm font-medium mb-2">
              郵便番号 <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="1234567"
              value={formData.postalCode}
              onChange={(e) => handleInputChange("postalCode", e.target.value.replace(/[^0-9]/g, ""))}
              maxLength={7}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              住所 <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="東京都千代田区..."
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-2">
              電話番号 <span className="text-red-500">*</span>
            </label>
            <Input
              required
              placeholder="090-1234-5678"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <Input
              required
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            希望する連絡の手段 <span className="text-red-500">*</span>
          </label>
          <Select onValueChange={(value) => handleInputChange("preferredContact", value)}>
            <SelectTrigger>
              <SelectValue placeholder="連絡手段を選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="line">LINE</SelectItem>
              <SelectItem value="email">メール</SelectItem>
              <SelectItem value="sms">SMS (ショートメッセージ)</SelectItem>
              <SelectItem value="call">通話での連絡(電話やZOOMなど)</SelectItem>
              <SelectItem value="chat">チャット</SelectItem>
              <SelectItem value="any">どの連絡方法でも可</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">
            希望パッケージプラン <span className="text-red-500">*</span>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            {packagePlans.map((plan) => (
              <div key={plan.id} className="flex items-center space-x-2">
                <Checkbox
                  id={plan.id}
                  checked={formData.packagePlan.includes(plan.id)}
                  onCheckedChange={(checked) => handleCheckboxChange(plan.id, checked as boolean)}
                />
                <label htmlFor={plan.id} className="text-sm font-medium">
                  {plan.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">その他ご要望</label>
          <Textarea
            placeholder="ご要望やご質問がございましたらご記入ください。"
            className="min-h-[200px]"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          メールで送信する
        </Button>

        <div className="text-center text-sm text-gray-500">
          <p>送信ボタンを押すとメーラーが起動します。</p>
          <p>
            メーラーが起動しない場合は、直接{" "}
            <a href="mailto:kabekaketv@soct.jp.net" className="text-blue-600 hover:underline">
              kabekaketv@soct.jp.net
            </a>{" "}
            までご連絡ください。
          </p>
        </div>
      </form>
    </div>
  )
}

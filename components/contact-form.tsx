"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { type ContactFormData, submitContactForm } from "@/app/actions/contact"
import { Checkbox } from "@/components/ui/checkbox"
import { usePlanSelection } from "@/context/plan-selection-context"

const packagePlans = [
  { id: "tcl75", label: "TCL 75インチ施工セットプラン" },
  { id: "tcl85", label: "TCL 85インチ施工セットプラン" },
  { id: "starter", label: "スタータープラン" },
  { id: "diamond", label: "ダイヤモンドプラン" },
  { id: "platinum", label: "プラチナプラン" },
  { id: "premium", label: "プレミアムプラン" },
  { id: "option", label: "オプションプラン" },
  { id: "consultation", label: "今回は相談" },
] as const

const contactFormSchema = z.object({
  name: z.string().min(1, "氏名を入力してください"),
  postalCode: z.string().regex(/^\d{7}$/, "正しい郵便番号を入力してください"),
  address: z.string().min(1, "住所を入力してください"),
  phone: z.string().regex(/^[0-9-]{10,}$/, "正しい電話番号を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  message: z.string().optional(),
  preferredContact: z.enum(["line", "email", "sms", "call", "chat", "any"], {
    required_error: "希望する連絡の手段を選択してください",
  }),
  packagePlan: z
    .array(z.enum(["tcl75", "tcl85", "starter", "diamond", "platinum", "premium", "option", "consultation"]))
    .optional(),
})

export function ContactForm() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [postalCodeLookupStatus, setPostalCodeLookupStatus] = React.useState<"idle" | "loading" | "error">("idle")

  // Context から選択内容を取得
  const { selectedSizes, selectedMount, selectedOptions, totalPrice, optionsTotalPrice } = usePlanSelection()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      postalCode: "",
      address: "",
      phone: "",
      email: "",
      message: "",
      preferredContact: "",
      packagePlan: ["starter"], // スタータープランを初期選択
    },
  })

  // 選択内容をメッセージフィールドに反映
  React.useEffect(() => {
    // スターター・オプションプランの選択内容があるか確認
    if (selectedSizes.length > 0 || selectedMount || selectedOptions.length > 0) {
      let message = ""

      // スタータープランの選択内容
      if (selectedSizes.length > 0 || selectedMount) {
        message += "【スタータープランの選択内容】\n"

        if (selectedSizes.length > 0) {
          message += "\n■ 選択したサイズ:\n"
          selectedSizes.forEach((size) => {
            message += `・${size.size}: ${size.price} × ${size.quantity}台\n`
          })
        }

        if (selectedMount) {
          message += "\n■ 選択した金具:\n"
          message += `・${selectedMount.name}: ${selectedMount.price}\n`
        }

        message += `\n■ 合計金額: ${totalPrice.toLocaleString()}円\n`
        message += "\n※上記は概算です。正確な金額は現地調査後に決定されます。\n"
      }

      // オプションプランの選択内容
      if (selectedOptions.length > 0) {
        if (message) message += "\n\n"
        message += "【オプションプランの選択内容】\n"

        message += "\n■ 選択したオプション:\n"
        selectedOptions.forEach((option) => {
          message += `・${option.name}: ${option.price} × ${option.quantity}${option.quantity > 1 ? "個/本" : ""}\n`
        })

        message += `\n■ オプション合計金額: ${optionsTotalPrice.toLocaleString()}円\n`
        message += "\n※上記は概算です。正確な金額は現地調査後に決定されます。\n"
      }

      // 総合計金額
      if ((totalPrice > 0 || optionsTotalPrice > 0) && (selectedSizes.length > 0 || selectedOptions.length > 0)) {
        message += `\n■ 総合計金額: ${(totalPrice + optionsTotalPrice).toLocaleString()}円\n`
        message += "※上記は概算です。正確な金額は現地調査後に決定されます。\n"
      }

      // 既存のメッセージがあれば追加
      const existingMessage = form.getValues("message") || ""
      const userMessage = existingMessage
        .replace(/【スタータープランの選択内容】[\s\S]*?(?=【その他ご要望】|$)/, "")
        .replace(/【オプションプランの選択内容】[\s\S]*?(?=【その他ご要望】|$)/, "")
        .replace(/【その他ご要望】\s*/, "")
        .trim()

      const newMessage = userMessage ? message + "\n\n【その他ご要望】\n" + userMessage : message

      form.setValue("message", newMessage)
    }
  }, [selectedSizes, selectedMount, selectedOptions, totalPrice, optionsTotalPrice, form])

  const lookupAddress = async (postalCode: string) => {
    if (postalCode.length !== 7) return

    setPostalCodeLookupStatus("loading")
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`)
      const data = await response.json()

      if (data.results?.[0]) {
        const { address1, address2, address3 } = data.results[0]
        const fullAddress = `${address1}${address2}${address3}`
        form.setValue("address", fullAddress)
        setPostalCodeLookupStatus("idle")
      } else {
        setPostalCodeLookupStatus("error")
      }
    } catch (error) {
      setPostalCodeLookupStatus("error")
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      const result = await submitContactForm(data)
      if (result.success) {
        toast({
          title: "送信完了",
          description: "担当者からの返信をお待ちください。" + result.message,
          duration: 5000,
        })
        form.reset()

        // メール送信のバックアップとして、直接メーラーを開く
        const packagePlanLabels = data.packagePlan
          .map((id) => packagePlans.find((plan) => plan.id === id)?.label)
          .join(", ")
        const subject = encodeURIComponent("壁掛けテレビ施工のお問い合わせ")
        const body = encodeURIComponent(`
名前: ${data.name}
郵便番号: ${data.postalCode}
住所: ${data.address}
電話番号: ${data.phone}
メールアドレス: ${data.email}
希望する連絡の手段: ${data.preferredContact}
希望パッケージプラン: ${packagePlanLabels}
その他ご要望: ${data.message || "なし"}
      `)

        // 少し遅延させてからメーラーを開く
        setTimeout(() => {
          window.location.href = `mailto:kabekaketv@soct.jp.net?subject=${subject}&body=${body}`
        }, 1000)
      } else {
        toast({
          title: "エラー",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "エラー",
        description: "予期せぬエラーが発生しました。直接 kabekaketv@soct.jp.net までご連絡ください。",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
        <p className="text-gray-600">
          壁掛けテレビの施工やご相談について、お気軽にお問い合わせください。
          担当者より折り返しご連絡させていただきます。
        </p>
        <p className="text-sm text-gray-500 mt-2">
          ※ お問い合わせは{" "}
          <a href="mailto:kabekaketv@soct.jp.net" className="text-blue-500 hover:underline">
            kabekaketv@soct.jp.net
          </a>{" "}
          でも受け付けております。
        </p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                氏名 <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="山田 太郎" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 sm:grid-cols-[1fr,2fr]">
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  郵便番号 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="1234567"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, "")
                        field.onChange(value)
                        if (value.length === 7) {
                          lookupAddress(value)
                        }
                      }}
                      maxLength={7}
                    />
                    {postalCodeLookupStatus === "loading" && (
                      <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin" />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  住所 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="東京都千代田区..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  電話番号 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="090-1234-5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  メールアドレス <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="preferredContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                希望する連絡の手段 <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
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
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="packagePlan"
          render={() => (
            <FormItem className="space-y-3">
              <FormLabel>
                希望パッケージプラン <span className="text-red-500">*</span>
              </FormLabel>
              <FormMessage />
              <div className="grid gap-4 sm:grid-cols-2">
                {packagePlans.map((plan) => (
                  <FormField
                    key={plan.id}
                    control={form.control}
                    name="packagePlan"
                    render={({ field }) => {
                      return (
                        <FormItem key={plan.id} className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(plan.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, plan.id])
                                  : field.onChange(field.value?.filter((value) => value !== plan.id))
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{plan.label}</FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>その他ご要望</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="ご要望やご質問がございましたらご記入ください。"
                  className="min-h-[200px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <h4 className="font-semibold text-yellow-800 mb-2">送信前にご確認ください</h4>
            <p className="text-sm text-yellow-700">
              スタータープランとオプションプランの選択内容が正しく反映されているか、メッセージ欄でご確認ください。
              内容に誤りがある場合は、各プランの選択内容を修正してください。
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                const formData = form.getValues()

                // フォームの検証
                if (
                  !formData.name ||
                  !formData.postalCode ||
                  !formData.address ||
                  !formData.phone ||
                  !formData.email ||
                  !formData.preferredContact ||
                  !formData.packagePlan ||
                  formData.packagePlan.length === 0
                ) {
                  toast({
                    title: "入力エラー",
                    description: "必須項目をすべて入力してください。",
                    variant: "destructive",
                  })
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

                // 送信完了メッセージを表示
                toast({
                  title: "送信処理が完了しました",
                  description:
                    "担当者からの返信をお待ちください。メーラーが開かない場合は、直接 kabekaketv@soct.jp.net までご連絡ください。",
                  duration: 5000,
                })
              }}
            >
              メールで送信する
            </Button>
          </div>

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
        </div>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        ※ オプションプランは他のプランと組み合わせて選択できます。
        <br />
        例：スタートプラン × オプションプラン(隠ぺい配線工事)
      </p>
    </Form>
  )
}


"use server"

import { z } from "zod"

const COMPANY_EMAIL = "kabekaketv@soct.jp.net"

const contactFormSchema = z.object({
  name: z.string().min(1, "氏名を入力してください"),
  postalCode: z.string().regex(/^\d{7}$/, "正しい郵便番号を入力してください"),
  address: z.string().min(1, "住所を入力してください"),
  phone: z.string().regex(/^[0-9-]{10,}$/, "正しい電話番号を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  inquiry: z.enum(["consultation", "estimate", "installation", "renovation"], {
    required_error: "お問い合わせ内容を選択してください",
  }),
  message: z.string().optional(),
  packagePlan: z
    .array(z.enum(["starter", "standard", "diamond", "platinum", "premium", "option", "consultation"]))
    .nonempty("希望パッケージプランを選択してください"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    const validatedData = contactFormSchema.parse(formData)

    // Here you would typically send an email to COMPANY_EMAIL
    // For demo purposes, we'll simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "お問い合わせありがとうございます。担当者より折り返しご連絡させていただきます。",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "フォームの入力内容をご確認ください。",
        errors: error.errors,
      }
    }
    return {
      success: false,
      message: "申し訳ありません。エラーが発生しました。時間をおいて再度お試しください。",
    }
  }
}

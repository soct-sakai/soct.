import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./styles/globals.css"
import { PlanSelectionProvider } from "@/context/plan-selection-context"

export const metadata: Metadata = {
  title: "ソクトノカベカケ",
  description: "壁掛けテレビ施工のプロフェッショナル",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Ads タグ */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11435916801" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11435916801');
          `}
        </Script>
      </head>
      <body className="font-meiryo">
        <PlanSelectionProvider>{children}</PlanSelectionProvider>
      </body>
    </html>
  )
}


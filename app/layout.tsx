import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./styles/globals.css"
import { PlanSelectionProvider } from "@/context/plan-selection-context"

export const metadata: Metadata = {
  title: "【名古屋の壁掛けテレビ施工】壁掛けテレビと壁の専門店『ソクトノカベカケ』｜賃貸OK・お見積り無料",
  description:
    "名古屋市を筆頭に愛知岐阜三重静岡県で壁掛けテレビの取付設置工事ならソクトノカベカケへ。賃貸の原状回復や配線隠蔽もお任せください。年間200台以上の実績。まずはお気軽に無料相談を！",
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

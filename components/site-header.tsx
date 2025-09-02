"use client"

import Image from "next/image"
import { Home, Briefcase, Phone, HelpCircle, Menu, Star } from "lucide-react"
import { ScrollLink } from "@/components/scroll-link"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
        <ScrollLink href="#hero" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S150150.jpg-G9VmB0uPIuRAHjnZ3CwsOiZl0BpD4o.jpeg"
            alt="株式会社速人"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold text-base md:text-lg">株式会社速人 『ソクトノカベカケ』</span>
        </ScrollLink>

        {/* モバイル用ハンバーガーメニュー */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <Menu className="h-6 w-6 text-blue-600" />
        </button>

        {/* デスクトップ用メニュー */}
        <div className="hidden md:flex items-center space-x-6">
          <ScrollLink
            href="#hero"
            className="flex flex-col items-center px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Home className="h-5 w-5 text-blue-600" />
            <span className="text-sm mt-1">ホーム</span>
          </ScrollLink>
          <ScrollLink
            href="#services"
            className="flex flex-col items-center px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Briefcase className="h-5 w-5 text-blue-600" />
            <span className="text-sm mt-1">サービス</span>
          </ScrollLink>
          <ScrollLink
            href="#contact-form"
            className="flex flex-col items-center px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-sm mt-1">お問い合わせ</span>
          </ScrollLink>
          <ScrollLink
            href="#support"
            className="flex flex-col items-center px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <HelpCircle className="h-5 w-5 text-blue-600" />
            <span className="text-sm mt-1">サポート</span>
          </ScrollLink>
          <ScrollLink
            href="#company-info"
            className="flex flex-col items-center px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-sm mt-1">口コミ</span>
          </ScrollLink>
        </div>
      </div>

      {/* モバイル用ドロップダウンメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="container px-4 py-2 space-y-1">
            <ScrollLink
              href="#hero"
              className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5 text-blue-600" />
              <span>ホーム</span>
            </ScrollLink>
            <ScrollLink
              href="#services"
              className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase className="h-5 w-5 text-blue-600" />
              <span>サービス</span>
            </ScrollLink>
            <ScrollLink
              href="#contact-form"
              className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-5 w-5 text-blue-600" />
              <span>お問い合わせ</span>
            </ScrollLink>
            <ScrollLink
              href="#support"
              className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <HelpCircle className="h-5 w-5 text-blue-600" />
              <span>サポート</span>
            </ScrollLink>
            <ScrollLink
              href="#company-info"
              className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Star className="h-5 w-5 text-blue-600" />
              <span>口コミ</span>
            </ScrollLink>
          </div>
        </div>
      )}
    </header>
  )
}

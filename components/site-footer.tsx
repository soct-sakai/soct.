"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, LinkIcon, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-8">
          <div>
            <Link
              href="https://soct.website/"
              className="flex items-center space-x-2 mb-4 md:mb-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S150150.jpg-G9VmB0uPIuRAHjnZ3CwsOiZl0BpD4o.jpeg"
                alt="株式会社速人"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-base md:text-lg">ソクトノカベカケ</span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base">プロフェッショナルな壁掛けテレビ施工サービス</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 md:mb-6 text-base md:text-lg">サービス</h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>壁掛けテレビ施工</li>
              <li>金具の提案</li>
              <li>下地補強</li>
              <li>壁内隠ぺい配線工事</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 md:mb-6 text-base md:text-lg">サポート</h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>施工ガイド</li>
              <li>よくある質問</li>
              <li>お問い合わせ</li>
              <li>保証について</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 md:mb-6 text-base md:text-lg">お問い合わせ</h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>kabekaketv@soct.jp.net</li>
              <li>052-433-2799</li>
              <li>営業時間: 平日 9:00-18:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 md:mt-10 pt-8 md:pt-10">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">シェアして特典をゲット！</h3>
            <p className="text-gray-400 text-base md:text-lg mb-5">イイナ！と思ったらシェアしてね c(＞ω＜)ゞ</p>
            <div className="flex justify-center gap-6">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "プロフェッショナルな壁掛けテレビ施工サービス - ソクトノカベカケ",
                )}&url=${encodeURIComponent("https://soct.website/")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Xでシェア"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.instagram.com/share?url=${encodeURIComponent("https://soct.website/")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagramでシェア"
              >
                <Instagram className="h-7 w-7" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://soct.website/")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebookでシェア"
              >
                <Facebook className="h-7 w-7" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://soct.website/")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedInでシェア"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("https://soct.website/")
                }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="URLをコピー"
              >
                <LinkIcon className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 md:mt-10 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; 2024 ソクトノカベカケ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

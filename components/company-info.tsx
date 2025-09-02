import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function CompanyInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-ZK1sY89U692KBIdB7MsKa85cU4z6yJ.jpeg"
                  alt="ソクトの壁掛けテレビ施工サービス - プロの技術者による安心・安全な施工"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">会社概要</h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold">会社名</dt>
                    <dd>株式会社速人</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">所在地</dt>
                    <dd>
                      〒462-0825
                      <br />
                      愛知県名古屋市北区大曽根3丁目10-7
                      <br />
                      リニアビル206号
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">電話番号</dt>
                    <dd>052-433-2799</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">メールアドレス</dt>
                    <dd>
                      <a href="mailto:kabekaketv@soct.jp.net" className="text-blue-600 hover:underline">
                        kabekaketv@soct.jp.net
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">ホームページ</dt>
                    <dd>
                      <a
                        href="https://soct.website/"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://soct.website/
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">事業内容</dt>
                    <dd>壁掛けテレビ施工・スマートホーム設置・リフォーム</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-8 w-full aspect-[16/9] md:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps?q=株式会社速人+愛知県名古屋市北区大曽根3丁目10-7+リニアビル206号&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Google Maps - 株式会社速人の検索結果"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

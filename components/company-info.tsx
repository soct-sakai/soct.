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
                  src="https://sjc.microlink.io/HcAN3t83wNsghCvaBmguonod8ZpYJHvLx8U-QPYEs0CMp7Aoqc1ypgqn9GemRSwKJgGsMIOjXapBh6Ay1K5CcA.jpeg"
                  alt="壁掛けテレビ施工の様子"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.5578433146856!2d136.93385277677445!3d35.19061197280084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600369c8c2c6e801%3A0x91d4fa7712b39c85!2z44CSNDYyLTA4MjUg5oSb55-l55yM5ZCN5Y-k5bGL5biC5YyX5Yy65aSn5pm-5qC35LiJ5LiB55uu77yR77yQ4oiS77yX!5e0!3m2!1sja!2sjp!4v1705232391330!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Google Maps - 株式会社速人の所在地"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


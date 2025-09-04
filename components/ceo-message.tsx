"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function CEOMessage() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <Card className="overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-48 h-48 relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240312_160142.jpg-ZkHAEKjRUt5JrsgijLQFNDIkbwwHqi.jpeg"
                  alt="代表取締役 坂井と娘"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">株式会社速人の代表取締役 坂井より</h2>
              <p className="text-xl text-gray-600 italic">
                ～この社長、人生も仕事も、ちょっと不器用だけど、本気（マジ）です！～
              </p>
            </div>
            <div className={`space-y-4 ${isExpanded ? "" : "max-h-48 overflow-hidden"}`}>
              <div className="space-y-3">
                <p className="text-lg font-medium">皆さま、こんにちは！株式会社速人の坂井です。</p>
                <p>あなたにこのページを見てもらえて、本当に嬉しいです。</p>
              </div>

              <div className="mt-8 space-y-4 border-l-4 border-blue-200 pl-6">
                <p className="font-medium text-gray-800">
                  正直に言って、私の人生、これまでの会社社長とはちょっと違うかもしれません。
                  <br />
                  だって、16歳の時に高校を中途退学。そこから不器用に生きてきた。
                </p>
                <p>就職活動が上手くいかず半年間ニートした時もありました。</p>
                <p>そして色んな仕事をしてきました。</p>
              </div>

              <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-blue-600 mb-4">これまでの歩み</h3>

                <div className="space-y-3">
                  <p>
                    <span className="font-semibold text-blue-500">17歳</span> -
                    まだ若い頃でしたが、新築の家を建てたり、古い家を直したりする職人に。
                  </p>

                  <p>
                    <span className="font-semibold text-blue-500">22歳</span> -
                    ゲームが好きすぎて、ゲームショップの副店長。
                  </p>

                  <p>
                    <span className="font-semibold text-blue-500">25歳</span> -
                    漫画喫茶で店長として、お客さんの顔を見て、接客の楽しさを知りました。
                  </p>

                  <p>
                    <span className="font-semibold text-blue-500">27歳</span> -
                    ネットで物を売る仕事に飛び込んで、企画営業として、どうやったら物が売れるのか、頭をひねる毎日でした。
                  </p>

                  <p>
                    <span className="font-semibold text-blue-500">29歳</span> - 結婚
                  </p>
                  <p>
                    <span className="font-semibold text-blue-500">30歳</span> -
                    一人で軽貨物の運送業を始めました。雨の日も風の日も、荷物を届けて、自分の力で生計を立てる厳しさを知りました。
                  </p>

                  <p>
                    <span className="font-semibold text-blue-500">39歳</span> -
                    ついに「株式会社速人」を立ち上げました。最初から、軽貨物と便利屋。何でも屋の始まりです。
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4 border-l-4 border-pink-200 pl-6 bg-pink-50 p-6 rounded-r-lg">
                <p className="font-medium text-pink-800">
                  <span className="font-semibold text-pink-600">43歳</span>で、私に待望の娘が生まれました。
                </p>
                <p>
                  もう、可愛くて可愛くて、この子のために何でもしてやりたい！
                  <br />
                  そう思った矢先、娘にADHDの特性が見られることが分かったんです。
                </p>
                <p>
                  そして、個人事業主時代に、周りから
                  <br />
                  <strong className="text-pink-700">「坂井さんってASDっぽいよね」</strong>
                  <br />
                  って言われたことがあって。
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <p>そこから自分のこと、娘のこと、そして「発達障害」というものについて、がむしゃらに調べ始めました。</p>

                <p>
                  正直、これまで
                  <br />
                  「なんで私ってこうなんだろう」
                  <br />
                  「なんでこんなに不器用なんだろう」
                  <br />
                  って悩むことばかりでした。
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <p className="font-bold text-blue-800 text-lg">
                    でも、その時思ったんです。
                    <br />
                    <span className="text-xl">「あ、これが私なんだ」</span>
                    <br />
                    <span className="text-xl">「ここからが本当の私の人生なんだ」</span>
                    <br />
                    って。
                  </p>
                </div>

                <p className="font-medium">この経験が、私の人生を本当に変えてくれました。</p>
                <p>
                  今、私が壁掛けテレビの事業に本気で取り組んでいるのは、これまでの経験全部が活きているからなんです。
                </p>
              </div>

              <div className="mt-8 space-y-4 bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-green-600 mb-4">これまでの経験が今に活きています</h3>

                <div className="space-y-3">
                  <p>
                    📞 お客さんの気持ちに寄り添って、柔らかく、丁寧に話す接客は、
                    <br />
                    漫画喫茶やゲームショップでしっかりと身につけました。
                  </p>

                  <p>
                    🎮 ゲームの面白さを追求するみたいに、
                    <br />
                    <strong className="text-green-700">「どうやったらもっと快適に、面白くできるか」</strong>
                    <br />
                    って考えるのは、ゲームショップの血が騒ぐんです。
                  </p>

                  <p>
                    🛒 ネット通販で培った、
                    <br />
                    <strong className="text-green-700">
                      「本当に良いものをどうやって見つけ出すか、どうやって伝えるか」
                    </strong>
                    <br />
                    っていうバイヤーのノウハウ。
                  </p>

                  <p>
                    💪 そして何より、誰にも頼らず、自分の足で切り開いてきた、
                    <br />
                    泥臭い個人事業主時代の経験。
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-lg font-medium">
                  こんな、ちょっと不器用だけど、誰よりも家族を愛して、ゲームが大好きで、
                  <br />
                  そして人一倍、お客さんの「困った」を何とかしたいって思っている私だからこそ、
                  <br />
                  できることがあると信じています。
                </p>

                <p className="font-medium text-blue-600">だからもし、</p>

                <div className="ml-6 space-y-2 text-blue-700">
                  <p>🎮 ゲームが大好きなあなた</p>
                  <p>👨‍👩‍👧‍👦 大好きな家族のために、安全で快適な空間を作ってあげたいあなた</p>
                  <p>✨ もっと大好きな家族を「うわー！」って驚かせたいあなた</p>
                </div>

                <p className="font-medium">に、ピッタリな壁掛けテレビを提案させてください。</p>
              </div>

              <div className="mt-8 space-y-4 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <p className="font-medium">
                  「家族を驚かせたい！」って方には、
                  <br />
                  壁掛けテレビと一緒に、お部屋のリフォームも考えてみませんか？
                </p>

                <div className="space-y-3 ml-4">
                  <p>
                    🏠 たとえば、湿気を取ってくれる
                    <br />
                    <strong className="text-yellow-700">
                      「エコカラット」の壁は、見た目もグッと良くなって、本当に人気なんですよ。
                    </strong>
                  </p>

                  <p>
                    🔇 夜でも大好きなゲームや映画を思いっきり楽しみたいなら、
                    <br />
                    <strong className="text-yellow-700">音を吸収してくれる「吸音壁」</strong>もいいですね。
                  </p>
                </div>

                <p className="font-bold text-yellow-800">
                  「こんなのあったら最高！」っていう空間を、
                  <br />
                  ぜひ私と一緒に、泥臭く、真剣に考えていきませんか？
                </p>
              </div>

              <p className="font-bold text-right mt-8 text-lg">
                株式会社速人
                <br />
                代表取締役 坂井
              </p>
            </div>

            <div className="text-center mt-6">
              <Button variant="ghost" onClick={() => setIsExpanded(!isExpanded)} className="flex items-center">
                {isExpanded ? "閉じる" : "もっと読む"}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

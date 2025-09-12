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

                <p className="font-medium text-blue-600">「壁のコンシェルジュ」としてあなたのお家の壁を診断します。</p>
                <p>
                  年間200件以上の壁掛けテレビ施工で喜ばれており、超大手法人会社様からもご依頼いただける実績は誇りに思います。
                </p>

                <p>さてここからは、私の経歴からどんな会社なのかを知っていただけたらと思います。</p>
                <p>
                  会社は、株式会社速人(ソクト)といい現在は名古屋市北区大曽根に所在します。
                  <br />
                  もともとは2019年12月に名古屋市南区要町で創業しております。
                  <br />
                  現在は、壁掛けテレビの事業をメインとして活動しています。
                </p>

                <p className="font-medium text-red-600">
                  創業からの道のりは断崖絶壁。
                  <br />
                  上手くいかないことの連続、何度経営難で倒産寸前までいったことでしょうか。
                  <br />
                  経営者レベルワーストだなと思い、自らを『ワースト社長』と名乗っています。
                </p>
              </div>

              <div className="mt-8 space-y-4 bg-red-50 p-6 rounded-lg border-l-4 border-red-200">
                <h3 className="font-bold text-lg text-red-600 mb-4">困難な経験と学び</h3>
                <p>
                  上手くいかないのは、事業を遂行していくうえでの人と仕事するという難しさ。
                  <br />
                  時には社員が取引先と結託し、事業そのものと人材まるごと乗っ取られてという事も。
                </p>

                <p>
                  壁掛けテレビの事業においても、数名のお客様には弊社の知見が足りず、ご迷惑をお掛けするという事もありました。
                </p>

                <div className="ml-4 space-y-2 text-sm">
                  <p>・機材の運び入れの際に、工具が倒れて巾木を傷つけてしまったり。</p>
                  <p>・マスキングテープの粘着力でも破れてしまったクロス。</p>
                  <p>・下地があると聞いていたが、下地が無くて、それを何とか加工技術で補った。</p>
                  <p>
                    後日、お子さんがテレビに物を投げて壊してしまい、テレビメーカーのサービスさんが
                    <br />
                    金具メーカーが推奨する正規の付け方じゃないという事でテレビが壊れた時に
                    <br />
                    保証が効かなかったり。テレビと壁と金具全てを保険で保証という事も。
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4 bg-green-50 p-6 rounded-lg border-l-4 border-green-200">
                <p>
                  多くの失敗を得て、どうしたらもっと喜んでいただける仕事の内容になるだろうかを突き詰めて参りました。
                  <br />
                  ですが、その方向性が合わずに去っていった技術者さん。
                </p>

                <p>
                  苦難がありましたが、こうしたHPを見て下さった方が速人へ直接のお仕事をご依頼くださるように少しづつなってきました。
                </p>

                <p className="font-bold text-green-700">
                  感謝を忘れずに、壁掛けテレビという本来生活に必要が無いサービスが、
                  <br />
                  あなたの新生活をより華やかに温かみがあるものへとなるように全力を尽くします。
                  <br />
                  そんな名前の割にゆっくりめに成長していく会社です。
                </p>
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

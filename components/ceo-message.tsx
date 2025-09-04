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
              <p>皆さま、こんにちは！株式会社速人の坂井です。</p>
              <p>あなたにこのページを見てもらえて、本当に嬉しいです。</p>
              <p>
                正直に言って、私の人生、これまでの会社社長とはちょっと違うかもしれません。だって、16歳の時に高校を中途退学。そこから不器用に生きてきた。
              </p>
              <p>就職活動が上手くいかず半年間ニートした時もありました。</p>
              <p>そして色んな仕事をしてきました。</p>

              <p>17歳で、まだ若い頃でしたが、新築の家を建てたり、古い家を直したりする職人に。</p>
              <p>22歳では、ゲームが好きすぎて、ゲームショップの副店長。</p>
              <p>25歳では、漫画喫茶で店長として、お客さんの顔を見て、接客の楽しさを知りました。</p>
              <p>
                27歳からは、ネットで物を売る仕事に飛び込んで、企画営業として、どうやったら物が売れるのか、頭をひねる毎日でした。
              </p>
              <p>
                29歳で結婚して、30歳からは一人で軽貨物の運送業を始めました。雨の日も風の日も、荷物を届けて、自分の力で生計を立てる厳しさを知りました。
              </p>
              <p>
                そして39歳、ついに「株式会社速人」を立ち上げました。最初から、軽貨物と便利屋。何でも屋の始まりです。
              </p>

              <p>43歳で、私に待望の娘が生まれました。</p>
              <p>
                もう、可愛くて可愛くて、この子のために何でもしてやりたい！そう思った矢先、娘にADHDの特性が見られることが分かったんです。
              </p>
              <p>
                そして、個人事業主時代に、周りから<strong>「坂井さんってASDっぽいよね」</strong>
                って言われたことがあって。
              </p>
              <p>そこから自分のこと、娘のこと、そして「発達障害」というものについて、がむしゃらに調べ始めました。</p>
              <p>
                正直、これまで「なんで私ってこうなんだろう」「なんでこんなに不器用なんだろう」って悩むことばかりでした。
              </p>
              <p>
                でも、その時思ったんです。<strong>「あ、これが私なんだ」「ここからが本当の私の人生なんだ」</strong>
                って。
              </p>
              <p>この経験が、私の人生を本当に変えてくれました。</p>
              <p>今、私が壁掛けテレビの事業に本気で取り組んでいるのは、これまでの経験全部が活きているからなんです。</p>

              <p>
                お客さんの気持ちに寄り添って、柔らかく、丁寧に話す接客は、漫画喫茶やゲームショップでしっかりと身につけました。
              </p>
              <p>
                ゲームの面白さを追求するみたいに、<strong>「どうやったらもっと快適に、面白くできるか」</strong>
                って考えるのは、ゲームショップの血が騒ぐんです。
              </p>
              <p>
                ネット通販で培った、<strong>「本当に良いものをどうやって見つけ出すか、どうやって伝えるか」</strong>
                っていうバイヤーのノウハウ。
              </p>
              <p>そして何より、誰にも頼らず、自分の足で切り開いてきた、泥臭い個人事業主時代の経験。</p>

              <p>
                こんな、ちょっと不器用だけど、誰よりも家族を愛して、ゲームが大好きで、そして人一倍、お客さんの「困った」を何とかしたいって思っている私だからこそ、できることがあると信じています。
              </p>
              <p>だからもし、</p>

              <p>ゲームが大好きなあなた</p>
              <p>大好きな家族のために、安全で快適な空間を作ってあげたいあなた</p>
              <p>もっと大好きな家族を「うわー！」って驚かせたいあなた</p>

              <p>に、ピッタリな壁掛けテレビを提案させてください。</p>
              <p>「家族を驚かせたい！」って方には、壁掛けテレビと一緒に、お部屋のリフォームも考えてみませんか？</p>
              <p>
                たとえば、湿気を取ってくれる
                <strong>「エコカラット」の壁は、見た目もグッと良くなって、本当に人気なんですよ。</strong>
              </p>
              <p>
                夜でも大好きなゲームや映画を思いっきり楽しみたいなら、<strong>音を吸収してくれる「吸音壁」</strong>
                もいいですね。
              </p>
              <p>「こんなのあったら最高！」っていう空間を、ぜひ私と一緒に、泥臭く、真剣に考えていきませんか？</p>

              <p className="font-bold text-right mt-6">
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

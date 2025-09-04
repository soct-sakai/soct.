"use client"
import { useEffect, useState } from "react"

const comments = [
  "帰宅したら、みんなスマホ越し…最後に家族で声を合わせて笑ったのはいつだろう？",
  "休日、今日も子供が元気に走り回ってリビングが散らかって・・・もっとリラックスできる場所がほしい",
  "最近、地震速報を見るたびにテレビの転倒が心配で夜しか眠れない…",
  "3歳の息子がコードを引っ張ってヒヤリ…もう物投げないでよ！？",
  "お父さんの書斎にで、友達とオンライン対戦。ゲーム音や騒いでるとお母さんがうるさい。吸音とか防音とかもっと集中したいよ",
  "夫と向かい合って会話する時間が減った…ゆっくり映画を観たいのに",
  "仕事は忙しいし、気分転換に部屋の模様替えもしたいけど、賃貸でも壁掛けテレビとかしちゃダメなのかなー？",
  "スマートホームにこんな使い方があったんだ、おじいちゃんおばあちゃんでも簡単にできる、遠く離れた孫をテレビで見守り保育",
  "DIY大好きパパ、いつか自分で壁掛けにするって言って、もう何年？友達の家はタイル壁でエレガントなのに…理想のリビングが遠のくばかり",
  "SNSに載せる映える写真が撮れない…フォロワーを驚かせたい",
  "1日中パソコンで疲れ果て、帰っても落ち着く場所がない…寝室で寝ながらテレビでYouTubeの旅動画見ながら寝たい。",
  "スタンド式のテレビ台したけど、思ったよりスペース使って不便だった、明るい海のような水色のクロスに、壁掛けテレビ憧れるなー",
  "漆喰壁なのに壁掛けテレビなんて、できるわけないよ",
  "最近、子どもの笑い声を聞いてない気がする…",
  "憧れるような人が住むような部屋にしたいけど、オシャってお金掛かるけど、モダンな雰囲気の部屋にしたら、きっと自分の感性も育つと思うのよね",
  "仕事を理由にコミュニケーション不足...まともに会話したのはいつだろう？",
  "帰ってきて宿題したの？って帰ってくるのは、今やるとこ！(怒)。勉強も大切だけど、子供と話しをして、悩みを知ってあげたい",
  "今年はあと何回、君(嫁)と一緒に映画を見れるかな？",
  "大好きな推しのMV、気兼ねなく家族にも『面白いね！』って言ってもらえたら…",
]

// コメントを2つのグループに分割
const firstHalfComments = comments.slice(0, Math.ceil(comments.length / 2))
const secondHalfComments = comments.slice(Math.ceil(comments.length / 2))

interface FloatingComment {
  id: number
  text: string
  fontSize: string
  top: string
  duration: number
  delay: number
}

export function FloatingComments({ section }: { section: 1 | 2 }) {
  const [floatingComments, setFloatingComments] = useState<FloatingComment[]>([])

  const sectionComments = section === 1 ? firstHalfComments : secondHalfComments

  useEffect(() => {
    const generateComments = () => {
      const newComments: FloatingComment[] = []

      sectionComments.forEach((comment, index) => {
        const fontSize = ["text-xs", "text-sm", "text-base", "text-lg"][Math.floor(Math.random() * 4)]
        const top = `${Math.random() * 70 + 10}%` // 10% to 80%
        const duration = Math.random() * 20 + 15 // 15-35秒
        const delay = Math.random() * 30 // 0-30秒の遅延

        newComments.push({
          id: index,
          text: comment,
          fontSize,
          top,
          duration,
          delay,
        })
      })

      setFloatingComments(newComments)
    }

    generateComments()
  }, [section])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {floatingComments.map((comment) => (
        <div
          key={comment.id}
          className={`absolute whitespace-nowrap text-white/80 font-medium ${comment.fontSize} animate-float-right`}
          style={{
            top: comment.top,
            right: "-100%",
            animationDuration: `${comment.duration}s`,
            animationDelay: `${comment.delay}s`,
            animationIterationCount: "infinite",
            textShadow: "2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)",
          }}
        >
          {comment.text}
        </div>
      ))}
    </div>
  )
}

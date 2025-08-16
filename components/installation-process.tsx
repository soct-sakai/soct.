import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const installationSteps = [
  {
    title: "Step 1: 施工準備",
    description: "壁内配線の経路を慎重に計画し、マーキングを行います。",
    points: ["壁内の配線ルートを確認", "必要な開口部を計画", "安全な施工のための準備"],
  },
  {
    title: "Step 2: 壁内配線作業",
    description: "計画に基づいて壁に開口部を作り、配線を通します。",
    points: ["壁に適切な開口部を作成", "配線を慎重に通す", "配線の保護と固定"],
  },
  {
    title: "Step 3: 仕上げと確認",
    description: "壁掛けテレビを取り付け、配線を接続し、動作確認を行います。",
    points: ["テレビの取り付けと配線の接続", "壁の補修と仕上げ", "全体の動作確認とクリーニング"],
  },
]

export function InstallationProcess() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">壁内配線の施工プロセス</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          当社の専門技術者による壁内配線の施工手順をご紹介します。
          安全で美しい仕上がりを実現するための徹底したプロセスをご覧ください。
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-aXPwD1br8C6GXoXuNIOSW7sGsgymVF.jpeg"
            alt="壁内配線の施工プロセス"
            fill
            className="object-contain"
          />
        </div>
        <CardContent className="p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-3">
            {installationSteps.map((step, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


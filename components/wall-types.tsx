"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const wallTypes = [
  {
    title: "一般的な普通の壁",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A3%81007.jpg-0qP10uqSJRlhoFZ7xuH7rKzT871dDy.jpeg",
    requirements: ["下地補強18mm～24mm", "隠ぺい配線にしたい場合", "ダクト製作かモール配線"],
  },
  {
    title: "下地補強ありの壁",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A3%81002.jpg-xNrAa1GaqVq2xoneK1gCoEr4R0q6gQ.jpeg",
    requirements: ["下地補強18mm～24mm", "隠ぺい配線にしたい場合", "ダクト製作かモール配線"],
  },
  {
    title: "アクセントクロスも最高の壁",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A3%81003.jpg-NTu9gMmHFnoesxokEspCGkM8f4fr5f.jpeg",
    requirements: ["特になしほぼ施工のみ"],
  },
  {
    title: "ビル内の壁 軽量鉄骨パネル壁",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A3%81006.jpg-aeVsdQGj6zKEEQmihSYnfhWM9t1Wn4.jpeg",
    requirements: ["下地補強18mm～24mm", "隠ぺい配線にしたい場合", "モール配線"],
  },
  {
    title: "エコカラット・軟質タイル壁",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A3%81004.jpg-B1NPIk3FtjarX2MBfEvPMw6IPlZWaS.jpeg",
    requirements: ["下地補強18mm～24mm"],
  },
  {
    title: "エコカラット・高級タイル壁",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A3%81005.jpg-JmGTVSoNDlJvE0hPIgFf7tR55XA4SW.jpeg",
    requirements: ["特になしほぼ施工のみ"],
  },
]

export function WallTypes() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {wallTypes.map((wall, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="cursor-pointer" onClick={() => toggleExpand(index)}>
            <CardTitle className="text-lg flex justify-between items-center">
              {wall.title}
              {expandedIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="relative aspect-[4/3] mb-4">
                <Image
                  src={wall.image || "/placeholder.svg"}
                  alt={wall.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">必要なもの:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {wall.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


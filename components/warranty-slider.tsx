"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

const warrantySlides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-EPKX59H194XXR7ujDaiL1kt2raROc0.jpeg",
    alt: "壁掛けテレビ施工の安心保証",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Ey5FqnFo4AurkTRP7UG3Wf5ux6p3kW.jpeg",
    alt: "目次",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-DzbpqF6AmtzPxeeQPS8kK61B3yY8Np.jpeg",
    alt: "株式会社速人のサービス概要",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-eJD8qsV0YE6EYsph2BrLELSXwZKRpZ.jpeg",
    alt: "返金保証（施工後1か月）",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-EpoYHG2lN8vwEG7T2MRJQBDGciCfDu.jpeg",
    alt: "無料保証（3年間）",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-UmJ3wUj9CZbvVOYQMdfIe5HNx6weW5.jpeg",
    alt: "保証期間終了後の特典",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-elZoxbmJbKKOfSWXBbE9IN8AuJO7Wj.jpeg",
    alt: "損害保険による対応",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-6SUXxUAHhE5rSXBGMAP91OMHPAjFwQ.jpeg",
    alt: "責任を持ったアフターフォロー",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-DEesd3AHEOzLLCQT6dNpPH0TeanwTe.jpeg",
    alt: "安心してご利用いただける理由",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-cSZz2lMVMQqKmdIojbMlhDlp91Q46U.jpeg",
    alt: "ご清聴ありがとうございました",
  },
]

export function WarrantySlider() {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {warrantySlides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {warrantySlides.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-orange-500/50 hover:bg-orange-500/75 transition-colors"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}

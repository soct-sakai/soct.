"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

const faqSlides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-CKhbkosjwqsAhysYe3ryQsoDZDpS8i.jpeg",
    alt: "よくある質問",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-MYoQpjDcKdBUJgJ6Faatmtf3ymvH7l.jpeg",
    alt: "決済方法に関する質問",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-iJWilo7ovqxhdaL7By8I3zgRyHPOJS.jpeg",
    alt: "テレビの設置に関する質問",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-OnrnL834dyeCWrukCs8gljc8pgf3l2.jpeg",
    alt: "見積もりに関する質問",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-vjlEhBNjWO3hSx1nhwfFHEx9wgriCj.jpeg",
    alt: "耐震性とアフターサポートに関する質問",
  },
]

export function FAQAccordion() {
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
        {faqSlides.map((slide, index) => (
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
        {faqSlides.map((_, index) => (
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


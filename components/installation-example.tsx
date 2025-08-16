"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface InstallationExampleProps {
  title: string
  description: string
  beforeImage: string
  afterImages: string[]
}

export function InstallationExample({ title, description, beforeImage, afterImages }: InstallationExampleProps) {
  const [currentAfterImage, setCurrentAfterImage] = React.useState(0)

  const nextImage = () => {
    setCurrentAfterImage((prev) => (prev + 1) % afterImages.length)
  }

  const previousImage = () => {
    setCurrentAfterImage((prev) => (prev - 1 + afterImages.length) % afterImages.length)
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Before（ビフォー）</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video">
            <Image src={beforeImage || "/placeholder.svg"} alt="施工前" fill className="object-cover rounded-lg" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">After（アフター）</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video">
            <Image
              src={afterImages[currentAfterImage] || "/placeholder.svg"}
              alt="施工後"
              fill
              className="object-cover rounded-lg"
            />
            {afterImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={previousImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {afterImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentAfterImage ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentAfterImage(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2 text-base md:text-lg">{title}</h4>
            <p className="text-sm md:text-base text-gray-600">{description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

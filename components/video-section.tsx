"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoSectionProps {
  videoSrc: string
  title: string
  description?: string
}

export function VideoSection({ videoSrc, title, description }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
      </div>

      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-auto"
          muted={isMuted}
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          お使いのブラウザは動画再生に対応していません。
        </video>

        {/* 動画コントロール */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={togglePlay}
            className="bg-black/70 hover:bg-black/80 text-white"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>

          <Button
            size="sm"
            variant="secondary"
            onClick={toggleMute}
            className="bg-black/70 hover:bg-black/80 text-white"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

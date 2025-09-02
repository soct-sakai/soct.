"use client"

import { VideoSection } from "@/components/video-section"

export function InstallationVideoDemo() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <VideoSection
            videoSrc="/videos/installation-demo.mp4"
            title="🎬 壁掛けテレビ施工の実際の様子"
            description="プロの技術者による実際の施工プロセスをご覧ください"
          />

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">このように丁寧で確実な施工を行っています！</p>
          </div>
        </div>
      </div>
    </section>
  )
}

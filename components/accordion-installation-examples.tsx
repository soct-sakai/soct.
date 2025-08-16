"use client"

import { useState } from "react"
import { InstallationExample } from "@/components/installation-example"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AccordionInstallationExamplesProps {
  examples: {
    title: string
    description: string
    beforeImage: string
    afterImages: string[]
  }[]
}

export function AccordionInstallationExamples({ examples }: AccordionInstallationExamplesProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-8">
      {examples.map((example, index) => (
        <div key={index} className={isOpen ? "block" : "hidden"}>
          <InstallationExample {...example} />
        </div>
      ))}
      <div className="text-center">
        <Button onClick={() => setIsOpen(!isOpen)} variant="outline" className="flex items-center gap-2">
          {isOpen ? (
            <>
              閉じる <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              もっと見る <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}


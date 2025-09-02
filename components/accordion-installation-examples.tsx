"use client"

import { BeforeAfterSlider } from "@/components/before-after-slider"

interface AccordionInstallationExamplesProps {
  examples: {
    title: string
    description: string
    beforeImage: string
    afterImages: string[]
  }[]
}

export function AccordionInstallationExamples({ examples }: AccordionInstallationExamplesProps) {
  return (
    <div className="space-y-16">
      {examples.map((example, index) => (
        <BeforeAfterSlider
          key={index}
          caseId={`case-${index + 3}`} // case-01, case-02は既に使用済みなので3から開始
          title={example.title}
          description={example.description}
          beforeImage={example.beforeImage}
          afterImages={example.afterImages}
        />
      ))}
    </div>
  )
}

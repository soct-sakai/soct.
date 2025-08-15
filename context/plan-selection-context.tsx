"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface SizeSelection {
  size: string
  price: string
  quantity: number
}

export interface MountSelection {
  name: string
  price: string
}

// 既存のインターフェースに追加
export interface OptionSelection {
  name: string
  price: string
  quantity: number
}

interface PlanSelectionContextType {
  selectedSizes: SizeSelection[]
  selectedMount: MountSelection | null
  selectedOptions: OptionSelection[] // 追加
  totalPrice: number
  optionsTotalPrice: number // 追加
  setSelectedSizes: (sizes: SizeSelection[]) => void
  setSelectedMount: (mount: MountSelection | null) => void
  setSelectedOptions: (options: OptionSelection[]) => void // 追加
  setTotalPrice: (price: number) => void
  setOptionsTotalPrice: (price: number) => void // 追加
  clearSelections: () => void
}

const PlanSelectionContext = createContext<PlanSelectionContextType | undefined>(undefined)

export function PlanSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedSizes, setSelectedSizes] = useState<SizeSelection[]>([])
  const [selectedMount, setSelectedMount] = useState<MountSelection | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<OptionSelection[]>([]) // 追加
  const [totalPrice, setTotalPrice] = useState(0)
  const [optionsTotalPrice, setOptionsTotalPrice] = useState(0) // 追加

  const clearSelections = () => {
    setSelectedSizes([])
    setSelectedMount(null)
    setSelectedOptions([]) // 追加
    setTotalPrice(0)
    setOptionsTotalPrice(0) // 追加
  }

  return (
    <PlanSelectionContext.Provider
      value={{
        selectedSizes,
        selectedMount,
        selectedOptions, // 追加
        totalPrice,
        optionsTotalPrice, // 追加
        setSelectedSizes,
        setSelectedMount,
        setSelectedOptions, // 追加
        setTotalPrice,
        setOptionsTotalPrice, // 追加
        clearSelections,
      }}
    >
      {children}
    </PlanSelectionContext.Provider>
  )
}

export function usePlanSelection() {
  const context = useContext(PlanSelectionContext)
  if (context === undefined) {
    throw new Error("usePlanSelection must be used within a PlanSelectionProvider")
  }
  return context
}

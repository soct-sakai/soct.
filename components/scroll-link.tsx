"use client"

import type React from "react"
import Link, { type LinkProps } from "next/link"

export const ScrollLink = ({ children, ...props }: React.PropsWithChildren<LinkProps>) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  )
}


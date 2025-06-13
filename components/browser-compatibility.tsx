"use client"

import { useEffect } from "react"
import { initBrowserCompatibility } from "@/utils/browser-compatibility"

export default function BrowserCompatibility() {
  useEffect(() => {
    initBrowserCompatibility()
  }, [])

  return null // This component doesn't render anything
}

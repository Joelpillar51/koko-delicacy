import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import BrowserCompatibility from "@/components/browser-compatibility"

export const metadata: Metadata = {
  title: "Koko's Delicacy - Nigerian Cooking Masterclass",
  description: "Learn to cook authentic Nigerian dishes from professional chefs at Koko's Delicacy",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <BrowserCompatibility />
        {children}
      </body>
    </html>
  )
}

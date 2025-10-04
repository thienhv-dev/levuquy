import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Thanh Tuyền & Văn Thiện - Wedding",
  description: "Join us as we celebrate our special day",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <head>
        <meta property="og:image" content="https://thienhv-dev.github.io/levuquy/ROM_6782.jpg" />
        <meta property="og:title" content="Thanh Tuyền & Văn Thiện - Wedding" />
        <meta property="og:description" content="Join us as we celebrate our special day" />
      </head>
      <body className={`font-sans overflow-x-hidden ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

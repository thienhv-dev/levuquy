import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Heart } from "lucide-react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Thanh Tuyền & Văn Thiện - Wedding",
  description: "Hãy tham gia cùng chúng tôi để kỷ niệm ngày đặc biệt của chúng tôi",
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
        <meta property="og:description" content="Hãy tham gia cùng chúng tôi để kỷ niệm ngày đặc biệt của chúng tôi" />
      </head>
      <body className={`font-sans overflow-x-hidden ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-background via-primary/5 to-background">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary/15 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
              fill="currentColor"
            />
          ))}
        </div>

        <div className="relative z-10">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

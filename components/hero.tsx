"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { getImagePath } from "@/lib/image-utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={getImagePath("/ROM_6782.jpg")}
          alt="Wedding couple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div ref={ref} className="relative z-10 text-center px-4">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1
            className={`font-serif text-6xl md:text-8xl lg:text-9xl text-foreground text-balance transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            Thanh Tuyền & Văn Thiện
          </h1>
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-px w-16 bg-primary" />
            <p className="text-xl md:text-2xl uppercase tracking-widest text-foreground">Oct 12, 2025</p>
            <div className="h-px w-16 bg-primary" />
          </div>
          <p
            className={`font-['Dancing_Script'] text-lg md:text-xl text-muted-foreground transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            Tổ 5 Thôn Thái Đông, Xã Thăng Trường, Thành phố Đà Nẵng
          </p>
        </div>
      </div>
    </section>
  )
}

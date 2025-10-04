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
          src={getImagePath("/romantic-wedding-couple-at-sunset-in-elegant-garde.jpg")}
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
            Sarah & Michael
          </h1>
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-px w-16 bg-primary" />
            <p className="text-xl md:text-2xl uppercase tracking-widest text-foreground">June 15, 2025</p>
            <div className="h-px w-16 bg-primary" />
          </div>
          <p
            className={`text-lg md:text-xl text-muted-foreground transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            Napa Valley, California
          </p>
        </div>

        <button
          onClick={() => {
            document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to our story"
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"

export function Countdown() {
  const weddingDate = new Date("2025-10-12T10:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-12 text-balance">
            Đếm Ngược Đến Ngày Trọng Đại
          </h2>
          <div className="grid grid-cols-4 gap-2 md:gap-8">
            <div className="bg-card border border-border rounded-lg p-3 md:p-6">
              <div className="font-serif text-3xl md:text-6xl text-primary mb-1 md:mb-2">{timeLeft.days}</div>
              <div className="text-xs md:text-base text-muted-foreground uppercase tracking-wider">Ngày</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-3 md:p-6">
              <div className="font-serif text-3xl md:text-6xl text-primary mb-1 md:mb-2">{timeLeft.hours}</div>
              <div className="text-xs md:text-base text-muted-foreground uppercase tracking-wider">Giờ</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-3 md:p-6">
              <div className="font-serif text-3xl md:text-6xl text-primary mb-1 md:mb-2">{timeLeft.minutes}</div>
              <div className="text-xs md:text-base text-muted-foreground uppercase tracking-wider">Phút</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-3 md:p-6">
              <div className="font-serif text-3xl md:text-6xl text-primary mb-1 md:mb-2">{timeLeft.seconds}</div>
              <div className="text-xs md:text-base text-muted-foreground uppercase tracking-wider">Giây</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

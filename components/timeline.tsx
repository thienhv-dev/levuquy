"use client"

import { Heart, Camera, Cake, UtensilsCrossed } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const events = [
    {
      time: "09:00",
      title: "Chào mừng đến với ngôi nhà của chúng tôi",
      icon: Heart,
    },
    {
      time: "09:30",
      title: "Đón khách & ổn định chỗ ngồi",
      icon: Camera,
    },
    {
      time: "10:30",
      title: "Lễ Vu Quy",
      icon: Cake,
    },
    {
      time: "11:00",
      title: "Tiệc Cưới & Giao Lưu",
      icon: UtensilsCrossed,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleItems.length === 0) {
            events.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index]
                  }
                  return prev
                })
              }, index * 1000)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [visibleItems.length])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#3d2817] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-['Dancing_Script'] text-2xl md:text-4xl lg:text-5xl text-[#f5e6d3] text-balance leading-tight">
              Hòa chung niềm vui ngày cưới | 12.10.2025
            </h2>
          </div>

          <div className="relative flex justify-center">
            <div className="relative inline-block">
              {/* Vertical connecting line - centered relative to dots */}
                <div className="absolute left-[calc(2.5rem+2.5rem)] md:left-[calc(3.5rem+3rem)] top-4 bottom-12 w-[2px] bg-[#f5e6d3]/30" />

              <div className="space-y-8 md:space-y-12">
                {events.map((event, index) => {
                  const Icon = event.icon
                  const isVisible = visibleItems.includes(index)

                  return (
                    <div
                      key={index}
                      className={`relative flex items-start gap-3 md:gap-4 transition-all duration-1000 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                      }`}
                      style={{
                        transitionDelay: isVisible ? "0ms" : `${index * 100}ms`,
                      }}
                    >
                      {/* Icon - fixed width */}
                      <div className="flex-shrink-0 w-12 md:w-16 flex items-center justify-center">
                        <Icon className="h-10 w-10 md:h-14 md:w-14 text-[#d4af7a] stroke-[1.5]" />
                      </div>

                      {/* Timeline dot - fixed width */}
                      <div className="flex-shrink-0 flex items-center justify-center w-10 md:w-12">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white border-[3px] border-[#3d2817] relative z-10 shadow-lg" />
                      </div>

                      {/* Content - flexible width */}
                      <div className="flex-1 min-w-0 pt-0 md:pt-1">
                        <div className="font-['Dancing_Script'] text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                          {event.time}
                        </div>
                        <div className="font-['Dancing_Script'] text-base md:text-lg lg:text-xl text-[#f5e6d3] leading-relaxed">
                          {event.title}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

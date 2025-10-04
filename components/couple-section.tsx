"use client"

import { useEffect, useRef, useState } from "react"

export function CoupleSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Bride */}
            <div className="relative group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
                <img src="/elegant-bride-portrait-in-white-wedding-dress.jpg" alt="Cô Dâu" className="w-full h-full object-cover" />
                {/* Overlay with animated text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-12">
                  <div
                    className={`text-center transition-all duration-1000 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    }`}
                  >
                    <p className="text-white/90 text-lg md:text-xl mb-2 font-light tracking-wider">Cô Dâu</p>
                    <h3 className="font-serif text-white text-4xl md:text-5xl">Lê Thị Thanh Tuyền</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Groom */}
            <div className="relative group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
                <img src="/elegant-groom-portrait-in-black-tuxedo.jpg" alt="Chú Rể" className="w-full h-full object-cover" />
                {/* Overlay with animated text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-12">
                  <div
                    className={`text-center transition-all duration-1000 delay-300 ${
                      isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
                  >
                    <p className="text-white/90 text-lg md:text-xl mb-2 font-light tracking-wider">Chú Rể</p>
                    <h3 className="font-serif text-white text-4xl md:text-5xl">Hồ Văn Thiện</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

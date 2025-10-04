"use client"

import { Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { useState } from "react"

export function SaveTheDateCalendar() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const calendarDays = [
    // Week 1
    [null, null, null, 1, 2, 3, 4],
    // Week 2
    [5, 6, 7, 8, 9, 10, 11],
    // Week 3
    [12, 13, 14, 15, 16, 17, 18],
    // Week 4
    [19, 20, 21, 22, 23, 24, 25], // 22 is wedding day
    // Week 5
    [26, 27, 28, 29, 30, 31, null],
  ]

  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Heart className="h-12 w-12 fill-[#a08968] text-[#a08968] mx-auto mb-8" />
            </div>

            <div ref={ref} className="text-center mb-8">
              <h2
                className={`font-serif text-5xl md:text-7xl text-[#d4c4a8] mb-8 tracking-[0.2em] transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
              >
                SAVE THE DATE
              </h2>

              <div
                className={`text-center space-y-2 mb-12 transition-all duration-1000 delay-200 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
              >
                <p className="text-lg md:text-xl text-foreground/80">Đi một vòng lớn rồi vẫn gặp anh,</p>
                <p className="text-lg md:text-xl text-foreground/80">Từ đó, thế gian bỗng hóa dịu dàng.</p>
              </div>
            </div>

            <div
              className={`relative mx-auto max-w-2xl transition-all duration-1000 delay-300 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              {/* Dark frame effect */}
              <div className="relative p-4 md:p-8 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 rounded-lg shadow-2xl">
                {/* Photo with calendar overlay */}
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image
                    src="/romantic-wedding-couple-at-sunset-in-elegant-garde.jpg"
                    alt="Wedding couple"
                    fill
                    className="object-cover"
                    onClick={() => setSelectedImage("/romantic-wedding-couple-at-sunset-in-elegant-garde.jpg")}
                  />

                  {/* Calendar overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                    <div className="w-full max-w-md">
                      {/* Calendar grid */}
                      <div className="space-y-1 md:space-y-2">
                        {calendarDays.map((week, weekIndex) => (
                          <div key={weekIndex} className="grid grid-cols-7 gap-1 md:gap-2">
                            {week.map((day, dayIndex) => (
                              <div
                                key={dayIndex}
                                className={`
                                  aspect-square flex items-center justify-center
                                  text-white font-medium text-xs md:text-base
                                  ${day === 22 ? "relative" : ""}
                                  ${!day ? "invisible" : ""}
                                `}
                              >
                                {day === 22 ? (
                                  <>
                                    {/* Heart shape background for wedding day */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <Heart className="h-8 w-8 md:h-12 md:w-12 fill-red-500 text-red-500" />
                                    </div>
                                    <span className="relative z-10 text-white font-bold">{day}</span>
                                  </>
                                ) : (
                                  <span className="drop-shadow-lg">{day}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 space-y-2">
                <p className="font-serif text-2xl md:text-3xl text-foreground">Chủ Nhật, 12/10/2025</p>
                <p className="text-lg md:text-xl text-muted-foreground">Âm lịch 20/8 | 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Wedding couple full view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

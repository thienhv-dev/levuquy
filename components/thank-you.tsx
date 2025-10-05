"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Heart } from "lucide-react"

export function ThankYou() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1)
  const { ref: messageRef, isVisible: messageVisible } = useScrollAnimation(0.1)
  const { ref: signatureRef, isVisible: signatureVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <Heart
                className="w-24 h-24 md:w-32 md:h-32 text-primary animate-pulse-slow"
                fill="currentColor"
                strokeWidth={0}
              />
              <div className="absolute inset-0 animate-ping-slow">
                <Heart className="w-24 h-24 md:w-32 md:h-32 text-primary/30" fill="currentColor" strokeWidth={0} />
              </div>
            </div>
          </div>

          <div
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } mb-8`}
          >
            <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-4 text-balance">Cảm Ơn</h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full" />
          </div>

          <div
            ref={messageRef}
            className={`transition-all duration-1000 delay-200 ${
              messageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } mb-12`}
          >
            <p className="font-['Dancing_Script'] text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              Cảm ơn bạn đã dành thời gian ghé thăm trang web của chúng tôi.
              <br />
              Sự hiện diện của bạn trong ngày trọng đại này
              <br />
              sẽ là món quà ý nghĩa nhất với chúng tôi.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-primary animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
                fill="currentColor"
              />
            ))}
          </div>

          <div
            ref={signatureRef}
            className={`transition-all duration-1000 delay-[400ms] ${
              signatureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-serif text-3xl md:text-4xl text-foreground">T & T</p>
            <p className="text-sm text-muted-foreground mt-2">Với tất cả tình yêu thương</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

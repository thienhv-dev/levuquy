"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { getImagePath } from "@/lib/image-utils"

const photos = [
  { src: getImagePath("/romantic-wedding-couple-at-sunset-in-elegant-garde.jpg"), alt: "Photo 1" },
  { src: getImagePath("/happy-couple-laughing-together-in-nature.jpg"), alt: "Photo 2" },
  { src: getImagePath("/romantic-couple-portrait-in-vineyard.jpg"), alt: "Photo 3" },
  { src: getImagePath("/engagement-ring-close-up-with-flowers.jpg"), alt: "Photo 4" },
  { src: getImagePath("/couple-sunset-beach-walk.png"), alt: "Photo 5" },
  { src: getImagePath("/romantic-wedding-couple-at-sunset-in-elegant-garde.jpg"), alt: "Photo 6" },
  { src: getImagePath("/happy-couple-laughing-together-in-nature.jpg"), alt: "Photo 7" },
  { src: getImagePath("/romantic-couple-portrait-in-vineyard.jpg"), alt: "Photo 8" },
  { src: getImagePath("/engagement-ring-close-up-with-flowers.jpg"), alt: "Photo 9" },
  { src: getImagePath("/couple-sunset-beach-walk.png"), alt: "Photo 10" },
  { src: getImagePath("/laughing-couple-outdoors.png"), alt: "Photo 11" },
  { src: getImagePath("/romantic-wedding-couple-at-sunset-in-elegant-garde.jpg"), alt: "Photo 12" },
  { src: getImagePath("/happy-couple-laughing-together-in-nature.jpg"), alt: "Photo 13" },
  { src: getImagePath("/romantic-couple-portrait-in-vineyard.jpg"), alt: "Photo 14" },
  { src: getImagePath("/engagement-ring-close-up-with-flowers.jpg"), alt: "Photo 15" },
]

export function HeartCollage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            Khoảnh Khắc Yêu Thương
          </h2>
          <div className="h-px w-24 bg-primary mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div
            className={`relative w-full h-[600px] md:h-[1000px] lg:h-[1200px] transition-all duration-1000 delay-300 animate-pulse-slow ${
              isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            {/* Top left lobe */}
            <div
              onClick={() => setSelectedImage(photos[0].src)}
              className="absolute top-[8%] left-[18%] w-[60px] h-[60px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] cursor-pointer group"
            >
              <img
                src={photos[0].src || getImagePath("/placeholder.svg")}
                alt={photos[0].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            <div
              onClick={() => setSelectedImage(photos[1].src)}
              className="absolute top-[3%] left-[30%] w-[50px] h-[50px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px] cursor-pointer group"
            >
              <img
                src={photos[1].src || getImagePath("/placeholder.svg")}
                alt={photos[1].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            <div
              onClick={() => setSelectedImage(photos[2].src)}
              className="absolute top-[8%] left-[41%] w-[45px] h-[45px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] cursor-pointer group"
            >
              <img
                src={photos[2].src || getImagePath("/placeholder.svg")}
                alt={photos[2].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            {/* Top right lobe */}
            <div
              onClick={() => setSelectedImage(photos[3].src)}
              className="absolute top-[8%] right-[41%] w-[45px] h-[45px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] cursor-pointer group"
            >
              <img
                src={photos[3].src || getImagePath("/placeholder.svg")}
                alt={photos[3].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            <div
              onClick={() => setSelectedImage(photos[4].src)}
              className="absolute top-[3%] right-[30%] w-[50px] h-[50px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px] cursor-pointer group"
            >
              <img
                src={photos[4].src || getImagePath("/placeholder.svg")}
                alt={photos[4].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            <div
              onClick={() => setSelectedImage(photos[5].src)}
              className="absolute top-[8%] right-[18%] w-[60px] h-[60px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] cursor-pointer group"
            >
              <img
                src={photos[5].src || getImagePath("/placeholder.svg")}
                alt={photos[5].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            {/* Upper middle section */}
            <div
              onClick={() => setSelectedImage(photos[6].src)}
              className="absolute top-[25%] left-[23%] w-[55px] h-[55px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] cursor-pointer group"
            >
              <img
                src={photos[6].src || getImagePath("/placeholder.svg")}
                alt={photos[6].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            <div
              onClick={() => setSelectedImage(photos[7].src)}
              className="absolute top-[25%] right-[23%] w-[55px] h-[55px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] cursor-pointer group"
            >
              <img
                src={photos[7].src || getImagePath("/placeholder.svg")}
                alt={photos[7].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            {/* Middle section */}
            <div
              onClick={() => setSelectedImage(photos[8].src)}
              className="absolute top-[42%] left-[28%] w-[50px] h-[50px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] cursor-pointer group"
            >
              <img
                src={photos[8].src || getImagePath("/placeholder.svg")}
                alt={photos[8].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            <div
              onClick={() => setSelectedImage(photos[9].src)}
              className="absolute top-[42%] right-[28%] w-[50px] h-[50px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] cursor-pointer group"
            >
              <img
                src={photos[9].src || getImagePath("/placeholder.svg")}
                alt={photos[9].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            {/* Lower middle section */}
            <div
              onClick={() => setSelectedImage(photos[10].src)}
              className="absolute top-[58%] left-[33%] w-[42px] h-[42px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px] cursor-pointer group"
            >
              <img
                src={photos[10].src || getImagePath("/placeholder.svg")}
                alt={photos[10].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            <div
              onClick={() => setSelectedImage(photos[11].src)}
              className="absolute top-[58%] right-[33%] w-[42px] h-[42px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px] cursor-pointer group"
            >
              <img
                src={photos[11].src || getImagePath("/placeholder.svg")}
                alt={photos[11].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            {/* Bottom point */}
            <div
              onClick={() => setSelectedImage(photos[12].src)}
              className="absolute top-[72%] left-[38%] w-[38px] h-[38px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] cursor-pointer group"
            >
              <img
                src={photos[12].src || getImagePath("/placeholder.svg")}
                alt={photos[12].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            <div
              onClick={() => setSelectedImage(photos[13].src)}
              className="absolute top-[72%] right-[38%] w-[38px] h-[38px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] cursor-pointer group"
            >
              <img
                src={photos[13].src || getImagePath("/placeholder.svg")}
                alt={photos[13].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            <div
              onClick={() => setSelectedImage(photos[14].src)}
              className="absolute top-[85%] left-[44%] w-[30px] h-[30px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] cursor-pointer group"
            >
              <img
                src={photos[14].src || getImagePath("/placeholder.svg")}
                alt={photos[14].alt}
                className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage || getImagePath("/placeholder.svg")}
            alt="Full size"
            className="max-w-full max-h-full object-contain animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

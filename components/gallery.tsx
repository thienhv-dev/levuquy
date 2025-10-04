"use client"

import { useState, useRef, useEffect } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const images = [
    {
      src: "/romantic-couple-portrait-in-vineyard.jpg",
      alt: "Couple in vineyard",
    },
    {
      src: "/engagement-ring-close-up-with-flowers.jpg",
      alt: "Engagement ring",
    },
    {
      src: "/couple-sunset-beach-walk.png",
      alt: "Beach sunset",
    },
    {
      src: "/laughing-couple-outdoors.png",
      alt: "Laughing together",
    },
    {
      src: "/romantic-dinner-date-night.jpg",
      alt: "Dinner date",
    },
    {
      src: "/mountain-hiking-couple.png",
      alt: "Mountain hike",
    },
  ]

  const duplicatedImages = [...images, ...images, ...images]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || isPaused) return

    let animationId: number
    const scrollSpeed = 1

    const scroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed

        // Reset scroll position for infinite effect
        const maxScroll = container.scrollWidth / 3
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0
        }

        animationId = requestAnimationFrame(scroll)
      }
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === "Escape") {
        setSelectedImage(null)
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev")
      } else if (e.key === "ArrowRight") {
        navigateImage("next")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <section id="gallery" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            Our Journey
          </h2>
          <div className="h-px w-24 bg-primary mx-auto" />
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden hover:overflow-x-auto scroll-smooth pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollbarWidth: "thin" }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/3] relative overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setSelectedImage(index % images.length)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-medium">
                  Click to view
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage("prev")
            }}
            className="absolute left-4 text-white hover:text-primary transition-colors p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage("next")
            }}
            className="absolute right-4 text-white hover:text-primary transition-colors p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-6xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{images[selectedImage].alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}

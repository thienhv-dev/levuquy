"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/image-utils"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const handleFirstClick = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true)
        setIsPlaying(true)
        audioRef.current.play().catch(() => {
          // Silently handle autoplay failure
          setIsPlaying(false)
        })
        document.removeEventListener("click", handleFirstClick)
      }
    }

    document.addEventListener("click", handleFirstClick)
    return () => document.removeEventListener("click", handleFirstClick)
  }, [hasInteracted])

  useEffect(() => {
    if (hasInteracted && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, hasInteracted])

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={getImagePath("/ido.mp3")} type="audio/mpeg" />
      </audio>
      <Button
        onClick={toggleMusic}
        size="icon"
        className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isPlaying ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
      </Button>
    </>
  )
}

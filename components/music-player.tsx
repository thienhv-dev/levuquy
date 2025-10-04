"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/image-utils"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.log("[v0] Audio play failed:", error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

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

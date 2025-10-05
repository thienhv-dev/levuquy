"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/image-utils"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [showOverlay, setShowOverlay] = useState(true)

  const handleOverlayClick = () => {
    setShowOverlay(false)
    setIsPlaying(true)
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
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

      {showOverlay && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm cursor-pointer"
        >
          <div className="text-center space-y-6 animate-in fade-in duration-500">
            <Music className="h-16 w-16 mx-auto text-primary animate-pulse" />
            <div className="space-y-2">
              <h2 className="font-['Dancing_Script'] text-3xl font-serif text-foreground">Chào mừng <br /> Bạn đến với ngày trọng đại</h2>
              <p className="font-['Dancing_Script'] text-muted-foreground">Nhấn vào bất kỳ đâu để bắt đầu</p>
            </div>
          </div>
        </div>
      )}

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

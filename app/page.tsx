import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { OurStory } from "@/components/our-story"
import { WeddingDetails } from "@/components/wedding-details"
import { Gallery } from "@/components/gallery"
import { RSVP } from "@/components/rsvp"
import { Footer } from "@/components/footer"
import { SaveTheDateCalendar } from "@/components/save-the-date-calendar"
import { VenueCards } from "@/components/venue-cards"
import { CoupleSection } from "@/components/couple-section"
import { HeartCollage } from "@/components/heart-collage"
import { Timeline } from "@/components/timeline"
import { Registry } from "@/components/registry"
import { MusicPlayer } from "@/components/music-player"
import { ThankYou } from "@/components/thank-you"
import { RomanticMoments } from "@/components/romantic-moments"
import { Countdown } from "@/components/countdown"

export default function WeddingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden max-w-full">
      <Navigation />
      <MusicPlayer />
      <Hero />
      <SaveTheDateCalendar />
      <CoupleSection />
      <Countdown />
      <VenueCards />
      <Timeline />
      <RomanticMoments />
      <Registry />
      <ThankYou />
      <Footer />
    </main>
  )
}

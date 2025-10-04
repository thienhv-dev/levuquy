import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { OurStory } from "@/components/our-story"
import { WeddingDetails } from "@/components/wedding-details"
import { Gallery } from "@/components/gallery"
import { RSVP } from "@/components/rsvp"
import { Registry } from "@/components/registry"
import { Footer } from "@/components/footer"
import { SaveTheDateCalendar } from "@/components/save-the-date-calendar"
import { VenueCards } from "@/components/venue-cards"
import { CoupleSection } from "@/components/couple-section"
import { HeartCollage } from "@/components/heart-collage"

export default function WeddingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <SaveTheDateCalendar />
      <CoupleSection />
      <VenueCards />
      <HeartCollage />
      <OurStory />
      <WeddingDetails />
      <Gallery />
      <RSVP />
      <Registry />
      <Footer />
    </main>
  )
}

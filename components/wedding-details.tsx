"use client"

import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function WeddingDetails() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="details" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div ref={ref} className="text-center mb-16">
            <h2
              className={`font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              Wedding Details
            </h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p
              className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Join us for a day of love, laughter, and celebration in the heart of wine country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card
              className={`p-8 text-center bg-card border-border transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-foreground mb-2">Date</h3>
              <p className="text-muted-foreground">Saturday</p>
              <p className="text-lg font-medium text-foreground">June 15, 2025</p>
            </Card>

            <Card
              className={`p-8 text-center bg-card border-border transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-foreground mb-2">Time</h3>
              <p className="text-muted-foreground">Ceremony</p>
              <p className="text-lg font-medium text-foreground">4:00 PM</p>
              <p className="text-sm text-muted-foreground mt-2">Reception to follow</p>
            </Card>

            <Card
              className={`p-8 text-center bg-card border-border transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-foreground mb-2">Venue</h3>
              <p className="text-muted-foreground">Silverado Resort</p>
              <p className="text-lg font-medium text-foreground">Napa Valley, CA</p>
            </Card>
          </div>

          <Card
            className={`p-8 md:p-12 bg-card border-border transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-3xl text-foreground mb-4">Ceremony & Reception</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The ceremony will take place in the vineyard gardens, followed by cocktail hour and dinner reception
                  in the grand ballroom. Dancing and celebration will continue into the evening under the stars.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">
                    <span className="font-medium">Dress Code:</span> Formal Attire
                  </p>
                  <p className="text-foreground">
                    <span className="font-medium">Parking:</span> Complimentary valet available
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-3xl text-foreground mb-4">Accommodations</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We have reserved a block of rooms at the Silverado Resort for our guests. Please use the booking code
                  SARAHMICHAEL2025 when making your reservation.
                </p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Your Stay</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

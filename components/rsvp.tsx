"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { ref, isVisible } = useScrollAnimation(0.1)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "RSVP Received!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div ref={ref} className="text-center mb-16">
            <h2
              className={`font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              RSVP
            </h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p
              className={`text-lg text-muted-foreground transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Please respond by May 1st, 2025
            </p>
          </div>

          <Card
            className={`p-8 md:p-12 bg-card border-border transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="space-y-3">
                <Label>Will you be attending?</Label>
                <RadioGroup defaultValue="yes" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-normal cursor-pointer">
                      Joyfully accepts
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-normal cursor-pointer">
                      Regretfully declines
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input id="guests" type="number" min="1" max="5" defaultValue="1" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary">Dietary Restrictions</Label>
                <Textarea
                  id="dietary"
                  placeholder="Please let us know of any dietary restrictions or allergies"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message to the Couple (Optional)</Label>
                <Textarea id="message" placeholder="Share your well wishes or a favorite memory" rows={4} />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

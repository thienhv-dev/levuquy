"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Home, Plane } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Registry() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="registry" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={ref} className="text-center mb-16">
            <h2
              className={`font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              Registry
            </h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p
              className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we
              have registered at the following locations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card
              className={`p-8 text-center bg-card border-border hover:shadow-lg transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-foreground mb-4">Crate & Barrel</h3>
              <p className="text-sm text-muted-foreground mb-6">Home essentials for our new life together</p>
              <Button variant="outline" className="w-full bg-transparent">
                View Registry
              </Button>
            </Card>

            <Card
              className={`p-8 text-center bg-card border-border hover:shadow-lg transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Home className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-foreground mb-4">Williams Sonoma</h3>
              <p className="text-sm text-muted-foreground mb-6">Kitchen and dining favorites</p>
              <Button variant="outline" className="w-full bg-transparent">
                View Registry
              </Button>
            </Card>

            <Card
              className={`p-8 text-center bg-card border-border hover:shadow-lg transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Plane className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-foreground mb-4">Honeymoon Fund</h3>
              <p className="text-sm text-muted-foreground mb-6">Help us create memories in Italy</p>
              <Button variant="outline" className="w-full bg-transparent">
                Contribute
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

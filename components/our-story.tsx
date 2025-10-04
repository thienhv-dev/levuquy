import { Card } from "@/components/ui/card"

export function OurStory() {
  return (
    <section id="our-story" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance">Our Story</h2>
            <div className="h-px w-24 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-widest text-primary">How We Met</div>
                <h3 className="font-serif text-3xl text-foreground">A Coffee Shop Encounter</h3>
                <p className="text-muted-foreground leading-relaxed">
                  It was a rainy Tuesday morning in October 2019. Sarah was rushing to grab her usual latte before work
                  when she accidentally bumped into Michael, spilling coffee all over his laptop. What started as an
                  embarrassing moment turned into a three-hour conversation that neither of them wanted to end.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-widest text-primary">The Proposal</div>
                <h3 className="font-serif text-3xl text-foreground">Under the Stars</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Four years later, Michael planned a surprise camping trip to Big Sur. As they watched the sunset from
                  their favorite cliff overlooking the ocean, he got down on one knee. With tears in her eyes and the
                  Pacific Ocean as their witness, Sarah said yes to forever.
                </p>
              </div>
            </Card>
          </div>

          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <img src="/happy-couple-laughing-together-in-nature.jpg" alt="Sarah and Michael" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

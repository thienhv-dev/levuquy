import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <p className="font-serif text-2xl text-foreground">Sarah & Michael</p>
            <Heart className="h-5 w-5 text-primary fill-primary" />
          </div>
          <p className="text-sm text-muted-foreground">June 15, 2025 • Napa Valley, California</p>
          <p className="text-xs text-muted-foreground">
            For questions, please contact us at{" "}
            <a href="mailto:wedding@sarahandmichael.com" className="text-primary hover:underline">
              wedding@sarahandmichael.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

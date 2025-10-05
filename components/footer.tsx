import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <p className="font-serif text-2xl text-foreground">Thanh Tuyền & Văn Thiện</p>
            <Heart className="h-5 w-5 text-primary fill-primary" />
          </div>
          <p className="font-['Dancing_Script'] text-sm text-muted-foreground">Oct 12, 2025 • Đà Nẵng</p>
        </div>
      </div>
    </footer>
  )
}

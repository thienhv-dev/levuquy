"use client"

import { MapPin, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function VenueCards() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="text-center mb-16">
            <h2
              className={`font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              Địa Điểm Tổ Chức
            </h2>
            <div className="h-px w-24 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trường tiểu học Hoàng Văn Thụ */}
            <Card
              className={`overflow-hidden bg-card border-border transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                <img
                  src="/romantic-couple-portrait-in-vineyard.jpg"
                  alt="Trường tiểu học Hoàng Văn Thụ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <div className="relative border-2 border-primary/20 rounded-lg p-6 mb-6 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card px-4">
                    <p className="font-serif text-sm text-primary">Gia Đình Hai Bên</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    <div className="text-center md:text-left">
                      <h4 className="font-serif text-xl text-primary mb-3 flex items-center justify-center md:justify-start gap-2">
                        <span className="text-2xl">👰</span>
                        <span>Nhà Gái</span>
                      </h4>
                      <div className="space-y-1">
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">Bà:</span> Lệ Thị Thu Hà
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Tổ 5, Thôn Thái Đông, Xã Thăng Trường, TP Đà Nẵng
                        </p>
                      </div>
                    </div>

                    <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-primary/10 pt-6 md:pt-0 md:pl-6">
                      <h4 className="font-serif text-xl text-primary mb-3 flex items-center justify-center md:justify-start gap-2">
                        <span className="text-2xl">🤵</span>
                        <span>Nhà Trai</span>
                      </h4>
                      <div className="space-y-1">
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">Ông:</span> Hồ Cam
                        </p>
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">Bà:</span> Nguyễn Thị Trang
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Số 50, Đường Phạm Cự Lượng, Phường An Hải, TP Đà Nẵng
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg mb-2">Trường tiểu học</p>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Hoàng Văn Thụ</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-left">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Tổ 5 Thôn Thái Đông, Xã Thăng Trường, Thành phố Đà Nẵng</p>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-foreground font-medium">Vào lúc 10:00 AM</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-px flex-1 bg-border" />
                    <p className="font-serif text-2xl text-foreground">Chủ Nhật</p>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <p className="font-serif text-6xl text-primary">12/10</p>
                    <p className="text-3xl text-muted-foreground">2025</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic mt-3">Nhằm ngày 21 tháng 08 năm Ất Tỵ</p>
                </div>
              </div>
            </Card>

            {/* Tại Tư Gia */}
            <Card
              className={`overflow-hidden bg-card border-border transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                <img
                  src="/romantic-couple-portrait-in-vineyard.jpg"
                  alt="Tại Tư Gia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <div className="relative border-2 border-primary/20 rounded-lg p-6 mb-6 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card px-4">
                    <p className="font-serif text-sm text-primary">Gia Đình Hai Bên</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    <div className="text-center md:text-left">
                      <h4 className="font-serif text-xl text-primary mb-3 flex items-center justify-center md:justify-start gap-2">
                        <span className="text-2xl">👰</span>
                        <span>Nhà Gái</span>
                      </h4>
                      <div className="space-y-1">
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">Bà:</span> Lệ Thị Thu Hà
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Tổ 5, Thôn Thái Đông, Xã Thăng Trường, TP Đà Nẵng
                        </p>
                      </div>
                    </div>

                    <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-primary/10 pt-6 md:pt-0 md:pl-6">
                      <h4 className="font-serif text-xl text-primary mb-3 flex items-center justify-center md:justify-start gap-2">
                        <span className="text-2xl">🤵</span>
                        <span>Nhà Trai</span>
                      </h4>
                      <div className="space-y-1">
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">Ông:</span> Hồ Cam
                        </p>
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">Bà:</span> Nguyễn Thị Trang
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Số 50, Đường Phạm Cự Lượng, Phường An Hải, TP Đà Nẵng
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Tại Tư Gia</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-left">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Tổ 5 Thôn Thái Đông, Xã Thăng Trường, Thành phố Đà Nẵng</p>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-foreground font-medium">Vào lúc 09:00 AM</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-px flex-1 bg-border" />
                    <p className="font-serif text-2xl text-foreground">Chủ Nhật</p>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <p className="font-serif text-6xl text-primary">12/10</p>
                    <p className="text-3xl text-muted-foreground">2025</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic mt-3">Nhằm ngày 21 tháng 08 năm Ất Tỵ</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

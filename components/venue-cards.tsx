"use client"

import { MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function VenueCards() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="pt-4 pb-10 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="text-center mb-8">
            <h2
              className={`font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              Địa Điểm Tổ Chức
            </h2>
            <div className="h-px w-24 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card
              className={`overflow-hidden bg-card border-border transition-all duration-1000 h-full ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
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

            <Card
              className={`overflow-hidden bg-card border-border h-full transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="font-serif text-2xl text-foreground mb-4 text-center">Bản Đồ</h3>
                <div className="flex-1 rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.9989626213783!2d108.46192359999999!3d15.645043699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169dfa1a5a13191%3A0x97e4106e8e00fdfc!2zVHLGsOG7nW5nIHRp4buDdSBo4buNYyBIb8OgbmcgVsSDbiBUaOG7pQ!5e0!3m2!1sen!2s!4v1759656583737!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wedding Venue Location"
                  />
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://maps.app.goo.gl/2LCrEL5JaUejeELr5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <MapPin className="h-5 w-5" />
                    Xem bản đồ lớn hơn
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Gift } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { getImagePath } from "@/lib/image-utils"

export function Registry() {
  const [showQRCode, setShowQRCode] = useState(false)

  return (
    <section id="registry" className="py-24 md:py-32" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance">Quà Tặng</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p className="font-['Dancing_Script'] text-lg text-muted-foreground max-w-2xl mx-auto">
              Sự hiện diện của quý khách là món quà quý giá nhất với chúng tôi. <br />Nếu quý khách muốn gửi tặng chúng tôi
              một món quà, xin vui lòng nhấn vào biểu tượng bên dưới.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="p-12 text-center bg-card border-border hover:shadow-lg transition-shadow">
              <button
                onClick={() => setShowQRCode(true)}
                className="flex flex-col items-center gap-4 hover:scale-105 transition-transform"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Gift className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Mừng Cưới</h3>
                <p className="text-sm text-muted-foreground">Nhấn để xem thông tin chuyển khoản</p>
              </button>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-center">Thông Tin Chuyển Khoản</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <img
              src={getImagePath("/qr-code-for-bank-transfer.png")}
              alt="QR Code"
              className="w-64 h-64 border-2 border-border rounded-lg"
            />
            <p className="text-sm text-muted-foreground text-center">Quét mã QR để chuyển khoản</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

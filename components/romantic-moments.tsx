"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { useState } from "react"
import { getImagePath } from "@/lib/image-utils"

export function RomanticMoments() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1)
  const { ref: titleRef2, isVisible: titleVisible2 } = useScrollAnimation(0.1)
  const { ref: quote1Ref, isVisible: quote1Visible } = useScrollAnimation(0.1)
  const { ref: quote2Ref, isVisible: quote2Visible } = useScrollAnimation(0.1)
  const { ref: quote3Ref, isVisible: quote3Visible } = useScrollAnimation(0.1)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <>
      {/* Section 1: Quote with flowing line */}
      <section className="relative py-20 px-4 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <div
            ref={quote1Ref}
            className={`mb-12 transition-all duration-1000 ${
              quote1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
          <div
            ref={titleRef2}
            className={`text-center mb-12 transition-all duration-1000 ${
              titleVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block bg-[#7d3c3c] px-12 py-4 mb-8">
              <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-white tracking-wider">
                [Trọn Vẹn]
              </h2>
            </div>

            <p className="font-['Dancing_Script'] text-xl md:text-3xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto text-right">
              Tên của anh chỉ vỏn vẹn vài chữ
              <br />
              dù có rời rạc, chẳng thành câu
              <br />
              <span className="text-[#8b7355]">nhưng trong tim em luôn ấp ủ</span>
              <br />
              chỉ nguyện bên nhau mãi một đời.
            </p>
          </div>
            <div className="relative w-full max-w-2xl mx-auto mb-8">
              <Image
                src={getImagePath("/DII_3638_UI.jpg")}
                alt="Romantic couple moment"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/DII_3638.jpg"))}
              />
            </div>
          </div>

          <div
            ref={quote2Ref}
            className={`text-center mb-12 transition-all duration-1000 delay-200 ${
              quote2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative inline-block">
              <span className="absolute -left-8 -top-4 text-6xl text-[#8b7355] font-serif">"</span>
              <p className="font-['Dancing_Script'] text-xl md:text-3xl text-[#4a4a4a] leading-relaxed px-8">
                Từ khi gặp em,
                <br />
                mỗi giấc mơ của anh đều có em bên cạnh.
                <br />
                Mỗi câu yêu thương trong sách anh đọc,
                <br />
                đều khiến anh nghĩ về em.
              </p>
              <span className="absolute -right-8 -bottom-4 text-6xl text-[#8b7355] font-serif">"</span>
            </div>
          </div>

          <div className="flex justify-center">
            <svg width="400" height="80" viewBox="0 0 400 80" className="opacity-60">
              <path
                d="M 10 40 Q 100 10, 200 40 T 390 40"
                stroke="#8b7355"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="370" cy="40" r="8" fill="none" stroke="#8b7355" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2: Sau tất cả layout */}
      <section className="relative py-4 pb-10 md:pt-8 md:pb-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block bg-[#7d3c3c] px-12 py-4 mb-8">
              <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-white tracking-wider">
                [Sau tất cả]
              </h2>
            </div>

            <p className="font-['Dancing_Script'] text-xl md:text-3xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto">
              Không cần một ngày đặc biệt nào cả,
              <br />
              vì anh yêu em mỗi phút giây.
              <br />
              <span className="text-[#8b7355]">Tình yêu này chẳng đợi một dịp để bày tỏ,</span>
              <br />
              mà luôn hiện hữu mỗi ngày. 💗💕
            </p>
          </div>

          {/* First row: 2 images side by side */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
            <div className="relative">
              <Image
                src={getImagePath("/ROM_6615_UI.jpg")}
                alt="Couple with bouquet"
                width={500}
                height={700}
                className="w-full h-auto object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/ROM_6615.jpg"))}
              />
            </div>
            <div className="relative">
              <Image
                src={getImagePath("/ROM_7527_UI.jpg")}
                alt="Couple close-up"
                width={500}
                height={700}
                className="w-full h-auto object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/ROM_7527.jpg"))}
              />
            </div>
          </div>

          {/* Second row: 3 images in a grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-8">
            <div className="relative">
              <Image
                src={getImagePath("/ROM_7360_UI.jpg")}
                alt="Formal portrait"
                width={400}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/ROM_7360.jpg"))}
              />
            </div>
            <div className="relative">
              <Image
                src={getImagePath("/DII_4140_UI.jpg")}
                alt="Embracing pose"
                width={400}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/DII_4140.jpg"))}
              />
            </div>
            <div className="relative">
              <Image
                src={getImagePath("/DII_4933_UI.jpg")}
                alt="Playful moment"
                width={400}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/DII_4933.jpg"))}
              />
            </div>
          </div>

          {/* Third row: 1 large image spanning full width */}
          <div className="relative w-full mb-4 md:mb-8">
            <Image
              src={getImagePath("/DII_3457_UI.jpg")}
              alt="Groom lifting bride"
              width={1200}
              height={600}
              className="w-full h-auto max-h-[300px] md:max-h-[500px] object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setLightboxImage(getImagePath("/DII_3457.jpg"))}
            />
          </div>

          {/* Fourth row: 2 images with different sizes */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-8">
            <div className="relative col-span-1">
              <Image
                src={getImagePath("/DII_3899_UI.jpg")}
                alt="With bouquet"
                width={400}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/DII_3899.jpg"))}
              />
            </div>
            <div className="relative col-span-2">
              <Image
                src={getImagePath("/DII_4575_UI.jpg")}
                alt="Intimate moment"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/DII_4575.jpg"))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Asymmetric photo layout */}
      <section className="relative py-4 pb-10 md:pt-8 md:pb-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div
            ref={quote3Ref}
            className={`text-center mb-12 transition-all duration-1000 ${
              quote3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-['Dancing_Script'] text-xl md:text-3xl text-[#4a4a4a] leading-relaxed">
              Anh không phải điểm cuối của tình yêu
              <br />
              mà là động lực để yêu thương,
              <br />
              vì có anh, em đã yêu thế giới này hơn.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 items-start mb-8 md:mb-12">
            <div className="relative md:justify-self-end">
              <Image
                src={getImagePath("/DII_4452_UI.jpg")}
                alt="Couple standing together"
                width={400}
                height={600}
                className="w-full max-w-md h-auto max-h-[400px] md:max-h-[600px] object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/DII_4452.jpg"))}
              />
            </div>
            <div className="relative">
              <Image
                src={getImagePath("/ROM_6984_UI.jpg")}
                alt="Couple embracing"
                width={500}
                height={700}
                className="w-full h-auto max-h-[500px] md:max-h-[700px] object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(getImagePath("/ROM_6984.jpg"))}
              />
            </div>
          </div>

          <div className="relative w-full max-w-3xl mx-auto">
            <Image
              src={getImagePath("/ROM_6818_UI.jpg")}
              alt="Playful couple moment"
              width={800}
              height={600}
              className="w-full h-auto max-h-[600px] md:max-h-[600px] object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setLightboxImage(getImagePath("/ROM_6818.jpg"))}
            />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <Image
            src={lightboxImage || "/placeholder.svg"}
            alt="Full size"
            width={1200}
            height={1600}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  )
}

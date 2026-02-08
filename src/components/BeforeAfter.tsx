"use client";

import Image from "next/image";
import { useState, useEffect } from "react"; // useEffect eklendi
import { useTranslation } from "@/lib/i18n";

const beforeAfterImages = [
  "/images/before-after/ba-1.webp",
  "/images/before-after/ba-2.webp",
  "/images/before-after/ba-3.webp",
  "/images/before-after/ba-4.webp",
  "/images/before-after/ba-5.webp",
  "/images/before-after/ba-6.webp",
  "/images/before-after/ba-7.webp",
  "/images/before-after/ba-8.webp",
  "/images/before-after/ba-9.webp",
  "/images/before-after/ba-10.webp",
  "/images/before-after/ba-11.webp",
  "/images/before-after/ba-12.webp",
  "/images/before-after/ba-13.webp",
];

export default function BeforeAfter() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  // Otomatik geçiş efekti
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 1500); // 3000 ms = 3 saniye

    // Bileşen kapandığında veya güncellendiğinde zamanlayıcıyı temizle
    return () => clearInterval(slideInterval);
  }, [currentSlide]); // currentSlide her değiştiğinde zamanlayıcıyı yeniler

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? beforeAfterImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#0c1015] to-[#151b23]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Carousel */}
          <div className="relative w-full max-w-lg mx-auto md:mx-0">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out" // Geçiş süresi 700ms yapıldı (daha yumuşak)
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {beforeAfterImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <Image
                      src={image}
                      alt={`Before & After ${index + 1}`}
                      width={500}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-[#c9a96e] transition-colors"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-[#c9a96e] transition-colors"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === index ? "bg-[#c9a96e] w-6" : "bg-gray-600"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Text & CTA */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              {t('beforeAfter.title')} <br />
              {t('beforeAfter.titleLine2')} <br />
              {t('beforeAfter.titleLine3')}
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-xl">
              {t('beforeAfter.description')}
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/dentfix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22c55e] px-8 py-4 rounded-full text-white font-bold hover:scale-105 transition-transform shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('beforeAfter.ctaButton')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
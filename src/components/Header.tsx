"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${isScrolled ? "bg-[#0c1015]/95 py-2" : "bg-[#0c1015]/70 py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo-kalkavan.svg"
            alt="Cevre Dental Logo"
            width={150}
            height={60}
            className={`transition-all duration-300 ${isScrolled ? "h-9 md:h-10 w-auto" : "h-12 md:h-14 w-auto"
              }`}
          />
        </div>

        {/* CTA Button */}
        <a
          href="https://api.whatsapp.com/send/?phone=905496807372&text=Can+i+have+more+information+about+dental+treatments+and+prices%3F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-green rounded-full text-white font-semibold flex items-center gap-2 transition-all duration-300 ${isScrolled ? "px-4 py-2 text-sm" : "px-6 py-3 text-base"
            }`}
        >
          {/* Mobil metin: md ekranlarda gizlenir */}
          <span className="md:hidden">{t('header.ctaMobile')}</span>

          {/* Masaüstü metin: mobilde gizlenir, md ve üzerinde görünür */}
          <span className="hidden md:inline">
            {t('header.ctaDesktop')}
          </span>
        </a>
      </div>
    </header>
  );
}
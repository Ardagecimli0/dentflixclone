"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-12 bg-[#1c2530] border-t border-gray-800">
      {/* max-w-7xl ve px-4/6 değerleri logoyu biraz içeride tutar. 
          Görseldeki gibi tam sola yaslamak için padding'i küçülttük. */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Sol Taraf - Logo ve Metin (Tam Sola Hizalı) */}
          <div className="flex flex-col gap-5 items-start">
            <Image
              src="/images/logo-kalkavan.svg"
              alt="Cevre Dental Logo"
              width={200} // Görseldeki gibi biraz daha belirgin olması için artırıldı
              height={70}
              className="h-16 w-auto object-contain -ml-1" // Logo içindeki boşluğu kompanse etmek için -ml-1
            />
            <div className="space-y-1">
              <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
                {t('footer.description')}
              </p>
              <p className="text-gray-500 text-xs pt-2">
                {t('footer.copyright')}
              </p>
            </div>
          </div>

          {/* Sağ Taraf - İletişim Bilgileri (İkon yanı hizalı ve daha ortalı) */}
          <div className="flex flex-col gap-6 md:mt-4 lg:ml-auto lg:max-w-md">
            {/* Adres */}
            <div className="flex items-start gap-4 group">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="text-gray-300 text-sm md:text-base leading-snug">
                {t('footer.address')}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href="mailto:info@dentfixturkey.com" className="text-gray-300 text-sm md:text-base hover:text-white transition-colors">
                {t('footer.email')}
              </a>
            </div>

            {/* Telefon */}
            <div className="flex items-center gap-4 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+905496807372" className="text-gray-300 text-sm md:text-base font-medium hover:text-white transition-colors">
                {t('footer.phone')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
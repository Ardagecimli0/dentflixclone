"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export default function HospitalHotel() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#12171e]"> {/* Üst ve alt boşluk artırıldı */}
      <div className="max-w-7xl mx-auto px-4"> {/* max-w-6xl'den 7xl'e çıkarıldı */}
        <div className="grid md:grid-cols-2 gap-16"> {/* Kartlar arası boşluk artırıldı */}

          {/* Clinic Card */}
          <div className="flex flex-col items-center">
            {/* Resim alanı büyütüldü: max-w-lg */}
            <div className="relative rounded-3xl overflow-hidden mb-8 w-full max-w-lg shadow-2xl border border-transparent hover:border-[#b08d57]/30 transition-all duration-300 hover:-translate-y-4 group">
              <Image
                src="/images/aaa.webp"
                alt="CevreDent Dental Clinic"
                width={600} // Genişlik artırıldı
                height={450} // Yükseklik artırıldı
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-6 right-6 z-10">
                <span className="bg-[#b08d57] px-6 py-2.5 rounded-full text-[#FFFFFF] text-sm font-bold uppercase tracking-widest shadow-lg">
                  {t('hospitalHotel.clinicBadge')}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1015]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="text-center">
              {/* h3 fontu text-xl yapıldı */}
              <h3 className="text-xl md:text-2xl text-white mb-3">
                {t('hospitalHotel.clinicSubtitle')}
              </h3>
              {/* Ana başlık text-3xl yapıldı */}
              <p className="text-[#b08d57] text-2xl md:text-3xl font-extrabold tracking-tight">
                {t('hospitalHotel.clinicName')}
              </p>
            </div>
          </div>

          {/* Hotel Card */}
          <div className="flex flex-col items-center">
            {/* Resim alanı büyütüldü: max-w-lg */}
            <div className="relative rounded-3xl overflow-hidden mb-8 w-full max-w-lg shadow-2xl border border-transparent hover:border-[#b08d57]/30 transition-all duration-300 hover:-translate-y-4 group">
              <Image
                src="/images/hotel.png"
                alt="Istanbul Milord Hotel"
                width={600}
                height={450}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-6 right-6 z-10">
                <span className="bg-[#b08d57] px-6 py-2.5 rounded-full text-[#FFFFFF] text-sm font-bold uppercase tracking-widest shadow-lg">
                  {t('hospitalHotel.hotelBadge')}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1015]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-2xl text-white mb-3">
                {t('hospitalHotel.hotelSubtitle')}
              </h3>
              <p className="text-[#b08d57] text-2xl md:text-3xl font-extrabold tracking-tight">
                {t('hospitalHotel.hotelName')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
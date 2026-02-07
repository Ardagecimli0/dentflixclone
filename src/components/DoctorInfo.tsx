"use client";

import { useTranslation } from "@/lib/i18n";

export default function DoctorInfo() {
  const { t } = useTranslation();

  const roles = [
    {
      title: t('doctorInfo.roles.surgeon.title'),
      description: t('doctorInfo.roles.surgeon.description'),
    },
    {
      title: t('doctorInfo.roles.labTechnician.title'),
      description: t('doctorInfo.roles.labTechnician.description'),
    },
    {
      title: t('doctorInfo.roles.author.title'),
      description: t('doctorInfo.roles.author.description'),
    },
  ];

  // Smooth scroll için yardımcı fonksiyon (Opsiyonel: Global CSS yoksa garantiler)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetId = href?.replace("#", "");
    const elem = document.getElementById(targetId!);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#1c2530] to-[#151b23]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Doctor Video */}
        <div className="max-w-2xl mx-auto mb-12 aspect-video group cursor-pointer">
          <iframe
            src="https://www.youtube.com/embed/EjzJmQbxmPY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#c9a96e]/30"
          />
        </div>

        {/* Roles */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          {roles.map((role, index) => (
            <div key={index}>
              <h3 className="text-[#c9a96e] font-semibold text-lg mb-2">
                {role.title}
              </h3>
              <p className="text-gray-400 text-sm">{role.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-white mb-2">
            {t('doctorInfo.ctaTitle')}
          </p>
          <p className="text-2xl text-[#c9a96e] font-bold mb-6">
            {t('doctorInfo.ctaClinicName')}
          </p>

          {/* Mobile Layout - Vertical */}
          <div className="flex md:hidden flex-col items-center gap-3">
            <a
              href="#contact"
              onClick={handleScroll} // Yumuşak kaydırma tetiklendi
              className="inline-flex items-center justify-center gap-2 w-full max-w-xs px-8 py-4 rounded-full bg-[#c9a96e] text-[#0c1015] font-semibold hover:bg-[#b8986e] transition shadow-lg active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {t('doctorInfo.freeConsultation')}
            </a>
            <span className="text-gray-400 text-sm">{t('doctorInfo.or')}</span>
            <a
              href="https://wa.me/dentfix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full max-w-xs px-8 py-4 rounded-full border-2 border-[#25D366] text-[#25D366] font-semibold hover:bg-[#25D366]/10 transition active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('doctorInfo.whatsapp')}
            </a>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              onClick={handleScroll} // Yumuşak kaydırma tetiklendi
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-600 text-white font-semibold hover:bg-white/5 transition active:scale-95 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {t('doctorInfo.freeConsultation')}
            </a>
            <span className="flex items-center text-gray-400">{t('doctorInfo.or')}</span>
            <a
              href="https://wa.me/dentfix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#25D366] text-[#25D366] font-semibold hover:bg-[#25D366]/10 transition active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('doctorInfo.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
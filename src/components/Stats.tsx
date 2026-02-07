"use client";

import { useTranslation } from "@/lib/i18n";

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: "/images/stats/operations.svg",
      value: t('stats.operations.value'),
      label: t('stats.operations.label'),
    },
    {
      icon: "/images/stats/years.svg",
      value: t('stats.years.value'),
      label: t('stats.years.label'),
    },
    {
      icon: "/images/stats/countries.svg",
      value: t('stats.recommend.value'),
      label: t('stats.recommend.label'),
    },
    {
      icon: "/images/stats/satisfaction.svg",
      value: t('stats.satisfaction.value'),
      label: t('stats.satisfaction.label'),
    },
  ];

  return (
    <section className="py-16 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-6">
        {/* 'w-full' ve 'items-stretch' ile tüm kartların aynı boyda olması sağlandı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {stats.map((stat, index) => (
            <div key={index} className="relative group flex w-full">
              {/* Glow Efekti */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c9a96e]/40 to-[#b08d57]/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Ana Kart - 'flex-1' ile kapsayıcıyı tam doldurur */}
              <div className="relative flex-1 bg-[#151b23] rounded-2xl p-8 text-center border border-gray-800 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#c9a96e]/30 flex flex-col items-center justify-center">
                <img
                  src={stat.icon}
                  alt=""
                  className="w-14 h-14 mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <p className="text-4xl font-bold text-[#c9a96e] mb-4">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
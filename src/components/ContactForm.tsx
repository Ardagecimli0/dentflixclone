"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";
import CountrySelect from "./CountrySelect";
import { validatePhone, getMaxDigits } from "@/lib/phoneValidation";
import { fetchCountryByIP } from "@/lib/geoip";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+90");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [userIp, setUserIp] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    // Fetch country from IP geolocation
    fetchCountryByIP().then((result) => {
      if (result) {
        setCountryCode(result.dialCode);
        setUserIp(result.ip);
      }
    });
  }, []);

  // Validate phone whenever phone or countryCode changes
  useEffect(() => {
    if (phoneTouched && phone.length > 0) {
      const result = validatePhone(countryCode, phone);
      setPhoneError(result.valid ? '' : result.error);
    } else {
      setPhoneError('');
    }
  }, [phone, countryCode, phoneTouched]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // only digits
    setPhone(value);
    if (!phoneTouched) setPhoneTouched(true);
  };

  const handleCountryCodeChange = (val: string) => {
    setCountryCode(val);
    if (phone.length > 0) {
      const result = validatePhone(val, phone);
      setPhoneError(result.valid ? '' : result.error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone before submit
    const phoneResult = validatePhone(countryCode, phone);
    if (!phoneResult.valid) {
      setPhoneError(phoneResult.error);
      setPhoneTouched(true);
      return;
    }

    try {
      const currentPath = window.location.pathname;
      const slug = currentPath.split('/').filter(Boolean)[0] || 'dental-implant-in-turkey';

      const slugToLocale: Record<string, string> = {
        'dental-implant-in-turkey': 'en',
        'dis-implanti-turkiye': 'tr',
        'zahnimplantat-in-der-turkei': 'de',
        'implante-dental-en-turquia': 'es',
        'implant-dentaire-en-turquie': 'fr',
        'impianto-dentale-in-turchia': 'it',
        'implant-stomatologiczny-w-turcji': 'pl',
      };

      const locale = slugToLocale[slug] || 'en';

      const payload = {
        name,
        phone: `${countryCode}${phone}`,
        email,
        lead_source: "Google/Web Form",
        language: locale.toUpperCase(),
        doctor: "DentFix",
        lead_source_detail: "",
      };

      const response = await fetch(`https://zoho.hotelistan.net/api/form-patient`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) window.location.href = `/${slug}/thank-you`;
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const phoneInputBorder = phoneError && phoneTouched
    ? 'border-red-500 focus:border-red-500'
    : 'border-gray-700 focus:border-[#25D366]';

  return (
    <section id="contact" className="py-20 bg-[#0c1015] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Ana Kart: Referanstaki geniş ve oval yapı */}
        <div className="rounded-[3.5rem] border border-gray-700/30 p-8 md:p-14 bg-[#151b23]/60 shadow-2xl backdrop-blur-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Sol Taraf - Form Alanı */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  {t('contactForm.title')}
                </h2>
                <p className="text-gray-400 text-base max-w-md">
                  {t('contactForm.subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="bg-[#1c2530]/80 rounded-[2.5rem] p-8 border border-gray-700/40 shadow-inner space-y-5">
                  <input
                    type="text"
                    placeholder={t('contactForm.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-[#0c1015] border border-gray-700 text-white focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]/20 outline-none transition-all placeholder:text-gray-600"
                    required
                  />

                  <div>
                    <div className="flex gap-3">
                      <CountrySelect
                        value={countryCode}
                        onChange={handleCountryCodeChange}
                        className="w-32 px-4 py-4 rounded-2xl bg-[#0c1015] border border-gray-700 text-white outline-none"
                        dropdownClassName="bg-[#0c1015] border border-gray-700"
                      />
                      <input
                        type="tel"
                        placeholder={t('contactForm.phonePlaceholder')}
                        value={phone}
                        onChange={handlePhoneChange}
                        maxLength={getMaxDigits(countryCode)}
                        className={`flex-1 px-6 py-4 rounded-2xl bg-[#0c1015] border ${phoneInputBorder} text-white outline-none transition-colors`}
                        required
                      />
                    </div>
                    {phoneError && phoneTouched && (
                      <p className="text-red-400 text-sm mt-1 ml-1">{t(phoneError)}</p>
                    )}
                  </div>

                  <input
                    type="email"
                    placeholder={t('contactForm.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-[#0c1015] border border-gray-700 text-white focus:border-[#25D366] outline-none"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] py-5 rounded-2xl text-white font-bold text-xl transition-all active:scale-[0.97] shadow-xl shadow-green-500/20 mt-4"
                  >
                    {t('contactForm.submit')}
                  </button>
                </div>
              </form>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="order-1 lg:order-2 w-full">
              <div className="relative w-full aspect-[4/3] rounded-[3rem] md:rounded-[4rem] overflow-hidden border-2 border-gray-700/20 shadow-2xl bg-[#1c2530] group">
                <Image
                  src="/images/aaa.webp"
                  alt="Clinic Reception"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
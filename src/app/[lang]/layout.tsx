import type { Metadata } from "next";
import "@/app/globals.css";
import { ClientBody } from "@/app/ClientBody";
import { extractLocaleFromSlug } from "@/lib/locale-utils";

// JSON dosyalarını import et
import enDental from "../../../public/locales/en-dental.json";
import trDental from "../../../public/locales/tr-dental.json";
import deDental from "../../../public/locales/de-dental.json";
import esDental from "../../../public/locales/es-dental.json";
import frDental from "../../../public/locales/fr-dental.json";
import itDental from "../../../public/locales/it-dental.json";

// Translations map
const translations: Record<string, typeof enDental> = {
  en: enDental,
  tr: trDental,
  de: deDental,
  es: esDental,
  fr: frDental,
  it: itDental,
};

// Force static generation for Vercel
export const dynamic = 'force-static';

// Dinamik metadata oluştur
// Dinamik metadata oluştur
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = extractLocaleFromSlug(lang);
  const data = translations[locale] || translations.en;

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
  };
}

export async function generateStaticParams() {
  return [
    { lang: 'dental-implant-in-turkey' },          // English
    { lang: 'dis-implanti-turkiye' },              // Turkish
    { lang: 'zahnimplantat-in-der-turkei' },       // German
    { lang: 'implante-dental-en-turquia' },        // Spanish
    { lang: 'implant-dentaire-en-turquie' },       // French
    { lang: 'impianto-dentale-in-turchia' },       // Italian
  ];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // URL slug'dan dil kodunu çıkar (örn: "zahnimplantat-in-der-turkei" -> "de")
  const locale = extractLocaleFromSlug(lang);

  return (
    <html lang={locale}>
      <ClientBody lang={lang}>{children}</ClientBody>
    </html>
  );
}

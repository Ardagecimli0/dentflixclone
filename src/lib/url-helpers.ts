// URL slug'dan locale'e ve locale'den URL slug'a çeviri yardımcıları

export const localeToSlug: Record<string, string> = {
    'en': 'dental-implant-in-turkey',
    'tr': 'dis-implanti-turkiye',
    'de': 'zahnimplantat-in-der-turkei',
    'es': 'implante-dental-en-turquia',
    'fr': 'implant-dentaire-en-turquie',
    'it': 'impianto-dentale-in-turchia',
    'pl': 'implant-stomatologiczny-w-turcji',
};

export const slugToLocale: Record<string, string> = {
    'dental-implant-in-turkey': 'en',
    'dis-implanti-turkiye': 'tr',
    'zahnimplantat-in-der-turkei': 'de',
    'implante-dental-en-turquia': 'es',
    'implant-dentaire-en-turquie': 'fr',
    'impianto-dentale-in-turchia': 'it',
    'implant-stomatologiczny-w-turcji': 'pl',
};

export function getSlugFromPath(pathname: string): string {
    // "/dental-implant-in-turkey" veya "/zahnimplantat-in-der-turkei/thank-you" gibi path'lerden slug çıkar
    const parts = pathname.split('/').filter(Boolean);
    return parts[0] || '';
}

export function getLocaleFromPath(pathname: string): string {
    const slug = getSlugFromPath(pathname);
    return slugToLocale[slug] || 'en';
}

export function getSlugFromLocale(locale: string): string {
    return localeToSlug[locale] || 'dental-implant-in-turkey';
}

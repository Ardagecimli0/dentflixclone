// URL slug'dan dil kodunu çıkar
// Örnekler: 
// "zahnimplantat-in-der-turkei" -> "de"
// "dental-implant-in-turkey" -> "en"
// "implante-dental-en-turquia" -> "es"
export function extractLocaleFromSlug(slug: string): string {
    if (!slug || slug === '') return 'en';

    const validLocales = ['en', 'tr', 'de', 'es', 'fr', 'it'];

    // Eğer direkt dil kodu ise (en, tr, de, es, fr, it)
    if (validLocales.includes(slug)) {
        return slug;
    }

    // URL slug'dan dil kodunu eşleştir
    const slugToLocale: Record<string, string> = {
        'dental-implant-in-turkey': 'en',
        'dis-implanti-turkiye': 'tr',
        'zahnimplantat-in-der-turkei': 'de',
        'implante-dental-en-turquia': 'es',
        'implant-dentaire-en-turquie': 'fr',
        'impianto-dentale-in-turchia': 'it',
    };

    if (slugToLocale[slug]) {
        return slugToLocale[slug];
    }

    return 'en';
}

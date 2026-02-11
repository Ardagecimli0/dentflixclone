// Fetch user's country dial code based on their IP address using free geolocation API

// Map country code (ISO 3166-1 alpha-2) to dial code
const countryToDialCode: Record<string, string> = {
    'AF': '+93', 'AL': '+355', 'DZ': '+213', 'AD': '+376', 'AO': '+244',
    'AR': '+54', 'AM': '+374', 'AU': '+61', 'AT': '+43', 'AZ': '+994',
    'BH': '+973', 'BD': '+880', 'BY': '+375', 'BE': '+32', 'BZ': '+501',
    'BJ': '+229', 'BT': '+975', 'BO': '+591', 'BA': '+387', 'BW': '+267',
    'BR': '+55', 'BN': '+673', 'BG': '+359', 'BF': '+226', 'BI': '+257',
    'KH': '+855', 'CM': '+237', 'CA': '+1', 'CV': '+238', 'CF': '+236',
    'TD': '+235', 'CL': '+56', 'CN': '+86', 'CO': '+57', 'KM': '+269',
    'CR': '+506', 'HR': '+385', 'CU': '+53', 'CY': '+357', 'CZ': '+420',
    'CD': '+243', 'DK': '+45', 'DJ': '+253', 'DO': '+1-809', 'EC': '+593',
    'EG': '+20', 'SV': '+503', 'GQ': '+240', 'ER': '+291', 'EE': '+372',
    'ET': '+251', 'FJ': '+679', 'FI': '+358', 'FR': '+33', 'GA': '+241',
    'GM': '+220', 'GE': '+995', 'DE': '+49', 'GH': '+233', 'GR': '+30',
    'GT': '+502', 'GN': '+224', 'GW': '+245', 'GY': '+592', 'HT': '+509',
    'HN': '+504', 'HK': '+852', 'HU': '+36', 'IS': '+354', 'IN': '+91',
    'ID': '+62', 'IR': '+98', 'IQ': '+964', 'IE': '+353', 'IL': '+972',
    'IT': '+39', 'JM': '+1-876', 'JP': '+81', 'JO': '+962', 'KZ': '+7',
    'KE': '+254', 'KI': '+686', 'KW': '+965', 'KG': '+996', 'LA': '+856',
    'LV': '+371', 'LB': '+961', 'LS': '+266', 'LR': '+231', 'LY': '+218',
    'LI': '+423', 'LT': '+370', 'LU': '+352', 'MK': '+389', 'MG': '+261',
    'MW': '+265', 'MY': '+60', 'MV': '+960', 'ML': '+223', 'MT': '+356',
    'MR': '+222', 'MU': '+230', 'MX': '+52', 'MD': '+373', 'MC': '+377',
    'MN': '+976', 'ME': '+382', 'MA': '+212', 'MZ': '+258', 'MM': '+95',
    'NA': '+264', 'NP': '+977', 'NL': '+31', 'NZ': '+64', 'NI': '+505',
    'NE': '+227', 'NG': '+234', 'NO': '+47', 'OM': '+968', 'PK': '+92',
    'PA': '+507', 'PG': '+675', 'PY': '+595', 'PE': '+51', 'PH': '+63',
    'PL': '+48', 'PT': '+351', 'QA': '+974', 'RO': '+40', 'RU': '+7',
    'RW': '+250', 'SA': '+966', 'SN': '+221', 'RS': '+381', 'SC': '+248',
    'SL': '+232', 'SG': '+65', 'SK': '+421', 'SI': '+386', 'SO': '+252',
    'ZA': '+27', 'KR': '+82', 'SS': '+211', 'ES': '+34', 'LK': '+94',
    'SD': '+249', 'SR': '+597', 'SE': '+46', 'CH': '+41', 'SY': '+963',
    'TW': '+886', 'TJ': '+992', 'TZ': '+255', 'TH': '+66', 'TG': '+228',
    'TO': '+676', 'TT': '+1-868', 'TN': '+216', 'TR': '+90', 'TM': '+993',
    'UG': '+256', 'UA': '+380', 'AE': '+971', 'GB': '+44', 'US': '+1',
    'UY': '+598', 'UZ': '+998', 'VE': '+58', 'VN': '+84', 'YE': '+967',
    'ZM': '+260', 'ZW': '+263',
};

interface GeoResult {
    dialCode: string;
    countryCode: string;
    ip: string;
}

/**
 * Fetches the user's IP geolocation and returns the matching dial code.
 * Falls back gracefully if the API is unavailable.
 */
export async function fetchCountryByIP(): Promise<GeoResult | null> {
    try {
        const response = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
        if (!response.ok) return null;

        const data = await response.json();
        const cc = data.country_code as string; // e.g. "TR", "DE", "PL"
        const ip = data.ip as string;
        const dialCode = countryToDialCode[cc];

        if (dialCode) {
            return { dialCode, countryCode: cc, ip };
        }
        return { dialCode: '+1', countryCode: cc, ip }; // fallback dial code
    } catch {
        return null;
    }
}

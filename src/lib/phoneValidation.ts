// Phone number validation rules per country dial code
// Each rule: minDigits, maxDigits, forbiddenPrefixes (local number after dial code)

interface PhoneRule {
    minDigits: number;
    maxDigits: number;
    forbiddenPrefixes?: string[];
}

const phoneRules: Record<string, PhoneRule> = {
    '+90': { minDigits: 10, maxDigits: 10, forbiddenPrefixes: ['0', '00'] },   // Turkey
    '+44': { minDigits: 10, maxDigits: 10 },                                    // UK
    '+49': { minDigits: 10, maxDigits: 11 },                                    // Germany
    '+33': { minDigits: 9, maxDigits: 9 },                                     // France
    '+34': { minDigits: 9, maxDigits: 9 },                                     // Spain
    '+39': { minDigits: 9, maxDigits: 10 },                                    // Italy
    '+48': { minDigits: 9, maxDigits: 9 },                                     // Poland
    '+1': { minDigits: 10, maxDigits: 10 },                                    // US/Canada
    '+61': { minDigits: 9, maxDigits: 9 },                                     // Australia
    '+91': { minDigits: 10, maxDigits: 10 },                                    // India
    '+86': { minDigits: 11, maxDigits: 11 },                                    // China
    '+81': { minDigits: 10, maxDigits: 10 },                                    // Japan
    '+82': { minDigits: 10, maxDigits: 11 },                                    // South Korea
    '+55': { minDigits: 10, maxDigits: 11 },                                    // Brazil
    '+52': { minDigits: 10, maxDigits: 10 },                                    // Mexico
    '+7': { minDigits: 10, maxDigits: 10 },                                    // Russia/Kazakhstan
    '+31': { minDigits: 9, maxDigits: 9 },                                     // Netherlands
    '+32': { minDigits: 9, maxDigits: 9 },                                     // Belgium
    '+41': { minDigits: 9, maxDigits: 9 },                                     // Switzerland
    '+43': { minDigits: 10, maxDigits: 11 },                                    // Austria
    '+46': { minDigits: 9, maxDigits: 10 },                                    // Sweden
    '+47': { minDigits: 8, maxDigits: 8 },                                     // Norway
    '+45': { minDigits: 8, maxDigits: 8 },                                     // Denmark
    '+358': { minDigits: 9, maxDigits: 10 },                                    // Finland
    '+351': { minDigits: 9, maxDigits: 9 },                                     // Portugal
    '+30': { minDigits: 10, maxDigits: 10 },                                    // Greece
    '+420': { minDigits: 9, maxDigits: 9 },                                     // Czech Republic
    '+36': { minDigits: 9, maxDigits: 9 },                                     // Hungary
    '+40': { minDigits: 9, maxDigits: 9 },                                     // Romania
    '+380': { minDigits: 9, maxDigits: 9 },                                     // Ukraine
    '+375': { minDigits: 9, maxDigits: 9 },                                     // Belarus
    '+971': { minDigits: 9, maxDigits: 9 },                                     // UAE
    '+966': { minDigits: 9, maxDigits: 9 },                                     // Saudi Arabia
    '+20': { minDigits: 10, maxDigits: 10 },                                    // Egypt
    '+27': { minDigits: 9, maxDigits: 9 },                                     // South Africa
    '+234': { minDigits: 10, maxDigits: 10 },                                    // Nigeria
    '+62': { minDigits: 10, maxDigits: 12 },                                    // Indonesia
    '+60': { minDigits: 9, maxDigits: 10 },                                    // Malaysia
    '+66': { minDigits: 9, maxDigits: 9 },                                     // Thailand
    '+84': { minDigits: 9, maxDigits: 10 },                                    // Vietnam
    '+63': { minDigits: 10, maxDigits: 10 },                                    // Philippines
    '+92': { minDigits: 10, maxDigits: 10 },                                    // Pakistan
    '+880': { minDigits: 10, maxDigits: 10 },                                    // Bangladesh
    '+94': { minDigits: 9, maxDigits: 9 },                                     // Sri Lanka
    '+972': { minDigits: 9, maxDigits: 9 },                                     // Israel
    '+964': { minDigits: 10, maxDigits: 10 },                                    // Iraq
    '+98': { minDigits: 10, maxDigits: 10 },                                    // Iran
};

// Default rule for countries not in the list
const defaultRule: PhoneRule = { minDigits: 4, maxDigits: 15 };

function getRule(dialCode: string): PhoneRule {
    return phoneRules[dialCode] || defaultRule;
}

export interface ValidationResult {
    valid: boolean;
    error: string; // translation key
}

/**
 * Validates a local phone number (digits only, no dial code prefix)
 * Returns { valid, error } where error is a translation key like "phoneValidation.tooShort"
 */
export function validatePhone(dialCode: string, localNumber: string): ValidationResult {
    // Strip all non-digit characters for validation
    const digits = localNumber.replace(/\D/g, '');

    if (digits.length === 0) {
        return { valid: false, error: 'phoneValidation.invalid' };
    }

    const rule = getRule(dialCode);

    // Check forbidden prefixes
    if (rule.forbiddenPrefixes) {
        for (const prefix of rule.forbiddenPrefixes) {
            if (digits.startsWith(prefix)) {
                return { valid: false, error: 'phoneValidation.invalidPrefix' };
            }
        }
    }

    if (digits.length < rule.minDigits) {
        return { valid: false, error: 'phoneValidation.tooShort' };
    }

    if (digits.length > rule.maxDigits) {
        return { valid: false, error: 'phoneValidation.tooLong' };
    }

    return { valid: true, error: '' };
}

/**
 * Returns the maximum allowed digits for a given dial code.
 * Used for maxLength on phone input fields.
 */
export function getMaxDigits(dialCode: string): number {
    const rule = getRule(dialCode);
    return rule.maxDigits;
}

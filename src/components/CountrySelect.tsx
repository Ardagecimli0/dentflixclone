import { useState, useRef, useEffect } from "react";
import * as Flags from 'country-flag-icons/react/3x2';

// Define the shape of a country object
interface Country {
    code: string;
    dial: string;
}

const countries: Country[] = [
    { code: 'AF', dial: '+93' },
    { code: 'AL', dial: '+355' },
    { code: 'DZ', dial: '+213' },
    { code: 'AS', dial: '+1-684' },
    { code: 'AD', dial: '+376' },
    { code: 'AO', dial: '+244' },
    { code: 'AI', dial: '+1-264' },
    { code: 'AG', dial: '+1-268' },
    { code: 'AR', dial: '+54' },
    { code: 'AM', dial: '+374' },
    { code: 'AW', dial: '+297' },
    { code: 'AU', dial: '+61' },
    { code: 'AT', dial: '+43' },
    { code: 'AZ', dial: '+994' },
    { code: 'BS', dial: '+1-242' },
    { code: 'BH', dial: '+973' },
    { code: 'BD', dial: '+880' },
    { code: 'BB', dial: '+1-246' },
    { code: 'BY', dial: '+375' },
    { code: 'BE', dial: '+32' },
    { code: 'BZ', dial: '+501' },
    { code: 'BJ', dial: '+229' },
    { code: 'BM', dial: '+1-441' },
    { code: 'BT', dial: '+975' },
    { code: 'BO', dial: '+591' },
    { code: 'BA', dial: '+387' },
    { code: 'BW', dial: '+267' },
    { code: 'BR', dial: '+55' },
    { code: 'IO', dial: '+246' },
    { code: 'VG', dial: '+1-284' },
    { code: 'BN', dial: '+673' },
    { code: 'BG', dial: '+359' },
    { code: 'BF', dial: '+226' },
    { code: 'BI', dial: '+257' },
    { code: 'KH', dial: '+855' },
    { code: 'CM', dial: '+237' },
    { code: 'CA', dial: '+1' },
    { code: 'CV', dial: '+238' },
    { code: 'KY', dial: '+1-345' },
    { code: 'CF', dial: '+236' },
    { code: 'TD', dial: '+235' },
    { code: 'CL', dial: '+56' },
    { code: 'CN', dial: '+86' },
    { code: 'CX', dial: '+61' },
    { code: 'CC', dial: '+61' },
    { code: 'CO', dial: '+57' },
    { code: 'KM', dial: '+269' },
    { code: 'CK', dial: '+682' },
    { code: 'CR', dial: '+506' },
    { code: 'HR', dial: '+385' },
    { code: 'CU', dial: '+53' },
    { code: 'CW', dial: '+599' },
    { code: 'CY', dial: '+357' },
    { code: 'CZ', dial: '+420' },
    { code: 'CD', dial: '+243' },
    { code: 'DK', dial: '+45' },
    { code: 'DJ', dial: '+253' },
    { code: 'DM', dial: '+1-767' },
    { code: 'DO', dial: '+1-809' },
    { code: 'EC', dial: '+593' },
    { code: 'EG', dial: '+20' },
    { code: 'SV', dial: '+503' },
    { code: 'GQ', dial: '+240' },
    { code: 'ER', dial: '+291' },
    { code: 'EE', dial: '+372' },
    { code: 'ET', dial: '+251' },
    { code: 'FK', dial: '+500' },
    { code: 'FO', dial: '+298' },
    { code: 'FJ', dial: '+679' },
    { code: 'FI', dial: '+358' },
    { code: 'FR', dial: '+33' },
    { code: 'PF', dial: '+689' },
    { code: 'GA', dial: '+241' },
    { code: 'GM', dial: '+220' },
    { code: 'GE', dial: '+995' },
    { code: 'DE', dial: '+49' },
    { code: 'GH', dial: '+233' },
    { code: 'GI', dial: '+350' },
    { code: 'GR', dial: '+30' },
    { code: 'GL', dial: '+299' },
    { code: 'GD', dial: '+1-473' },
    { code: 'GU', dial: '+1-671' },
    { code: 'GT', dial: '+502' },
    { code: 'GG', dial: '+44-1481' },
    { code: 'GN', dial: '+224' },
    { code: 'GW', dial: '+245' },
    { code: 'GY', dial: '+592' },
    { code: 'HT', dial: '+509' },
    { code: 'HN', dial: '+504' },
    { code: 'HK', dial: '+852' },
    { code: 'HU', dial: '+36' },
    { code: 'IS', dial: '+354' },
    { code: 'IN', dial: '+91' },
    { code: 'ID', dial: '+62' },
    { code: 'IR', dial: '+98' },
    { code: 'IQ', dial: '+964' },
    { code: 'IE', dial: '+353' },
    { code: 'IM', dial: '+44-1624' },
    { code: 'IL', dial: '+972' },
    { code: 'IT', dial: '+39' },
    { code: 'CI', dial: '+225' },
    { code: 'JM', dial: '+1-876' },
    { code: 'JP', dial: '+81' },
    { code: 'JE', dial: '+44-1534' },
    { code: 'JO', dial: '+962' },
    { code: 'KZ', dial: '+7' },
    { code: 'KE', dial: '+254' },
    { code: 'KI', dial: '+686' },
    { code: 'XK', dial: '+383' },
    { code: 'KW', dial: '+965' },
    { code: 'KG', dial: '+996' },
    { code: 'LA', dial: '+856' },
    { code: 'LV', dial: '+371' },
    { code: 'LB', dial: '+961' },
    { code: 'LS', dial: '+266' },
    { code: 'LR', dial: '+231' },
    { code: 'LY', dial: '+218' },
    { code: 'LI', dial: '+423' },
    { code: 'LT', dial: '+370' },
    { code: 'LU', dial: '+352' },
    { code: 'MO', dial: '+853' },
    { code: 'MK', dial: '+389' },
    { code: 'MG', dial: '+261' },
    { code: 'MW', dial: '+265' },
    { code: 'MY', dial: '+60' },
    { code: 'MV', dial: '+960' },
    { code: 'ML', dial: '+223' },
    { code: 'MT', dial: '+356' },
    { code: 'MH', dial: '+692' },
    { code: 'MR', dial: '+222' },
    { code: 'MU', dial: '+230' },
    { code: 'YT', dial: '+262' },
    { code: 'MX', dial: '+52' },
    { code: 'FM', dial: '+691' },
    { code: 'MD', dial: '+373' },
    { code: 'MC', dial: '+377' },
    { code: 'MN', dial: '+976' },
    { code: 'ME', dial: '+382' },
    { code: 'MS', dial: '+1-664' },
    { code: 'MA', dial: '+212' },
    { code: 'MZ', dial: '+258' },
    { code: 'MM', dial: '+95' },
    { code: 'NA', dial: '+264' },
    { code: 'NR', dial: '+674' },
    { code: 'NP', dial: '+977' },
    { code: 'NL', dial: '+31' },
    { code: 'AN', dial: '+599' },
    { code: 'NC', dial: '+687' },
    { code: 'NZ', dial: '+64' },
    { code: 'NI', dial: '+505' },
    { code: 'NE', dial: '+227' },
    { code: 'NG', dial: '+234' },
    { code: 'NU', dial: '+683' },
    { code: 'KP', dial: '+850' },
    { code: 'MP', dial: '+1-670' },
    { code: 'NO', dial: '+47' },
    { code: 'OM', dial: '+968' },
    { code: 'PK', dial: '+92' },
    { code: 'PW', dial: '+680' },
    { code: 'PS', dial: '+970' },
    { code: 'PA', dial: '+507' },
    { code: 'PG', dial: '+675' },
    { code: 'PY', dial: '+595' },
    { code: 'PE', dial: '+51' },
    { code: 'PH', dial: '+63' },
    { code: 'PN', dial: '+64' },
    { code: 'PL', dial: '+48' },
    { code: 'PT', dial: '+351' },
    { code: 'PR', dial: '+1-787' },
    { code: 'QA', dial: '+974' },
    { code: 'CG', dial: '+242' },
    { code: 'RE', dial: '+262' },
    { code: 'RO', dial: '+40' },
    { code: 'RU', dial: '+7' },
    { code: 'RW', dial: '+250' },
    { code: 'BL', dial: '+590' },
    { code: 'SH', dial: '+290' },
    { code: 'KN', dial: '+1-869' },
    { code: 'LC', dial: '+1-758' },
    { code: 'MF', dial: '+590' },
    { code: 'PM', dial: '+508' },
    { code: 'VC', dial: '+1-784' },
    { code: 'WS', dial: '+685' },
    { code: 'SM', dial: '+378' },
    { code: 'ST', dial: '+239' },
    { code: 'SA', dial: '+966' },
    { code: 'SN', dial: '+221' },
    { code: 'RS', dial: '+381' },
    { code: 'SC', dial: '+248' },
    { code: 'SL', dial: '+232' },
    { code: 'SG', dial: '+65' },
    { code: 'SX', dial: '+1-721' },
    { code: 'SK', dial: '+421' },
    { code: 'SI', dial: '+386' },
    { code: 'SB', dial: '+677' },
    { code: 'SO', dial: '+252' },
    { code: 'ZA', dial: '+27' },
    { code: 'KR', dial: '+82' },
    { code: 'SS', dial: '+211' },
    { code: 'ES', dial: '+34' },
    { code: 'LK', dial: '+94' },
    { code: 'SD', dial: '+249' },
    { code: 'SR', dial: '+597' },
    { code: 'SJ', dial: '+47' },
    { code: 'SZ', dial: '+268' },
    { code: 'SE', dial: '+46' },
    { code: 'CH', dial: '+41' },
    { code: 'SY', dial: '+963' },
    { code: 'TW', dial: '+886' },
    { code: 'TJ', dial: '+992' },
    { code: 'TZ', dial: '+255' },
    { code: 'TH', dial: '+66' },
    { code: 'TL', dial: '+670' },
    { code: 'TG', dial: '+228' },
    { code: 'TK', dial: '+690' },
    { code: 'TO', dial: '+676' },
    { code: 'TT', dial: '+1-868' },
    { code: 'TN', dial: '+216' },
    { code: 'TR', dial: '+90' },
    { code: 'TM', dial: '+993' },
    { code: 'TC', dial: '+1-649' },
    { code: 'TV', dial: '+688' },
    { code: 'VI', dial: '+1-340' },
    { code: 'UG', dial: '+256' },
    { code: 'UA', dial: '+380' },
    { code: 'AE', dial: '+971' },
    { code: 'GB', dial: '+44' },
    { code: 'US', dial: '+1' },
    { code: 'UY', dial: '+598' },
    { code: 'UZ', dial: '+998' },
    { code: 'VU', dial: '+678' },
    { code: 'VA', dial: '+379' },
    { code: 'VE', dial: '+58' },
    { code: 'VN', dial: '+84' },
    { code: 'WF', dial: '+681' },
    { code: 'EH', dial: '+212' },
    { code: 'YE', dial: '+967' },
    { code: 'ZM', dial: '+260' },
    { code: 'ZW', dial: '+263' }
];

interface CountrySelectProps {
    value: string;
    onChange: (value: string) => void;
    className?: string; // Should include width, padding, border, radius, bg, color
    dropdownClassName?: string; // Optional custom dropdown styling
}

export default function CountrySelect({ value, onChange, className, dropdownClassName }: CountrySelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef < HTMLDivElement > (null);

    const selectedCountry = countries.find(c => c.dial === value) || countries[0];
    const SelectedFlag = Flags[selectedCountry.code as keyof typeof Flags];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between gap-2 appearance-none ${className}`}
            >
                <div className="flex items-center gap-2">
                    {SelectedFlag && (
                        <div className="w-5 flex-shrink-0">
                            <SelectedFlag title={selectedCountry.code} className="w-full h-auto rounded-[2px]" />
                        </div>
                    )}
                    <span>{selectedCountry.dial}</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {isOpen && (
                <div className={`absolute top-full left-0 mt-2 w-full max-h-60 overflow-y-auto rounded-lg shadow-xl z-50 border border-gray-700/50 ${dropdownClassName || 'bg-[#1c2530]'}`}>
                    {countries.map((country) => {
                        const Flag = Flags[country.code as keyof typeof Flags];
                        return (
                            <button
                                key={`${country.code}-${country.dial}`}
                                type="button"
                                onClick={() => {
                                    onChange(country.dial);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-white/5 ${value === country.dial ? 'bg-white/10 text-white' : 'text-gray-300'
                                    }`}
                            >
                                {Flag && (
                                    <div className="w-5 flex-shrink-0">
                                        <Flag title={country.code} className="w-full h-auto rounded-[2px]" />
                                    </div>
                                )}
                                <span className="font-medium">{country.code}</span>
                                <span className="text-gray-400 text-sm ml-auto">{country.dial}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

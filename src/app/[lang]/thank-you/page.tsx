"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

export default function ThankYouPage() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#1a1f2e] via-[#151923] to-[#0c1015] flex items-center justify-center px-4">
            <div
                className={`text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {t('thankYou.title')}
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                    {t('thankYou.message')}
                </p>

                {/* Optional: Add a back to home button */}
                <div className="mt-12">
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20"
                    >
                        {t('thankYou.backToHome')}
                    </Link>
                </div>
            </div>
        </main>
    );
}

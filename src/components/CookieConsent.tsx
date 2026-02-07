"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState({
        functional: true, // Always active
        preferences: false,
        statistics: false,
        marketing: false,
    });
    const { t } = useTranslation();

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Show popup after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        const allAccepted = {
            functional: true,
            preferences: true,
            statistics: true,
            marketing: true,
        };
        localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
        setIsVisible(false);
    };

    const handleViewPreferences = () => {
        setShowPreferences(true);
    };

    const handleSavePreferences = () => {
        localStorage.setItem("cookieConsent", JSON.stringify(preferences));
        setIsVisible(false);
    };

    const togglePreference = (key: keyof typeof preferences) => {
        if (key === "functional") return; // Always active
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 animate-fade-in ${showPreferences ? 'max-w-md' : 'max-w-sm'}`}>
            {/* Close button */}
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-[#1e3a5f] text-white hover:bg-[#2a4a6f] transition-colors z-10"
                aria-label="Close"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {!showPreferences ? (
                // Simple consent view
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 pr-8">
                        {t("cookieConsent.title")}
                    </h3>

                    <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                        {t("cookieConsent.description")}
                    </p>

                    <div className="flex gap-3">
                        <button
                            onClick={handleAccept}
                            className="flex-1 px-4 py-2.5 bg-[#1e3a5f] text-white text-sm font-medium rounded-md hover:bg-[#2a4a6f] transition-colors"
                        >
                            {t("cookieConsent.accept")}
                        </button>
                        <button
                            onClick={handleViewPreferences}
                            className="flex-1 px-4 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                        >
                            {t("cookieConsent.viewPreferences")}
                        </button>
                    </div>
                </div>
            ) : (
                // Detailed preferences view
                <div className="p-5">
                    <h3 className="text-base font-bold text-[#1e3a5f] mb-2 pr-8">
                        Manage Consent
                    </h3>

                    <p className="text-[11px] text-gray-600 mb-3 leading-snug">
                        We use cookies to store device information. Consenting allows us to process browsing data.
                    </p>

                    {/* Functional - Always Active */}
                    <div className="mb-2 pb-2 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-bold text-gray-900">Functional</h4>
                            <span className="text-xs font-medium text-[#00C853] bg-[#E8F5E9] px-2 py-0.5 rounded">
                                Always active
                            </span>
                        </div>
                        <p className="text-[11px] text-gray-600 leading-snug">
                            Strictly necessary for enabling requested services.
                        </p>
                    </div>

                    {/* Preferences */}
                    <div className="mb-2 pb-2 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-bold text-gray-900">Preferences</h4>
                            <button
                                onClick={() => togglePreference('preferences')}
                                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${preferences.preferences ? 'bg-[#1e3a5f]' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${preferences.preferences ? 'translate-x-5' : 'translate-x-0.5'
                                        }`}
                                />
                            </button>
                        </div>
                        <p className="text-[11px] text-gray-600 leading-snug">
                            Store preferences not requested by the user.
                        </p>
                    </div>

                    {/* Statistics */}
                    <div className="mb-2 pb-2 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-bold text-gray-900">Statistics</h4>
                            <button
                                onClick={() => togglePreference('statistics')}
                                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${preferences.statistics ? 'bg-[#1e3a5f]' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${preferences.statistics ? 'translate-x-5' : 'translate-x-0.5'
                                        }`}
                                />
                            </button>
                        </div>
                        <p className="text-[11px] text-gray-600 leading-snug">
                            Used exclusively for anonymous statistical purposes.
                        </p>
                    </div>

                    {/* Marketing */}
                    <div className="mb-3 pb-2">
                        <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-bold text-gray-900">Marketing</h4>
                            <button
                                onClick={() => togglePreference('marketing')}
                                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${preferences.marketing ? 'bg-[#1e3a5f]' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${preferences.marketing ? 'translate-x-5' : 'translate-x-0.5'
                                        }`}
                                />
                            </button>
                        </div>
                        <p className="text-[11px] text-gray-600 leading-snug">
                            Create profiles for advertising and tracking.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mb-3">
                        <button
                            onClick={handleAccept}
                            className="flex-1 px-3 py-2 bg-[#1e3a5f] text-white text-xs font-medium rounded-md hover:bg-[#2a4a6f] transition-colors"
                        >
                            Accept
                        </button>
                        <button
                            onClick={handleSavePreferences}
                            className="flex-1 px-3 py-2 bg-white text-gray-700 text-xs font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                        >
                            Save preferences
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 justify-center text-[11px]">
                        <Link href="/cookie-policy" className="text-[#1e3a5f] hover:underline font-medium">
                            Cookie Policy
                        </Link>
                        <Link href="/privacy-policy" className="text-[#1e3a5f] hover:underline font-medium">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
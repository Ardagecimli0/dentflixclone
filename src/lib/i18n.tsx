"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import enDental from "../../public/locales/en-dental.json";
import trDental from "../../public/locales/tr-dental.json";
import deDental from "../../public/locales/de-dental.json";
import esDental from "../../public/locales/es-dental.json";
import frDental from "../../public/locales/fr-dental.json";
import itDental from "../../public/locales/it-dental.json";
import plDental from "../../public/locales/pl-dental.json";
import { extractLocaleFromSlug } from "./locale-utils";

type TranslationData = typeof enDental;

interface I18nContextType {
    t: (key: string) => string;
    tArray: <T>(key: string) => T[];
    tObject: <T>(key: string) => T;
    locale: string;
    setLocale: (locale: string) => void;
    isReady: boolean;
}

const I18nContext = createContext < I18nContextType | undefined > (undefined);

const translations: Record<string, TranslationData> = {
    en: enDental,
    tr: trDental,
    de: deDental,
    es: esDental,
    fr: frDental,
    it: itDental,
    pl: plDental as unknown as TranslationData,
};

function getNestedValue(obj: unknown, path: string): unknown {
    const keys = path.split(".");
    let current: unknown = obj;

    for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path;
        }
    }

    return current;
}

export function I18nProvider({ children, initialLocale }: { children: ReactNode; initialLocale: string }) {
    // URL slug'dan gerçek dil kodunu çıkar
    const actualLocale = extractLocaleFromSlug(initialLocale);
    const [locale, setLocale] = useState(actualLocale);

    // Ensure locale stays in sync if prop changes (e.g. navigation)
    useEffect(() => {
        setLocale(extractLocaleFromSlug(initialLocale));
    }, [initialLocale]);

    const t = useCallback((key: string): string => {
        const value = getNestedValue(translations[locale] || translations.en, key);
        return typeof value === "string" ? value : key;
    }, [locale]);

    const tArray = useCallback(<T,>(key: string): T[] => {
        const value = getNestedValue(translations[locale] || translations.en, key);
        return Array.isArray(value) ? (value as T[]) : [];
    }, [locale]);

    const tObject = useCallback(<T,>(key: string): T => {
        const value = getNestedValue(translations[locale] || translations.en, key);
        return value as T;
    }, [locale]);


    return (
        <I18nContext.Provider value={{ t, tArray, tObject, locale, setLocale, isReady: true }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useTranslation must be used within an I18nProvider");
    }
    return context;
}

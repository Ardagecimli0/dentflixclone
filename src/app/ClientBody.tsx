"use client";

import { I18nProvider } from "@/lib/i18n";
import CookieConsent from "@/components/CookieConsent";

export function ClientBody({ children, lang }: { children: React.ReactNode; lang: string }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      <I18nProvider initialLocale={lang}>
        {children}
        <CookieConsent />
      </I18nProvider>
    </body>
  );
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Desteklenen dil kodları ve URL slug'ları
const supportedRoutes: Record<string, string> = {
    'dental-implant-in-turkey': 'en',              // English
    'dis-implanti-turkiye': 'tr',                  // Turkish
    'zahnimplantat-in-der-turkei': 'de',           // German
    'implante-dental-en-turquia': 'es',            // Spanish
    'implant-dentaire-en-turquie': 'fr',           // French
    'impianto-dentale-in-turchia': 'it',           // Italian
};

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the path is an asset or API call
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/images') ||
        pathname.startsWith('/static') ||
        pathname.includes('.') // file extension
    ) {
        return NextResponse.next();
    }

    // Ana sayfa - direkt geç
    if (pathname === '/') {
        return NextResponse.next();
    }

    // Desteklenen route'lardan biri mi kontrol et
    const routeSlug = pathname.slice(1); // Remove leading /
    if (supportedRoutes[routeSlug]) {
        return NextResponse.next();
    }

    // Desteklenmeyen route - ana sayfaya yönlendir
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

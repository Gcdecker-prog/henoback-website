import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UTM_PASSTHROUGH_KEYS } from '@/lib/gtm-links';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 90; // 90 days

/**
 * Persist inbound campaign UTMs + first landing path for GTM handoff.
 * Example: LinkedIn ad → henobackoffice.com/services?utm_medium=linkedin&utm_campaign=q1
 *          → CTA → GTM intake with medium + campaign + landing_page preserved.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { searchParams, pathname } = request.nextUrl;

  const secure = process.env.NODE_ENV === 'production';

  for (const key of UTM_PASSTHROUGH_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      response.cookies.set(`${COOKIE_PREFIX()}${key}`, value, {
        maxAge: COOKIE_MAX_AGE,
        path: '/',
        sameSite: 'lax',
        secure,
      });
    }
  }

  const existingLanding = request.cookies.get(`${COOKIE_PREFIX()}landing_page`)?.value;
  if (!existingLanding && pathname) {
    response.cookies.set(`${COOKIE_PREFIX()}landing_page`, pathname, {
      maxAge: COOKIE_MAX_AGE,
      path: '/',
      sameSite: 'lax',
      secure,
    });
  }

  return response;
}

function COOKIE_PREFIX() {
  return 'hb_';
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/).*)',
  ],
};

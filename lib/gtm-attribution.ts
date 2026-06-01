import { UTM_PASSTHROUGH_KEYS } from '@/lib/gtm-links';

const COOKIE_PREFIX = 'hb_';

/** Parse attribution cookies set by middleware */
export function parseAttributionCookies(cookieHeader: string | undefined): Record<string, string> {
  if (!cookieHeader) return {};
  const out: Record<string, string> = {};
  for (const part of cookieHeader.split(';')) {
    const [rawKey, ...rest] = part.trim().split('=');
    if (!rawKey?.startsWith(COOKIE_PREFIX)) continue;
    const key = rawKey.slice(COOKIE_PREFIX.length);
    const value = decodeURIComponent(rest.join('='));
    if (key === 'landing_page') {
      out.landing_page = value;
    } else if ((UTM_PASSTHROUGH_KEYS as readonly string[]).includes(key)) {
      out[key] = value;
    }
  }
  return out;
}

/** Client: read hb_* cookies for GTM handoff */
export function readAttributionFromDocument(): {
  inbound: Partial<Record<(typeof UTM_PASSTHROUGH_KEYS)[number], string>>;
  landingPage?: string;
} {
  if (typeof document === 'undefined') return { inbound: {} };

  const inbound: Partial<Record<(typeof UTM_PASSTHROUGH_KEYS)[number], string>> = {};
  let landingPage: string | undefined;

  for (const part of document.cookie.split(';')) {
    const [rawKey, ...rest] = part.trim().split('=');
    if (!rawKey?.startsWith(COOKIE_PREFIX)) continue;
    const key = rawKey.slice(COOKIE_PREFIX.length);
    const value = decodeURIComponent(rest.join('='));
    if (key === 'landing_page') landingPage = value;
    else if ((UTM_PASSTHROUGH_KEYS as readonly string[]).includes(key)) {
      inbound[key as (typeof UTM_PASSTHROUGH_KEYS)[number]] = value;
    }
  }

  return { inbound, landingPage };
}

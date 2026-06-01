import { siteConfig } from '@/lib/site-config';

/** Default attribution — every handoff from this marketing site */
export const GTM_UTM_DEFAULTS = {
  source: 'henoback-www',
  campaign: 'henoback_office',
} as const;

/** Inbound campaign params we forward to GTM (never override `utm_content` on the CTA) */
export const UTM_PASSTHROUGH_KEYS = ['utm_medium', 'utm_term', 'utm_campaign'] as const;

export type GtmUtmParams = {
  campaign?: string;
  medium?: string;
  content?: string;
  term?: string;
};

export type AttributionContext = {
  /** Current page path, e.g. `/about-us` */
  landingPage?: string;
  /** Inbound UTMs from URL or cookies */
  inbound?: Partial<Record<(typeof UTM_PASSTHROUGH_KEYS)[number], string>>;
};

function buildUrl(path: string, utm?: GtmUtmParams, ctx?: AttributionContext): string {
  const base = `${siteConfig.gtmAppUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const url = new URL(base);

  // Handoff source is always this site
  url.searchParams.set('utm_source', GTM_UTM_DEFAULTS.source);

  // Campaign: explicit CTA > inbound > default
  const campaign =
    utm?.campaign ?? ctx?.inbound?.utm_campaign ?? GTM_UTM_DEFAULTS.campaign;
  url.searchParams.set('utm_campaign', campaign);

  const medium = utm?.medium ?? ctx?.inbound?.utm_medium;
  if (medium) url.searchParams.set('utm_medium', medium);

  const term = utm?.term ?? ctx?.inbound?.utm_term;
  if (term) url.searchParams.set('utm_term', term);

  // CTA-level content (page + button) — always set when provided
  if (utm?.content) url.searchParams.set('utm_content', utm.content);

  // GTM can read first marketing page visited in session
  if (ctx?.landingPage) {
    url.searchParams.set('landing_page', ctx.landingPage);
  }

  return url.toString();
}

export function gtmAppUrl(path: string, utm?: GtmUtmParams, ctx?: AttributionContext): string {
  return buildUrl(path, utm, ctx);
}

export function consultationIntakeUrl(utm?: GtmUtmParams, ctx?: AttributionContext): string {
  return buildUrl(
    process.env.NEXT_PUBLIC_GTM_INTAKE_PATH ?? '/intake',
    { content: 'book-consultation', ...utm },
    ctx,
  );
}

export function assessmentUrl(utm?: GtmUtmParams, ctx?: AttributionContext): string {
  return buildUrl(
    '/journeys/outsource',
    { content: 'assessment', ...utm },
    ctx,
  );
}

export function pageCtaUrl(
  pageSlug: string,
  type: 'consultation' | 'assessment' = 'consultation',
  extra?: GtmUtmParams,
  ctx?: AttributionContext,
): string {
  const utm: GtmUtmParams = {
    content: `${pageSlug}-${type === 'consultation' ? 'consultation' : 'assessment'}`,
    ...extra,
  };
  return type === 'consultation'
    ? consultationIntakeUrl(utm, ctx)
    : assessmentUrl(utm, ctx);
}

/** Merge stored / URL attribution into a pre-built GTM href (client-side) */
export function applyAttributionContext(
  gtmHref: string,
  ctx: AttributionContext,
): string {
  try {
    const url = new URL(gtmHref);
    const campaign = ctx.inbound?.utm_campaign;
    if (campaign) url.searchParams.set('utm_campaign', campaign);
    const medium = ctx.inbound?.utm_medium;
    if (medium) url.searchParams.set('utm_medium', medium);
    const term = ctx.inbound?.utm_term;
    if (term) url.searchParams.set('utm_term', term);
    if (ctx.landingPage && !url.searchParams.has('landing_page')) {
      url.searchParams.set('landing_page', ctx.landingPage);
    }
    return url.toString();
  } catch {
    return gtmHref;
  }
}

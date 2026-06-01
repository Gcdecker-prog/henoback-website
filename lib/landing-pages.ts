import { siteConfig } from '@/lib/site-config';
import { GTM_UTM_DEFAULTS } from '@/lib/gtm-links';
import { consultationIntakeUrl, assessmentUrl } from '@/lib/gtm-links';

/** Marketing routes used as campaign landing surfaces (inbound UTMs → cookies → GTM handoff) */
export const landingPages = [
  { path: '/', label: 'Home', slug: 'home' },
  { path: '/about-us', label: 'About / Why Heno', slug: 'about-us' },
  { path: '/services', label: 'Services hub', slug: 'services' },
  { path: '/industries', label: 'Industries hub', slug: 'industries' },
  { path: '/case-studies', label: 'Case studies', slug: 'case-studies' },
  { path: '/get-started', label: 'Get started', slug: 'get-started' },
  { path: '/services/bookkeeping', label: 'Service — Bookkeeping', slug: 'service-bookkeeping' },
  { path: '/services/full-service-accounting', label: 'Service — Full service accounting', slug: 'service-fsa' },
  { path: '/industries/management-consulting', label: 'Industry — Management consulting', slug: 'industry-mc' },
] as const;

export type CampaignLinkParams = {
  medium?: string;
  campaign?: string;
  term?: string;
};

/** Inbound URL for ads/email — middleware stores UTMs + first `landing_page` */
export function buildInboundCampaignUrl(
  path: string,
  params: CampaignLinkParams = {},
): string {
  const url = new URL(path, siteConfig.url);
  if (params.medium) url.searchParams.set('utm_medium', params.medium);
  url.searchParams.set('utm_campaign', params.campaign ?? GTM_UTM_DEFAULTS.campaign);
  if (params.term) url.searchParams.set('utm_term', params.term);
  return url.toString();
}

/** Example GTM intake after visitor clicks through from a landing page */
export function buildExampleGtmHandoff(
  landingPath: string,
  content = 'book-consultation',
  params: CampaignLinkParams = {},
) {
  return consultationIntakeUrl(
    { content, medium: params.medium, campaign: params.campaign, term: params.term },
    { landingPage: landingPath },
  );
}

export function buildExampleAssessmentHandoff(landingPath: string, params: CampaignLinkParams = {}) {
  return assessmentUrl(
    { content: 'assessment', medium: params.medium, campaign: params.campaign },
    { landingPage: landingPath },
  );
}

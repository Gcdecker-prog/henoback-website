const fallbackSiteUrl = 'http://localhost:3000';
const fallbackGtmAppUrl = 'http://localhost:3001';

function trimTrailingSlash(value: string): string {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

export const siteConfig = {
  /** Product name — nav, hero, CTAs */
  name: 'HenoBack Office',
  /** Legal entity — footer only */
  legalEntity: 'Heno BackOffice Services',
  parent: 'IFI Professionals',
  platform: 'Heno',
  copyrightYear: new Date().getFullYear(),

  url: trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl),
  gtmAppUrl: trimTrailingSlash(process.env.NEXT_PUBLIC_GTM_APP_URL ?? fallbackGtmAppUrl),

  positioning:
    'Outsourced accounting, controller support, and automated financial operations for professional service firms.',

  description:
    'HenoBack Office delivers bookkeeping, full-service accounting, CFO outsourcing, and back-office automation built for consulting and professional services firms.',

  contact: {
    phone: '(702) 729-6682',
    phoneE164: '+17027296682',
    email: 'info@HenoBackOffice.com',
  },

  logo: {
    src: '/images/brand/henoback-office-logo.png',
    alt: 'Heno BackOffice',
  },
} as const;

export const primaryCta = {
  label: 'Book a consultation',
} as const;

export const secondaryCta = {
  label: 'Take the assessment',
} as const;

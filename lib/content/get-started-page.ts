import { headerCta, secondaryCta } from '@/lib/site-config';

/** Get Started hub — hands off to GTM assessment + intake (no forms on this site). */
export const getStartedPage = {
  headline: 'Start improving your back office today',
  subheadline:
    'See where your current setup is misaligned—and what it takes to create reliable financial visibility.',
  paths: {
    assessment: {
      title: headerCta.label,
      body: 'A short maturity check personalized to your role and back office needs. Takes about three minutes — free, no commitment.',
      cta: headerCta.label,
    },
    consultation: {
      title: 'Book a consultation',
      body: 'Prefer to talk first? Walk through your setup with our team and identify where structure, reporting, and processes can improve.',
      cta: 'Book a consultation',
    },
    secondaryLabel: secondaryCta.label,
  },
} as const;

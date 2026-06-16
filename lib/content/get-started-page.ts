import { primaryCta } from '@/lib/site-config';

/** Get Started hub — approved messaging refresh (June 2026). */
export const getStartedPage = {
  headline: 'Start improving your back office today',
  subheadline:
    'See where your current setup is misaligned—and what it takes to create reliable financial visibility.',
  paths: {
    consultation: {
      title: primaryCta.label,
      body: 'Talk through your current setup and identify where structure, reporting, and processes can be improved.',
    },
  },
} as const;

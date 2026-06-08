/**
 * Homepage — solutions-first hero for professional service firms.
 */
export const homeMeta = {
  title: 'Outsourced Back Office for Professional Service Firms',
  description:
    'Get the visibility your back office was built to deliver. Most growing firms need reliable insight from their numbers—not more bookkeeping. Heno BackOffice brings structure, consistency, and clarity.',
} as const;

type HeadlineLine = {
  readonly before: string;
  readonly accent?: string;
  readonly accentTone?: 'blue';
};

/** Intentional three-line lockup — accents are color only, not motion targets */
export const homeHero = {
  kicker: 'For professional service firms',
  headlineLines: [
    {
      before: 'Get the\u00a0',
      accent: 'visibility',
      accentTone: 'blue',
    },
    {
      before: 'your back office was',
    },
    {
      before: 'built to deliver',
    },
  ] as const satisfies readonly HeadlineLine[],
  /** Pain + reframe — one scan-friendly paragraph */
  summary:
    'Most growing firms don\u2019t struggle with accounting\u2014they struggle getting reliable insight from their numbers. We turn your back office into one reliable system\u2014not patched processes and reports.',
  outcomes: [
    'Consistent, reliable financial data',
    'Clear visibility into profitability and performance',
    'A back office that works the same way\u2014every time',
  ] as const,
  /** Differentiation pull-quote — after outcomes, before CTAs */
  differentiation: {
    lead: 'Most firms upgrade their system.',
    follow: 'Very few fix how it works.',
  },
  heroTrust: 'Built for consulting, engineering, agencies, and government contractors.',
  primaryCta: 'Explore how it works',
  primaryCtaHref: '/services',
  secondaryCta: 'See what your back office is missing',
} as const;

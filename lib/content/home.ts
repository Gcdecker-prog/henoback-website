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
    'Most growing firms don\u2019t struggle with accounting\u2014they struggle getting reliable insight from their numbers. We turn your back office into one reliable system\u2014not patched processes and disconnected reports.',
  outcomes: [
    'Consistent, reliable financial data',
    'Clear visibility into profitability and performance',
    'A back office that works the same way\u2014every time',
  ] as const,
  /** Differentiation pull-quote — after outcomes, before CTAs */
  differentiation: {
    lead: 'Most firms upgrade their system.',
    follow: 'Very few fix the way it works.',
  },
  heroTrust: 'Built for consulting, engineering, agencies, and government contractors.',
  primaryCta: 'Explore how it works',
  primaryCtaHref: '/services',
  secondaryCta: 'See what your back office is missing',
} as const;

/** Below hero — credentials + alignment story (Heather / Why Heno) */
export const homeWhySection = {
  stats: [
    { value: '20+ years', label: 'Proven accounting experience' },
    { value: 'US-based team', label: 'Employees based in the USA' },
    { value: 'Project-based firms', label: 'Built for how you bill and deliver' },
  ] as const,
  headline: 'Most back offices don\u2019t break\u2014they drift out of alignment',
  pillars: [
    {
      title: 'It starts with clean, consistent data',
      body: 'When your financial data is inconsistent, everything built on top of it breaks. We make sure your numbers are structured, reliable, and usable.',
    },
    {
      title: 'Designed for how project-based firms actually operate',
      body: 'Revenue, delivery, and accounting are connected\u2014so your reporting reflects how your business really runs.',
    },
    {
      title: 'A back office that works the same way\u2014every time',
      body: 'No more workarounds, inconsistent processes, or one-off solutions. Just a system you can rely on.',
    },
  ] as const,
  closing: {
    lead: 'Most companies try to fix this by adding people.',
    follow: 'The real fix is how the system works.',
  },
  imageAlt: 'Professional team reviewing financial operations together',
} as const;

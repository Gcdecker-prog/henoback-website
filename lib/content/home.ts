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
  primaryCta: 'Explore how it works',
  primaryCtaHref: '/services',
  secondaryCta: 'See what your back office is missing',
} as const;

/** Below hero — credentials + alignment story (Heather / Why Heno) */
export const homeWhySection = {
  stats: [
    { value: '20+ years', label: 'Proven accounting experience' },
    { value: 'US-based team' },
    { value: 'Project-based firms', label: 'Built for how you bill and deliver' },
  ] as const,
  headline: 'Most back offices don\u2019t break\u2014they drift out of alignment',
  pillars: [
    {
      title: 'It starts with clean, consistent data',
      body: 'When your financial data is inconsistent, everything built on top of it breaks. We make sure your numbers are structured, reliable, and usable.',
    },
    {
      title: 'Designed for how project-based firms operate',
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

/** Replaces services grid — alignment pillars (Heather) */
export const homeAlignmentSection = {
  headline: 'How Heno BackOffice Creates Alignment',
  pillars: [
    {
      title: 'Financial Foundation',
      body: 'Reliable accounting operations built around clean, usable financial data.',
      linkLabel: 'Explore accounting alignment',
      href: '/services/full-service-accounting',
    },
    {
      title: 'Visibility & Reporting',
      body: 'Reporting structured around how project-based firms operate.',
      linkLabel: 'Explore reporting visibility',
      href: '/services/accounting-analysis',
    },
    {
      title: 'Back Office Operations',
      body: 'Processes and workflows that reduce inconsistency and eliminate workarounds.',
      linkLabel: 'Explore operational consistency',
      href: '/services/expense-process-automation',
    },
    {
      title: 'Strategic Financial Support',
      body: 'Forecasting, planning, and financial insight designed to support decision-making.',
      linkLabel: 'Explore strategic insight',
      href: '/services/cfo-outsourcing',
    },
  ] as const,
  imageAlt: 'Secure, integrated financial systems supporting back office alignment',
} as const;

/** Replaces industries grid — project-based firms band (Heather) */
export const homeIndustriesBand = {
  headline: 'Built for project-based firms',
  intro:
    'Heno BackOffice supports firms where revenue, delivery, and financial operations are tightly connected\u2014and where reliable insight matters.',
  industries: [
    'Consulting & Advisory',
    'Engineering & Architecture',
    'Creative & Marketing Agencies',
    'Technology & IT Services',
    'Government Contracting',
  ] as const,
  imageAlt: 'Professional working with project financials on a laptop',
} as const;

export const homeClosingCta = {
  headline: 'Start transforming your back office today',
  body: 'See where your back office is misaligned—and what it takes to create reliable financial visibility.',
} as const;

export const homePlatformBridge =
  'Structured around the systems modern project-based firms rely on for accounting, planning, reporting, and operational visibility.';

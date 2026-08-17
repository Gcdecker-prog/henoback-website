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
  primaryCta: 'See Your Maturity',
  secondaryCta: 'Explore how it works',
  secondaryCtaHref: '/services',
} as const;

/** Skimmable solution cards — link to services anchors for heatmap tracking */
export const homeSolutionCards = [
  {
    id: 'clean-data',
    title: 'It starts with clean, consistent data',
    body: 'When your financial data is inconsistent, everything built on top of it breaks. We make sure your numbers are structured, reliable, and usable.',
    href: '/services?utm_content=home-solution-clean-data#accounting-alignment',
  },
  {
    id: 'project-firms',
    title: 'Designed for how project-based firms operate',
    body: 'Revenue, delivery, and accounting are connected\u2014so your reporting reflects how your business really runs.',
    href: '/services?utm_content=home-solution-project-firms#reporting-visibility',
  },
  {
    id: 'reliable-system',
    title: 'A back office that works the same way\u2014every time',
    body: 'No more workarounds, inconsistent processes, or one-off solutions. Just a system you can rely on.',
    href: '/services?utm_content=home-solution-reliable-system#operational-consistency',
  },
] as const;

/** Below hero — alignment story (Heather / Why Heno) */
export const homeWhySection = {
  credentials: [
    'US-based team',
    '20+ years',
    'Project-based firms',
  ] as const,
  headline: 'Most back offices don\u2019t break\u2014they drift out of alignment',
  eyebrow: 'Why it matters',
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
      href: '/services#accounting-alignment',
    },
    {
      title: 'Visibility & Reporting',
      body: 'Reporting structured around how project-based firms operate.',
      linkLabel: 'Explore reporting visibility',
      href: '/services#reporting-visibility',
    },
    {
      title: 'Back Office Operations',
      body: 'Processes and workflows that reduce inconsistency and eliminate workarounds.',
      linkLabel: 'Explore operational consistency',
      href: '/services#operational-consistency',
    },
    {
      title: 'Strategic Financial Support',
      body: 'Forecasting, planning, and financial insight designed to support decision-making.',
      linkLabel: 'Explore strategic insight',
      href: '/services#strategic-insight',
    },
  ] as const,
  imageAlt: 'Secure, integrated financial systems supporting back office alignment',
} as const;

/** Clickable alignment cards — synced to AlignmentSystemVisual */
export const homeAlignmentCards = [
  {
    id: 'financial-foundation',
    title: 'Financial Foundation',
    body: 'Reliable accounting operations built around clean, usable financial data.',
    href: '/services?utm_content=home-alignment-foundation#accounting-alignment',
  },
  {
    id: 'visibility-reporting',
    title: 'Visibility & Reporting',
    body: 'Reporting structured around how project-based firms operate.',
    href: '/services?utm_content=home-alignment-reporting#reporting-visibility',
  },
  {
    id: 'back-office-ops',
    title: 'Back Office Operations',
    body: 'Processes and workflows that reduce inconsistency and eliminate workarounds.',
    href: '/services?utm_content=home-alignment-operations#operational-consistency',
  },
  {
    id: 'strategic-support',
    title: 'Strategic Financial Support',
    body: 'Forecasting, planning, and financial insight designed to support decision-making.',
    href: '/services?utm_content=home-alignment-strategic#strategic-insight',
  },
] as const;

export const homeAlignmentVisual = {
  eyebrow: 'What you get',
  title: 'The outcome at each layer',
  summary: 'Hover a layer on the left to see what changes when that part of your back office is aligned.',
} as const;

export type AlignmentOutcome = {
  id: string;
  headline: string;
  subline: string;
  metrics: readonly { label: string; value: string }[];
  visual: 'foundation' | 'visibility' | 'operations' | 'strategic';
};

export const homeAlignmentOutcomes: readonly AlignmentOutcome[] = [
  {
    id: 'financial-foundation',
    headline: 'Books you can close with confidence',
    subline: 'Structured data that holds up under scrutiny — not spreadsheets patched at month-end.',
    metrics: [
      { label: 'Close accuracy', value: '99%+' },
      { label: 'Reconciliation', value: 'Automated' },
      { label: 'Data drift', value: 'None' },
    ],
    visual: 'foundation',
  },
  {
    id: 'visibility-reporting',
    headline: 'Margin by project — not just at month-end',
    subline: 'Reporting that reflects how you bill, deliver, and recognize revenue.',
    metrics: [
      { label: 'Project margin', value: 'In view' },
      { label: 'WIP visibility', value: 'Live' },
      { label: 'Report lag', value: 'Same day' },
    ],
    visual: 'visibility',
  },
  {
    id: 'back-office-ops',
    headline: 'The same workflow — every close',
    subline: 'No more one-off fixes. Processes that run the same way across teams and entities.',
    metrics: [
      { label: 'Process variance', value: 'Low' },
      { label: 'Workarounds', value: 'Gone' },
      { label: 'Handoffs', value: 'Standard' },
    ],
    visual: 'operations',
  },
  {
    id: 'strategic-support',
    headline: 'Forecast and actuals on the same page',
    subline: 'Planning built on numbers you trust — so growth decisions aren\u2019t guesswork.',
    metrics: [
      { label: 'Forecast tie-out', value: 'Tight' },
      { label: 'Planning cycle', value: 'Rolling' },
      { label: 'Board-ready', value: 'Yes' },
    ],
    visual: 'strategic',
  },
] as const;

/** Homepage — project-based firms routed to industry landing pages */
export const homeIndustriesBand = {
  headline: 'Built for project-based firms',
  intro:
    'Heno BackOffice supports firms where revenue, delivery, and financial operations are tightly connected\u2014and where reliable insight matters. Choose your sector to see how we align the back office for your industry.',
  imageAlt: 'Project-based firm financial visibility',
} as const;

export const homeClosingCta = {
  headline: 'Start improving your back\u00a0office today',
  body: 'See where your current setup can improve—and what it takes to create reliable financial visibility.',
} as const;

export const homePlatformBridge =
  'Structured around the systems modern project-based firms rely on for accounting, planning, reporting, and operational visibility.';

/**
 * Services / How It Works hub — approved messaging refresh (June 2026).
 */

export const servicesPage = {
  hero: {
    pageLabel: 'How It Works',
    headline: 'How Heno BackOffice Works',
    subheadline:
      'Most outsourced accounting models focus on completing tasks. Heno focuses on how the entire back office operates.',
  },
  pillars: [
    {
      id: 'accounting-alignment',
      title: 'Financial Foundation',
      body: 'Reliable accounting operations built around clean, usable financial data.',
      linkLabel: 'Explore accounting alignment',
    },
    {
      id: 'reporting-visibility',
      title: 'Visibility & Reporting',
      body: 'Reporting structured around how project-based firms operate.',
      linkLabel: 'Explore reporting visibility',
    },
    {
      id: 'operational-consistency',
      title: 'Back Office Operations',
      body: 'Processes and workflows that reduce inconsistency and eliminate workarounds.',
      linkLabel: 'Explore operational consistency',
    },
    {
      id: 'strategic-insight',
      title: 'Strategic Financial Support',
      body: 'Forecasting, planning, and financial insight designed to support decision-making.',
      linkLabel: 'Explore strategic insight',
    },
  ] as const,
  detailSections: [
    {
      id: 'accounting-alignment',
      headline: "Your data only works if it's structured correctly",
      problem: {
        label: 'Problem:',
        items: ['inconsistent chart of accounts', 'disconnected systems', 'messy historical data'],
      },
      whyItMatters: {
        lead: 'Without aligned accounting',
        beats: [
          'Financial data becomes inconsistent',
          'Reporting becomes unreliable',
          'Every decision built on that data is at risk',
        ],
      },
      whatHenoDoes: {
        label: 'What Heno does:',
        items: ['standardizes structure', 'aligns data flows', 'cleans + organizes inputs'],
      },
      outcome: 'Clean, reliable financial data you can trust',
      visualLabel: 'Standard P&L',
      visualComponent: 'standard-pl' as const,
    },
    {
      id: 'reporting-visibility',
      headline: 'Most reports exist. Very few drive decisions.',
      problem: {
        label: 'Problem:',
        items: ['delayed reporting', 'unclear metrics', 'no operational connection'],
      },
      whyItMatters: {
        lead: 'Without clear visibility',
        beats: [
          'Decisions are delayed',
          'Profitability is unclear',
          'Leadership relies on guesswork—not real data',
        ],
      },
      whatHenoDoes: {
        label: 'What Heno does:',
        items: [
          'builds reporting aligned to operations',
          'connects revenue, labor, delivery',
          'standardizes outputs',
        ],
      },
      outcome: 'Clear visibility into performance and profitability',
      visualLabel: 'Project profitability report',
      visualComponent: 'project-profitability' as const,
    },
    {
      id: 'operational-consistency',
      headline: "When processes aren't consistent, nothing scales",
      problem: {
        label: 'Problem:',
        items: ['manual workarounds', 'inconsistent workflows', 'dependency on individuals'],
      },
      whyItMatters: {
        lead: 'Without consistency',
        beats: [
          'Errors increase',
          'Scaling becomes difficult',
          'The back office depends on people—not systems',
        ],
      },
      whatHenoDoes: {
        label: 'What Heno does:',
        items: ['standardizes workflows', 'automates processes', 'ensures repeatability'],
      },
      outcome: 'A back office that works the same way every time',
      visualLabel: 'Monthly close runbook',
      visualComponent: 'operations' as const,
    },
    {
      id: 'strategic-insight',
      headline: 'Financial insight should guide the business—not follow it',
      problem: {
        label: 'Problem:',
        items: ['reactive reporting', 'no forward visibility', 'disconnected planning'],
      },
      whyItMatters: {
        lead: 'Without forward-looking insight',
        beats: [
          'Businesses react to past performance',
          'Instead of making decisions that drive future growth',
        ],
      },
      whatHenoDoes: {
        label: 'What Heno does:',
        items: ['forecasting', 'planning integration', 'performance tracking'],
      },
      outcome: 'Better decisions, faster growth, reduced risk',
      visualLabel: 'Planning',
      visualComponent: 'planning' as const,
    },
  ] as const,
  cta: {
    headline: 'Start improving your back office today',
    body: 'See where your current setup is misaligned—and what it takes to create reliable financial visibility.',
    primaryLabel: 'Get your back office assessment',
  },
} as const;

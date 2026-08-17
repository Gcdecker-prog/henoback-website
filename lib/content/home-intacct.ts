/**
 * Intacct-focused homepage copy — local revision preview.
 * Extra sections may later move to deeper pages; keep full flow for visual QA.
 */

export const intacctHomeMeta = {
  title: 'Sage Intacct Project Visibility for Project-Based Firms',
  description:
    'You already run Sage Intacct. Heno BackOffice helps project-based firms get the project profitability Intacct is built to deliver—through dimensions, operating rhythm, and hands-on support.',
} as const;

export const intacctHero = {
  line1: 'You already run Sage Intacct.',
  /** nbsp keeps the close from orphaning on wrap */
  line2: 'Get the project profitability Intacct is built to\u00a0deliver.',
  summary:
    'Our team will configure dimensions, tighten the operating rhythm, and stay alongside yours—so project margin shows up clearly in Intacct.',
  outcomes: [
    'Project P&L by dimension',
    'Dashboards leadership can trust',
    'A close and data rhythm that holds',
  ] as const,
  primaryCta: 'See where you stand',
  secondaryCta: 'See how it works',
  secondaryCtaHref: '/services',
  beforeAfter: {
    eyebrow: 'One source of truth',
    sub: 'Our team turns disconnected systems and conflicting reports into one number leadership can trust.',
    beforeLabel: 'Before Heno',
    beforeValue: 'Three conflicting answers',
    afterLabel: 'After Heno',
    afterValue: 'One answer, every time',
  },
} as const;

/** Primary hero dashboard views — full set on desktop; subset on mobile */
export const intacctHeroPrimaryTabIds = [
  'project-profitability',
  'cash-flow',
  'net-income',
] as const;

export const intacctHeroTabs = [
  {
    id: 'project-profitability',
    label: 'Project Profitability',
    shortLabel: 'Project P&L',
    caption: 'Revenue, costs, and net income for every project.',
    chart: 'horizontal' as const,
    series: [
      { name: 'Project A', value: 41, tone: 'orange' as const },
      { name: 'Project B', value: 33, tone: 'navy' as const },
      { name: 'Project C', value: 24, tone: 'blue' as const },
      { name: 'Project D', value: 17, tone: 'sky' as const },
    ],
  },
  {
    id: 'bookings-backlog',
    label: 'Bookings & Backlog',
    shortLabel: 'Bookings',
    caption: "What you've sold vs. what's left to deliver.",
    chart: 'bars-line' as const,
    series: [
      { name: 'Q1', value: 42 },
      { name: 'Q2', value: 55 },
      { name: 'Q3', value: 48 },
      { name: 'Q4', value: 68 },
      { name: 'Q5', value: 74 },
    ],
  },
  {
    id: 'cash-flow',
    label: 'Cash Flow',
    shortLabel: 'Cash Flow',
    caption: 'Inflows, outflows, and the drivers behind them.',
    chart: 'bars-accent' as const,
    series: [
      { name: 'Jan', value: 52 },
      { name: 'Feb', value: 61 },
      { name: 'Mar', value: 48 },
      { name: 'Apr', value: 70 },
      { name: 'May', value: 86, accent: true },
    ],
  },
  {
    id: 'revenue-margin',
    label: 'Revenue & Margin',
    shortLabel: 'Revenue',
    caption: 'Revenue categories, gross margin, and recurring revenue vs. cost.',
    chart: 'bars-curve' as const,
    series: [
      { name: 'Services', value: 58 },
      { name: 'Product', value: 72 },
      { name: 'Support', value: 48 },
      { name: 'License', value: 64 },
      { name: 'Recurring', value: 88, accent: true },
    ],
  },
  {
    id: 'net-income',
    label: 'Net Income',
    shortLabel: 'Net Income',
    caption: 'The bottom line, tracked continuously.',
    chart: 'area' as const,
    series: [
      { name: 'Jan', value: 28 },
      { name: 'Feb', value: 36 },
      { name: 'Mar', value: 33 },
      { name: 'Apr', value: 48 },
      { name: 'May', value: 62 },
      { name: 'Jun', value: 78 },
    ],
  },
] as const;

export const intacctTestimonials = {
  headline: 'Trusted by project-based teams using Intacct',
  intro:
    'What firms say after improving visibility, reporting, and project profitability with Heno in Intacct.',
  items: [
    {
      quote:
        'Having the Heno team support our cloud accounting has been key to giving us the visibility and control we need to keep growing',
      name: 'Shannon Copeland',
      role: 'COO, Professional Services',
      image: '/images/marketing/intacct/shannon-copeland.png',
    },
    {
      quote:
        'Non-profits have unique requirements and having a services partner who are accountants that understand our back-office operational needs for workflow and reporting has been key to our success.',
      name: 'Tola Sanni',
      role: 'CFO, Not For Profit',
      image: '/images/marketing/intacct/tola-sanni.png',
    },
    {
      quote:
        'The Heno expertise in the commercial solar industry is demonstrated by the solutions that we have deployed together that cover Development, EPC and Maintenance & Operations.',
      name: 'Darren Devine',
      role: 'CFO, Solar',
      image: '/images/marketing/intacct/darren-devine.png',
    },
    {
      quote:
        'Working with people who understand the construction lifecycle in terms of construction operations, accounting and planning has been key to the success of our business.',
      name: 'Jaime Kipke',
      role: 'CFO, Construction',
      image: '/images/marketing/intacct/jaime-kipke.png',
    },
    {
      quote:
        'Working with Heno to design and implement our modernized and automated back-office has improved our productivity and decision making.',
      name: 'Ali Diba, Ph.D.',
      role: 'President, Software & Services',
      image: '/images/marketing/intacct/ali-diba.png',
    },
    {
      quote:
        'We improved visibility and efficiency by leveraging outsourced managed accounting and fractional technology transformation services for both our internal accounting and for that of our portfolio companies',
      name: 'Richard Campbell',
      role: 'CFO, Private Equity Firm',
      image: '/images/marketing/intacct/richard-campbell.png',
    },
    {
      quote:
        'The key benefit of using Heno\u2019s CPAs and accountants, to implement our advanced accounting system, was their knowledge of SaaS accounting and operational issues.',
      name: 'Jim FitzGibbons',
      role: 'CFO, Software',
      image: '/images/marketing/intacct/jim-fitzgibbons.png',
    },
    {
      quote:
        'Our accounting and Salesforce automation continues to improve and provide us with the visibility and control we need',
      name: 'Brent Lloyd',
      role: 'VP, Software',
      image: '/images/marketing/intacct/brent-lloyd.png',
    },
  ],
} as const;

export const intacctProblem = {
  headline:
    'You\u2019ve already invested in Intacct. Now let our team unlock the visibility it was built to provide.',
  intro:
    'You moved to Intacct for better visibility into performance, profitability, and growth. With the right structure, reporting, and operating rhythm, Heno and Intacct can deliver it.',
  bullets: [
    'A month-end close that runs with consistency',
    'Clear visibility into project, client, and service-line profitability',
    'Reporting leadership can trust and use to make decisions',
  ] as const,
  body: 'Intacct is a strong platform. Most teams don\u2019t need a new system. They need reporting, processes, and data that align with how the business actually operates.',
  closerLead: 'Keep Intacct. Improve visibility.',
  closerFollow: '',
  image: '/images/marketing/intacct/month-end-stress.jpg',
  imageAlt: 'Business owner reviewing month-end reporting',
  overlayTitle: 'Month-end close',
  overlayStatus: 'Close in progress · Day 14',
} as const;

export const intacctMatters = {
  headline: 'Most back offices don\u2019t break. They\u2019re set up for accounting, not project visibility.',
  cards: [
    {
      title: 'You have the tool. You need the structure.',
      body: 'Without the right data shape, project reporting takes extra work—and decisions wait.',
    },
    {
      title: 'Built for how project firms actually operate.',
      body: 'Revenue, delivery, and accounting stay connected so reporting mirrors the real business.',
    },
    {
      title: 'A back office leadership can trust.',
      body: 'Consistent close rhythm and dashboards that give one clear answer, every time.',
    },
  ] as const,
  calloutTag: 'Mid-implementation or post go-live?',
  calloutBody:
    'If your Intacct rollout is underway\u2014or live but not yet delivering the reporting you expected\u2014our team can help. We step in alongside yours, strengthen the implementation, and get the project visibility the platform is designed to provide.',
  emphasisLead: 'The opportunity is rarely a new system.',
  emphasisFollow:
    'Most often, the biggest gains come from aligned data, consistent processes, and reporting leadership can trust.',
  cta: 'See how we help',
  ctaHref: '/services',
  beforeAfter: {
    eyebrow: 'One source of truth',
    title: 'Before vs after',
    sub: 'Our team turns disconnected systems and conflicting reports into one number leadership can trust.',
    beforeLabel: 'Before Heno',
    beforeValue: 'Three conflicting answers',
    afterLabel: 'After Heno',
    afterValue: 'One answer, every time',
  },
  stat: {
    value: '$50M to over $1B',
    label: 'The range of firms our team has helped scale with stronger back office operations.',
  },
  partnerLogos: [
    {
      src: '/images/marketing/intacct/logo-two-capital.png',
      alt: 'Two Capital Partners',
      width: 140,
      height: 40,
    },
    {
      src: '/images/marketing/intacct/logo-reactivate.png',
      alt: 'Reactivate',
      width: 140,
      height: 40,
    },
  ] as const,
} as const;

export const intacctSolution = {
  headlineBefore: 'The team that turns Intacct into',
  headlineAccent: 'real visibility',
  intro:
    'Heno BackOffice brings the CPAs, Intacct specialists, and data-management experts your business needs—so the system you chose can deliver clear project profitability and real-time reporting.',
  bullets: [
    'Intacct configured and used to its advanced capability',
    'Data management held to the discipline reliable reporting requires',
    'Real-time project dashboards, built for how you actually run',
    'A back office run as an extension of your team, month after month',
  ] as const,
  cta: 'See where you stand',
  image: '/images/marketing/intacct/team-at-work.jpg',
  imageAlt: 'The Heno BackOffice team at work',
} as const;

export const intacctIndustries = {
  headline: 'Heno works with project-based firms.',
  intro:
    'Heno BackOffice supports firms where revenue, delivery, and financial operations are tightly connected, and where reliable insight fuels growth. Choose your industry to explore how we can help.',
  image: '/images/marketing/intacct/project-based-firms.jpg',
  imageAlt: 'Project team reviewing delivery plans and schedules together',
  blurbs: {
    'consulting-advisory': 'Know which engagements and consultants actually drive margin.',
    'engineering-architecture':
      'Real-time cost and margin visibility across long, phased projects.',
    'creative-agencies': 'See which accounts and campaigns are profitable as work happens.',
    'technology-it': 'Unify recurring revenue, projects, and utilization in one view.',
    'government-contracting': 'Compliance-ready, project-level cost tracking and reporting.',
  } as const,
} as const;

export const intacctCaseStudies = {
  headline: 'Back Office Transformations',
  intro:
    'Real firms, real visibility. See how project-based businesses get more from Intacct with a back office built to run on it.',
} as const;

export const intacctTimeline = {
  headline: 'From kickoff to full visibility, in phases.',
  intro:
    'We deliver in clear phases so useful capability comes online early—and builds through day 90. Here’s what typically comes online, and when.',
  phases: [
    {
      label: 'Under 30 Days',
      items: [
        'Cash flow forecasting',
        'Annual operating planning',
        'Workforce planning',
        'Monthly close & consolidation',
        'Financial reporting',
        'Multi-dimensional ad-hoc analysis',
      ],
    },
    {
      label: 'Under 60 Days',
      items: [
        'Long-range planning',
        'Monthly rolling forecasts',
        'Driver-based revenue planning',
        'SaaS bookings waterfall',
        'Project planning',
        'Customer profitability planning',
      ],
    },
    {
      label: 'Under 90 Days',
      items: [
        'Sales & ops planning',
        'Demand planning',
        'Trade promotion planning',
        'SKU-level planning',
        'Territory & quota management',
        'Account segmentation & scoring',
      ],
    },
  ] as const,
} as const;

export const intacctFaq = {
  headline: 'Questions leaders ask before they partner',
  intro:
    'Straight answers to what CEOs, founders, and CFOs want to know before bringing in a back-office partner.',
  items: [
    {
      q: 'How long until we\u2019re up and running?',
      a: 'We move in phases so value shows up early. Within 30 days you typically have core financials working: monthly close, financial reporting, cash flow forecasting, and ad-hoc analysis. By 60 days, rolling forecasts and project planning. By 90 days, fuller sales and operations planning—built in steps you can evaluate along the way.',
    },
    {
      q: 'What is the data visibility assessment?',
      a: 'It maps your back office against our 7-level Data Visibility Model, from disconnected spreadsheets at Level 1 to real-time monitoring and a continual close at Level 7. You see where you stand today, what the next level looks like, and practical steps to get there. It\u2019s how most engagements begin.',
    },
    {
      q: 'We already run Sage Intacct. Do we have to switch systems?',
      a: 'No. Intacct is a strong platform, and we usually recommend keeping it. Our work focuses on configuration, data management, and operating discipline so the system you already chose can deliver the visibility it was built for.',
    },
    {
      q: 'Do we lose control or visibility by outsourcing our accounting?',
      a: 'You keep the oversight and the decisions. Real-time dashboards put project profitability, cash, and margin in front of you and your leadership, while we run the day-to-day with clear reporting and accountability.',
    },
    {
      q: 'What happens to our current finance team during the transition?',
      a: 'We work alongside your people, not around them. Your team stays focused on judgment and decision-making while we add Intacct specialization and data-management depth. Nothing gets dropped in the handoff.',
    },
  ] as const,
} as const;

export const intacctClosingCta = {
  headline: 'Start improving your back\u00a0office today',
  body: 'See where your current setup can improve—and what it takes to create reliable financial visibility.',
  cta: 'Get your back office assessment',
} as const;

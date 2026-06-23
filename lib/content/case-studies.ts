import { media } from '@/lib/content/media';

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyTestimonial = {
  quote: string;
  attribution: string;
  role: string;
};

export type CaseStudyTimelineVisual = 'overview' | 'challenge' | 'solution' | 'results';

export type CaseStudyTimelineStep = {
  id: string;
  label: string;
  title: string;
  body: string;
  outcomeHeadline: string;
  metrics: CaseStudyMetric[];
  visual: CaseStudyTimelineVisual;
};

export type CaseStudy = {
  slug: string;
  title: string;
  clientName: string;
  clientUrl: string;
  clientSince?: string;
  industry: string;
  excerpt: string;
  storyHeadline: string;
  storyIntro: string;
  coreMessage: string;
  heroImage: string;
  services: string[];
  challenge: {
    financial: string;
    businessImpact: string;
  };
  whyUs: {
    vsInHouse: string;
    strengths: string;
  };
  metrics: CaseStudyMetric[];
  timeline: CaseStudyTimelineStep[];
  testimonial: CaseStudyTestimonial;
  outcomes: {
    accuracy: string;
    timeSaved: string;
    costSavings: string;
    decisions: string;
    scaled: string;
    peaceOfMind: string;
  };
  published: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'two-capital',
    title: 'Case Study: TWO Capital',
    clientName: 'TWO Capital',
    clientUrl: 'https://twocp.com/',
    clientSince: '2018',
    industry:
      'Commercial real estate development, residential construction, and franchise operations',
    excerpt:
      'Scaled from $50M to over $1B in assets with aligned accounting operations, connected reporting, and CFO-level financial visibility—without building an in-house finance team.',
    storyHeadline: 'How a $50M firm became a $1B one',
    storyIntro:
      'The same back office team carried TWO Capital from early growth to over a billion in assets. Follow the progression.',
    coreMessage:
      'The company went through very large growth across various distinct businesses where both the systems and accounting was solely performed by our team to support their growth and individual financial reporting.',
    heroImage: media.caseStudies.twoCapital,
    services: [
      'CFO advisory',
      'Clean-up & catch-up',
      'Monthly accounting',
      'Payroll',
      'Reporting',
      'Tax readiness',
      'Technology upgrades',
    ],
    challenge: {
      financial:
        'The client was unable to effectively manage accounting and reporting across multiple commercial real estate properties. They did not have an internal accounting team and preferred to avoid building one in-house. As the business grew, complexity increased due to multiple entities and distinct business lines requiring consolidated oversight and accurate reporting.',
      businessImpact:
        'Without a structured accounting function, the client could not produce timely financial statements. This created delays and uncertainty at a critical time, as they were preparing to bring on investors and needed reliable, consistent financial and operational reporting to support investor communications and decision-making.',
    },
    whyUs: {
      vsInHouse:
        'They did not have the staff nor finances to build the systems on their own and our unique ability to perform the accounting and manage the systems regardless of needs freed the owners up to focus on the growth of their business and not on the systems or accounting or reporting creations.',
      strengths:
        'Skills around technology, integrations and financial knowledge across various verticals supported their accelerated growth and distinct businesses.',
    },
    metrics: [
      { value: '75%', label: 'Cut bookkeeping time' },
      { value: '40%', label: 'Reduced accounting costs' },
      { value: '100%', label: 'On-time, reliable reporting' },
    ],
    timeline: [
      {
        id: 'overview',
        label: 'Client overview',
        title: 'A $50M firm on the path to $1B',
        body: 'The company went through very large growth across various distinct businesses where both the systems and accounting was solely performed by our team to support their growth and individual financial reporting.',
        outcomeHeadline: 'Multi-entity growth without an in-house finance team',
        metrics: [
          { value: '$50M', label: 'Starting scale' },
          { value: '$1B+', label: 'Assets today' },
          { value: '2018', label: 'Partnership began' },
        ],
        visual: 'overview',
      },
      {
        id: 'challenge',
        label: 'The challenge',
        title: 'Growth without an in-house finance team',
        body: 'The client was unable to effectively manage accounting and reporting across multiple commercial real estate properties. Without a structured accounting function, they could not produce timely financial statements—creating delays and uncertainty as they prepared to bring on investors.',
        outcomeHeadline: 'Reporting could not keep up with the business',
        metrics: [
          { value: 'Delayed', label: 'Financial close' },
          { value: 'No team', label: 'In-house finance' },
          { value: 'Elevated', label: 'Investor risk' },
        ],
        visual: 'challenge',
      },
      {
        id: 'solution',
        label: 'Why Heno worked',
        title: 'One team across systems, accounting, and reporting',
        body: 'They did not have the staff nor finances to build the systems on their own. Our unique ability to perform the accounting and manage the systems regardless of needs freed the owners up to focus on growth—not on building an in-house finance team.',
        outcomeHeadline: 'One partner across systems and books',
        metrics: [
          { value: 'Unified', label: 'Systems layer' },
          { value: 'Fractional', label: 'CFO depth' },
          { value: 'Zero lag', label: 'Ramp-up time' },
        ],
        visual: 'solution',
      },
      {
        id: 'results',
        label: 'Operational outcomes',
        title: 'Scaled to over $1B without adding finance headcount',
        body: 'Financial reports and dashboards have allowed them to grow to over $1 billion in assets. During their growth they still have not added anyone to their financial or technical team as this has been entirely managed by our team.',
        outcomeHeadline: 'Scale without building a finance department',
        metrics: [
          { value: '75%', label: 'Bookkeeping time cut' },
          { value: '40%', label: 'Accounting costs down' },
          { value: '100%', label: 'On-time reporting' },
        ],
        visual: 'results',
      },
    ],
    testimonial: {
      quote:
        'We scaled past a billion in assets without building an in-house finance team. Heno delivered investor-grade reporting when the business needed it—not months later.',
      attribution: 'TWO Capital leadership',
      role: 'Commercial real estate & franchise operations',
    },
    outcomes: {
      accuracy: 'Highly detailed blended financial and operations data.',
      timeSaved:
        'Delivery of timely financials and reports that allows the executive team to stay nimble.',
      costSavings:
        'Services on a fixed fee so they know monthly costs like employees — developed our long-term relationship.',
      decisions:
        'Financial reports and dashboards have allowed them to grow to over $1 billion in assets.',
      scaled:
        'During their growth they still have not added anyone to their financial or technical team as this has been entirely managed by our team.',
      peaceOfMind:
        'They are freed to focus on the business and do not need to manage any technical or financial personnel. Reduces areas they have to manage during their growth.',
    },
    published: true,
  },
  {
    slug: 'linea-energy',
    title: 'Case Study: Linea Energy',
    clientName: 'Linea Energy',
    clientUrl: 'https://www.lineaenergy.com',
    industry: 'Renewables development',
    excerpt:
      'Project-level financial visibility and connected planning designed to support fast-moving capital deployment using Heno operational methodologies.',
    storyHeadline: 'From startup capital to connected project finance',
    storyIntro:
      'Linea Energy needed investor-grade visibility from day one. Here is how the back office kept pace with capital deployment.',
    coreMessage:
      'Rapidly deployed completely connected financial and planning environments with experienced accounting that managed and cleaned books immediately with no ramp-up time.',
    heroImage: media.caseStudies.lineaEnergy,
    services: [
      'Accounting & planning back office',
      'Technology infrastructure',
      'CFO partnership',
      'Project-level reporting',
      'Forecasting & capital planning',
    ],
    challenge: {
      financial:
        'They were a startup which received a large amount of startup capital to build out a renewable development company. They had no infrastructure for producing financials (project or business) or forecasting at a project and cost code level.',
      businessImpact:
        'Lack of visibility in projects or forecast spend to their investment partners. Hours spent producing information on spreadsheets.',
    },
    whyUs: {
      vsInHouse:
        'We had team members which understood system design and integration, financials, and planning approaches and models all working under one standardized approach of Heno System Methodologies. They did not have the skill set to design or build or manage the complex infrastructure they needed.',
      strengths:
        'Rapidly deployed completely connected financial and planning environments. Experienced accounting team which picked up and managed and cleaned their books immediately with no ramp up time. We understood their business needs based on experiences in professional services and renewable energy industries.',
    },
    metrics: [
      { value: '75%', label: 'Cut bookkeeping time' },
      { value: '40%', label: 'Reduced accounting costs' },
      { value: '70%+', label: 'Tech system cost decrease' },
    ],
    timeline: [
      {
        id: 'overview',
        label: 'Client overview',
        title: 'Startup capital, zero finance infrastructure',
        body: 'They were a startup which received a large amount of startup capital to build out a renewable development company. They had no infrastructure for producing financials or forecasting at a project and cost code level.',
        outcomeHeadline: 'Capital deployed before systems existed',
        metrics: [
          { value: 'Startup', label: 'Company stage' },
          { value: 'Project & cost-code', label: 'Reporting depth' },
          { value: 'Day one', label: 'Investor timeline' },
        ],
        visual: 'overview',
      },
      {
        id: 'challenge',
        label: 'The challenge',
        title: 'No visibility for investment partners',
        body: 'Lack of visibility in projects or forecast spend to their investment partners. Hours spent producing information on spreadsheets instead of moving the business forward.',
        outcomeHeadline: 'Spreadsheets could not keep investors informed',
        metrics: [
          { value: 'Limited', label: 'Project visibility' },
          { value: 'Spreadsheets', label: 'Forecasting mode' },
          { value: 'Hours weekly', label: 'Manual reporting' },
        ],
        visual: 'challenge',
      },
      {
        id: 'solution',
        label: 'Why Heno worked',
        title: 'Connected financial and planning environments',
        body: 'We rapidly deployed completely connected financial and planning environments with experienced accounting that managed and cleaned books immediately—with no ramp-up time.',
        outcomeHeadline: 'Finance and planning live from the start',
        metrics: [
          { value: 'Connected', label: 'Finance + planning' },
          { value: 'Immediate', label: 'Books online' },
          { value: 'One partner', label: 'Heno model' },
        ],
        visual: 'solution',
      },
      {
        id: 'results',
        label: 'Operational outcomes',
        title: 'Continual investment enabled by clear actuals and forecasts',
        body: 'Visibility in actuals and forecasted plans have enabled continual investment to grow their renewables development firm while keeping financial and planning teams small.',
        outcomeHeadline: 'Invest with confidence in the numbers',
        metrics: [
          { value: '75%', label: 'Bookkeeping time cut' },
          { value: '40%', label: 'Accounting costs down' },
          { value: '70%+', label: 'Tech spend reduced' },
        ],
        visual: 'results',
      },
    ],
    testimonial: {
      quote:
        'Our investors expected project-level numbers from day one—cost code, forecast, actuals. Heno stood up connected finance and planning before we had the team to build it ourselves.',
      attribution: 'Linea Energy leadership',
      role: 'Renewables development',
    },
    outcomes: {
      accuracy:
        'Were not able to deliver clear financials and forecasts to their investor partners timely until we began managing their processes.',
      timeSaved:
        'Significant time saved on the design, management and running of their financial and planning system due to our teams deep understanding of the designs and technologies.',
      costSavings:
        'Over 70% decrease in developing and managing their technology systems as well as reduction in accounting/planning personnel due to technology efficiencies gained in their connected system and streamlined accounting/planning processes.',
      decisions:
        'Visibility in actuals and forecasted plans have enabled continual investment to grow their renewables development firm.',
      scaled:
        'Kept financial and planning teams small as the firm continued to grow — leveraged our fractional services across a wide range of skill sets.',
      peaceOfMind:
        'Our team handles the financial and planning processes and they know that they have coverage even during vacations or unplanned absences of employees because of our teams knowledge of their business and processes.',
    },
    published: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.published && c.slug === slug);
}

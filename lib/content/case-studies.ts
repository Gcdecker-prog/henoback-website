import { media } from '@/lib/content/media';

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  clientName: string;
  clientUrl: string;
  clientSince?: string;
  industry: string;
  excerpt: string;
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
      { value: 'First time', label: 'Accurate monthly reporting' },
    ],
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
    title: 'Case Studies: Linea Energy',
    clientName: 'Linea Energy',
    clientUrl: 'https://www.lineaenergy.com',
    industry: 'Renewables development',
    excerpt:
      'Project-level financial visibility and connected planning designed to support fast-moving capital deployment using Heno operational methodologies.',
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

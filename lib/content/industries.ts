/** Industry landing pages — funnel entry points from homepage and campaigns */
export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  image: string;
};

export const industries: Industry[] = [
  {
    slug: 'consulting-advisory',
    name: 'Consulting & Advisory',
    shortName: 'Consulting',
    headline: 'Back office alignment for consulting firms',
    summary:
      'Revenue, delivery, and financial operations stay connected\u2014so margins, utilization, and project profitability stay visible as you scale.',
    image: '/images/industries/management-consulting.jpg',
  },
  {
    slug: 'engineering-architecture',
    name: 'Engineering & Architecture',
    shortName: 'Engineering',
    headline: 'Financial visibility for project-based A&E firms',
    summary:
      'Job costing, WIP, and consolidated reporting structured around how your teams bill, deliver, and close projects.',
    image: '/images/industries/engineering-architecture-environmental.jpg',
  },
  {
    slug: 'creative-agencies',
    name: 'Creative & Marketing Agencies',
    shortName: 'Agencies',
    headline: 'Back office built for agency economics',
    summary:
      'Connect retainers, projects, and pass-through costs to reporting you can trust\u2014without spreadsheet workarounds.',
    image: '/images/industries/creative-agencies.jpg',
  },
  {
    slug: 'technology-it',
    name: 'Technology & IT Services',
    shortName: 'Technology',
    headline: 'Scalable finance ops for tech services firms',
    summary:
      'From recurring revenue to fixed-fee delivery, one reliable system for profitability, forecasting, and investor-ready reporting.',
    image: '/images/industries/technology-it-services.jpg',
  },
  {
    slug: 'government-contracting',
    name: 'Government Contracting',
    shortName: 'GovCon',
    headline: 'Compliance-ready back office for GovCon',
    summary:
      'Structured accounting, job-level visibility, and audit-ready reporting designed for contract-based revenue.',
    image: '/images/industries/government-contracting.jpg',
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

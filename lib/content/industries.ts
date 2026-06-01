export type Industry = {
  slug: string;
  title: string;
  summary: string;
};

/** Nine industries from henobackoffice.com home — source of truth for v1 */
export const industries: Industry[] = [
  {
    slug: 'management-consulting',
    title: 'Management Consulting',
    summary:
      'Accounting systems built for visibility, control, and scalability — complex billing and project-based revenue.',
  },
  {
    slug: 'project-accounting',
    title: 'Project Accounting',
    summary:
      'Real-time insight into how each project performs financially across timelines, budgets, and billing structures.',
  },
  {
    slug: 'creative-agencies',
    title: 'Creative Agencies',
    summary:
      'Accounting built for flexibility, accuracy, and growth across clients, retainers, campaigns, and freelancers.',
  },
  {
    slug: 'technology-it-services',
    title: 'Technology & IT Services',
    summary:
      'Systems for recurring revenue, project work, subscriptions, and expanding teams — accuracy and visibility at scale.',
  },
  {
    slug: 'human-resources-talent',
    title: 'Human Resources & Talent Services',
    summary:
      'People-first organizations supported with transparent, compliant, sustainable financial operations.',
  },
  {
    slug: 'engineering-architecture-environmental',
    title: 'Engineering, Architecture & Environmental',
    summary:
      'Long timelines, detailed budgets, regulatory requirements — accounting designed for compliance and project visibility.',
  },
  {
    slug: 'government-contracting',
    title: 'Government Contracting',
    summary:
      'Contract-specific cost tracking and audit readiness in highly regulated environments.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    summary:
      'Multiple revenue streams, assets, and entities — accounting built for transparency and scalability.',
  },
  {
    slug: 'specialized-advisory-creative',
    title: 'Specialized Advisory & Creative Niches',
    summary:
      'Flexible accounting for niche advisory, creative, and IP-driven business models.',
  },
];

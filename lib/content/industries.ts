export type Industry = {
  slug: string;
  title: string;
  summary: string;
  /** Word-for-word from henobackoffice.com/industries */
  body: string;
};

/** Nine industries — order matches live industries page */
export const industries: Industry[] = [
  {
    slug: 'management-consulting',
    title: 'Management Consulting',
    summary:
      'Accounting systems built for visibility, control, and scalability — complex billing and project-based revenue.',
    body: 'Management consulting firms operate on expertise, time, and trust—but complex billing structures, project-based revenue, and growing teams can quickly complicate financial management. We specialize in supporting management consulting firms with accounting systems built for visibility, control, and scalability.',
  },
  {
    slug: 'project-accounting',
    title: 'Project Accounting',
    summary:
      'Real-time insight into how each project performs financially across timelines, budgets, and billing structures.',
    body: 'Project-driven organizations require more than standard accounting. With multiple projects, timelines, budgets, and billing structures, visibility into costs and profitability is essential. We specialize in Project Accounting for businesses that need accurate, real-time insight into how each project performs financially.',
  },
  {
    slug: 'creative-agencies',
    title: 'Creative Agencies',
    summary:
      'Accounting built for flexibility, accuracy, and growth across clients, retainers, campaigns, and freelancers.',
    body: 'Creative agencies move fast—managing multiple clients, retainers, campaigns, and freelancers at the same time. Without the right financial systems, visibility into profitability and cash flow can quickly break down. We specialize in supporting creative agencies with accounting built for flexibility, accuracy, and growth.',
  },
  {
    slug: 'technology-it-services',
    title: 'Technology & IT Services',
    summary:
      'Systems for recurring revenue, project work, subscriptions, and expanding teams — accuracy and visibility at scale.',
    body: 'Technology and IT service companies operate in dynamic, complex environments—balancing recurring revenue, project work, subscription models, and expanding teams. We focus on helping Technology & IT Services firms with accounting systems that provide accuracy, visibility, and scalability.',
  },
  {
    slug: 'human-resources-talent',
    title: 'Human Resources & Talent Services',
    summary:
      'People-first organizations supported with transparent, compliant, sustainable financial operations.',
    body: 'People-first organizations succeed by investing in culture, talent, and impact—but managing finances while prioritizing people can be complex. We specialize in supporting people-first organizations with accounting systems that balance financial responsibility with transparency, compliance, and sustainability.',
  },
  {
    slug: 'engineering-architecture-environmental',
    title: 'Engineering, Architecture & Environmental',
    summary:
      'Long timelines, detailed budgets, regulatory requirements — accounting designed for compliance and project visibility.',
    body: 'Engineering, architecture, and environmental firms manage long project timelines, detailed budgets, regulatory requirements, and multidisciplinary teams. We specialize in supporting engineering, architecture, and environmental firms with accounting systems designed for accuracy, compliance, and project-level visibility.',
  },
  {
    slug: 'government-contracting',
    title: 'Government Contracting',
    summary:
      'Contract-specific cost tracking and audit readiness in highly regulated environments.',
    body: 'Government contractors operate in a highly regulated environment where accuracy, documentation, and compliance are critical. From contract-specific cost tracking to audit readiness, we specialize in supporting government contracting firms with financial systems designed to meet regulatory standards while supporting growth.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    summary:
      'Multiple revenue streams, assets, and entities — accounting built for transparency and scalability.',
    body: 'Real estate and operations-focused businesses manage multiple revenue streams, assets, entities, and ongoing expenses. Without clear financial systems, visibility into performance and cash flow can quickly break down. We specialize in supporting real estate and business operations with accounting built for accuracy, transparency, and scalability.',
  },
  {
    slug: 'specialized-advisory-creative',
    title: 'Specialized Advisory & Creative Niches',
    summary:
      'Flexible accounting for niche advisory, creative, and IP-driven business models.',
    body: 'Specialized advisory and creative niche businesses don’t fit into standard financial models. Whether you’re delivering highly specialized expertise, creative services, or intellectual property–driven work, your financial systems must adapt to how you operate. We specialize in supporting advisory and creative niche firms with flexible, accurate accounting built around your business model.',
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

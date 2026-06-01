/**
 * Central image map — filenames in public/images match WordPress export names.
 */

const serviceImages: Record<string, string> = {
  bookkeeping: '/images/services/bookkeeping.jpg',
  'full-service-accounting': '/images/services/full-service-accounting.jpg',
  'payroll-system-integration': '/images/services/payroll-system-integration.jpg',
  'audit-support': '/images/services/audit-support.jpg',
  'budgeting-forecasting': '/images/services/budgeting-forecasting.jpg',
  'accounting-analysis': '/images/services/accounting-analysis.jpg',
  'cfo-outsourcing': '/images/services/cfo-outsourcing.jpg',
  'accounts-payable-receivable': '/images/services/accounts-payable-receivable.jpg',
  'expense-process-automation': '/images/services/expense-process-automation.jpg',
};

const industryImages: Record<string, string> = {
  'management-consulting': '/images/industries/management-consulting.jpg',
  'project-accounting': '/images/industries/project-accounting.jpg',
  'creative-agencies': '/images/industries/creative-agencies.jpg',
  'technology-it-services': '/images/industries/technology-it-services.jpg',
  'human-resources-talent': '/images/industries/human-resources-talent.jpg',
  'engineering-architecture-environmental':
    '/images/industries/engineering-architecture-environmental.jpg',
  'government-contracting': '/images/industries/government-contracting.jpg',
  'real-estate': '/images/industries/real-estate.jpg',
  'specialized-advisory-creative': '/images/industries/specialized-advisory-creative.jpg',
};

export const media = {
  brand: {
    logo: '/images/brand/henoback-office-logo.png',
    logoAlt: 'Heno BackOffice',
  },
  hero: {
    homePortrait: '/images/hero/home-hero-professional.png',
    homePortraitAlt:
      'Finance professionals reviewing reports, charts, and accounting data together',
  },
  marketing: {
    whyUs: '/images/marketing/why-us.png',
    servicesBackOffice: '/images/marketing/services-back-office.jpg',
  },
  team: {
    jimFrench: '/images/team/jim-french.png',
    kristinaCostello: '/images/team/kristina-costello.png',
    charityHurt: '/images/team/charity-hurt.png',
  },
  caseStudies: {
    twoCapital: '/images/case-studies/two-capital-hero.png',
    lineaEnergy: '/images/case-studies/linea-energy-hero.png',
  },
  serviceImage: (slug: string) => serviceImages[slug] ?? `/images/services/${slug}.jpg`,
  industryImage: (slug: string) => industryImages[slug] ?? `/images/industries/${slug}.jpg`,
} as const;

export function getServiceImage(slug: string): string {
  return media.serviceImage(slug);
}

export function getIndustryImage(slug: string): string {
  return media.industryImage(slug);
}

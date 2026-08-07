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

export const media = {
  brand: {
    logo: '/images/brand/henoback-office-logo.png',
    logoAlt: 'Heno BackOffice',
    /** Transparent ring mark — source: scripts/process-heno-mark.mjs */
    mark: '/images/brand/heno-o-logo.png',
    markSm: '/images/brand/heno-o-logo-48.png',
    markApple: '/images/brand/heno-o-logo-180.png',
  },
  hero: {
    homePortrait: '/images/hero/home-hero-professional.png',
    homePortraitAlt:
      'Finance professionals reviewing reports, charts, and accounting data together',
  },
  marketing: {
    whyUs: '/images/industries/project-accounting.jpg',
    servicesBackOffice: '/images/marketing/services-back-office.jpg',
    homeAlignment: '/images/marketing/about-team-collaboration.jpg',
    homeIndustries: '/images/industries/management-consulting.jpg',
    intacct: {
      monthEndStress: '/images/marketing/intacct/month-end-stress.jpg',
      teamAtWork: '/images/marketing/intacct/team-at-work.jpg',
      financeReporting: '/images/marketing/intacct/finance-reporting.jpg',
    },
  },
  dashboards: {
    standardPl: '/images/dashboards/standard-pl.png',
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
} as const;

export function getServiceImage(slug: string): string {
  return media.serviceImage(slug);
}

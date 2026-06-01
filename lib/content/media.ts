/**
 * Central image map — filenames in public/images match WordPress export names.
 * Drop new files into public/images/_incoming/ and ask the agent to sort.
 */

const service = (slug: string) => `/images/services/${slug}.png`;
const industry = (slug: string) => `/images/industries/${slug}.png`;

export const media = {
  brand: {
    logo: '/images/brand/henoback-office-logo.png',
    logoAlt: 'Heno BackOffice',
  },
  /**
   * Hero: contained “competence” visual — financial clarity, not handshake stock.
   * Meta-psychology: specific task imagery outperforms generic corporate poses for B2B trust.
   */
  hero: {
    homePortrait: '/images/services/full-service-accounting.png',
    homePortraitAlt:
      'Finance professionals reviewing accurate reports and charts together',
  },
  marketing: {
    whyUs: '/images/marketing/why-us.png',
  },
  team: {
    jimFrench: '/images/team/jim-french.png',
    kristinaCostello: '/images/team/kristina-costello.svg',
    charityHurt: '/images/team/charity-hurt.svg',
  },
  partners: [
    { src: '/images/partners/partner-1.png', alt: 'Technology partner' },
    { src: '/images/partners/partner-2.png', alt: 'Technology partner' },
    { src: '/images/partners/partner-3.png', alt: 'Technology partner' },
    { src: '/images/partners/partner-4.png', alt: 'Technology partner' },
    { src: '/images/partners/sage-partner.png', alt: 'Sage Partner' },
  ],
  caseStudies: {
    twoCapital: '/images/case-studies/two-capital-hero.png',
    lineaEnergy: '/images/case-studies/linea-energy-hero.png',
  },
  serviceImage: service,
  industryImage: industry,
} as const;

export function getServiceImage(slug: string): string {
  return service(slug);
}

export function getIndustryImage(slug: string): string {
  return industry(slug);
}

/** Customer testimonial / case study clients — logo strip on home */
export type ClientLogo = {
  name: string;
  href?: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  /** Tailwind height class — logos have different aspect ratios */
  logoHeightClass: string;
};

export const homeTrustBand = {
  stat: '$50M to over $1B',
  label: 'The range of firms we\u2019ve scaled the back office for.',
  clientsLabel: 'Case study partners',
} as const;

/** Featured client logos — official white marks on trust strip */
export const testimonialClients: ClientLogo[] = [
  {
    name: 'TWO Capital Partners',
    href: '/case-studies/two-capital',
    imageSrc: '/images/clients/two-capital-logo-white.png',
    imageWidth: 148,
    imageHeight: 40,
    logoHeightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Linea Energy',
    href: '/case-studies/linea-energy',
    imageSrc: '/images/clients/linea-energy-logo-white.png',
    imageWidth: 88,
    imageHeight: 56,
    logoHeightClass: 'h-9 sm:h-10',
  },
];

/** @deprecated use testimonialClients */
export const clientLogos = testimonialClients;

export function getClientLogoForStudy(slug: string): ClientLogo | undefined {
  return testimonialClients.find((client) => client.href === `/case-studies/${slug}`);
}

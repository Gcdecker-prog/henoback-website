/**
 * Services hub — word-for-word from https://henobackoffice.com/services/
 */

export const servicesPage = {
  hero: {
    pageLabel: 'Our Services',
    headline: 'Our Services',
    subheadline:
      'Bookkeeping, full-service accounting, CFO outsourcing, payroll integration, audit support, and expense automation — built for professional service firms.',
  },
  backOffice: {
    headline: 'Providing Full Range of Back Office Services.',
    paragraphs: [
      'HENO BackOffice delivers outsourced accounting, controller support, and automated financial operations built specifically for professional service firms.',
      'Get clean books, accurate reporting, integrated systems, and the real-time visibility you need to run your business with confidence.',
    ],
    imageSrc: '/images/marketing/services-back-office.jpg',
    imageAlt: 'Heno BackOffice team delivering outsourced accounting and controller support',
  },
  cta: {
    eyebrow: 'Interested in Learning More?',
    headline: 'Get a Personalized Service Plan That Meets Your Specific Needs',
    primaryLabel: 'Sign Up For a Free Estimate',
  },
  closing: {
    eyebrow: '20+ Years Of Excellence',
    headline: 'Simplify Your Business',
    primaryCta: 'Our Services',
    secondaryCta: 'Get Started',
  },
} as const;

/**
 * Word-for-word copy from https://henobackoffice.com/about-us/
 * Do not paraphrase without explicit marketing approval.
 */

export const aboutUsPage = {
  title: 'About Us',
  hero: {
    eyebrow: 'About Us',
    headline: 'Outsource Your Back Office. Grow With Confidence.',
    paragraphs: [
      'Heno BackOffice Services is an outsourced services firm committed to the success of our Consulting Firm clients. We are US-based and only have employees based in the USA.',
      'We help growing Consulting companies that are challenged by poor access to the skills and information they need to operate their businesses successfully.',
      'Our clients rely on us for our accounting systems and process experience and expertise to run their accounting and back-office operations systems to increase efficiency and visibility that supports their growth.',
    ],
  },
  stats: [
    { value: '0+', label: 'Happy Customers' },
    { value: '0+', label: 'Professional Services Segments Served' },
  ],
  getToKnowUs: {
    eyebrow: 'Get To Know Us',
    headline: '20+ Years of Excellence in the Accounting Industry',
    ctaLabel: 'Get Started',
  },
  whyUs: {
    eyebrow: 'Why Us',
    headline: 'We Deliver Financial Accuracy You Can Trust',
    body: 'We provide more than bookkeeping—we deliver complete, scalable financial support built specifically for professional services-based organizations. From day-to-day accounting to CFO-level insight, we bring accuracy, visibility, and strategic guidance into one cohesive partnership. Our industry-aware approach, automated systems, and focus on cash flow and compliance help leaders make confident decisions, reduce risk, and scale without the overhead of building an in-house finance team.',
  },
  team: {
    eyebrow: 'Our Team',
    headline: 'Meet Our Experts',
    members: [
      {
        name: 'Jim French',
        role: 'Founder, President, and CFO',
        imageSrc: '/images/team/jim-french.png',
      },
      {
        name: 'Kristina Costello',
        role: 'Principal',
        imageSrc: '/images/team/kristina-costello.svg',
      },
      {
        name: 'Charity Hurt',
        role: 'Outsourced Accounting Manager',
        imageSrc: '/images/team/charity-hurt.svg',
      },
    ],
  },
  closing: {
    eyebrow: '20+ Years Of Excellence',
    headline: 'Simplify Your Business',
    primaryCta: 'Our Services',
    secondaryCta: 'Get Started',
  },
} as const;

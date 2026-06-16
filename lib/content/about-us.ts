/**
 * Why Heno page copy — approved messaging refresh (June 2026).
 */

export const aboutUsPage = {
  title: 'About Us',
  hero: {
    headline: "Most outsourced accounting models don't fix the problem—they manage it",
    paragraphs: [
      "Most companies outsource accounting expecting clarity—but end up with the same visibility problems. The issue isn't effort—it's how the back office is structured.",
      "Adding more people doesn't fix inconsistent data, disconnected processes, or unreliable reporting. This is why most outsourced accounting relationships fall short.",
      'The difference is in how the system is designed. Heno brings structure, consistency, and alignment to your back office—so your numbers actually reflect how your business operates.',
    ],
  },
  stats: [
    { value: '100+', label: 'Companies Supported', icon: 'customers' as const },
    { value: '10+', label: 'Project-Based Industries', icon: 'segments' as const },
    { value: '8+', label: 'Strategic & Technology Partners', icon: 'partners' as const },
  ],
  whyDifferent: {
    leftStatements: [
      'Most outsourced accounting still operates the same way—just with different people.',
      'Tasks get done, but the underlying issues remain.',
    ],
    headline: 'Why Heno works differently',
    comparison: {
      manages: {
        label: 'Most outsourced accounting focuses on managing work:',
        items: ['Closing books', 'Processing transactions', 'Producing reports'],
      },
      untouched: {
        label: 'But it leaves the core problems untouched:',
        items: ['Inconsistent data', 'Disconnected processes', 'Manual workarounds'],
      },
    },
    closing:
      "Heno takes a different approach. We don't just manage accounting—we take ownership of how the back office operates, so your numbers actually reflect how your business runs.",
  },
  heroImage: {
    imageSrc: '/images/marketing/about-team-collaboration.jpg',
    imageAlt: 'Heno BackOffice team collaborating on financial operations',
  },
} as const;

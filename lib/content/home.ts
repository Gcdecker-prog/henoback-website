/** Homepage hero — aligned with henobackoffice.com, elevated for 2027 */
export const homeHero = {
  eyebrow: 'What we do',
  /** Full H1 string for metadata / JSON-LD — keep in sync with headlineLines */
  headline: 'Modern Accounting for Professional Service Firms',
  /** Typographic flow around hero orb: line 1 clears above; 2–3 wrap the disc */
  headlineLines: [
    { text: 'Modern Accounting' },
    { text: 'for Professional' },
    { text: 'Service Firms', accent: true as const },
  ],
  tagline: 'Outsourced accounting with the clarity and control of a modern back office.',
  subheadline:
    'Controller support, integrated systems, and US-based expertise for firms that bill on projects — not generic bookkeeping.',
  primaryCta: 'Our Services',
  secondaryCta: 'Book a consultation',
  trustCues: ['US-based team', '20+ years in accounting', 'Built for professional services'] as const,
} as const;

/** Outcome proof points — what partners get, not credential walls */
export const trustSignals = [
  { value: 'Close-ready', label: 'Numbers you can sign off on' },
  { value: 'Clear', label: 'Margins and performance, in view' },
  { value: 'Steady', label: 'One process, every month-end' },
] as const;

export const valueProps = [
  {
    title: 'Financial accuracy you can trust',
    description: 'Complete, scalable financial support from day-to-day accounting to CFO-level insight.',
  },
  {
    title: 'Built for professional services',
    description:
      'Consulting, engineering, agencies, government contracting, and more — not generic growth-company bookkeeping.',
  },
  {
    title: 'A long-term partner, not a vendor',
    description: 'A dedicated team that knows your business, supports your staff, and scales with you.',
  },
] as const;

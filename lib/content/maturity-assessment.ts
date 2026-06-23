/** Hero micro-check — one question, then a tailored dashboard snapshot */

export type MaturityOption = {
  id: string;
  label: string;
};

export type MaturityMetric = {
  label: string;
  value: string;
  tone?: 'default' | 'accent' | 'muted' | 'positive' | 'warning';
};

export type MaturityResponse = {
  stage: string;
  stageTone: 'positive' | 'steady' | 'warning' | 'critical';
  headline: string;
  subline: string;
  metrics: readonly MaturityMetric[];
  visual: 'aligned' | 'drift' | 'fragmented' | 'blind';
};

export const maturityAssessmentTeaser = {
  badge: 'Sound familiar?',
  eyebrow: 'Back office reality check',
  footer: 'See where you stand',
  question: {
    id: 'one-answer',
    question:
      'When you ask for project numbers \u2014 do you get one answer, or three different ones depending who you ask?',
    options: [
      { id: 'one-every-time', label: 'One answer, every time' },
      { id: 'usually-one', label: 'Usually one, sometimes conflicts' },
      { id: 'different-tools', label: 'Different tools, different numbers' },
      { id: 'try-not-to-think', label: 'I try not to think about it' },
    ],
  } as const,
  ctaLabel: 'See your full maturity stage',
} as const;

export const maturityResponses: Record<
  (typeof maturityAssessmentTeaser.question.options)[number]['id'],
  MaturityResponse
> = {
  'one-every-time': {
    stage: 'Aligned',
    stageTone: 'positive',
    headline: 'You\u2019re ahead of most firms.',
    subline: 'The risk isn\u2019t today \u2014 it\u2019s whether this holds as volume and complexity grow.',
    metrics: [
      { label: 'Report consistency', value: 'High', tone: 'positive' },
      { label: 'Decision confidence', value: 'Strong', tone: 'positive' },
      { label: 'Scale readiness', value: 'Worth validating', tone: 'accent' },
    ],
    visual: 'aligned',
  },
  'usually-one': {
    stage: 'Drifting',
    stageTone: 'steady',
    headline: 'Close \u2014 but not always consistent.',
    subline: 'When numbers conflict, decisions slow down even when the gap is small.',
    metrics: [
      { label: 'Report variance', value: 'Occasional', tone: 'warning' },
      { label: 'Decision lag', value: '2\u20133 days', tone: 'warning' },
      { label: 'Team time lost', value: 'Reconciling', tone: 'muted' },
    ],
    visual: 'drift',
  },
  'different-tools': {
    stage: 'Fragmented',
    stageTone: 'warning',
    headline: 'Three tools. Three answers.',
    subline: 'Your team spends time reconciling reports instead of acting on them.',
    metrics: [
      { label: 'Data sources', value: '3+', tone: 'warning' },
      { label: 'Single source of truth', value: 'No', tone: 'warning' },
      { label: 'Margin visibility', value: 'Delayed', tone: 'muted' },
    ],
    visual: 'fragmented',
  },
  'try-not-to-think': {
    stage: 'Visibility gap',
    stageTone: 'critical',
    headline: 'You can\u2019t manage what you can\u2019t see.',
    subline: 'When margin isn\u2019t clear, growth decisions become guesswork \u2014 and expensive.',
    metrics: [
      { label: 'Project visibility', value: 'Limited', tone: 'warning' },
      { label: 'Margin confidence', value: 'Low', tone: 'warning' },
      { label: 'Reporting mode', value: 'Reactive', tone: 'muted' },
    ],
    visual: 'blind',
  },
};

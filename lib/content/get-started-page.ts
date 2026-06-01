import { primaryCta, secondaryCta } from '@/lib/site-config';

/** Get Started hub — conversion paths (GTM intake + assessment) */
export const getStartedPage = {
  headline: "Let's modernize your back office",
  subheadline:
    "We'll walk through your financial processes, tools, and goals — and show you what a modern back office can look like for your firm.",
  paths: {
    consultation: {
      title: primaryCta.label,
      body: 'Speak with our team about your billing model, entities, and systems. We’ll outline what outsourced accounting and controller support looks like for you.',
    },
    assessment: {
      title: secondaryCta.label,
      body: 'A short readiness questionnaire to see where automation, reporting, and outsourced finance could have the biggest impact.',
    },
  },
} as const;

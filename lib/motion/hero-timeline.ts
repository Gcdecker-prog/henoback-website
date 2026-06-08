import type { Transition, Variants } from 'framer-motion';
import { motionEase } from '@/lib/motion/variants';

export const heroLeadDuration = 0.68;

export const heroAt = {
  kicker: 0.1,
  orb: 0.18,
  headline: 0.3,
  accent: 0.52,
  summary: 0.92,
  outcomes: 1.06,
  differentiation: 1.18,
  ctas: 1.3,
  photo: 0.16,
} as const;

export const heroRevealEase = motionEase;

/** Subtle rise — full opacity on load (enterprise read) */
export const heroGlassFloat: Variants = {
  hidden: { opacity: 1, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: heroLeadDuration, ease: heroRevealEase },
  },
};

/** Accent word — clipped slide from right, full opacity (enterprise highlight) */
export const heroAccentReveal: Variants = {
  hidden: { x: '108%' },
  visible: {
    x: 0,
    transition: { duration: 0.58, ease: heroRevealEase },
  },
};

/** Headline — each full line resolves together (accent included) */
export const heroHeadlineStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

export const heroGlassOrb: Variants = {
  hidden: { opacity: 0, x: -36, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: heroRevealEase },
  },
};

export const heroGlassPhoto: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: heroRevealEase },
  },
};

export function heroDelay(seconds: number, duration = heroLeadDuration): Transition {
  return { delay: seconds, duration, ease: heroRevealEase };
}

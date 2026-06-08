import type { Transition, Variants } from 'framer-motion';
import { motionEase } from '@/lib/motion/variants';

export const heroLeadDuration = 0.68;

export const heroAt = {
  kicker: 0.1,
  orb: 0.18,
  headline: 0.3,
  summary: 0.92,
  outcomes: 1.06,
  differentiation: 1.18,
  ctas: 1.3,
  photo: 0.16,
} as const;

export const heroRevealEase = motionEase;

/** Glass morph — one motion language for the hero */
export const heroGlassFloat: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: heroLeadDuration, ease: heroRevealEase },
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
  hidden: { opacity: 0, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.88, ease: heroRevealEase },
  },
};

export function heroDelay(seconds: number, duration = heroLeadDuration): Transition {
  return { delay: seconds, duration, ease: heroRevealEase };
}

import type { Variants, Transition } from 'framer-motion';

export const motionEase = [0.22, 1, 0.36, 1] as const;

const slideTransition = (delay = 0): Transition => ({
  duration: 0.7,
  ease: motionEase,
  delay,
});

/** Clean text slide-up — light rise, no blur (2027, non-invasive) */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: slideTransition(),
  },
};

/** Directional slide-ins for split layouts (visuals + copy) */
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: slideTransition(),
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: slideTransition(0.08),
  },
};

export type RevealDirection = 'up' | 'left' | 'right';

export function revealVariants(direction: RevealDirection = 'up'): Variants {
  if (direction === 'left') return slideFromLeft;
  if (direction === 'right') return slideFromRight;
  return fadeUp;
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: motionEase } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: motionEase },
  },
};

/** Scroll-reveal cards — rise in, no blur or scale (2027 clean) */
export const scrollSlideStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.04 },
  },
};

export const scrollSlideItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: motionEase },
  },
};

export const scrollSlideLabel: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: motionEase },
  },
};

/** Split editorial panels — copy and visual enter from opposite sides */
export const editorialPanelStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

export const editorialPanelBlock: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: motionEase },
  },
};


export const floatCard: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: motionEase, delay: 0.12 },
  },
};

export const orbDrift = (duration: number, delay = 0) => ({
  animate: {
    x: [0, 18, -12, 0],
    y: [0, -22, 14, 0],
    scale: [1, 1.06, 0.98, 1],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
});

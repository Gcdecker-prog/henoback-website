import type { Variants } from 'framer-motion';

export const motionEase = [0.22, 1, 0.36, 1] as const;

/** Clean text slide-up — light rise, no blur (2027, non-invasive) */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
};

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
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: motionEase },
  },
};

export const scrollSlideLabel: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
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

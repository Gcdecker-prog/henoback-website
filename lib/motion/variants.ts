import type { Variants } from 'framer-motion';

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: motionEase },
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
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: motionEase },
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

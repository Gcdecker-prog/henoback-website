'use client';

import { useMotionTemplate, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { RefObject } from 'react';

/** Scroll-linked hero — copy recedes, photo drifts away (2027 glass handoff) */
export function useHomeHeroScroll(sectionRef: RefObject<HTMLElement | null>) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0.65, 0.2]);

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.82, 0.25]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.7, 1], [0, 2, 8]);
  const contentFilter = useMotionTemplate`blur(${contentBlur}px)`;

  const washOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.35, 0.85]);

  if (reduce) {
    return {
      photoY: 0,
      photoScale: 1,
      photoOpacity: 1,
      contentY: 0,
      contentScale: 1,
      contentOpacity: 1,
      contentFilter: 'none',
      washOpacity: 0,
      scrollYProgress,
      motionEnabled: false as const,
    };
  }

  return {
    photoY,
    photoScale,
    photoOpacity,
    contentY,
    contentScale,
    contentOpacity,
    contentFilter,
    washOpacity,
    scrollYProgress,
    motionEnabled: true as const,
  };
}

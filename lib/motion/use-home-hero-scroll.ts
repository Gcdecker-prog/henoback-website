'use client';

import { useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { RefObject } from 'react';

/** Scroll-linked motion for home hero — photo drifts, copy lifts (2027 choreography) */
export function useHomeHeroScroll(sectionRef: RefObject<HTMLElement | null>) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1.04]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.95, 0.88]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.98, 0.92]);

  if (reduce) {
    return {
      photoY: 0,
      photoScale: 1,
      photoOpacity: 1,
      contentY: 0,
      contentOpacity: 1,
      scrollYProgress,
      motionEnabled: false as const,
    };
  }

  return {
    photoY,
    photoScale,
    photoOpacity,
    contentY,
    contentOpacity,
    scrollYProgress,
    motionEnabled: true as const,
  };
}

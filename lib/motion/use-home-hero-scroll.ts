'use client';

import { useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { RefObject } from 'react';

/**
 * Scroll handoff — hero loads at full strength; motion only after meaningful scroll.
 */
export function useHomeHeroScroll(sectionRef: RefObject<HTMLElement | null>) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Full photo strength on load; gentle fade only as hero exits
  const photoOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.65]);

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  const washOpacity = useTransform(scrollYProgress, (v) => {
    if (v <= 0.65) return 0;
    return ((v - 0.65) / 0.35) * 0.4;
  });

  if (reduce) {
    return {
      photoY: 0,
      photoOpacity: 1,
      contentY: 0,
      washOpacity: 0,
      scrollYProgress,
      motionEnabled: false as const,
    };
  }

  return {
    photoY,
    photoOpacity,
    contentY,
    washOpacity,
    scrollYProgress,
    motionEnabled: true as const,
  };
}

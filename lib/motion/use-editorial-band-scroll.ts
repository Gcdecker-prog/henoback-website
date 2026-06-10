'use client';

import { useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { RefObject } from 'react';

/**
 * Scroll-linked depth for split editorial bands — image drifts opposite copy.
 */
export function useEditorialBandScroll(sectionRef: RefObject<HTMLElement | null>) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  /** Keep scale subtle — heavy scale on photos reads as blur when assets are <1200px wide */
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1.04, 1.02]);
  const copyY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  if (reduce) {
    return {
      imageY: 0,
      imageScale: 1,
      copyY: 0,
      motionEnabled: false as const,
    };
  }

  return {
    imageY,
    imageScale,
    copyY,
    motionEnabled: true as const,
  };
}

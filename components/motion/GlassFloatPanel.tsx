'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { glassPanel, glassPanelElevated } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

type GlassFloatPanelProps = {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
};

/**
 * Glass surface with subtle vertical float tied to scroll — “hovering” as you move.
 */
export function GlassFloatPanel({ children, className, elevated = false }: GlassFloatPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, -14]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.992, 1, 0.992]);

  if (reduce) {
    return (
      <div ref={ref} className={cn(elevated ? glassPanelElevated : glassPanel, className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      className={cn(
        elevated ? glassPanelElevated : glassPanel,
        'will-change-transform',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

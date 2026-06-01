'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

type HeroOrangeOrbProps = {
  className?: string;
};

/** Signature disc — slides in once, perfect circle */
export function HeroOrangeOrb({ className }: HeroOrangeOrbProps) {
  const reduce = useReducedMotion();

  const size = cn(
    'size-[6.5rem] shrink-0 sm:size-[7.75rem] lg:size-[8.5rem]',
    className,
  );

  const disc = (
    <>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f4894a] via-heno-orange-500 to-[#e06a28] shadow-[0_20px_50px_-16px_rgba(242,120,48,0.45)]" />
      <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-white/40 to-transparent" />
    </>
  );

  if (reduce) {
    return (
      <div className={cn('relative aspect-square rounded-full', size)} aria-hidden>
        {disc}
      </div>
    );
  }

  return (
    <motion.div
      className={cn('relative aspect-square rounded-full', size)}
      aria-hidden
      initial={{ opacity: 0, x: -56 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      {disc}
    </motion.div>
  );
}

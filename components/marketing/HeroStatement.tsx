'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { homeHero } from '@/lib/content/home';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

const lineVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.35 + i * 0.08, ease: motionEase },
  }),
};

/** Headline only — orb lives in the parent grid column beside this */
export function HeroStatement({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <h1
      id="home-hero-heading"
      className={cn(
        'min-w-0 font-semibold tracking-[-0.03em]',
        className,
      )}
    >
      {homeHero.headlineLines.map((line, i) => (
        <motion.span
          key={line.text}
          custom={i}
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={lineVariants}
          className={cn(
            'block text-neutral-900',
            i === 0 && 'text-[1.625rem] leading-[1.1] sm:text-[2.125rem] lg:text-[2.5rem]',
            i === 1 && 'mt-1 text-[1.5rem] leading-[1.1] sm:text-[1.95rem] lg:text-[2.25rem]',
            i === 2 &&
              'mt-1 text-[1.5rem] leading-[1.1] text-heno-orange-600 sm:text-[1.95rem] lg:text-[2.25rem]',
          )}
        >
          {line.text}
        </motion.span>
      ))}
    </h1>
  );
}

'use client';

import { motion } from 'framer-motion';
import { homeHero } from '@/lib/content/home';
import { heroAt, heroDelay, heroGlassFloat } from '@/lib/motion/hero-timeline';
import { useHeroEntrance } from '@/lib/motion/use-hero-entrance';
import { cn } from '@/lib/cn';

export function HeroKicker({ className }: { className?: string }) {
  const { animate, initial } = useHeroEntrance();

  return (
    <motion.p
      initial={initial}
      animate={animate}
      variants={heroGlassFloat}
      transition={heroDelay(heroAt.kicker)}
      className={cn(
        'text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-neutral-400',
        'mx-auto w-fit will-change-[transform,filter] lg:mx-0',
        className,
      )}
    >
      {homeHero.kicker}
    </motion.p>
  );
}

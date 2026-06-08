'use client';

import { motion } from 'framer-motion';
import { homeHero } from '@/lib/content/home';
import {
  heroAt,
  heroDelay,
  heroGlassFloat,
  heroHeadlineStagger,
} from '@/lib/motion/hero-timeline';
import { useHeroEntrance } from '@/lib/motion/use-hero-entrance';
import { cn } from '@/lib/cn';

const accentToneClass = {
  blue: 'text-heno-blue-400',
} as const;

/** Type-led headline — one block, lines stagger, accents are color only */
export function HeroStatement({ className }: { className?: string }) {
  const { animate, initial, ready, reduce } = useHeroEntrance();

  if (reduce) {
    return (
      <h1
        id="home-hero-heading"
        className={cn(
          'max-w-[12.5em] font-bold leading-[1.14] tracking-[-0.038em] text-neutral-900',
          'text-[1.8rem] sm:max-w-[13.5em] sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.5rem]',
          className,
        )}
      >
        {homeHero.headlineLines.map((line) => {
          const accent = 'accent' in line ? line.accent : undefined;
          const tone = 'accentTone' in line ? line.accentTone : undefined;

          return (
            <span key={line.before} className="block">
              {line.before}
              {accent && tone && (
                <span className={accentToneClass[tone]}>{accent}</span>
              )}
            </span>
          );
        })}
      </h1>
    );
  }

  return (
    <motion.h1
      id="home-hero-heading"
      initial={initial}
      animate={animate}
      variants={heroHeadlineStagger}
      transition={heroDelay(heroAt.headline)}
      className={cn(
        'max-w-[12.5em] font-bold leading-[1.14] tracking-[-0.038em] text-neutral-900',
        'text-[1.8rem] sm:max-w-[13.5em] sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.5rem]',
        !ready && 'opacity-0',
        className,
      )}
    >
      {homeHero.headlineLines.map((line, i) => {
        const accent = 'accent' in line ? line.accent : undefined;
        const tone = 'accentTone' in line ? line.accentTone : undefined;

        return (
          <motion.span
            key={line.before}
            variants={heroGlassFloat}
            className={cn('block text-neutral-900', i > 0 && 'mt-[0.18em]')}
          >
            {line.before}
            {accent && tone && (
              <span className={accentToneClass[tone]}>{accent}</span>
            )}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

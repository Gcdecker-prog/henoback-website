'use client';

import { motion } from 'framer-motion';
import { homeHero } from '@/lib/content/home';
import { heroAccentReveal, heroAt, heroDelay } from '@/lib/motion/hero-timeline';
import { useHeroEntrance } from '@/lib/motion/use-hero-entrance';
import { cn } from '@/lib/cn';

const accentToneClass = {
  blue: 'text-heno-blue-400',
} as const;

const headlineClass = cn(
  'w-full font-bold leading-[1.14] tracking-[-0.038em] text-neutral-900',
  'text-[1.8rem] sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.5rem]',
);

function HeroAccentWord({
  word,
  tone,
}: {
  word: string;
  tone: keyof typeof accentToneClass;
}) {
  const { reduce } = useHeroEntrance();

  if (reduce) {
    return <span className={accentToneClass[tone]}>{word}</span>;
  }

  return (
    <span className="inline-flex overflow-hidden align-baseline">
      <motion.span
        className={cn('inline-block', accentToneClass[tone])}
        initial="hidden"
        animate="visible"
        variants={heroAccentReveal}
        transition={heroDelay(heroAt.accent, 0.58)}
      >
        {word}
      </motion.span>
    </span>
  );
}

/** Type-led headline — static on load; accent word slides in on the same baseline */
export function HeroStatement({ className }: { className?: string }) {
  return (
    <h1 id="home-hero-heading" className={cn(headlineClass, className)}>
      {homeHero.headlineLines.map((line, i) => {
        const accent = 'accent' in line ? line.accent : undefined;
        const tone = 'accentTone' in line ? line.accentTone : undefined;

        if (i === 0 && accent && tone) {
          return (
            <span key={line.before} className="block text-neutral-900">
              <span className="inline-flex flex-wrap items-baseline gap-0">
                <span>{line.before}</span>
                <HeroAccentWord word={accent} tone={tone} />
              </span>
            </span>
          );
        }

        return (
          <span key={line.before} className={cn('block text-neutral-900', i > 0 && 'mt-[0.18em]')}>
            {line.before}
            {accent && tone && <HeroAccentWord word={accent} tone={tone} />}
          </span>
        );
      })}
    </h1>
  );
}

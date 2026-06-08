'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { homeHero } from '@/lib/content/home';
import { assessmentUrl } from '@/lib/gtm-links';
import { heroAt, heroDelay, heroGlassFloat } from '@/lib/motion/hero-timeline';
import { useHeroEntrance } from '@/lib/motion/use-hero-entrance';
import { cn } from '@/lib/cn';

export function HeroBodyCopy({ className }: { className?: string }) {
  const { animate, initial } = useHeroEntrance();

  return (
    <div
      className={cn(
        'space-y-4 sm:space-y-[1.125rem]',
        className,
      )}
    >
      <motion.p
        className="text-[0.9375rem] leading-[1.65] text-neutral-600 will-change-[transform,filter] sm:text-[0.975rem]"
        initial={initial}
        animate={animate}
        variants={heroGlassFloat}
        transition={heroDelay(heroAt.summary)}
      >
        {homeHero.summary}
      </motion.p>

      <motion.ul
        className="space-y-1.5 will-change-[transform,filter]"
        initial={initial}
        animate={animate}
        variants={heroGlassFloat}
        transition={heroDelay(heroAt.outcomes)}
        aria-label="What partners gain"
      >
        {homeHero.outcomes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[0.8125rem] leading-snug text-neutral-600 sm:text-[0.875rem]"
          >
            <Check
              className="mt-0.5 size-3.5 shrink-0 text-heno-orange-500"
              strokeWidth={2.5}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </motion.ul>

      <motion.blockquote
        className="border-l-2 border-heno-blue-400 bg-neutral-50/80 py-3 pl-4 pr-3 will-change-[transform,filter] sm:py-3.5 sm:pl-5"
        initial={initial}
        animate={animate}
        variants={heroGlassFloat}
        transition={heroDelay(heroAt.differentiation)}
      >
        <p className="text-[1rem] font-semibold leading-snug tracking-[-0.015em] text-heno-blue-900 sm:text-[1.0625rem]">
          {homeHero.differentiation.lead}
        </p>
        <p className="mt-1 text-[0.9375rem] font-medium leading-snug text-neutral-600 sm:text-[0.975rem]">
          {homeHero.differentiation.follow}
        </p>
      </motion.blockquote>

      <motion.div
        className="space-y-3 pt-0.5 will-change-[transform,filter]"
        initial={initial}
        animate={animate}
        variants={heroGlassFloat}
        transition={heroDelay(heroAt.ctas)}
      >
        <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center lg:items-start lg:justify-start">
          <Link
            href={homeHero.primaryCtaHref}
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-heno-blue-900 px-7 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(27,54,93,0.35)] transition-colors hover:bg-heno-blue-700 sm:w-auto"
          >
            {homeHero.primaryCta}
          </Link>
          <GtmOutboundButton
            href={assessmentUrl({ content: 'hero-gap-assessment' })}
            variant="secondary"
            size="lg"
            className="h-11 w-full rounded-full border-neutral-200/90 bg-white px-7 text-sm font-medium text-neutral-600 hover:border-heno-orange-500/30 hover:text-neutral-800 sm:w-auto"
          >
            {homeHero.secondaryCta}
          </GtmOutboundButton>
        </div>

        <p className="text-center text-[0.75rem] leading-relaxed text-neutral-400 lg:text-left">
          {homeHero.heroTrust}
        </p>
      </motion.div>
    </div>
  );
}

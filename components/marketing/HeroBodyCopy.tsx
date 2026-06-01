'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { homeHero } from '@/lib/content/home';
import { pageCtaUrl } from '@/lib/gtm-links';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

export function HeroBodyCopy({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn('space-y-6', className)}
      initial={reduce ? false : 'hidden'}
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div variants={staggerItem} className="space-y-4">
        <p className="max-w-md text-[0.9375rem] leading-[1.65] text-neutral-600 sm:text-base">
          {homeHero.subheadline}
        </p>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-800">
          {homeHero.tagline}
        </p>
      </motion.div>

      <motion.ul
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6"
        variants={staggerItem}
      >
        {homeHero.trustCues.map((cue) => (
          <li key={cue} className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="flex size-5 items-center justify-center rounded-full bg-heno-orange-500/10">
              <Check size={13} strokeWidth={2.5} className="text-heno-orange-600" aria-hidden />
            </span>
            {cue}
          </li>
        ))}
      </motion.ul>

      <motion.div className="flex flex-wrap gap-3" variants={staggerItem}>
        <Link
          href="/services"
          className="inline-flex h-11 items-center justify-center rounded-full bg-heno-orange-500 px-7 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(242,120,48,0.5)] transition-all hover:bg-heno-orange-600 hover:shadow-[0_14px_32px_-10px_rgba(242,120,48,0.55)]"
        >
          {homeHero.primaryCta}
        </Link>
        <GtmOutboundButton
          href={pageCtaUrl('home', 'consultation', { content: 'hero-consultation' })}
          variant="secondary"
          size="lg"
          className="h-11 rounded-full border-neutral-200/90 bg-white px-7"
        >
          {homeHero.secondaryCta}
        </GtmOutboundButton>
      </motion.div>
    </motion.div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { GlassMesh } from '@/components/motion/GlassMesh';
import { GlassShimmer } from '@/components/motion/GlassShimmer';
import { homeHero } from '@/lib/content/home';
import { media } from '@/lib/content/media';
import { pageCtaUrl } from '@/lib/gtm-links';
import { floatCard, motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';
import { glassPanelElevated } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-neutral-100/80 bg-white">
      <GlassMesh />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="max-w-xl"
            initial={reduce ? false : 'hidden'}
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.25em] text-heno-orange-600"
              variants={staggerItem}
            >
              {homeHero.eyebrow}
            </motion.p>
            <motion.h1
              className="mt-4 text-display-md font-semibold tracking-tight text-neutral-900 sm:text-display-lg"
              variants={staggerItem}
            >
              {homeHero.headline}
            </motion.h1>
            <motion.p className="mt-5 text-body-lg text-neutral-600" variants={staggerItem}>
              {homeHero.subheadline}
            </motion.p>

            <motion.ul
              className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6"
              variants={staggerItem}
            >
              {homeHero.trustCues.map((cue) => (
                <li key={cue} className="flex items-center gap-2 text-sm text-neutral-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-heno-orange-500/15 text-heno-orange-600">
                    <Check size={12} strokeWidth={2.5} aria-hidden />
                  </span>
                  {cue}
                </li>
              ))}
            </motion.ul>

            <motion.div className="mt-8 flex flex-wrap gap-3" variants={staggerItem}>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full bg-heno-orange-500 px-7 text-base font-medium text-white shadow-[0_8px_28px_-8px_rgba(242,120,48,0.55)] transition-colors hover:bg-heno-orange-600"
              >
                {homeHero.primaryCta}
              </Link>
              <GtmOutboundButton
                href={pageCtaUrl('home', 'consultation', { content: 'hero-consultation' })}
                variant="secondary"
                size="lg"
              >
                {homeHero.secondaryCta}
              </GtmOutboundButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={reduce ? false : 'hidden'}
            animate="visible"
            variants={floatCard}
          >
            <motion.div
              className={cn(glassPanelElevated, 'relative overflow-hidden p-1.5')}
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, -6, 0],
                    }
              }
              transition={
                reduce
                  ? undefined
                  : {
                      duration: 7,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
            >
              <GlassShimmer />
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.35rem] bg-neutral-100 sm:aspect-[4/3]">
                <Image
                  src={media.hero.homePortrait}
                  alt={media.hero.homePortraitAlt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 560px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-heno-orange-500/10"
                  aria-hidden
                />
              </div>
            </motion.div>
            <motion.p
              className="mt-3 text-center text-xs text-neutral-500 lg:text-left"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: motionEase }}
            >
              Clarity, reporting, and systems you can run the business on.
            </motion.p>
          </motion.div>
        </div>
      </Container>

      {/* Glass grid accent — subtle motion via CSS */}
      <div className="glass-grid-fade pointer-events-none absolute inset-x-0 bottom-0 h-24" aria-hidden />
    </section>
  );
}

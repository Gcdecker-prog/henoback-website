'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { brandHex } from '@/lib/ui/brand-colors';
import { motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';

export type MarketingPageHeroProps = {
  pageLabel: string;
  headline: string;
  subheadline?: string;
  /** Small caps line above the H1 — proof line, section label, etc. */
  eyebrow?: string;
};

export function MarketingPageHero({
  pageLabel,
  headline,
  subheadline,
  eyebrow,
}: MarketingPageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-neutral-100/80 bg-white pb-12 pt-8 sm:pb-16 sm:pt-10">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${brandHex.orange}1a, transparent 70%)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/4 h-64 w-64 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${brandHex.navy}12, transparent 70%)` }}
        aria-hidden
      />

      <Container className="relative">
        <motion.nav
          className="text-sm text-neutral-500"
          aria-label="Breadcrumb"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: motionEase }}
        >
          <Link href="/" className="hover:text-heno-orange-600">
            Home
          </Link>
          <span className="mx-2 text-neutral-300" aria-hidden>
            →
          </span>
          <span className="font-medium text-neutral-700">{pageLabel}</span>
        </motion.nav>

        <motion.div
          className="mt-10 max-w-3xl"
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={staggerContainer}
        >
          {eyebrow ? (
            <motion.p
              variants={staggerItem}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-heno-orange-600"
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h1
            variants={staggerItem}
            className={cnHeadline(!!eyebrow)}
          >
            {headline}
          </motion.h1>
          {subheadline ? (
            <motion.p
              variants={staggerItem}
              className="mt-5 text-body-lg leading-relaxed text-neutral-600 sm:text-xl sm:leading-relaxed"
            >
              {subheadline}
            </motion.p>
          ) : null}
        </motion.div>
      </Container>
    </section>
  );
}

function cnHeadline(hasEyebrow: boolean) {
  return hasEyebrow
    ? 'mt-5 text-display-md font-semibold tracking-tight text-neutral-900 sm:text-display-lg'
    : 'text-display-md font-semibold tracking-tight text-neutral-900 sm:text-display-lg';
}

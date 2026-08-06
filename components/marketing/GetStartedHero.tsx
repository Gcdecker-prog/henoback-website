'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { MaturitySnapshotVisual } from '@/components/marketing/MaturitySnapshotVisual';
import { getStartedPage } from '@/lib/content/get-started-page';
import { pageThemes } from '@/lib/ui/page-themes';
import { motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

const theme = pageThemes.getStarted;

/** One clean composition: headline → bars → soft supporting line */
export function GetStartedHero() {
  const reduce = useReducedMotion();
  const { headline, underGraphic } = getStartedPage;

  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${theme.glowAccent}, transparent 70%)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/4 h-64 w-64 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${theme.glowWash}, transparent 70%)` }}
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={staggerContainer}
        >
          <motion.nav
            className="text-sm text-neutral-500"
            aria-label="Breadcrumb"
            variants={staggerItem}
          >
            <Link href="/" className={cn('transition-colors', theme.linkHoverClass)}>
              Home
            </Link>
            <span className="mx-2 text-neutral-300" aria-hidden>
              →
            </span>
            <span className="font-medium text-neutral-700">Get Started</span>
          </motion.nav>

          <motion.h1
            variants={staggerItem}
            className="mt-8 text-display-md font-semibold tracking-tight text-neutral-900 sm:text-display-lg"
          >
            {headline}
          </motion.h1>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-14"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: motionEase }}
        >
          <MaturitySnapshotVisual />
        </motion.div>

        <motion.p
          className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-neutral-600 sm:mt-12 sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: motionEase }}
        >
          {underGraphic}
        </motion.p>
      </Container>
    </section>
  );
}

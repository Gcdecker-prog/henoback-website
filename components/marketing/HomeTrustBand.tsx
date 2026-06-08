'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { AnimatedTrustStats } from '@/components/marketing/AnimatedTrustStats';
import { scrollSlideLabel } from '@/lib/motion/variants';

type Stat = { value: string; label: string };

/** Proof cards — below the fold, revealed on scroll */
export function HomeTrustBand({ stats }: { stats: readonly Stat[] }) {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="home-partners-heading"
      className="scroll-mt-8 border-t border-neutral-100/90 bg-gradient-to-b from-white via-white to-neutral-50/60 py-16 sm:py-20 lg:py-24"
    >
      <Container className="relative">
        {reduce ? (
          <p
            id="home-partners-heading"
            className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
          >
            What partners get
          </p>
        ) : (
          <motion.p
            id="home-partners-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={scrollSlideLabel}
            className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
          >
            What partners get
          </motion.p>
        )}
        <AnimatedTrustStats stats={stats} />
      </Container>
    </section>
  );
}

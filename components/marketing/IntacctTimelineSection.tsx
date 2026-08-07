'use client';

import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { intacctTimeline } from '@/lib/content/home-intacct';
import {
  motionEase,
  scrollSlideItem,
  scrollSlideLabel,
  scrollSlideStagger,
} from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

const PHASE_STYLES = [
  {
    header: 'bg-heno-blue-400',
    check: 'text-heno-blue-400',
    checkBg: 'bg-heno-blue-50',
  },
  {
    header: 'bg-heno-blue-900',
    check: 'text-heno-blue-900',
    checkBg: 'bg-heno-blue-50',
  },
  {
    header: 'bg-heno-orange-500',
    check: 'text-heno-orange-500',
    checkBg: 'bg-heno-orange-50',
  },
] as const;

const checklistStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.12 },
  },
} as const;

const checklistItem = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: motionEase },
  },
} as const;

/** 30 / 60 / 90 — clean staggered entrance for header, cards, and checklist lines. */
export function IntacctTimelineSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="intacct-timeline-heading"
    >
      <Container className="relative">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.2 }}
          variants={scrollSlideStagger}
        >
          <motion.h2
            id="intacct-timeline-heading"
            className="text-display-md font-semibold tracking-tight text-heno-blue-900 sm:text-display-lg"
            variants={scrollSlideLabel}
          >
            {intacctTimeline.headline}
          </motion.h2>
          <motion.p
            className="mt-4 text-body leading-relaxed text-neutral-600"
            variants={scrollSlideLabel}
          >
            {intacctTimeline.intro}
          </motion.p>
        </motion.div>

        <motion.ol
          className="mt-12 grid items-stretch gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.15 }}
          variants={scrollSlideStagger}
        >
          {intacctTimeline.phases.map((phase, index) => {
            const style = PHASE_STYLES[index];
            return (
              <motion.li key={phase.label} className="min-w-0" variants={scrollSlideItem}>
                <article
                  className={cn(
                    'flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white',
                    'shadow-[0_18px_48px_-26px_rgba(23,23,23,0.2)]',
                    'ring-1 ring-black/[0.04]',
                  )}
                >
                  <div className={cn('px-5 py-3.5 sm:px-6', style.header)}>
                    <h3 className="text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-white sm:text-base">
                      {phase.label}
                    </h3>
                  </div>

                  <motion.ul
                    className="flex flex-1 flex-col gap-3.5 px-5 py-5 sm:px-6 sm:py-6"
                    initial={reduce ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={checklistStagger}
                  >
                    {phase.items.map((item) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-3"
                        variants={checklistItem}
                      >
                        <span
                          className={cn(
                            'mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full',
                            style.checkBg,
                            style.check,
                          )}
                        >
                          <Check className="size-3.5 stroke-[3]" aria-hidden />
                        </span>
                        <span className="text-[0.9rem] leading-snug text-neutral-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </article>
              </motion.li>
            );
          })}
        </motion.ol>
      </Container>
    </section>
  );
}

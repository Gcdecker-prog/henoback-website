'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { floatCard, motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type AboutExcellenceBandProps = {
  whyDifferent: {
    leftStatements: readonly string[];
    headline: string;
    comparison: {
      manages: { label: string; items: readonly string[] };
      untouched: { label: string; items: readonly string[] };
    };
    closing: string;
  };
};

const VIEWPORT = { once: true, margin: '-60px' as const };

export function AboutExcellenceBand({ whyDifferent }: AboutExcellenceBandProps) {
  const reduce = useReducedMotion();
  const [leadStatement, ...supportStatements] = whyDifferent.leftStatements;

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#0a0f1a_0%,#121826_45%,#0d1117_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_top,rgba(255,255,255,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_12%_40%,rgba(242,120,48,0.14),transparent_60%)]" />
      </div>

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-x-14 xl:gap-x-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.75, ease: motionEase }}
            className="min-w-0"
          >
            <h2 className="text-display-md font-semibold leading-[1.15] tracking-tight text-white sm:text-display-lg">
              {whyDifferent.headline}
            </h2>

            <div className="mt-8 flex gap-4 sm:mt-10">
              <span
                className="w-1 shrink-0 self-stretch rounded-full bg-heno-orange-500"
                aria-hidden
              />
              <div className="min-w-0 space-y-5 sm:space-y-6">
                {leadStatement ? (
                  <p className="text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl sm:leading-snug">
                    {leadStatement}
                  </p>
                ) : null}
                {supportStatements.map((statement) => (
                  <p
                    key={statement.slice(0, 32)}
                    className="text-base leading-relaxed text-neutral-300 sm:text-lg sm:leading-relaxed"
                  >
                    {statement}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="min-w-0"
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            variants={floatCard}
          >
            <div
              className={cn(
                'rounded-2xl border border-neutral-200/80 bg-white p-7 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.45)] sm:p-9 lg:p-10',
              )}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold leading-snug text-neutral-900">
                    {whyDifferent.comparison.manages.label}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {whyDifferent.comparison.manages.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600"
                      >
                        <span
                          className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-neutral-400"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-heno-orange-50/70 px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-sm font-semibold leading-snug text-neutral-900">
                    {whyDifferent.comparison.untouched.label}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {whyDifferent.comparison.untouched.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
                      >
                        <span
                          className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-heno-orange-500"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-7 border-t border-neutral-100 pt-6 text-sm leading-relaxed text-neutral-600 sm:mt-8 sm:text-[0.9375rem]">
                {whyDifferent.closing}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

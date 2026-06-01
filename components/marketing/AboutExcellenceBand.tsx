'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { floatCard, motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type AboutExcellenceBandProps = {
  getToKnowUs: {
    eyebrow: string;
    headline: string;
    ctaLabel: string;
  };
  whyUs: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  ctaHref: string;
};

export function AboutExcellenceBand({ getToKnowUs, whyUs, ctaHref }: AboutExcellenceBandProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#0a0f1a_0%,#121826_45%,#0d1117_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_top,rgba(255,255,255,0.04),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/92 via-neutral-950/85 to-neutral-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_18%_50%,rgba(242,120,48,0.18),transparent_55%)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: motionEase }}
            className="max-w-lg text-white"
          >
            <span className="inline-block rounded-sm bg-heno-orange-500 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              {getToKnowUs.eyebrow}
            </span>
            <h2 className="mt-6 text-display-md font-semibold leading-[1.15] tracking-tight sm:text-display-lg">
              {getToKnowUs.headline}
            </h2>
            <GtmOutboundButton href={ctaHref} size="lg" className="mt-8">
              {getToKnowUs.ctaLabel}
            </GtmOutboundButton>
          </motion.div>

          <motion.div
            className="relative lg:-mr-4 lg:translate-x-2 xl:mr-0 xl:translate-x-6"
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={floatCard}
          >
            <div
              className={cn(
                'rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12',
              )}
            >
              <div className="flex gap-3">
                <span className="mt-1 w-1 shrink-0 rounded-full bg-heno-orange-500" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
                    {whyUs.eyebrow}
                  </p>
                  <h3 className="mt-4 text-h1 font-semibold tracking-tight text-neutral-900 sm:text-display-md">
                    {whyUs.headline}
                  </h3>
                  <p className="mt-5 text-body-lg leading-relaxed text-neutral-600">{whyUs.body}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

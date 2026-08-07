'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { Reveal } from '@/components/motion/Reveal';
import { homeClosingCta } from '@/lib/content/home';
import { founderQuote } from '@/lib/content/team';
import { media } from '@/lib/content/media';
import { primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';
import { motionEase } from '@/lib/motion/variants';

/**
 * Expert closing chapter — founder proof → navy CTA, one calm sequence
 * (avoids FAQ→gray→navy feeling like three unrelated blocks).
 */
export function IntacctClosingChapter() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="Close with founder proof and next step">
      <div className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <motion.figure
            className="mx-auto grid max-w-3xl items-center gap-6 sm:gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-10"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.2 }}
            transition={{ duration: 0.7, ease: motionEase }}
          >
            <div className="relative mx-auto size-20 shrink-0 overflow-hidden rounded-full shadow-[0_14px_32px_-16px_rgba(27,54,93,0.4)] ring-[3px] ring-heno-blue-50 sm:size-24 md:mx-0">
              <Image
                src={media.team.jimFrench}
                alt={founderQuote.attribution}
                fill
                className="object-cover object-top"
                sizes="96px"
              />
            </div>
            <blockquote className="text-center md:text-left">
              <span className="block text-4xl font-semibold leading-none text-heno-orange-500" aria-hidden>
                &ldquo;
              </span>
              <p className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-heno-blue-900 sm:text-xl">
                {founderQuote.body}
              </p>
              <figcaption className="mt-4 text-sm text-neutral-500">
                <span className="font-semibold text-neutral-700">{founderQuote.attribution}</span>
                <span className="mx-1.5 text-neutral-300">•</span>
                <span>{founderQuote.title}</span>
              </figcaption>
            </blockquote>
          </motion.figure>
        </Container>
      </div>

      <div className="relative overflow-hidden bg-heno-blue-900 py-16 text-white sm:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />
        <Container className="relative text-center">
          <Reveal>
            <h2 className="text-display-md font-semibold tracking-tight text-white sm:text-display-lg">
              {homeClosingCta.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-white/70">{homeClosingCta.body}</p>
            <GtmOutboundButton
              href={pageCtaUrl('home', 'assessment', { content: 'footer-cta' })}
              size="lg"
              className="mt-8"
            >
              {primaryCta.label}
            </GtmOutboundButton>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

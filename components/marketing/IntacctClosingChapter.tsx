'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { Reveal } from '@/components/motion/Reveal';
import { NavyBand } from '@/components/marketing/NavyBand';
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

      <NavyBand as="div" className="py-16 sm:py-20">
        <Container className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-balance text-[1.75rem] font-semibold tracking-tight text-white sm:text-[2.15rem] lg:text-[2.45rem]">
              {homeClosingCta.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-[0.9375rem] leading-relaxed text-white/70 sm:text-body">{homeClosingCta.body}</p>
            <GtmOutboundButton
              href={pageCtaUrl('home', 'assessment', { content: 'footer-cta' })}
              size="lg"
              className="mt-8 whitespace-nowrap"
            >
              {primaryCta.label}
            </GtmOutboundButton>
          </Reveal>
        </Container>
      </NavyBand>
    </section>
  );
}

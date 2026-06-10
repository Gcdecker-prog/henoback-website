'use client';

import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { homeClosingCta } from '@/lib/content/home';
import { primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';

/** Dark closing CTA band */
export function ClosingCtaBand() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-16 text-white sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(242,120,48,0.2),transparent)]"
        aria-hidden
      />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="text-display-md font-semibold tracking-tight">
            {homeClosingCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-300">{homeClosingCta.body}</p>
          <GtmOutboundButton
            href={pageCtaUrl('home', 'consultation', { content: 'footer-cta' })}
            size="lg"
            className="mt-8"
          >
            {primaryCta.label}
          </GtmOutboundButton>
        </Reveal>
      </Container>
    </section>
  );
}

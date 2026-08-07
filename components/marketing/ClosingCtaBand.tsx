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
    <section className="relative overflow-hidden bg-heno-blue-900 py-16 text-white sm:py-20">
      <Container className="relative text-center">
        <Reveal>
          <h2 className="text-display-md font-semibold tracking-tight">
            {homeClosingCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{homeClosingCta.body}</p>
          <GtmOutboundButton
            href={pageCtaUrl('home', 'assessment', { content: 'footer-cta' })}
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

import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { HowItWorksPillars } from '@/components/marketing/HowItWorksPillars';
import { HowItWorksDetailSection } from '@/components/marketing/HowItWorksDetailSection';
import { servicesPage } from '@/lib/content/services-page';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = createPageMetadata({
  title: 'How Heno BackOffice Works',
  description:
    'Most outsourced accounting models focus on completing tasks. Heno focuses on how the entire back office operates.',
  path: '/services',
});

const CTA_HREF = pageCtaUrl('services', 'assessment', { content: 'services-assessment-cta' });

export default function ServicesPage() {
  const { hero, pillars, detailSections, cta } = servicesPage;

  return (
    <MarketingPageShell>
      <MarketingPageHero
        pageLabel={hero.pageLabel}
        headline={hero.headline}
        subheadline={hero.subheadline}
        className="border-b-0 pb-8 sm:pb-10"
      />

      <HowItWorksPillars pillars={pillars} />

      {detailSections.map((section, index) => (
        <HowItWorksDetailSection key={section.id} section={section} index={index} />
      ))}

      <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(242,120,48,0.2),transparent)]"
          aria-hidden
        />
        <Container className="relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-display-md font-semibold tracking-tight text-white sm:text-display-lg">
              {cta.headline}
            </h2>
            <p className="mt-4 text-neutral-300">{cta.body}</p>
            <GtmOutboundButton href={CTA_HREF} size="lg" className="mt-8">
              {cta.primaryLabel}
            </GtmOutboundButton>
          </Reveal>
        </Container>
      </section>
    </MarketingPageShell>
  );
}

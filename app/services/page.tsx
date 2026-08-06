import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { FlowBand } from '@/components/marketing/FlowBand';
import { HowItWorksPillars } from '@/components/marketing/HowItWorksPillars';
import { HowItWorksDetailSection } from '@/components/marketing/HowItWorksDetailSection';
import { servicesPage } from '@/lib/content/services-page';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';
import { Reveal } from '@/components/motion/Reveal';
import { pageThemes } from '@/lib/ui/page-themes';

export const metadata: Metadata = createPageMetadata({
  title: 'How Heno BackOffice Works',
  description:
    'Most outsourced accounting models focus on completing tasks. Heno focuses on how the entire back office operates.',
  path: '/services',
});

const CTA_HREF = pageCtaUrl('services', 'assessment', { content: 'services-assessment-cta' });

export default function ServicesPage() {
  const { hero, pillars, detailSections, cta } = servicesPage;
  const theme = pageThemes.services;

  return (
    <MarketingPageShell theme="services">
      <FlowBand stage={0} as="div">
        <MarketingPageHero
          pageLabel={hero.pageLabel}
          headline={hero.headline}
          subheadline={hero.subheadline}
          theme="services"
          className="border-b-0 pb-8 sm:pb-10"
        />
      </FlowBand>

      <FlowBand stage={1} as="div">
        <HowItWorksPillars pillars={pillars} />
      </FlowBand>

      {detailSections.map((section, index) => (
        <FlowBand key={section.id} stage={index + 2} as="div">
          <HowItWorksDetailSection section={section} index={index} />
        </FlowBand>
      ))}

      <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${theme.ctaOrb}, transparent)`,
          }}
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

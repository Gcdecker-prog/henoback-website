import type { Metadata } from 'next';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { FlowBand } from '@/components/marketing/FlowBand';
import { HowItWorksPillars } from '@/components/marketing/HowItWorksPillars';
import { HowItWorksDetailSection } from '@/components/marketing/HowItWorksDetailSection';
import { ChapterClose } from '@/components/marketing/ChapterClose';
import { servicesPage } from '@/lib/content/services-page';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';

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
    <MarketingPageShell theme="services">
      <FlowBand stage={0} as="div">
        <MarketingPageHero
          kicker={hero.kicker}
          headline={hero.headline}
          summary={hero.subheadline}
          primaryCta={{ href: CTA_HREF, label: cta.primaryLabel }}
          secondaryCta={{ href: '#accounting-alignment', label: 'See the model' }}
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

      <ChapterClose
        headline={cta.headline}
        body={cta.body}
        ctaLabel={cta.primaryLabel}
        ctaHref={CTA_HREF}
      />
    </MarketingPageShell>
  );
}

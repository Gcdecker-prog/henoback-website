import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { IndustriesGrid } from '@/components/marketing/IndustriesGrid';
import { PageCtaBand } from '@/components/marketing/PageCtaBand';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { industries } from '@/lib/content/industries';
import { industriesPage } from '@/lib/content/industries-page';
import { getIndustryImage } from '@/lib/content/media';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Industries',
  description:
    'Accounting for management consulting, creative agencies, government contracting, real estate, technology services, and more.',
  path: '/industries',
});

const CTA_HREF = pageCtaUrl('industries', 'consultation', { content: 'industries-cta' });

export default function IndustriesPage() {
  const { headline, subheadline, proofLine, cta } = industriesPage;

  const items = industries.map((industry, i) => ({
    ...industry,
    imageSrc: getIndustryImage(industry.slug),
    index: i + 1,
  }));

  return (
    <MarketingPageShell>
      <MarketingPageHero
        pageLabel="Industries"
        eyebrow={proofLine}
        headline={headline}
        subheadline={subheadline}
      />

      <section className="bg-neutral-50/50 py-14 sm:py-16 lg:py-20">
        <Container>
          <IndustriesGrid items={items} />
        </Container>
      </section>

      <PageCtaBand eyebrow={cta.eyebrow} headline={cta.headline} body={cta.body}>
        <GtmOutboundButton href={CTA_HREF} size="lg">
          {cta.primaryLabel}
        </GtmOutboundButton>
        <Link
          href="/services"
          className="inline-flex h-11 items-center justify-center rounded-full border border-heno-orange-500/35 bg-white px-7 text-sm font-semibold text-heno-orange-600 transition-colors hover:border-heno-orange-500/55 hover:bg-heno-orange-50/80"
        >
          {cta.secondaryLabel}
        </Link>
      </PageCtaBand>
    </MarketingPageShell>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { CaseStudiesGrid } from '@/components/marketing/CaseStudiesGrid';
import { PageCtaBand } from '@/components/marketing/PageCtaBand';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { caseStudies } from '@/lib/content/case-studies';
import { caseStudiesPage } from '@/lib/content/case-studies-page';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Case Studies',
  description:
    'Client success stories: TWO Capital commercial real estate growth and Linea Energy renewables development.',
  path: '/case-studies',
});

const CTA_HREF = pageCtaUrl('case-studies', 'consultation', { content: 'case-studies-cta' });

export default function CaseStudiesIndexPage() {
  const published = caseStudies.filter((c) => c.published);
  const { eyebrow, headline, subheadline, cta } = caseStudiesPage;

  return (
    <MarketingPageShell>
      <MarketingPageHero
        pageLabel="Case Studies"
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
      />

      <section className="bg-neutral-50/50 py-14 sm:py-16 lg:py-20">
        <Container>
          <CaseStudiesGrid studies={published} />
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

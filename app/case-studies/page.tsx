import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { FlowBand } from '@/components/marketing/FlowBand';
import { CaseStudiesGrid } from '@/components/marketing/CaseStudiesGrid';
import { ChapterClose } from '@/components/marketing/ChapterClose';
import { caseStudies } from '@/lib/content/case-studies';
import { caseStudiesPage } from '@/lib/content/case-studies-page';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Case Studies',
  description:
    'Back office transformations: real outcomes from structured accounting, connected reporting, and CFO-level visibility.',
  path: '/case-studies',
});

const CTA_HREF = pageCtaUrl('case-studies', 'assessment', { content: 'case-studies-cta' });

export default function CaseStudiesIndexPage() {
  const published = caseStudies.filter((c) => c.published);
  const { kicker, headline, subheadline, cta } = caseStudiesPage;

  return (
    <MarketingPageShell theme="caseStudies">
      <FlowBand stage={0} as="div">
        <MarketingPageHero
          kicker={kicker}
          headline={headline}
          summary={subheadline}
          primaryCta={{ href: CTA_HREF, label: cta.primaryLabel }}
        />
      </FlowBand>

      <FlowBand stage={1} className="border-t border-heno-blue-100/80 py-14 sm:py-16 lg:py-20">
        <Container>
          <CaseStudiesGrid studies={published} />
        </Container>
      </FlowBand>

      <ChapterClose
        headline={cta.headline}
        body={cta.body}
        ctaLabel={cta.primaryLabel}
        ctaHref={CTA_HREF}
      />
    </MarketingPageShell>
  );
}

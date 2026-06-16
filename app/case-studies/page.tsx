import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { CaseStudiesGrid } from '@/components/marketing/CaseStudiesGrid';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { caseStudies } from '@/lib/content/case-studies';
import { caseStudiesPage } from '@/lib/content/case-studies-page';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = createPageMetadata({
  title: 'Case Studies',
  description:
    'Back office transformations: real outcomes from structured accounting, connected reporting, and CFO-level visibility.',
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

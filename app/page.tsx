import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { webSiteJsonLd } from '@/lib/seo/json-ld';
import { createPageMetadata } from '@/lib/seo/metadata';
import { IntacctClosingChapter } from '@/components/marketing/IntacctClosingChapter';
import { IntacctFaqSection } from '@/components/marketing/IntacctFaqSection';
import { IntacctHomeHero } from '@/components/marketing/IntacctHomeHero';
import { IntacctIndustriesAndStudies } from '@/components/marketing/IntacctIndustriesAndStudies';
import { IntacctMattersSection } from '@/components/marketing/IntacctMattersSection';
import { IntacctProblemSection } from '@/components/marketing/IntacctProblemSection';
import { IntacctSolutionSection } from '@/components/marketing/IntacctSolutionSection';
import { IntacctTestimonialsMarquee } from '@/components/marketing/IntacctTestimonialsMarquee';
import { IntacctTimelineSection } from '@/components/marketing/IntacctTimelineSection';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { FlowBand } from '@/components/marketing/FlowBand';
import { VisibilityModelBand } from '@/components/marketing/VisibilityModelBand';
import { intacctHomeMeta } from '@/lib/content/home-intacct';

export const metadata: Metadata = createPageMetadata({
  title: intacctHomeMeta.title,
  description: intacctHomeMeta.description,
  path: '/',
});

/** Intacct revision homepage — full visual flow for local review. */
export default function HomePage() {
  return (
    <MarketingPageShell theme="home">
      <JsonLd data={webSiteJsonLd()} />

      <FlowBand stage={0} as="div">
        <IntacctHomeHero />
      </FlowBand>

      <IntacctTestimonialsMarquee />

      <FlowBand stage={2} as="div">
        <IntacctProblemSection />
      </FlowBand>

      <FlowBand stage={3} as="div">
        <IntacctMattersSection />
      </FlowBand>

      <FlowBand stage={4} as="div" surfaceClassName="bg-transparent">
        <IntacctSolutionSection />
      </FlowBand>

      <VisibilityModelBand />

      <FlowBand stage={5} as="div">
        <IntacctIndustriesAndStudies />
      </FlowBand>

      <FlowBand stage={0} as="div">
        <IntacctTimelineSection />
      </FlowBand>

      <FlowBand stage={1} as="div" surfaceClassName="bg-transparent">
        <IntacctFaqSection />
      </FlowBand>

      <IntacctClosingChapter />
    </MarketingPageShell>
  );
}

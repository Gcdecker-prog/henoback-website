import type { Metadata } from 'next';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { FlowBand } from '@/components/marketing/FlowBand';
import { GetStartedHero } from '@/components/marketing/GetStartedHero';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Get Started',
  description:
    'Take a short back office maturity check. Heno reviews your results and follows up with clear next steps.',
  path: '/get-started',
});

export default function GetStartedPage() {
  return (
    <MarketingPageShell theme="getStarted">
      <FlowBand stage={0} as="div">
        <GetStartedHero />
      </FlowBand>
    </MarketingPageShell>
  );
}

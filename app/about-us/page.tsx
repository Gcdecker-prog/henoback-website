import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import { AboutPageHero } from '@/components/marketing/AboutPageHero';
import { AboutExcellenceBand } from '@/components/marketing/AboutExcellenceBand';
import { aboutUsPage } from '@/lib/content/about-us';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { FlowBand } from '@/components/marketing/FlowBand';

export const metadata: Metadata = createPageMetadata({
  title: 'About Us',
  description:
    'Most outsourced accounting models manage the problem instead of fixing it. Heno brings structure, consistency, and alignment to your back office.',
  path: '/about-us',
});

export default function AboutUsPage() {
  const { hero, stats, whyDifferent, heroImage } = aboutUsPage;

  return (
    <MarketingPageShell theme="about">
      <FlowBand stage={0} as="div">
        <AboutPageHero
          kicker={hero.kicker}
          headline={hero.headline}
          paragraphs={hero.paragraphs}
          imageSrc={heroImage.imageSrc}
          imageAlt={heroImage.imageAlt}
          stats={stats}
        />
      </FlowBand>

      <FlowBand stage={1} as="div">
        <AboutExcellenceBand whyDifferent={whyDifferent} />
      </FlowBand>
    </MarketingPageShell>
  );
}

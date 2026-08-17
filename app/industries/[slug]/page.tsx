import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { PhotoFrame } from '@/components/marketing/ProductShell';
import { ChapterClose } from '@/components/marketing/ChapterClose';
import { FlowBand } from '@/components/marketing/FlowBand';
import { industries, getIndustry } from '@/lib/content/industries';
import { homeClosingCta } from '@/lib/content/home';
import { assessmentUrl } from '@/lib/gtm-links';
import { headerCta, primaryCta } from '@/lib/site-config';
import { createPageMetadata } from '@/lib/seo/metadata';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) return {};
  return createPageMetadata({
    title: industry.headline,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default function IndustryLandingPage({ params }: PageProps) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();

  const assessmentHref = assessmentUrl({
    content: `industry-${industry.slug}-maturity`,
  });

  return (
    <MarketingPageShell>
      <FlowBand stage={0} as="div">
        <MarketingPageHero
          kicker="Project-based firms"
          headline={industry.headline}
          summary={industry.summary}
          primaryCta={{ href: assessmentHref, label: headerCta.label }}
          secondaryCta={{ href: '/services', label: 'See how it works' }}
          visual={
            <PhotoFrame className="aspect-[4/3] w-full">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </PhotoFrame>
          }
        />
      </FlowBand>

      <ChapterClose
        headline={homeClosingCta.headline}
        body={homeClosingCta.body}
        ctaLabel={primaryCta.label}
        ctaHref={assessmentHref}
      />
    </MarketingPageShell>
  );
}

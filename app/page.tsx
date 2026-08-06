import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { webSiteJsonLd } from '@/lib/seo/json-ld';
import { createPageMetadata } from '@/lib/seo/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { HomeHero } from '@/components/marketing/HomeHero';
import { HomeOpening } from '@/components/marketing/HomeOpening';
import { HomeAlignmentSection } from '@/components/marketing/HomeAlignmentSection';
import { HomeIndustriesBand } from '@/components/marketing/HomeIndustriesBand';
import { HomeWhySection } from '@/components/marketing/HomeWhySection';
import { PlatformMarquee } from '@/components/marketing/PlatformMarquee';
import { FounderQuoteCard } from '@/components/marketing/FounderQuoteCard';
import { VisibilityModelBand } from '@/components/marketing/VisibilityModelBand';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { FlowBand } from '@/components/marketing/FlowBand';
import { Reveal } from '@/components/motion/Reveal';
import { caseStudies } from '@/lib/content/case-studies';
import { homeMeta } from '@/lib/content/home';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

export const metadata: Metadata = createPageMetadata({
  title: homeMeta.title,
  description: homeMeta.description,
  path: '/',
});

export default function HomePage() {
  const featuredStudies = caseStudies.filter((c) => c.published).slice(0, 2);

  return (
    <MarketingPageShell theme="home">
      <JsonLd data={webSiteJsonLd()} />

      <FlowBand stage={0} as="div" className="bg-white">
        <HomeOpening>
          <HomeHero />
        </HomeOpening>
      </FlowBand>

      <FlowBand stage={1} as="div">
        <HomeWhySection />
      </FlowBand>

      <FlowBand stage={2} as="div">
        <HomeAlignmentSection />
      </FlowBand>

      <FlowBand stage={3} as="div">
        <HomeIndustriesBand />
      </FlowBand>

      <FlowBand stage={4} className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
              Case studies
            </p>
            <h2 className="mt-3 text-display-md font-semibold text-neutral-900">
              Back Office Transformations
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredStudies.map((study) => (
              <li key={study.slug}>
                <Reveal>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className={cn(
                      glassPanelSubtle,
                      'group flex overflow-hidden p-1.5 ring-1 ring-white/50 transition-shadow hover:shadow-[0_20px_48px_-16px_rgba(23,23,23,0.12)]',
                    )}
                  >
                    <div className="relative hidden min-h-[220px] w-[42%] shrink-0 overflow-hidden rounded-2xl sm:block">
                      <Image
                        src={study.heroImage}
                        alt={study.clientName}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="280px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                      <h3 className="text-h3 font-semibold text-neutral-900 group-hover:text-heno-orange-600">
                        {study.clientName}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                        {study.excerpt}
                      </p>
                      <span className="mt-5 text-sm font-medium text-heno-orange-600">
                        Read case study →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal>
            <Link
              href="/case-studies"
              className="mt-6 inline-block text-sm font-medium text-heno-orange-600"
            >
              View all case studies
            </Link>
          </Reveal>
        </Container>
      </FlowBand>

      <FlowBand stage={5} as="div">
        <PlatformMarquee />
      </FlowBand>

      <FlowBand stage={0} className="border-t border-neutral-100 py-16 sm:py-20">
        <Container>
          <FounderQuoteCard />
        </Container>
      </FlowBand>

      <VisibilityModelBand />
    </MarketingPageShell>
  );
}

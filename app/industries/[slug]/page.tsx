import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { industries, getIndustry } from '@/lib/content/industries';
import { assessmentUrl, pageCtaUrl } from '@/lib/gtm-links';
import { primaryCta } from '@/lib/site-config';
import { createPageMetadata } from '@/lib/seo/metadata';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';
import { glass } from '@/lib/ui/glass';

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

  return (
    <MarketingPageShell>
      <MarketingPageHero
        pageLabel={industry.shortName}
        eyebrow="Project-based firms"
        headline={industry.headline}
        subheadline={industry.summary}
      />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className={cn(glass(), 'p-8 sm:p-10')}>
                <h2 className="text-h2 font-semibold text-neutral-900">
                  See where your back office stands
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Start with a short maturity assessment tailored to how {industry.shortName.toLowerCase()}{' '}
                  firms operate—then explore how Heno BackOffice creates alignment for your sector.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <GtmOutboundButton
                    href={assessmentUrl({
                      content: `industry-${industry.slug}-maturity`,
                    })}
                    size="lg"
                  >
                    See Your Maturity
                  </GtmOutboundButton>
                  <GtmOutboundButton
                    href={pageCtaUrl(`industry-${industry.slug}`, 'consultation')}
                    variant="secondary"
                    size="lg"
                  >
                    {primaryCta.label}
                  </GtmOutboundButton>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 shadow-card">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </MarketingPageShell>
  );
}

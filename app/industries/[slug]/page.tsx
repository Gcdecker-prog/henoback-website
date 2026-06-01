import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { DetailHero } from '@/components/marketing/DetailHero';
import { getIndustryBySlug, industries } from '@/lib/content/industries';
import { getIndustryImage } from '@/lib/content/media';
import { primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { Reveal } from '@/components/motion/Reveal';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};
  return createPageMetadata({
    title: industry.title,
    description: industry.summary,
    path: `/industries/${params.slug}`,
  });
}

export default function IndustryDetailPage({ params }: PageProps) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  return (
    <MarketingPageShell>
      <DetailHero
        eyebrow="Industries"
        title={industry.title}
        summary={industry.summary}
        imageSrc={getIndustryImage(industry.slug)}
        imageAlt={industry.title}
      >
        <GtmOutboundButton
          href={pageCtaUrl(`industry-${industry.slug}`, 'consultation', {
            content: `industry-${industry.slug}-hero`,
          })}
          className="border-white/30 bg-heno-orange-500 hover:bg-heno-orange-600"
        >
          {primaryCta.label}
        </GtmOutboundButton>
      </DetailHero>

      <Container className="py-14 sm:py-16">
        <Reveal>
          <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-heno-orange-600">
              Home
            </Link>
            <span className="mx-2 text-neutral-300">→</span>
            <Link href="/industries" className="hover:text-heno-orange-600">
              Industries
            </Link>
            <span className="mx-2 text-neutral-300">→</span>
            <span className="font-medium text-neutral-700">{industry.title}</span>
          </nav>
          <p className="mt-8 max-w-3xl text-body-lg leading-relaxed text-neutral-600">
            {industry.body}
          </p>
          <Link
            href="/industries"
            className="mt-8 inline-flex text-sm font-semibold text-heno-orange-600 hover:underline"
          >
            ← All industries
          </Link>
        </Reveal>
      </Container>
    </MarketingPageShell>
  );
}

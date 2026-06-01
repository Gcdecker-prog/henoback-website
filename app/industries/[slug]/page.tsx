import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { DetailHero } from '@/components/marketing/DetailHero';
import { industries } from '@/lib/content/industries';
import { getIndustryImage } from '@/lib/content/media';
import { primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) return {};
  return createPageMetadata({
    title: industry.title,
    description: industry.summary,
    path: `/industries/${params.slug}`,
  });
}

export default function IndustryDetailPage({ params }: PageProps) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) notFound();

  return (
    <>
      <DetailHero
        eyebrow="Industry"
        title={industry.title}
        summary={industry.summary}
        imageSrc={getIndustryImage(industry.slug)}
        imageAlt={industry.title}
      >
        <GtmOutboundButton
          href={pageCtaUrl(`industry-${industry.slug}`, 'consultation')}
          className="border-white/30 bg-heno-orange-500 hover:bg-heno-orange-600"
        >
          {primaryCta.label}
        </GtmOutboundButton>
      </DetailHero>
      <Container className="py-14">
        <p className="max-w-2xl text-body-lg text-neutral-600">
          Full long-form copy from henobackoffice.com will be added in the next content pass.
        </p>
      </Container>
    </>
  );
}

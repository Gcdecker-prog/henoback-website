import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { DetailHero } from '@/components/marketing/DetailHero';
import { services } from '@/lib/content/services';
import { getServiceImage } from '@/lib/content/media';
import { primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${params.slug}`,
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <DetailHero
        eyebrow="Service"
        title={service.title}
        summary={service.summary}
        imageSrc={getServiceImage(service.slug)}
        imageAlt={service.title}
      >
        <GtmOutboundButton
          href={pageCtaUrl(`service-${service.slug}`, 'consultation')}
          className="border-white/30 bg-heno-orange-500 hover:bg-heno-orange-600"
        >
          {primaryCta.label}
        </GtmOutboundButton>
      </DetailHero>
      <Container className="py-14">
        <p className="max-w-2xl text-body-lg text-neutral-600">
          Full long-form copy from henobackoffice.com will be added in the next content pass. Images and structure are live.
        </p>
      </Container>
    </>
  );
}

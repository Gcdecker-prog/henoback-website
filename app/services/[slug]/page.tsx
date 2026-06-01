import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { DetailHero } from '@/components/marketing/DetailHero';
import { getServiceBySlug, services } from '@/lib/content/services';
import { getServiceImage } from '@/lib/content/media';
import { primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { Reveal } from '@/components/motion/Reveal';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${params.slug}`,
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <MarketingPageShell>
      <DetailHero
        eyebrow="Our Services"
        title={service.title}
        summary={service.summary}
        imageSrc={getServiceImage(service.slug)}
        imageAlt={service.title}
      >
        <GtmOutboundButton
          href={pageCtaUrl(`service-${service.slug}`, 'consultation', {
            content: `service-${service.slug}-hero`,
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
            <Link href="/services" className="hover:text-heno-orange-600">
              Our Services
            </Link>
            <span className="mx-2 text-neutral-300">→</span>
            <span className="font-medium text-neutral-700">{service.title}</span>
          </nav>
          <p className="mt-8 max-w-3xl text-body-lg leading-relaxed text-neutral-600">
            {service.body}
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex text-sm font-semibold text-heno-orange-600 hover:underline"
          >
            ← All services
          </Link>
        </Reveal>
      </Container>
    </MarketingPageShell>
  );
}

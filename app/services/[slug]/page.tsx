import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { DetailHero } from '@/components/marketing/DetailHero';
import { ChapterClose } from '@/components/marketing/ChapterClose';
import { FlowBand } from '@/components/marketing/FlowBand';
import { homeClosingCta } from '@/lib/content/home';
import { getServiceBySlug, services } from '@/lib/content/services';
import { getServiceImage } from '@/lib/content/media';
import { primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';
import { secondaryCtaClass } from '@/components/marketing/ChapterCtas';

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

  const assessmentHref = pageCtaUrl(`service-${service.slug}`, 'assessment', {
    content: `service-${service.slug}-hero`,
  });

  return (
    <MarketingPageShell theme="services">
      <FlowBand stage={0} as="div">
        <DetailHero
          kicker="How it works"
          title={service.title}
          summary={service.summary}
          imageSrc={getServiceImage(service.slug)}
          imageAlt={service.title}
        >
          <GtmOutboundButton href={assessmentHref} size="lg">
            {primaryCta.label} →
          </GtmOutboundButton>
        </DetailHero>
      </FlowBand>

      <FlowBand stage={1} as="div">
        <Container className="py-14 sm:py-16">
          <Reveal>
            <p className="max-w-3xl text-body-lg leading-[1.7] text-neutral-600">{service.body}</p>
            <Link href="/services" className={cn(secondaryCtaClass, 'mt-8')}>
              All services
            </Link>
          </Reveal>
        </Container>
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

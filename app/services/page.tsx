import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContentGrid } from '@/components/marketing/ContentGrid';
import { services } from '@/lib/content/services';
import { getServiceImage } from '@/lib/content/media';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Services',
  description:
    'Bookkeeping, full-service accounting, CFO outsourcing, payroll integration, audit support, and expense automation for professional service firms.',
  path: '/services',
});

export default function ServicesPage() {
  const items = services.map((s) => ({
    ...s,
    imageSrc: getServiceImage(s.slug),
  }));

  return (
    <Container className="py-14 sm:py-20">
      <p className="text-sm font-medium text-heno-orange-600">Services</p>
      <h1 className="mt-2 text-display-md font-semibold tracking-tight text-neutral-900">
        How we help professional service firms
      </h1>
      <p className="mt-4 max-w-2xl text-body-lg text-neutral-600">
        All nine services from henobackoffice.com — bookkeeping through CFO outsourcing and expense automation.
      </p>
      <ContentGrid heading="Our services" items={items} basePath="/services" />
    </Container>
  );
}

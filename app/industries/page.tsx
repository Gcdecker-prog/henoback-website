import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContentGrid } from '@/components/marketing/ContentGrid';
import { industries } from '@/lib/content/industries';
import { getIndustryImage } from '@/lib/content/media';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Industries',
  description:
    'Accounting for management consulting, creative agencies, government contracting, real estate, technology services, and more.',
  path: '/industries',
});

export default function IndustriesPage() {
  const items = industries.map((i) => ({
    ...i,
    imageSrc: getIndustryImage(i.slug),
  }));

  return (
    <Container className="py-14 sm:py-20">
      <p className="text-sm font-medium text-heno-orange-600">Industries</p>
      <h1 className="mt-2 text-display-md font-semibold tracking-tight text-neutral-900">
        Who we help
      </h1>
      <p className="mt-4 max-w-2xl text-body-lg text-neutral-600">
        Project-based, people-driven firms — not generic growth-company bookkeeping.
      </p>
      <ContentGrid heading="Industries we know best" items={items} basePath="/industries" />
    </Container>
  );
}

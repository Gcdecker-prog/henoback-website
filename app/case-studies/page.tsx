import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { caseStudies } from '@/lib/content/case-studies';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { createPageMetadata } from '@/lib/seo/metadata';
import { cn } from '@/lib/cn';

export const metadata: Metadata = createPageMetadata({
  title: 'Case Studies',
  description:
    'Client success stories: TWO Capital commercial real estate growth and Linea Energy renewables development.',
  path: '/case-studies',
});

export default function CaseStudiesIndexPage() {
  const published = caseStudies.filter((c) => c.published);

  return (
    <Container className="py-14 sm:py-20">
      <p className="text-sm font-medium text-heno-orange-600">Case studies</p>
      <h1 className="mt-2 text-display-md font-semibold tracking-tight text-neutral-900">
        Client success stories
      </h1>
      <p className="mt-4 max-w-2xl text-body-lg text-neutral-600">
        Real outcomes from outsourced accounting, CFO advisory, and connected financial systems.
      </p>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {published.map((study) => (
          <li key={study.slug}>
            <Link
              href={`/case-studies/${study.slug}`}
              className={cn(glassPanelSubtle, 'group flex overflow-hidden p-0')}
            >
              <div className="relative aspect-[16/10] w-full sm:aspect-auto sm:w-2/5 sm:min-h-[220px]">
                <Image
                  src={study.heroImage}
                  alt=""
                  fill
                  className="object-cover transition-transform group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h2 className="text-h2 font-semibold text-neutral-900 group-hover:text-heno-orange-600">
                  {study.clientName}
                </h2>
                <p className="mt-2 text-sm text-neutral-500">{study.industry}</p>
                <p className="mt-3 flex-1 text-sm text-neutral-600">{study.excerpt}</p>
                <span className="mt-4 text-sm font-medium text-heno-orange-600">Read case study →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

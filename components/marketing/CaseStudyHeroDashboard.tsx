import Image from 'next/image';
import Link from 'next/link';
import { getClientLogoForStudy } from '@/lib/content/client-logos';
import type { CaseStudy } from '@/lib/content/case-studies';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

type CaseStudyHeroDashboardProps = {
  study: CaseStudy;
};

/** Editorial case study cover — typographic stats, no dashboard card chrome */
export function CaseStudyHeroDashboard({ study }: CaseStudyHeroDashboardProps) {
  const clientLogo = getClientLogoForStudy(study.slug);

  return (
    <header className="mx-auto max-w-4xl" role="region" aria-label={study.title}>
      <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', brandUi.eyebrow)}>
        Case study
      </p>

      <h1 className="mt-4 text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.03em] text-neutral-900 sm:text-[2.75rem] lg:text-[3.25rem]">
        {study.clientName}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-[1.125rem]">
        {study.excerpt}
      </p>

      <p className="mt-5 text-sm text-neutral-500">
        <a
          href={study.clientUrl}
          className="font-medium text-heno-blue-900 underline decoration-heno-blue-400/50 underline-offset-[3px] transition-colors hover:text-heno-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          {study.clientName}
        </a>
        {study.clientSince ? ` · Client since ${study.clientSince}` : null}
        {' · '}
        {study.industry}
      </p>

      <div className="mt-10 sm:mt-12">
        <ul className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-neutral-200/90">
          {study.metrics.map((metric) => (
            <li key={metric.label} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <p className="text-[2rem] font-semibold leading-none tracking-tight text-heno-blue-900 sm:text-[2.25rem]">
                {metric.value}
              </p>
              <p className="mt-2 max-w-[12rem] text-sm leading-snug text-neutral-500">{metric.label}</p>
            </li>
          ))}
        </ul>

        {clientLogo ? (
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent" aria-hidden />
            <Link
              href={clientLogo.href ?? '#'}
              className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
              aria-label={clientLogo.name}
            >
              <Image
                src={clientLogo.imageSrc}
                alt={clientLogo.name}
                width={clientLogo.imageWidth}
                height={clientLogo.imageHeight}
                className={cn('w-auto object-contain mix-blend-multiply', clientLogo.logoHeightClass)}
              />
            </Link>
            <span className="h-px flex-1 bg-gradient-to-l from-neutral-200 to-transparent" aria-hidden />
          </div>
        ) : null}
      </div>
    </header>
  );
}

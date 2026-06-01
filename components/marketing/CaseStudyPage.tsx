import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { DetailHero } from '@/components/marketing/DetailHero';
import type { CaseStudy } from '@/lib/content/case-studies';
import { primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';
import { glass, glassStat } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

type CaseStudyPageProps = {
  study: CaseStudy;
};

export function CaseStudyPageContent({ study }: CaseStudyPageProps) {
  return (
    <>
      <DetailHero
        eyebrow="Case Studies"
        title={study.title}
        summary={study.excerpt}
        imageSrc={study.heroImage}
        imageAlt={`${study.clientName} case study`}
      >
        <p className="text-sm text-neutral-300">
          <a href={study.clientUrl} className="underline decoration-heno-orange-400 underline-offset-2" target="_blank" rel="noopener noreferrer">
            {study.clientName}
          </a>
          {study.clientSince ? ` · Client since ${study.clientSince}` : null}
          {' · '}
          {study.industry}
        </p>
      </DetailHero>

      <Container className="py-14 sm:py-20">
        <ul className="grid gap-4 sm:grid-cols-3">
          {study.metrics.map((m) => (
            <li key={m.label} className={cn(glassStat, 'px-6 py-8 text-center')}>
              <p className="text-2xl font-semibold text-heno-orange-600">{m.value}</p>
              <p className="mt-1 text-sm text-neutral-600">{m.label}</p>
            </li>
          ))}
        </ul>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-h1 font-semibold text-neutral-900">Brief client description</h2>
          <p className="mt-4 text-body-lg text-neutral-600">{study.coreMessage}</p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className={cn(glass(), 'p-8')}>
            <h2 className="text-h2 font-semibold text-neutral-900">The challenge</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{study.challenge.financial}</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{study.challenge.businessImpact}</p>
          </div>
          <div className={cn(glass(), 'p-8')}>
            <h2 className="text-h2 font-semibold text-neutral-900">Why they chose us</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{study.whyUs.vsInHouse}</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{study.whyUs.strengths}</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-h1 font-semibold text-neutral-900">Key results</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ['Accuracy', study.outcomes.accuracy],
              ['Time saved', study.outcomes.timeSaved],
              ['Cost savings', study.outcomes.costSavings],
              ['Better decisions', study.outcomes.decisions],
              ['Scaled without headcount', study.outcomes.scaled],
              ['Peace of mind', study.outcomes.peaceOfMind],
            ].map(([label, body]) => (
              <li key={label} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                <h3 className="font-semibold text-neutral-900">{label}</h3>
                <p className="mt-2 text-sm text-neutral-600">{body}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap gap-2">
          {study.services.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <GtmOutboundButton href={pageCtaUrl(`case-study-${study.slug}`, 'consultation')} size="lg">
            {primaryCta.label}
          </GtmOutboundButton>
          <Link href="/case-studies" className="inline-flex h-12 items-center text-sm font-medium text-heno-orange-600 hover:text-heno-orange-700">
            ← All case studies
          </Link>
        </div>
      </Container>
    </>
  );
}

import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { CaseStudyHeroDashboard } from '@/components/marketing/CaseStudyHeroDashboard';
import { CaseStudyStoryDashboard } from '@/components/marketing/CaseStudyStoryDashboard';
import { CaseStudyTestimonial } from '@/components/marketing/CaseStudyTestimonial';
import type { CaseStudy } from '@/lib/content/case-studies';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

type CaseStudyPageProps = {
  study: CaseStudy;
};

export function CaseStudyPageContent({ study }: CaseStudyPageProps) {
  return (
    <>
      <section className={cn('border-b border-neutral-100 py-14 sm:py-20', brandUi.sectionTint)}>
        <Container>
          <CaseStudyHeroDashboard study={study} />
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-4xl">
            <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', brandUi.eyebrow)}>
              The story
            </p>
            <h2 className="mt-3 text-display-md font-semibold tracking-tight text-neutral-900">
              {study.storyHeadline}
            </h2>
            <p className="mt-4 max-w-2xl text-body text-neutral-600">{study.storyIntro}</p>
          </div>

          <CaseStudyStoryDashboard study={study} />

          <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
            <CaseStudyTestimonial study={study} />
          </div>

          <div className="mx-auto mt-14 max-w-4xl border-t border-neutral-100 pt-10">
            <Link
              href="/case-studies"
              className="inline-flex h-12 items-center text-sm font-medium text-heno-orange-600 hover:text-heno-orange-700"
            >
              ← All case studies
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

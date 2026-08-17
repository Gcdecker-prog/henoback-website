import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { CaseStudyHeroDashboard } from '@/components/marketing/CaseStudyHeroDashboard';
import { CaseStudyStoryDashboard } from '@/components/marketing/CaseStudyStoryDashboard';
import { CaseStudyTestimonial } from '@/components/marketing/CaseStudyTestimonial';
import { ChapterClose } from '@/components/marketing/ChapterClose';
import { ChapterHeadline, chapterBodyClass } from '@/components/marketing/ChapterHeadline';
import { FlowBand } from '@/components/marketing/FlowBand';
import { secondaryCtaClass } from '@/components/marketing/ChapterCtas';
import type { CaseStudy } from '@/lib/content/case-studies';
import { homeClosingCta } from '@/lib/content/home';
import { pageCtaUrl } from '@/lib/gtm-links';
import { primaryCta } from '@/lib/site-config';

type CaseStudyPageProps = {
  study: CaseStudy;
};

export function CaseStudyPageContent({ study }: CaseStudyPageProps) {
  const ctaHref = pageCtaUrl(`case-study-${study.slug}`, 'assessment', {
    content: `case-study-${study.slug}-close`,
  });

  return (
    <>
      <FlowBand stage={0} as="div">
        <CaseStudyHeroDashboard study={study} />
      </FlowBand>

      <FlowBand stage={1} className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-4xl">
            <ChapterHeadline kicker="The story" headline={study.storyHeadline} as="h2" />
            <p className={`mt-5 ${chapterBodyClass}`}>{study.storyIntro}</p>
          </div>

          <CaseStudyStoryDashboard study={study} />

          <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
            <CaseStudyTestimonial study={study} />
          </div>

          <div className="mx-auto mt-14 max-w-4xl pt-4">
            <Link href="/case-studies" className={secondaryCtaClass}>
              All case studies
            </Link>
          </div>
        </Container>
      </FlowBand>

      <ChapterClose
        headline={homeClosingCta.headline}
        body={homeClosingCta.body}
        ctaLabel={primaryCta.label}
        ctaHref={ctaHref}
      />
    </>
  );
}

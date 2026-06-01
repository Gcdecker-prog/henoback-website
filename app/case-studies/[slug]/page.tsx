import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyPageContent } from '@/components/marketing/CaseStudyPage';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { getCaseStudy, caseStudies } from '@/lib/content/case-studies';
import { siteConfig } from '@/lib/site-config';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, caseStudyArticleJsonLd } from '@/lib/seo/json-ld';
import { createPageMetadata } from '@/lib/seo/metadata';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.filter((c) => c.published).map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return createPageMetadata({
    title: study.title,
    description: study.excerpt,
    path: `/case-studies/${params.slug}`,
  });
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const pageUrl = `${siteConfig.url}/case-studies/${study.slug}`;

  return (
    <>
      <JsonLd
        data={[
          caseStudyArticleJsonLd(study, pageUrl),
          breadcrumbJsonLd([
            { name: 'Home', url: siteConfig.url },
            { name: 'Case Studies', url: `${siteConfig.url}/case-studies` },
            { name: study.clientName, url: pageUrl },
          ]),
        ]}
      />
      <MarketingPageShell>
        <CaseStudyPageContent study={study} />
      </MarketingPageShell>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { GetStartedPaths } from '@/components/marketing/GetStartedPaths';
import { getStartedPage } from '@/lib/content/get-started-page';
import { siteConfig } from '@/lib/site-config';
import { createPageMetadata } from '@/lib/seo/metadata';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';
import { glass } from '@/lib/ui/glass';

export const metadata: Metadata = createPageMetadata({
  title: 'Get Started',
  description: 'Book a consultation or take the outsource readiness assessment.',
  path: '/get-started',
});

export default function GetStartedPage() {
  const { headline, subheadline, paths } = getStartedPage;
  const { phone, email } = siteConfig.contact;

  return (
    <MarketingPageShell>
      <MarketingPageHero
        pageLabel="Get Started"
        eyebrow="Get started"
        headline={headline}
        subheadline={subheadline}
      />

      <section className="bg-neutral-50/50 py-12 sm:py-16 lg:py-20">
        <Container>
          <GetStartedPaths consultation={paths.consultation} assessment={paths.assessment} />

          <Reveal>
            <div
              className={cn(
                glass(),
                'mt-10 flex flex-col items-start justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center sm:px-8',
              )}
            >
              <p className="text-sm text-neutral-600">
                Prefer to talk first?{' '}
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="font-semibold text-neutral-900 hover:text-heno-orange-600"
                >
                  {phone}
                </a>{' '}
                ·{' '}
                <a
                  href={`mailto:${email}`}
                  className="font-semibold text-neutral-900 hover:text-heno-orange-600"
                >
                  {email}
                </a>
              </p>
              <Link
                href="/services"
                className="text-sm font-semibold text-heno-orange-600 hover:text-heno-orange-700"
              >
                Explore services →
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </MarketingPageShell>
  );
}

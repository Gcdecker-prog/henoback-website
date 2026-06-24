import type { Metadata } from 'next';
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
  description:
    'Start improving your back office today. Talk through your setup and identify where structure, reporting, and processes can be improved.',
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
          <GetStartedPaths assessment={paths.assessment} consultation={paths.consultation} />

          <Reveal>
            <div className={cn(glass(), 'mx-auto mt-10 max-w-2xl px-6 py-5 text-center sm:px-8')}>
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
            </div>
          </Reveal>
        </Container>
      </section>
    </MarketingPageShell>
  );
}

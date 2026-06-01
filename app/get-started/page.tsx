import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { primaryCta, secondaryCta } from '@/lib/site-config';
import { assessmentUrl, consultationIntakeUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';
import { glass } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

export const metadata: Metadata = createPageMetadata({
  title: 'Get Started',
  description: 'Book a consultation or take the outsource readiness assessment.',
  path: '/get-started',
});

export default function GetStartedPage() {
  return (
    <Container className="py-14 sm:py-20">
      <p className="text-sm font-medium text-heno-orange-600">Get started</p>
      <h1 className="mt-2 text-display-md font-semibold tracking-tight text-neutral-900">
        Let&apos;s modernize your back office
      </h1>
      <p className="mt-4 max-w-2xl text-body-lg text-neutral-600">
        We&apos;ll walk through your financial processes, tools, and goals — and show you what a
        modern back office can look like for your firm.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className={cn(glass(), 'flex flex-col p-8')}>
          <h2 className="text-h2 font-semibold text-neutral-900">{primaryCta.label}</h2>
          <p className="mt-3 flex-1 text-sm text-neutral-600">
            Speak with our team via the Heno GTM intake form. UTMs: henoback-www /
            henoback_office.
          </p>
          <GtmOutboundButton href={consultationIntakeUrl({ content: 'get-started-primary' })} className="mt-6 w-fit">
            {primaryCta.label}
          </GtmOutboundButton>
        </div>
        <div className={cn(glass(), 'flex flex-col p-8')}>
          <h2 className="text-h2 font-semibold text-neutral-900">{secondaryCta.label}</h2>
          <p className="mt-3 flex-1 text-sm text-neutral-600">
            Self-serve readiness assessment on the GTM app — same UTM pattern as the primary CTA.
          </p>
          <GtmOutboundButton href={assessmentUrl({ content: 'get-started-assessment' })} variant="secondary" className="mt-6 w-fit">
            {secondaryCta.label}
          </GtmOutboundButton>
        </div>
      </div>
    </Container>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { CampaignPlaybook } from '@/components/marketing/CampaignPlaybook';
import { isCampaignPlaybookEnabled } from '@/lib/campaign-playbook';
import { createPageMetadata } from '@/lib/seo/metadata';

/** Never statically cache — gate is server env only */
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Campaign playbook',
    description: 'Internal UTM landing URLs for HenoBack marketing → GTM attribution.',
    path: '/campaigns',
  }),
  robots: { index: false, follow: false },
};

export default function CampaignsPage() {
  if (!isCampaignPlaybookEnabled()) {
    notFound();
  }

  return (
    <MarketingPageShell>
      <MarketingPageHero
        pageLabel="Campaigns"
        eyebrow="Internal · not indexed"
        headline="Landing pages & UTM playbook"
        subheadline="Copy inbound URLs for ads and email. Leads are stored in the GTM engine when visitors complete intake or assessment."
      />
      <section className="bg-neutral-50/50 py-12 sm:py-16">
        <Container>
          <CampaignPlaybook />
        </Container>
      </section>
    </MarketingPageShell>
  );
}

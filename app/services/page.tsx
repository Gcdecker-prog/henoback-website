import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { MarketingPageHero } from '@/components/marketing/MarketingPageHero';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { ServicesShowcase } from '@/components/marketing/ServicesShowcase';
import { ServicesBackOfficeBand } from '@/components/marketing/ServicesBackOfficeBand';
import { TeamCard } from '@/components/marketing/TeamCard';
import { services } from '@/lib/content/services';
import { servicesPage } from '@/lib/content/services-page';
import { aboutUsPage } from '@/lib/content/about-us';
import { getServiceImage } from '@/lib/content/media';
import { pageCtaUrl } from '@/lib/gtm-links';
import { createPageMetadata } from '@/lib/seo/metadata';
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/Reveal';
import { glass } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

export const metadata: Metadata = createPageMetadata({
  title: 'Our Services',
  description:
    'Bookkeeping, full-service accounting, CFO outsourcing, payroll integration, audit support, and expense automation for professional service firms.',
  path: '/services',
});

const CTA_HREF = pageCtaUrl('services', 'consultation', { content: 'services-free-estimate' });

export default function ServicesPage() {
  const { hero, cta, closing } = servicesPage;
  const { team } = aboutUsPage;
  const serviceItems = services.map((service) => ({
    ...service,
    imageSrc: getServiceImage(service.slug),
  }));

  return (
    <MarketingPageShell>
      <MarketingPageHero
        pageLabel={hero.pageLabel}
        headline={hero.headline}
        subheadline={hero.subheadline}
      />

      <section className="border-t border-neutral-100/80 bg-white pb-16 sm:pb-20">
        <Container className="pt-4 sm:pt-6">
          <ServicesShowcase items={serviceItems} />
        </Container>
      </section>

      <ServicesBackOfficeBand />

      <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(242,120,48,0.2),transparent)]"
          aria-hidden
        />
        <Container className="relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-400">
              {cta.eyebrow}
            </p>
            <h2 className="mt-4 text-display-md font-semibold tracking-tight text-white sm:text-display-lg">
              {cta.headline}
            </h2>
            <GtmOutboundButton href={CTA_HREF} size="lg" className="mt-8">
              {cta.primaryLabel}
            </GtmOutboundButton>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-neutral-100/80 bg-white py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
              {team.eyebrow}
            </p>
            <h2 className="mt-4 text-display-md font-semibold tracking-tight text-neutral-900">
              {team.headline}
            </h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" as="div">
            {team.members.map((member) => (
              <RevealItem key={member.name}>
                <TeamCard name={member.name} role={member.role} imageSrc={member.imageSrc} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section className="bg-neutral-50/80 py-16 sm:py-20">
        <Container className="text-center">
          <Reveal>
            <div className={cn(glass(), 'mx-auto max-w-2xl px-8 py-12 sm:px-12')}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
                {closing.eyebrow}
              </p>
              <h2 className="mt-4 text-display-md font-semibold tracking-tight text-neutral-900">
                {closing.headline}
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/services" size="lg">
                  {closing.primaryCta}
                </Button>
                <GtmOutboundButton
                  href={CTA_HREF}
                  variant="secondary"
                  size="lg"
                  className="border-heno-orange-500/35 text-heno-orange-600 hover:border-heno-orange-500/55 hover:bg-heno-orange-50/80"
                >
                  {closing.secondaryCta}
                </GtmOutboundButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </MarketingPageShell>
  );
}

import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { createPageMetadata } from '@/lib/seo/metadata';
import { AboutPageHero } from '@/components/marketing/AboutPageHero';
import { AboutExcellenceBand } from '@/components/marketing/AboutExcellenceBand';
import { TeamCard } from '@/components/marketing/TeamCard';
import { aboutUsPage } from '@/lib/content/about-us';
import { pageCtaUrl } from '@/lib/gtm-links';
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/Reveal';
import { MarketingPageShell } from '@/components/marketing/MarketingPageShell';
import { glass } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

const PAGE_SLUG = 'about-us';

export const metadata: Metadata = createPageMetadata({
  title: 'About Us',
  description:
    'Heno BackOffice Services — US-based outsourced accounting for consulting and professional service firms. 20+ years of excellence.',
  path: '/about-us',
});

export default function AboutUsPage() {
  const { hero, stats, getToKnowUs, whyUs, team, closing } = aboutUsPage;

  return (
    <MarketingPageShell>
      <AboutPageHero
        headline={hero.headline}
        paragraphs={hero.paragraphs}
        imageSrc={getToKnowUs.imageSrc}
        imageAlt={getToKnowUs.imageAlt}
        stats={stats}
      />

      <AboutExcellenceBand
        getToKnowUs={getToKnowUs}
        whyUs={whyUs}
        ctaHref={pageCtaUrl(PAGE_SLUG, 'consultation', { content: 'about-us-get-started' })}
      />

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
                <TeamCard
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-neutral-50/80 py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(242,120,48,0.08),transparent)]"
          aria-hidden
        />
        <Container className="relative text-center">
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
                  href={pageCtaUrl(PAGE_SLUG, 'consultation', { content: 'about-us-closing-cta' })}
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

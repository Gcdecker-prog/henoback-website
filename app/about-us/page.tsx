import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { createPageMetadata } from '@/lib/seo/metadata';
import { PageHero } from '@/components/marketing/PageHero';
import { TeamCard } from '@/components/marketing/TeamCard';
import { aboutUsPage } from '@/lib/content/about-us';
import { pageCtaUrl } from '@/lib/gtm-links';
import { glass, glassPanelElevated, glassStat, ambientPageGlow } from '@/lib/ui/glass';
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
    <>
      <div className={ambientPageGlow()} aria-hidden />

      <PageHero eyebrow={hero.eyebrow} headline={hero.headline}>
        {hero.paragraphs.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </PageHero>

      <Container className="py-12 sm:py-16">
        <ul className="grid gap-5 sm:grid-cols-2">
          {stats.map((stat) => (
            <li key={stat.label} className={glassStat}>
              <p className="text-4xl font-semibold tracking-tight text-neutral-900">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </Container>

      <section className="border-y border-neutral-100/80 bg-neutral-50/50 py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
            {getToKnowUs.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-display-md font-semibold tracking-tight text-neutral-900">
            {getToKnowUs.headline}
          </h2>
          <GtmOutboundButton
            href={pageCtaUrl(PAGE_SLUG, 'consultation', { content: 'about-us-get-started' })}
            size="lg"
            className="mt-8"
          >
            {getToKnowUs.ctaLabel}
          </GtmOutboundButton>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className={cn(glassPanelElevated, 'max-w-4xl p-8 sm:p-12')}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
              {whyUs.eyebrow}
            </p>
            <h2 className="mt-4 text-display-md font-semibold tracking-tight text-neutral-900">
              {whyUs.headline}
            </h2>
            <p className="mt-6 text-body-lg leading-relaxed text-neutral-600">{whyUs.body}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-100/80 bg-white py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
            {team.eyebrow}
          </p>
          <h2 className="mt-4 text-display-md font-semibold tracking-tight text-neutral-900">
            {team.headline}
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.members.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
              />
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(242,120,48,0.1),transparent)]"
          aria-hidden
        />
        <Container className="relative text-center">
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
              >
                {closing.secondaryCta}
              </GtmOutboundButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

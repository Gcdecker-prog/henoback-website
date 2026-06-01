import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { webSiteJsonLd } from '@/lib/seo/json-ld';
import { createPageMetadata } from '@/lib/seo/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { HomeHero } from '@/components/marketing/HomeHero';
import { ContentGrid } from '@/components/marketing/ContentGrid';
import { AnimatedTrustStats } from '@/components/marketing/AnimatedTrustStats';
import { PartnerStrip } from '@/components/marketing/PartnerStrip';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/Reveal';
import { GlassMesh } from '@/components/motion/GlassMesh';
import { services } from '@/lib/content/services';
import { industries } from '@/lib/content/industries';
import { caseStudies } from '@/lib/content/case-studies';
import { trustSignals, valueProps } from '@/lib/content/trust-signals';
import { founderQuote } from '@/lib/content/team';
import { media, getServiceImage, getIndustryImage } from '@/lib/content/media';
import { siteConfig, primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';
import { glass, glassPanelSubtle } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

export const metadata: Metadata = createPageMetadata({
  title: 'Modern Accounting for Professional Service Firms',
  description: siteConfig.description,
  path: '/',
});

const serviceCards = services.map((s) => ({
  ...s,
  imageSrc: getServiceImage(s.slug),
}));

const industryCards = industries.map((i) => ({
  ...i,
  imageSrc: getIndustryImage(i.slug),
}));

export default function HomePage() {
  const featuredStudies = caseStudies.filter((c) => c.published).slice(0, 2);

  return (
    <>
      <JsonLd data={webSiteJsonLd()} />
      <HomeHero />

      <Container>
        <AnimatedTrustStats stats={trustSignals} />
      </Container>

      <section className="relative overflow-hidden border-y border-neutral-100 bg-neutral-50/80 py-16 sm:py-20">
        <GlassMesh className="opacity-60" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-display-md font-semibold tracking-tight text-neutral-900">
              We protect your back office so your business can thrive
            </h2>
            <RevealStagger className="mt-8 space-y-6" as="div">
              {valueProps.map((item) => (
                <RevealItem key={item.title}>
                  <h3 className="text-h3 font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>
          <Reveal>
            <div className={cn(glassPanelSubtle, 'relative aspect-[4/3] overflow-hidden p-1')}>
              <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
                <Image
                  src={media.marketing.whyUs}
                  alt="Professional financial team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <ContentGrid
          heading="All the services that our company provides"
          subheading="Nine offerings — same breadth as henobackoffice.com, elevated presentation."
          items={serviceCards}
          basePath="/services"
        />
        <ContentGrid
          heading="The industries we know best"
          items={industryCards}
          basePath="/industries"
        />
      </Container>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
              Case studies
            </p>
            <h2 className="mt-3 text-display-md font-semibold text-neutral-900">Client success</h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredStudies.map((study) => (
              <li key={study.slug}>
                <Reveal>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className={cn(glassPanelSubtle, 'group flex overflow-hidden p-0')}
                  >
                    <div className="relative hidden w-2/5 shrink-0 sm:block">
                      <Image
                        src={study.heroImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="240px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-semibold text-neutral-900 group-hover:text-heno-orange-600">
                        {study.clientName}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-neutral-600">{study.excerpt}</p>
                      <span className="mt-4 text-sm font-medium text-heno-orange-600">
                        Read case study →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal>
            <Link
              href="/case-studies"
              className="mt-6 inline-block text-sm font-medium text-heno-orange-600"
            >
              View all case studies
            </Link>
          </Reveal>
        </Container>
      </section>

      <PartnerStrip />

      <section className="border-t border-neutral-100 bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className={cn(glass(), 'max-w-3xl p-8 sm:p-10')}>
              <p className="text-sm font-medium text-heno-orange-600">From the founder</p>
              <blockquote className="mt-4 text-body-lg text-neutral-700">
                &ldquo;{founderQuote.body}&rdquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-4">
                <Image
                  src={media.team.jimFrench}
                  alt={founderQuote.attribution}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <p className="text-sm font-semibold text-neutral-900">
                  {founderQuote.attribution} · {founderQuote.title}
                </p>
              </footer>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-neutral-900 py-16 text-white sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(242,120,48,0.2),transparent)]"
          aria-hidden
        />
        <Container className="relative text-center">
          <Reveal>
            <h2 className="text-display-md font-semibold tracking-tight">
              Start transforming your back office today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-300">
              Walk through your financial processes, tools, and goals — and see what a modern back
              office can look like.
            </p>
          <GtmOutboundButton
            href={pageCtaUrl('home', 'consultation', { content: 'footer-cta' })}
            size="lg"
            className="mt-8"
          >
            {primaryCta.label}
          </GtmOutboundButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

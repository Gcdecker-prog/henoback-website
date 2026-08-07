'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { HomeEditorialBand } from '@/components/marketing/HomeEditorialBand';
import { Reveal } from '@/components/motion/Reveal';
import { industries } from '@/lib/content/industries';
import { intacctCaseStudies, intacctIndustries } from '@/lib/content/home-intacct';
import { cn } from '@/lib/cn';

const featuredCards = [
  {
    slug: 'two-capital',
    clientName: 'TWO Capital',
    href: '/case-studies/two-capital',
    image: '/images/case-studies/two-capital-professional.jpg',
    imageAlt: 'Professional urban real estate and corporate development',
    excerpt:
      'Scaled from $50M to over $1B in assets with aligned accounting, connected reporting, and CFO-level visibility—without an in-house finance team.',
    metrics: [
      { value: '$1B+', label: 'Assets scaled' },
      { value: '0', label: 'In-house finance hires' },
      { value: 'Real-time', label: 'CFO-level reporting' },
    ],
  },
  {
    slug: 'linea-energy',
    clientName: 'Linea Energy',
    href: '/case-studies/linea-energy',
    image: '/images/case-studies/linea-energy-wind.jpg',
    imageAlt: 'Wind turbines at a renewable energy project site',
    excerpt:
      'Project-level financial visibility and connected planning built to support fast-moving capital deployment across renewables.',
    metrics: [
      { value: '75%', label: 'Less bookkeeping time' },
      { value: '40%', label: 'Lower accounting costs' },
      { value: '100%', label: 'On-time reporting' },
    ],
  },
] as const;

/** Industries + equal-template full-bleed case study cards. */
export function IntacctIndustriesAndStudies() {
  const industryLinks = industries.map((industry) => ({
    name: industry.name,
    slug: industry.slug,
    href: `/industries/${industry.slug}?utm_content=intacct-home-industry-${industry.slug}`,
  }));

  return (
    <>
      <HomeEditorialBand
        id="intacct-industries-heading"
        headline={intacctIndustries.headline}
        intro={intacctIndustries.intro}
        industryLinks={industryLinks}
        imageSrc={intacctIndustries.image}
        imageAlt={intacctIndustries.imageAlt}
        imageObjectPosition="50% 35%"
        sectionClassName="bg-white"
      />

      <section className="border-t border-neutral-200/60 bg-[#f7f7f8] py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-heno-orange-600">
              Case studies
            </p>
            <h2 className="mt-3 text-display-md font-semibold tracking-tight text-neutral-900 sm:text-display-lg">
              {intacctCaseStudies.headline}
            </h2>
            <p className="mt-3 max-w-2xl text-body leading-relaxed text-neutral-600">
              {intacctCaseStudies.intro}
            </p>
          </Reveal>

          <ul className="mt-10 grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
            {featuredCards.map((study, index) => (
              <li key={study.slug} className="min-h-0">
                <Reveal className="h-full" direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.06}>
                  <Link
                    href={study.href}
                    className={cn(
                      'group relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-[1.45rem] sm:min-h-[30rem]',
                      'shadow-[0_24px_56px_-28px_rgba(23,23,23,0.35)]',
                      'ring-1 ring-black/[0.05]',
                      'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                      'hover:-translate-y-0.5',
                    )}
                  >
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heno-blue-900 via-heno-blue-900/72 to-heno-blue-900/15" />

                    {/* Shared overlay template — identical vertical rhythm on both cards */}
                    <div className="relative mt-auto grid w-full grid-rows-[auto_auto_minmax(4.5rem,auto)_auto] gap-4 p-6 sm:gap-5 sm:p-7">
                      <h3 className="text-[1.45rem] font-semibold tracking-tight text-white sm:text-[1.6rem]">
                        {study.clientName}
                      </h3>

                      <dl className="grid grid-cols-3 gap-3 border-y border-white/15 py-4">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="min-w-0">
                            <dt className="text-[1.05rem] font-semibold tracking-tight text-white sm:text-[1.15rem]">
                              {metric.value}
                            </dt>
                            <dd className="mt-1 text-[0.7rem] leading-snug text-white/70 sm:text-[0.75rem]">
                              {metric.label}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <p className="line-clamp-3 text-sm leading-relaxed text-white/80">
                        {study.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-heno-orange-500">
                        Read case study
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { Reveal } from '@/components/motion/Reveal';
import { intacctSolution } from '@/lib/content/home-intacct';
import { assessmentUrl } from '@/lib/gtm-links';
import { cn } from '@/lib/cn';

/** Solution band — navy surface, full-width white title, copy + team photo. */
export function IntacctSolutionSection() {
  return (
    <section
      className="relative bg-heno-blue-900 py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="intacct-solution-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_70%_55%_at_80%_20%,rgba(74,158,196,0.16),transparent_60%)]"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <h2
            id="intacct-solution-heading"
            className="max-w-4xl text-display-md font-semibold tracking-tight text-white sm:text-display-lg lg:max-w-5xl"
          >
            {intacctSolution.headlineBefore}{' '}
            <span className="text-heno-blue-400">{intacctSolution.headlineAccent}</span>.
          </h2>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <Reveal direction="left">
            <div>
              <p className="text-body leading-relaxed text-white/75">{intacctSolution.intro}</p>
              <ul className="mt-7 space-y-3.5">
                {intacctSolution.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/90 sm:text-[0.95rem]"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-heno-orange-500"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <GtmOutboundButton
                href={assessmentUrl({ content: 'intacct-solution-cta' })}
                size="lg"
                className="mt-9"
              >
                {intacctSolution.cta}
              </GtmOutboundButton>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.06}>
            <div
              className={cn(
                'relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-[1.5rem]',
                'shadow-[0_32px_64px_-28px_rgba(0,0,0,0.45)] ring-1 ring-white/10 lg:mx-0 lg:max-w-none',
              )}
            >
              <Image
                src={intacctSolution.image}
                alt={intacctSolution.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

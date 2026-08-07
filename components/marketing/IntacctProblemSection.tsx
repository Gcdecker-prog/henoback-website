'use client';

import Image from 'next/image';
import { AlertCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { intacctProblem } from '@/lib/content/home-intacct';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

/** Problem band — month-end stress photo with high-contrast navy/orange badge. */
export function IntacctProblemSection() {
  return (
    <section className="bg-heno-blue-50/50 py-16 sm:py-20" aria-labelledby="intacct-problem-heading">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="left">
            {/* Cap width near source (~980×653) so the tall crop is not upscaled soft */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[20rem] overflow-hidden rounded-[1.5rem] shadow-[0_32px_64px_-28px_rgba(23,23,23,0.35)] sm:max-w-[22.5rem] lg:mx-0">
              <Image
                src={intacctProblem.image}
                alt={intacctProblem.imageAlt}
                fill
                className="object-cover object-[55%_20%]"
                sizes="(max-width: 640px) 80vw, 360px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-heno-blue-900/85 via-heno-blue-900/35 to-transparent p-5 pt-20">
                <div className="rounded-2xl border border-white/10 bg-heno-blue-900 p-4 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] sm:p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-heno-orange-500 text-white">
                      <AlertCircle className="size-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-heno-blue-100">
                        {intacctProblem.overlayTitle}
                      </p>
                      <p className="mt-1.5 text-base font-semibold tracking-tight text-heno-orange-500">
                        {intacctProblem.overlayStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.06}>
            <div>
              <h2
                id="intacct-problem-heading"
                className="text-display-md font-semibold tracking-tight text-heno-blue-900"
              >
                {intacctProblem.headline}
              </h2>
              <p className="mt-4 text-body leading-relaxed text-neutral-600">{intacctProblem.intro}</p>
              <ul className="mt-6 space-y-3">
                {intacctProblem.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700 sm:text-[0.95rem]">
                    <span className={cn('mt-1.5 size-1.5 shrink-0 rounded-full', brandUi.bullet)} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
                {intacctProblem.body}
              </p>
              <blockquote className={cn('mt-8 bg-white/80 py-3 pl-4 pr-3 sm:py-3.5 sm:pl-5', brandUi.outcomeBar)}>
                <p className={cn('text-[0.975rem] font-semibold leading-snug', brandUi.outcomeText)}>
                  {intacctProblem.closerLead}
                </p>
                {intacctProblem.closerFollow ? (
                  <p className="mt-1 text-[0.9375rem] font-medium leading-snug text-neutral-600">
                    {intacctProblem.closerFollow}
                  </p>
                ) : null}
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

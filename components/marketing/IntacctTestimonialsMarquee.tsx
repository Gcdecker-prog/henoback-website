'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { intacctTestimonials } from '@/lib/content/home-intacct';

/** Navy testimonials — compact marquee cards with balanced quote marks. */
export function IntacctTestimonialsMarquee() {
  const loop = [...intacctTestimonials.items, ...intacctTestimonials.items];

  return (
    <section
      className="relative overflow-hidden bg-heno-blue-900 pb-12 pt-11 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14"
      aria-labelledby="intacct-trust-heading"
    >
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="intacct-trust-heading"
              className="text-display-md font-semibold tracking-tight text-white sm:text-display-lg"
            >
              {intacctTestimonials.headline}
            </h2>
            <p className="mt-3 text-body text-white/70">{intacctTestimonials.intro}</p>
          </div>
        </Reveal>
      </Container>

      <div className="platform-marquee-mask relative mt-8 overflow-hidden sm:mt-9">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-heno-blue-900 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-heno-blue-900 to-transparent sm:w-24" />
        <div className="testimonial-marquee-track flex w-max items-stretch gap-4 px-4 sm:gap-5 sm:px-5">
          {loop.map((item, index) => (
            <figure
              key={`${item.name}-${index}`}
              className="flex w-[19rem] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-sm sm:w-[21rem] sm:px-5 sm:py-4"
            >
              <blockquote className="text-[0.9rem] leading-snug text-white/90 sm:text-[0.9375rem] sm:leading-[1.45]">
                <span className="mr-0.5 font-semibold text-heno-orange-500" aria-hidden>
                  &ldquo;
                </span>
                {item.quote}
                <span className="ml-0.5 font-semibold text-heno-orange-500" aria-hidden>
                  &rdquo;
                </span>
              </blockquote>

              <div className="mt-4 flex items-center gap-2.5 border-t border-white/10 pt-3.5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={36}
                  height={36}
                  className="size-9 shrink-0 rounded-full object-cover ring-2 ring-heno-orange-500/45"
                />
                <figcaption className="min-w-0">
                  <p className="truncate text-[0.8125rem] font-semibold leading-tight text-white">
                    {item.name}
                  </p>
                  <p className="mt-0.5 truncate text-[0.6875rem] leading-tight text-heno-blue-100/75">
                    {item.role}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

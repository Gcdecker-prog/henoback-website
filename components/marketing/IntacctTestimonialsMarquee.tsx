'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { intacctTestimonials } from '@/lib/content/home-intacct';

/** Navy testimonials — fixed quote band so every face sits on one baseline. */
export function IntacctTestimonialsMarquee() {
  const loop = [...intacctTestimonials.items, ...intacctTestimonials.items];

  return (
    <section
      className="relative overflow-hidden bg-heno-blue-900 pb-14 pt-12 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16"
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

      <div className="platform-marquee-mask relative mt-10 overflow-hidden sm:mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-heno-blue-900 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-heno-blue-900 to-transparent sm:w-28" />
        <div className="testimonial-marquee-track flex w-max items-start gap-5 px-5 sm:gap-6 sm:px-6">
          {loop.map((item, index) => (
            <figure
              key={`${item.name}-${index}`}
              className="grid h-[21rem] w-[21rem] shrink-0 grid-rows-[auto_8.75rem_auto] rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm sm:h-[22rem] sm:w-[23.5rem] sm:grid-rows-[auto_9.25rem_auto] sm:p-7"
            >
              <p className="text-3xl font-semibold leading-none text-heno-orange-500" aria-hidden>
                &ldquo;
              </p>

              <blockquote className="mt-2 overflow-hidden text-[0.95rem] leading-relaxed text-white/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]">
                {item.quote}
              </blockquote>

              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-full object-cover ring-2 ring-heno-orange-500/50"
                />
                <figcaption className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                  <p className="truncate text-xs text-heno-blue-100/75">{item.role}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

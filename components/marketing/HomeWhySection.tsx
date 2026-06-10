'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { homeWhySection } from '@/lib/content/home';
import { media } from '@/lib/content/media';
import { useEditorialBandScroll } from '@/lib/motion/use-editorial-band-scroll';
import { motionEase, scrollSlideItem, scrollSlideStagger } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

export function HomeWhySection({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const scroll = useEditorialBandScroll(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={cn('border-t border-neutral-100 bg-neutral-50/40 py-16 sm:py-20 lg:py-24', className)}
      aria-labelledby="home-why-heading"
    >
      <Container>
        <motion.ul
          className="grid gap-4 sm:grid-cols-3"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollSlideStagger}
        >
          {homeWhySection.stats.map((stat) => (
            <motion.li
              key={stat.value}
              variants={scrollSlideItem}
              className="rounded-2xl border border-neutral-200/80 bg-white px-6 py-6 text-center shadow-[0_12px_40px_-24px_rgba(23,23,23,0.12)]"
            >
              <p className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
                {stat.value}
              </p>
              {'label' in stat && stat.label ? (
                <p className="mt-1.5 text-sm leading-snug text-neutral-600">{stat.label}</p>
              ) : null}
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14">
          <motion.div
            style={scroll.motionEnabled ? { y: scroll.copyY } : undefined}
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: motionEase }}
          >
            <h2
              id="home-why-heading"
              className="max-w-xl text-display-md font-semibold tracking-tight text-neutral-900"
            >
              {homeWhySection.headline}
            </h2>

            <ul className="mt-8 space-y-6">
              {homeWhySection.pillars.map((pillar) => (
                <li key={pillar.title}>
                  <h3 className="text-base font-semibold leading-snug text-neutral-900 sm:text-[1.0625rem]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem]">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-2 border-heno-blue-400 bg-white/80 py-3 pl-4 pr-3 sm:py-3.5 sm:pl-5">
              <p className="text-[0.975rem] font-semibold leading-snug text-heno-blue-900 sm:text-[1rem]">
                {homeWhySection.closing.lead}
              </p>
              <p className="mt-1 text-[0.9375rem] font-medium leading-snug text-neutral-600">
                {homeWhySection.closing.follow}
              </p>
            </blockquote>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.06, ease: motionEase }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_24px_64px_-28px_rgba(23,23,23,0.18)]"
          >
            <motion.div
              className="absolute inset-0 will-change-transform"
              style={
                scroll.motionEnabled
                  ? { y: scroll.imageY, scale: scroll.imageScale }
                  : undefined
              }
            >
              <Image
                src={media.marketing.whyUs}
                alt={homeWhySection.imageAlt}
                fill
                className="object-cover object-[50%_42%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

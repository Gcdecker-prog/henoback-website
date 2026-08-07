'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { useEditorialBandScroll } from '@/lib/motion/use-editorial-band-scroll';
import { brandUi } from '@/lib/ui/brand-ui';
import { motionEase, scrollSlideItem, scrollSlideStagger } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type EditorialPillar = {
  title: string;
  body: string;
  linkLabel: string;
  href: string;
};

type IndustryLink = {
  name: string;
  href: string;
  slug: string;
};

type HomeEditorialBandProps = {
  id: string;
  headline: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  sectionClassName?: string;
  pillars?: readonly EditorialPillar[];
  intro?: string;
  industries?: readonly string[];
  industryLinks?: readonly IndustryLink[];
  imageObjectPosition?: string;
  visual?: React.ReactNode;
};

/** Split band — copy left, scroll-linked image right (no outer chrome) */
export function HomeEditorialBand({
  id,
  headline,
  imageSrc,
  imageAlt,
  className,
  sectionClassName,
  pillars,
  intro,
  industries,
  industryLinks,
  imageObjectPosition = '50% 42%',
  visual,
}: HomeEditorialBandProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const scroll = useEditorialBandScroll(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={cn('py-14 sm:py-16 lg:py-20', sectionClassName)}
      aria-labelledby={id}
    >
      <Container>
        <div
          className={cn(
            'grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12 xl:gap-16',
            className,
          )}
        >
          <motion.div
            className="flex h-full flex-col lg:py-1"
            style={scroll.motionEnabled ? { y: scroll.copyY } : undefined}
            initial={reduce ? false : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.18 }}
            transition={{ duration: 0.75, ease: motionEase }}
          >
              <h2
                id={id}
                className="max-w-xl text-[1.65rem] font-semibold leading-[1.18] tracking-[-0.02em] text-neutral-900 sm:text-display-md"
              >
                {headline}
              </h2>

              {intro && (
                <p className="mt-5 max-w-lg text-[0.9375rem] leading-relaxed text-neutral-600 sm:text-body">
                  {intro}
                </p>
              )}

              {pillars && (
                <motion.ul
                  className="mt-7 space-y-6 sm:mt-8 sm:space-y-7"
                  initial={reduce ? false : 'hidden'}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={scrollSlideStagger}
                >
                  {pillars.map((pillar) => (
                    <motion.li key={pillar.title} variants={scrollSlideItem}>
                      <h3 className={cn('text-[1.0625rem] font-semibold leading-snug sm:text-lg', brandUi.pillarTitle)}>
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-[0.875rem] leading-relaxed text-neutral-700 sm:text-[0.9375rem]">
                        {pillar.body}
                      </p>
                      <Link
                        href={pillar.href}
                        className={cn('group mt-2.5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold', brandUi.link)}
                      >
                        <ArrowRight
                          className={cn('size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5', brandUi.linkIcon)}
                          aria-hidden
                        />
                        {pillar.linkLabel}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {industryLinks && (
                <motion.div
                  className="mt-6 flex flex-1 flex-col sm:mt-7"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: motionEase }}
                >
                  <p className="text-[0.9375rem] font-medium text-neutral-800">
                    Choose your sector:
                  </p>
                  <ul className="mt-3 flex flex-1 flex-col justify-between gap-2.5 lg:gap-3">
                    {industryLinks.map((item) => (
                      <li key={item.slug} className="min-h-0">
                        <Link
                          href={item.href}
                          data-industry={item.slug}
                          className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-200/80 bg-white/90 px-4 py-3.5 text-[0.9375rem] font-medium text-neutral-800 transition-[border-color,box-shadow,transform] hover:-translate-y-px hover:border-heno-orange-500/25 hover:shadow-[0_8px_24px_-12px_rgba(242,120,48,0.1)] lg:py-4"
                        >
                          <span>{item.name}</span>
                          <ArrowRight
                            className="size-3.5 shrink-0 text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:text-heno-orange-500"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {industries && !industryLinks && (
                <motion.div
                  className="mt-6 sm:mt-7"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: motionEase }}
                >
                  <p className="text-[0.9375rem] font-medium text-neutral-800">
                    Sectors we support most:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {industries.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-neutral-800"
                      >
                        <span
                          className={cn('mt-2 size-1 shrink-0 rounded-full', brandUi.bullet)}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/case-studies"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-heno-orange-600 transition-colors hover:text-heno-orange-700"
                  >
                    View back office transformations
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="relative min-h-[22rem] overflow-hidden rounded-2xl bg-neutral-100 sm:min-h-[26rem] lg:min-h-[34rem] lg:self-stretch"
              initial={reduce ? false : { opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.18 }}
              transition={{ duration: 0.75, delay: 0.08, ease: motionEase }}
            >
              {visual ? (
                <div className="flex h-full min-h-[22rem] items-center p-4 sm:min-h-[26rem] sm:p-6 lg:min-h-full">
                  {visual}
                </div>
              ) : imageSrc && imageAlt ? (
                <motion.div
                  className="absolute inset-0 will-change-transform"
                  style={
                    scroll.motionEnabled
                      ? { y: scroll.imageY, scale: scroll.imageScale }
                      : undefined
                  }
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: imageObjectPosition }}
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    quality={90}
                  />
                </motion.div>
              ) : null}
            </motion.div>
        </div>
      </Container>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { useEditorialBandScroll } from '@/lib/motion/use-editorial-band-scroll';
import { motionEase, scrollSlideItem, scrollSlideStagger } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type EditorialPillar = {
  title: string;
  body: string;
  linkLabel: string;
  href: string;
};

type HomeEditorialBandProps = {
  id: string;
  headline: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  sectionClassName?: string;
  pillars?: readonly EditorialPillar[];
  intro?: string;
  industries?: readonly string[];
  imageObjectPosition?: string;
};

/** Bordered split band — copy left, scroll-linked image right */
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
  imageObjectPosition = '50% 42%',
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
            'overflow-hidden border border-heno-blue-900/20 bg-white',
            'shadow-[0_1px_0_rgba(27,54,93,0.04)]',
            className,
          )}
        >
          <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-stretch">
            <motion.div
              className="flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-12 xl:px-12"
              style={scroll.motionEnabled ? { y: scroll.copyY } : undefined}
              initial={reduce ? false : { opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: motionEase }}
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
                      <h3 className="text-[1.0625rem] font-semibold leading-snug text-heno-orange-500 sm:text-lg">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-[0.875rem] leading-relaxed text-neutral-700 sm:text-[0.9375rem]">
                        {pillar.body}
                      </p>
                      <Link
                        href={pillar.href}
                        className="group mt-2.5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-heno-blue-900 transition-colors hover:text-heno-blue-700"
                      >
                        <ArrowRight
                          className="size-3.5 shrink-0 text-heno-blue-400 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                        {pillar.linkLabel}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {industries && (
                <motion.div
                  className="mt-6 sm:mt-7"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: motionEase }}
                >
                  <p className="text-[0.9375rem] font-medium text-neutral-800">
                    Common industries include:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {industries.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-neutral-800"
                      >
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-heno-orange-500"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="relative min-h-[220px] overflow-hidden bg-neutral-100 sm:min-h-[280px] lg:min-h-[32rem] lg:border-l lg:border-neutral-100"
              initial={reduce ? false : { opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.06, ease: motionEase }}
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
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: imageObjectPosition }}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  quality={90}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { scrollSlideItem, scrollSlideStagger } from '@/lib/motion/variants';

type Pillar = {
  id: string;
  title: string;
  body: string;
  linkLabel: string;
};

type HowItWorksPillarsProps = {
  pillars: readonly Pillar[];
};

export function HowItWorksPillars({ pillars }: HowItWorksPillarsProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className="border-t border-heno-blue-100/80 bg-white pb-14 pt-10 sm:pb-16 sm:pt-12"
      aria-label="How it works pillars"
    >
      <Container>
        <motion.ul
          className="grid items-stretch gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={scrollSlideStagger}
        >
          {pillars.map((pillar) => (
            <motion.li key={pillar.id} variants={scrollSlideItem} className="min-w-0">
              <Link
                href={`#${pillar.id}`}
                className="group flex h-full flex-col border-l-[3px] border-heno-blue-900 pl-4 sm:pl-5"
              >
                <h2 className="text-pretty text-lg font-semibold leading-snug tracking-tight text-heno-blue-900 sm:text-xl">
                  {pillar.title}
                </h2>
                <p className="mt-2.5 flex-1 text-pretty text-[0.875rem] leading-relaxed text-neutral-500 sm:text-[0.9375rem]">
                  {pillar.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-heno-orange-500 transition-transform duration-300 group-hover:translate-x-0.5">
                  {pillar.linkLabel}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

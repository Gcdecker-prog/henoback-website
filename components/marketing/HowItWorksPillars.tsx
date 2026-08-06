'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { usePageFlow } from '@/components/marketing/PageFlowContext';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { scrollSlideItem, scrollSlideStagger } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

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
  const { theme } = usePageFlow();

  return (
    <section
      className="border-t border-heno-blue-100/70 bg-transparent pb-14 pt-6 sm:pb-16 sm:pt-8"
      aria-label="How it works pillars"
    >
      <Container>
        <motion.ul
          className="grid gap-4 sm:grid-cols-2 sm:gap-5"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={scrollSlideStagger}
        >
          {pillars.map((pillar) => (
            <motion.li key={pillar.id} variants={scrollSlideItem} className="min-w-0">
              <Link
                href={`#${pillar.id}`}
                className={cn(
                  'group relative flex h-full min-h-[12.5rem] flex-col overflow-hidden rounded-2xl p-6 transition-[transform,box-shadow,border-color] duration-500 sm:min-h-[13.5rem] sm:p-7',
                  glassPanelSubtle,
                  'border-white/90 bg-white/88 hover:-translate-y-0.5',
                  'hover:shadow-[0_24px_56px_-20px_rgba(23,23,23,0.12),inset_0_1px_0_0_rgba(255,255,255,1)]',
                )}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${theme.glowAccent}, transparent 68%)`,
                  }}
                  aria-hidden
                />

                <div className="relative flex justify-end">
                  <ArrowUpRight
                    className={cn(
                      'size-4 shrink-0 text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
                      theme.id === 'services' && 'group-hover:text-heno-blue-500',
                      theme.id === 'about' && 'group-hover:text-heno-blue-700',
                      theme.id === 'caseStudies' && 'group-hover:text-heno-blue-700',
                      (theme.id === 'home' || theme.id === 'getStarted') &&
                        'group-hover:text-heno-orange-600',
                    )}
                    aria-hidden
                  />
                </div>

                <h2 className="relative mt-3 text-lg font-semibold leading-snug tracking-tight text-neutral-900 sm:text-xl">
                  {pillar.title}
                </h2>

                <p className="relative mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-neutral-600 sm:text-[0.9375rem]">
                  {pillar.body}
                </p>

                <span
                  className={cn(
                    'relative mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold transition-colors',
                    theme.eyebrowClass,
                  )}
                >
                  {pillar.linkLabel}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

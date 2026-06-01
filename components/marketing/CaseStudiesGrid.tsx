'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { CaseStudy } from '@/lib/content/case-studies';
import { glassPanelElevated } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';

type CaseStudiesGridProps = {
  studies: readonly CaseStudy[];
};

export function CaseStudiesGrid({ studies }: CaseStudiesGridProps) {
  const reduce = useReducedMotion();

  return (
    <motion.ul
      className="grid gap-6 md:grid-cols-2 md:gap-7"
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      {studies.map((study) => (
        <motion.li key={study.slug} variants={staggerItem}>
          <Link
            href={`/case-studies/${study.slug}`}
            className={cn(
              glassPanelElevated,
              'group flex h-full flex-col overflow-hidden sm:flex-row',
              'border-neutral-200/80 transition-[transform,box-shadow,border-color] duration-500',
              'hover:-translate-y-0.5 hover:border-heno-orange-200/70',
              'hover:shadow-[0_28px_64px_-22px_rgba(242,120,48,0.14),0_12px_32px_-14px_rgba(23,23,23,0.08)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heno-orange-500/30',
            )}
          >
            <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:w-[42%] sm:min-h-[240px]">
              <Image
                src={study.heroImage}
                alt=""
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h2 className="text-h2 font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-heno-orange-600">
                {study.clientName}
              </h2>
              <p className="mt-1 text-sm text-neutral-500">{study.industry}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{study.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-heno-orange-600">
                Read case study
                <span
                  className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

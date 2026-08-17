'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { CaseStudy } from '@/lib/content/case-studies';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type CaseStudiesGridProps = {
  studies: readonly CaseStudy[];
};

export function CaseStudiesGrid({ studies }: CaseStudiesGridProps) {
  const reduce = useReducedMotion();

  return (
    <motion.ul
      className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6"
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      {studies.map((study) => (
        <motion.li key={study.slug} variants={staggerItem} className="min-h-0">
          <Link
            href={`/case-studies/${study.slug}`}
            className={cn(
              'group relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-[1.45rem] sm:min-h-[30rem]',
              'shadow-[0_24px_56px_-28px_rgba(23,23,23,0.35)] ring-1 ring-black/[0.05]',
              'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5',
            )}
          >
            <Image
              src={study.heroImage}
              alt=""
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heno-blue-900 via-heno-blue-900/72 to-heno-blue-900/15" />

            <div className="relative mt-auto grid w-full grid-rows-[auto_auto_minmax(4.5rem,auto)_auto] gap-4 p-6 sm:gap-5 sm:p-7">
              <h2 className="text-[1.45rem] font-semibold tracking-tight text-white sm:text-[1.6rem]">
                {study.clientName}
              </h2>

              <dl className="grid grid-cols-3 gap-3 border-y border-white/15 py-4">
                {study.metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label} className="min-w-0">
                    <dt className="text-[1.05rem] font-semibold tracking-tight text-white sm:text-[1.15rem]">
                      {metric.value}
                    </dt>
                    <dd className="mt-1 text-[0.7rem] leading-snug text-white/70 sm:text-[0.75rem]">
                      {metric.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="line-clamp-3 text-sm leading-relaxed text-white/80">{study.excerpt}</p>

              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-heno-orange-500">
                Read case study
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
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

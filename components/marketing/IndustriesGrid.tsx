'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Industry } from '@/lib/content/industries';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

export type IndustryGridItem = Industry & {
  imageSrc: string;
  index: number;
};

type IndustriesGridProps = {
  items: readonly IndustryGridItem[];
};

export function IndustriesGrid({ items }: IndustriesGridProps) {
  const reduce = useReducedMotion();

  return (
    <motion.ul
      className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      {items.map((item) => (
        <motion.li key={item.slug} variants={staggerItem}>
          <Link
            href={`/industries/${item.slug}`}
            className={cn(
              'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white',
              'shadow-[0_12px_40px_-18px_rgba(23,23,23,0.1)]',
              'transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
              'hover:-translate-y-1 hover:border-heno-orange-200/80',
              'hover:shadow-[0_28px_64px_-22px_rgba(242,120,48,0.18),0_12px_32px_-14px_rgba(23,23,23,0.1)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heno-orange-500/30',
            )}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
              <Image
                src={item.imageSrc}
                alt=""
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={item.index < 3 ? 'eager' : 'lazy'}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/45 via-neutral-900/5 to-transparent" />
              <span
                className="absolute left-4 top-4 text-[11px] font-semibold tabular-nums tracking-widest text-white/90"
                aria-hidden
              >
                {String(item.index).padStart(2, '0')}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-h3 font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-heno-orange-600">
                {item.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                {item.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-heno-orange-600">
                Learn more
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

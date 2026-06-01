'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Service } from '@/lib/content/services';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

export type ServiceShowcaseItem = Service & { imageSrc: string };

type ServicesShowcaseProps = {
  items: readonly ServiceShowcaseItem[];
};

export function ServicesShowcase({ items }: ServicesShowcaseProps) {
  const reduce = useReducedMotion();

  return (
    <ul className="space-y-16 sm:space-y-20 lg:space-y-24">
      {items.map((service, index) => {
        const imageRight = index % 2 === 1;

        return (
          <motion.li
            key={service.slug}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: motionEase }}
            className={cn(
              'grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16',
              imageRight && 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1',
            )}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_24px_64px_-24px_rgba(23,23,23,0.14)]">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            </div>

            <div className="min-w-0">
              <div className="flex gap-3 sm:gap-4">
                <span
                  className="mt-2 w-1 shrink-0 rounded-full bg-heno-orange-500"
                  aria-hidden
                />
                <div>
                  <h2 className="text-h1 font-semibold tracking-tight text-neutral-900 sm:text-display-md">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-heno-orange-600"
                    >
                      {service.title}
                    </Link>
                  </h2>
                  <p className="mt-5 text-body-lg leading-relaxed text-neutral-600">
                    {service.body}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-heno-orange-600 hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

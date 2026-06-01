'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { AboutStatCard } from '@/components/marketing/AboutStatCard';
import type { AboutStatIconType } from '@/components/marketing/AboutStatGraphic';
import { motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';

type AboutPageHeroProps = {
  headline: string;
  paragraphs: readonly string[];
  imageSrc: string;
  imageAlt: string;
  stats: readonly { value: string; label: string; icon: AboutStatIconType }[];
};

export function AboutPageHero({
  headline,
  paragraphs,
  imageSrc,
  imageAlt,
  stats,
}: AboutPageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(242,120,48,0.12),transparent_70%)] blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <motion.nav
          className="text-sm text-neutral-500"
          aria-label="Breadcrumb"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: motionEase }}
        >
          <Link href="/" className="hover:text-heno-orange-600">
            Home
          </Link>
          <span className="mx-2 text-neutral-300" aria-hidden>
            →
          </span>
          <span className="font-medium text-neutral-700">About Us</span>
        </motion.nav>

        <motion.div
          className="mt-10"
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={staggerContainer}
        >
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div variants={staggerItem} className="min-w-0">
              <div className="flex gap-3 sm:gap-4">
                <span
                  className="mt-2 w-1 shrink-0 rounded-full bg-heno-orange-500"
                  aria-hidden
                />
                <div>
                  <h1 className="text-display-md font-semibold tracking-tight text-neutral-900 sm:text-display-lg">
                    {headline}
                  </h1>
                  <div className="mt-6 space-y-4 text-body-lg leading-relaxed text-neutral-600">
                    {paragraphs.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_28px_72px_-28px_rgba(23,23,23,0.18)]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <motion.ul
            variants={staggerItem}
            className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-6"
          >
            {stats.map((stat, i) => (
              <li key={stat.label} className="min-w-0">
                <AboutStatCard
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  index={i}
                />
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { AboutStatCard } from '@/components/marketing/AboutStatCard';
import { ChapterHeadline, chapterBodyClass } from '@/components/marketing/ChapterHeadline';
import { PhotoFrame, ProductInset, ProductShell } from '@/components/marketing/ProductShell';
import { WaveField } from '@/components/marketing/WaveField';
import type { AboutStatIconType } from '@/components/marketing/AboutStatGraphic';
import { motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';

type AboutPageHeroProps = {
  kicker: string;
  headline: string;
  paragraphs: readonly string[];
  imageSrc: string;
  imageAlt: string;
  stats: readonly { value: string; label: string; icon: AboutStatIconType }[];
};

export function AboutPageHero({
  kicker,
  headline,
  paragraphs,
  imageSrc,
  imageAlt,
  stats,
}: AboutPageHeroProps) {
  const reduce = useReducedMotion();
  const [summary, ...rest] = paragraphs;

  return (
    <section className="relative isolate bg-white pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
      <WaveField />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <motion.div
            className="min-w-0"
            initial={reduce ? false : 'hidden'}
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <ChapterHeadline kicker={kicker} headline={headline} kickerVariant="claim" />
            </motion.div>
            {summary ? (
              <motion.p className={`mt-7 ${chapterBodyClass}`} variants={staggerItem}>
                {summary}
              </motion.p>
            ) : null}
            {rest.length ? (
              <motion.div className="mt-5 max-w-xl space-y-3.5" variants={staggerItem}>
                {rest.map((item) => (
                  <p
                    key={item.slice(0, 48)}
                    className="text-[0.875rem] leading-relaxed text-pretty text-neutral-500 sm:text-[0.9375rem]"
                  >
                    {item}
                  </p>
                ))}
              </motion.div>
            ) : null}
          </motion.div>

          <motion.div
            className="w-full min-w-0"
            initial={reduce ? false : { opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: motionEase, delay: 0.12 }}
          >
            <ProductShell className="p-3 sm:p-3.5">
              <PhotoFrame className="aspect-[4/3] w-full shadow-none ring-0">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </PhotoFrame>
            </ProductShell>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 lg:mt-14"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: motionEase }}
        >
          <ProductShell>
            <ProductInset className="p-0 sm:p-0">
              <ul className="grid grid-cols-1 divide-y divide-heno-blue-50 md:grid-cols-3 md:divide-x md:divide-y-0">
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
              </ul>
            </ProductInset>
          </ProductShell>
        </motion.div>
      </Container>
    </section>
  );
}

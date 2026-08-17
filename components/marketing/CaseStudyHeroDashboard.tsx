'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ChapterHeadline, chapterBodyClass } from '@/components/marketing/ChapterHeadline';
import { WaveField } from '@/components/marketing/WaveField';
import { getClientLogoForStudy } from '@/lib/content/client-logos';
import type { CaseStudy } from '@/lib/content/case-studies';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type CaseStudyHeroDashboardProps = {
  study: CaseStudy;
};

export function CaseStudyHeroDashboard({ study }: CaseStudyHeroDashboardProps) {
  const reduce = useReducedMotion();
  const clientLogo = getClientLogoForStudy(study.slug);

  return (
    <section className="relative isolate bg-white pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <WaveField />
      <Container className="relative">
        <motion.header
          className="max-w-4xl"
          role="region"
          aria-label={study.title}
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <ChapterHeadline kicker="Case study" headline={study.clientName} />
          </motion.div>

          <motion.p
            className={cn('mt-7', chapterBodyClass)}
            variants={staggerItem}
          >
            {study.excerpt}
          </motion.p>

          <motion.p className="mt-5 text-sm text-neutral-500" variants={staggerItem}>
            <a
              href={study.clientUrl}
              className="font-medium text-heno-blue-900 underline decoration-heno-blue-400/50 underline-offset-[3px] transition-colors hover:text-heno-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {study.clientName}
            </a>
            {study.clientSince ? ` · Client since ${study.clientSince}` : null}
            {' · '}
            {study.industry}
          </motion.p>

          <motion.ul
            className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-heno-blue-100"
            variants={staggerItem}
          >
            {study.metrics.map((metric) => (
              <li key={metric.label} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <p className="text-[2rem] font-semibold leading-none tracking-tight text-heno-blue-900 sm:text-[2.25rem]">
                  {metric.value}
                </p>
                <p className="mt-2 max-w-[12rem] text-sm leading-snug text-neutral-500">{metric.label}</p>
              </li>
            ))}
          </motion.ul>

          {clientLogo ? (
            <motion.div className="mt-10 flex items-center gap-4" variants={staggerItem}>
              <span className="h-px flex-1 bg-gradient-to-r from-heno-blue-100 to-transparent" aria-hidden />
              <Link
                href={clientLogo.href ?? '#'}
                className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
                aria-label={clientLogo.name}
              >
                <Image
                  src={clientLogo.imageSrc}
                  alt={clientLogo.name}
                  width={clientLogo.imageWidth}
                  height={clientLogo.imageHeight}
                  className={cn('w-auto object-contain mix-blend-multiply', clientLogo.logoHeightClass)}
                />
              </Link>
              <span className="h-px flex-1 bg-gradient-to-l from-heno-blue-100 to-transparent" aria-hidden />
            </motion.div>
          ) : null}
        </motion.header>
      </Container>
    </section>
  );
}

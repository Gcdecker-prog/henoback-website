'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ChapterHeadline, chapterBodyClass } from '@/components/marketing/ChapterHeadline';
import { PhotoFrame } from '@/components/marketing/ProductShell';
import { WaveField } from '@/components/marketing/WaveField';
import { motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type DetailHeroProps = {
  kicker: string;
  title: string;
  summary?: string;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
};

/** Editorial split hero — copy + framed visual, not a full-bleed overlay. */
export function DetailHero({
  kicker,
  title,
  summary,
  imageSrc,
  imageAlt,
  children,
}: DetailHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate bg-white pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <WaveField />

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-14">
          <motion.div
            initial={reduce ? false : 'hidden'}
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <ChapterHeadline kicker={kicker} headline={title} />
            </motion.div>
            {summary ? (
              <motion.p
                className={cn('mt-7', chapterBodyClass)}
                variants={staggerItem}
              >
                {summary}
              </motion.p>
            ) : null}
            {children ? (
              <motion.div className="mt-9" variants={staggerItem}>
                {children}
              </motion.div>
            ) : null}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: motionEase, delay: 0.12 }}
          >
            <PhotoFrame className="aspect-[5/4] w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
            </PhotoFrame>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

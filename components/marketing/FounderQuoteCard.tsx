'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { HenoMark } from '@/components/henoback/HenoMark';
import { founderQuote } from '@/lib/content/team';
import { media } from '@/lib/content/media';
import { motionEase, staggerContainer } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';
import { glass } from '@/lib/ui/glass';

const markSlide = {
  hidden: { opacity: 0, x: -18, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: motionEase },
  },
};

const labelSlide = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.14, ease: motionEase },
  },
};

const bodyFade = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.22, ease: motionEase },
  },
};

/** Founder quote — mark slides in on scroll; quote follows. */
export function FounderQuoteCard({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={cn(glass(), 'max-w-3xl p-8 sm:p-10', className)}>
        <div className="flex items-center gap-2.5">
          <HenoMark size={24} />
          <p className="text-sm font-medium text-heno-orange-600">From the founder</p>
        </div>
        <blockquote className="mt-4 text-body-lg text-neutral-700">
          &ldquo;{founderQuote.body}&rdquo;
        </blockquote>
        <footer className="mt-6 flex items-center gap-4">
          <Image
            src={media.team.jimFrench}
            alt={founderQuote.attribution}
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
          <p className="text-sm font-semibold text-neutral-900">
            {founderQuote.attribution} · {founderQuote.title}
          </p>
        </footer>
      </div>
    );
  }

  return (
    <motion.div
      className={cn(glass(), 'max-w-3xl p-8 sm:p-10', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={staggerContainer}
    >
      <div className="flex items-center gap-2.5">
        <motion.div variants={markSlide}>
          <HenoMark size={24} />
        </motion.div>
        <motion.p
          variants={labelSlide}
          className="text-sm font-medium text-heno-orange-600"
        >
          From the founder
        </motion.p>
      </div>
      <motion.blockquote variants={bodyFade} className="mt-4 text-body-lg text-neutral-700">
        &ldquo;{founderQuote.body}&rdquo;
      </motion.blockquote>
      <motion.footer
        variants={bodyFade}
        className="mt-6 flex items-center gap-4"
      >
        <Image
          src={media.team.jimFrench}
          alt={founderQuote.attribution}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
        <p className="text-sm font-semibold text-neutral-900">
          {founderQuote.attribution} · {founderQuote.title}
        </p>
      </motion.footer>
    </motion.div>
  );
}

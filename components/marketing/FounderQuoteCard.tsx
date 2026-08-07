'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { founderQuote } from '@/lib/content/team';
import { media } from '@/lib/content/media';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

/** Founder quote — centered split portrait + quote (no logo-like rings). */
export function FounderQuoteCard({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.figure
      className={cn(
        'relative mx-auto grid w-full max-w-4xl items-center gap-8 sm:gap-10',
        'md:grid-cols-[auto_minmax(0,1fr)] md:gap-12',
        className,
      )}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: motionEase }}
    >
      <div className="relative mx-auto shrink-0 md:mx-0">
        <div className="relative size-24 overflow-hidden rounded-full shadow-[0_16px_36px_-18px_rgba(27,54,93,0.4)] ring-3 ring-white sm:size-28 lg:size-32">
          <Image
            src={media.team.jimFrench}
            alt={founderQuote.attribution}
            fill
            className="object-cover object-top"
            sizes="128px"
          />
        </div>
      </div>

      <blockquote className="relative text-center md:text-left">
        <span
          className="block text-5xl font-semibold leading-none text-heno-orange-500 sm:text-6xl"
          aria-hidden
        >
          &ldquo;
        </span>
        <p className="mt-2 text-xl font-semibold leading-snug tracking-tight text-heno-blue-900 sm:text-2xl sm:leading-snug">
          {founderQuote.body}
        </p>
        <figcaption className="mt-5 text-sm text-neutral-500 sm:text-[0.95rem]">
          <span className="font-semibold text-neutral-700">{founderQuote.attribution}</span>
          <span className="mx-1.5 text-neutral-300">•</span>
          <span>{founderQuote.title}</span>
        </figcaption>
      </blockquote>
    </motion.figure>
  );
}

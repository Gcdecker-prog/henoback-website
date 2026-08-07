'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { homeTrustBand, testimonialClients } from '@/lib/content/client-logos';
import { dashboardCard } from '@/lib/ui/dashboard-card';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type BeforeAfterCopy = {
  eyebrow: string;
  title: string;
  sub: string;
  beforeLabel: string;
  beforeValue: string;
  afterLabel: string;
  afterValue: string;
};

type HomeOutcomeDashboardProps = {
  className?: string;
  copy?: BeforeAfterCopy;
};

const DEFAULT_COPY: BeforeAfterCopy = {
  eyebrow: 'One source of truth',
  title: 'Before vs after',
  sub: 'We turn disconnected tools and one-off reports into one number you can trust.',
  beforeLabel: 'Disconnected reports',
  beforeValue: 'Three answers',
  afterLabel: 'One reliable system',
  afterValue: 'One answer, every time',
};

function BeforeAfterChart({
  reduce,
  beforeLabel,
  beforeValue,
  afterLabel,
  afterValue,
}: {
  reduce: boolean;
  beforeLabel: string;
  beforeValue: string;
  afterLabel: string;
  afterValue: string;
}) {
  const pathTransition = { duration: 1, ease: motionEase };

  return (
    <div className="mt-6 rounded-2xl border border-neutral-200/70 bg-[#f7f8fa] p-4 sm:p-5">
      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-3 lg:gap-5">
        {/* Before — flat, muted chaos */}
        <motion.div
          className="flex min-w-0 flex-col"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.2 }}
          transition={{ duration: 0.55, ease: motionEase }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
            {beforeLabel}
          </p>
          <div className="mt-3 flex min-h-[7rem] items-center sm:min-h-[8rem]">
            <svg viewBox="0 0 140 88" className="h-[5.75rem] w-full sm:h-24" aria-hidden>
              {/* Sharp zigzag lines — conflicting reports */}
              <motion.path
                d="M4 64 L24 30 L42 58 L60 22 L78 50 L96 18 L114 46 L136 28"
                fill="none"
                stroke="#C5CDD6"
                strokeWidth="2.4"
                strokeLinecap="square"
                strokeLinejoin="miter"
                initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ ...pathTransition, delay: 0.05 }}
              />
              <motion.path
                d="M4 48 L24 72 L42 34 L60 60 L78 28 L96 66 L114 36 L136 54"
                fill="none"
                stroke="#E8A97A"
                strokeWidth="2.3"
                strokeLinecap="square"
                strokeLinejoin="miter"
                opacity={0.92}
                initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ ...pathTransition, delay: 0.12 }}
              />
              <motion.path
                d="M4 36 L24 44 L42 16 L60 52 L78 24 L96 42 L114 14 L136 40"
                fill="none"
                stroke="#8BB8D0"
                strokeWidth="2.3"
                strokeLinecap="square"
                strokeLinejoin="miter"
                opacity={0.92}
                initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ ...pathTransition, delay: 0.2 }}
              />
            </svg>
          </div>
          <p className="mt-2 text-xs font-medium text-neutral-500">{beforeValue}</p>
        </motion.div>

        <motion.span
          className="flex items-center justify-center text-lg font-medium text-heno-blue-400"
          initial={reduce ? false : { opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.28, ease: motionEase }}
          aria-hidden
        >
          →
        </motion.span>

        {/* After — elevated orange-accent card */}
        <motion.div
          className={cn(
            'flex min-w-0 flex-col rounded-2xl border border-heno-orange-400/70 bg-gradient-to-b from-white to-heno-orange-50/50',
            'p-4 shadow-[0_14px_36px_-18px_rgba(242,120,48,0.45)] sm:p-5',
          )}
          initial={reduce ? false : { opacity: 0, y: 14, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12, ease: motionEase }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-heno-orange-500">
            {afterLabel}
          </p>
          <div className="mt-3 flex min-h-[6.5rem] items-center sm:min-h-[7.25rem]">
            <svg viewBox="0 0 140 88" className="h-[5.5rem] w-full sm:h-[5.75rem]" aria-hidden>
              <defs>
                <linearGradient id="afterFillOrange" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F27830" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#F27830" stopOpacity="0.02" />
                </linearGradient>
                <filter id="afterGlow" x="-20%" y="-40%" width="140%" height="180%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <motion.path
                d="M8 68 C36 62 58 48 78 40 S116 22 132 16 L132 84 L8 84 Z"
                fill="url(#afterFillOrange)"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: 0.35 }}
              />
              <motion.path
                d="M8 68 C36 62 58 48 78 40 S116 22 132 16"
                fill="none"
                stroke="#F27830"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#afterGlow)"
                initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.95, ease: motionEase, delay: 0.4 }}
              />
              <motion.circle
                cx="132"
                cy="16"
                r="5"
                fill="#fff"
                stroke="#F27830"
                strokeWidth="2.5"
                initial={reduce ? false : { opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 1.15, ease: motionEase }}
              />
            </svg>
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-heno-blue-900 sm:text-[0.8rem]">
            <Check className="size-3.5 shrink-0 text-emerald-500 stroke-[2.75]" aria-hidden />
            {afterValue}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ClientLogoMark({ client }: { client: (typeof testimonialClients)[number] }) {
  const image = (
    <Image
      src={client.imageSrc}
      alt={client.name}
      width={client.imageWidth}
      height={client.imageHeight}
      className="h-7 w-auto max-h-7 object-contain object-center opacity-95 sm:h-8 sm:max-h-8"
    />
  );

  const wrapClass = 'flex h-9 w-[8.5rem] items-center justify-center sm:h-10 sm:w-[9.25rem]';

  if (!client.href) {
    return <div className={wrapClass}>{image}</div>;
  }

  return (
    <Link
      href={client.href}
      className={cn(
        wrapClass,
        'rounded-md outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white/30',
      )}
      aria-label={`${client.name} case study`}
    >
      {image}
    </Link>
  );
}

function TrustScaleStrip({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="bg-heno-blue-900 px-6 py-8 sm:px-10 sm:py-9"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.2 }}
      transition={{ duration: 0.55, ease: motionEase }}
    >
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: motionEase, delay: 0.04 }}
        >
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem]">
            {homeTrustBand.stat}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/70">
            {homeTrustBand.label}
          </p>
        </motion.div>

        <motion.div
          className="my-5 h-px w-28 bg-white/20 sm:my-6"
          aria-hidden
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: motionEase, delay: 0.12 }}
        />

        <motion.p
          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.16 }}
        >
          {homeTrustBand.clientsLabel}
        </motion.p>

        <ul className="mt-4 flex items-center justify-center gap-8 sm:gap-10">
          {testimonialClients.map((client, index) => (
            <motion.li
              key={client.name}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: motionEase, delay: 0.2 + index * 0.07 }}
            >
              <ClientLogoMark client={client} />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/** Before/after dashboard + centered trust strip — matches reference composition */
export function HomeOutcomeDashboard({ className, copy = DEFAULT_COPY }: HomeOutcomeDashboardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(dashboardCard, 'flex flex-col', className)}
      role="region"
      aria-label={`${copy.eyebrow} — ${copy.title}`}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: motionEase }}
    >
      <div className="flex flex-1 flex-col p-5 sm:p-7 lg:px-8 lg:pt-8 lg:pb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-heno-orange-500">
          {copy.eyebrow}
        </p>
        <p className="mt-2 text-xl font-semibold tracking-tight text-heno-blue-900 sm:text-2xl">
          {copy.title}
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
          {copy.sub}
        </p>

        <BeforeAfterChart
          reduce={!!reduce}
          beforeLabel={copy.beforeLabel}
          beforeValue={copy.beforeValue}
          afterLabel={copy.afterLabel}
          afterValue={copy.afterValue}
        />
      </div>

      <TrustScaleStrip reduce={!!reduce} />
    </motion.div>
  );
}

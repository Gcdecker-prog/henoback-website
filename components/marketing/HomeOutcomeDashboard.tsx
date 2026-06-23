'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { homeTrustBand, testimonialClients } from '@/lib/content/client-logos';
import { brandUi } from '@/lib/ui/brand-ui';
import { dashboardCard } from '@/lib/ui/dashboard-card';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type HomeOutcomeDashboardProps = {
  className?: string;
};

function BeforeAfterChart({ reduce }: { reduce: boolean }) {
  const pathTransition = { duration: 1.1, ease: motionEase };
  const lineTransition = { duration: 0.85, ease: motionEase, delay: 0.55 };

  return (
    <div className="mt-5 rounded-xl border border-neutral-100 bg-gradient-to-b from-neutral-50/80 to-white p-4">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="space-y-2">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
            Disconnected reports
          </p>
          <svg viewBox="0 0 120 72" className="h-[4.5rem] w-full" aria-hidden>
            <motion.path
              d="M0 52 Q28 18 58 42 T118 22"
              fill="none"
              stroke="#d4d4d4"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ ...pathTransition, delay: 0 }}
            />
            <motion.path
              d="M0 44 Q32 62 62 28 T118 48"
              fill="none"
              stroke="#F27830"
              strokeWidth="2"
              strokeLinecap="round"
              opacity={0.75}
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ ...pathTransition, delay: 0.12 }}
            />
            <motion.path
              d="M0 36 Q24 50 54 18 T118 38"
              fill="none"
              stroke="#7BA3C9"
              strokeWidth="2"
              strokeLinecap="round"
              opacity={0.75}
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ ...pathTransition, delay: 0.24 }}
            />
          </svg>
          <p className="text-[10px] text-neutral-500">Three answers</p>
        </div>

        <motion.span
          className="text-lg text-heno-blue-400"
          initial={reduce ? false : { opacity: 0, x: -4 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45, ease: motionEase }}
          aria-hidden
        >
          →
        </motion.span>

        <div className="space-y-2">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-heno-blue-800">
            One reliable system
          </p>
          <svg viewBox="0 0 120 72" className="h-[4.5rem] w-full" aria-hidden>
            <motion.path
              d="M0 38 L118 38"
              fill="none"
              stroke="#1B365D"
              strokeWidth="4"
              strokeLinecap="round"
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={lineTransition}
            />
            <motion.circle
              cx="118"
              cy="38"
              r="4"
              fill="#1B365D"
              initial={reduce ? false : { opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 1.2, ease: motionEase }}
            />
          </svg>
          <p className="text-[10px] font-medium text-heno-blue-800">One answer, every time</p>
        </div>
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
      className={cn(
        'w-auto object-contain opacity-90 transition-opacity duration-300',
        client.logoHeightClass,
        'mix-blend-screen',
      )}
    />
  );

  if (!client.href) return image;

  return (
    <Link
      href={client.href}
      className="group flex items-center justify-center rounded-md outline-none ring-white/0 transition-[opacity,box-shadow] hover:opacity-100 focus-visible:ring-2 focus-visible:ring-white/30"
      aria-label={`${client.name} case study`}
    >
      <span className="opacity-90 transition-opacity duration-300 group-hover:opacity-100">
        {image}
      </span>
    </Link>
  );
}

function TrustScaleStrip({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="bg-heno-blue-900 px-5 py-6 sm:px-6 sm:py-7"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: motionEase, delay: 0.15 }}
    >
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: motionEase, delay: 0.2 }}
        >
          <p className="text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
            {homeTrustBand.stat}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-white/75 sm:text-sm">
            {homeTrustBand.label}
          </p>
        </motion.div>

        <div className="my-5 h-px w-full max-w-[12rem] bg-white/25" aria-hidden />

        <motion.p
          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.32, ease: motionEase }}
        >
          {homeTrustBand.clientsLabel}
        </motion.p>

        <ul className="mt-4 flex items-center justify-center gap-8 sm:gap-10">
          {testimonialClients.map((client, index) => (
            <motion.li
              key={client.name}
              initial={reduce ? false : { opacity: 0, y: 10, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: motionEase, delay: 0.4 + index * 0.1 }}
            >
              <ClientLogoMark client={client} />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/** Before/after dashboard + trust scale + client logos — unified right column */
export function HomeOutcomeDashboard({ className }: HomeOutcomeDashboardProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(dashboardCard, 'flex h-full min-h-full flex-col', className)}
      role="region"
      aria-label="One source of truth — before and after"
    >
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className={cn('text-[10px] font-semibold uppercase tracking-[0.2em]', brandUi.eyebrow)}>
              One source of truth
            </p>
            <p className="mt-1.5 text-sm font-semibold text-neutral-900">Before vs after</p>
          </div>
          <span className="rounded-full bg-heno-orange-50 px-2.5 py-1 text-[10px] font-semibold text-heno-orange-600">
            Outcome
          </span>
        </div>

        <p className="mt-4 text-[0.8125rem] leading-relaxed text-neutral-600">
          We turn disconnected tools and one-off reports into one number you can trust.
        </p>

        <BeforeAfterChart reduce={!!reduce} />
      </div>

      <div className="mt-auto h-px bg-white" aria-hidden />

      <TrustScaleStrip reduce={!!reduce} />
    </div>
  );
}

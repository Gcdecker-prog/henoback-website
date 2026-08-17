'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BeforeAfterChart } from '@/components/marketing/BeforeAfterChart';
import { TrustScaleStrip } from '@/components/marketing/TrustScaleStrip';
import { dashboardCard } from '@/lib/ui/dashboard-card';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type BeforeAfterPanelCopy = {
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
  copy?: BeforeAfterPanelCopy;
};

const DEFAULT_COPY: BeforeAfterPanelCopy = {
  eyebrow: 'One source of truth',
  title: 'Before vs after',
  sub: 'Our team turns disconnected tools and one-off reports into one number you can trust.',
  beforeLabel: 'Before Heno',
  beforeValue: 'Three conflicting answers',
  afterLabel: 'After Heno',
  afterValue: 'One answer, every time',
};

/** Before/after panel + scale proof — classic home composition */
export function HomeOutcomeDashboard({ className, copy = DEFAULT_COPY }: HomeOutcomeDashboardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(dashboardCard, 'flex flex-col overflow-hidden', className)}
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
        <p className="mt-2 text-xl font-bold tracking-tight text-heno-blue-900 sm:text-2xl">
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

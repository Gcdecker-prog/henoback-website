'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { assessmentUrl, consultationIntakeUrl } from '@/lib/gtm-links';
import { brandUi } from '@/lib/ui/brand-ui';
import { glassPanelElevated } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';

type Path = {
  title: string;
  body: string;
  cta: string;
};

type GetStartedPathsProps = {
  assessment: Path;
  consultation: Path;
};

const cardShell = cn(
  glassPanelElevated,
  'group relative flex flex-col overflow-hidden p-8 sm:p-10',
  'border-neutral-200/80 transition-[transform,box-shadow,border-color] duration-500',
  'hover:-translate-y-0.5 hover:border-heno-orange-200/70',
  'hover:shadow-[0_28px_64px_-22px_rgba(242,120,48,0.14),0_12px_32px_-14px_rgba(23,23,23,0.08)]',
);

export function GetStartedPaths({ assessment, consultation }: GetStartedPathsProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8"
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      <motion.article variants={staggerItem} className={cn(cardShell, 'ring-1 ring-heno-orange-500/10')}>
        <p className={cn('text-[10px] font-semibold uppercase tracking-[0.18em]', brandUi.eyebrow)}>
          Recommended
        </p>
        <h2 className="mt-2 text-h2 font-semibold text-neutral-900">{assessment.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {assessment.body}
        </p>

        <GtmOutboundButton
          href={assessmentUrl({ content: 'get-started-assessment' })}
          variant="primary"
          size="lg"
          className="mt-8 w-full sm:w-fit"
        >
          {assessment.cta}
        </GtmOutboundButton>
      </motion.article>

      <motion.article variants={staggerItem} className={cardShell}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Talk to us
        </p>
        <h2 className="mt-2 text-lg font-semibold text-neutral-900 sm:text-xl">{consultation.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{consultation.body}</p>

        <GtmOutboundButton
          href={consultationIntakeUrl({ content: 'get-started-consultation' })}
          variant="secondary"
          size="lg"
          className="mt-8 w-full sm:w-fit"
        >
          {consultation.cta}
        </GtmOutboundButton>
      </motion.article>
    </motion.div>
  );
}

'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { consultationIntakeUrl } from '@/lib/gtm-links';
import { glassPanelElevated } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';

type Path = {
  title: string;
  body: string;
};

type GetStartedPathsProps = {
  consultation: Path;
};

const cardShell = cn(
  glassPanelElevated,
  'group relative mx-auto flex max-w-2xl flex-col overflow-hidden p-8 sm:p-10',
  'border-neutral-200/80 transition-[transform,box-shadow,border-color] duration-500',
  'hover:-translate-y-0.5 hover:border-heno-orange-200/70',
  'hover:shadow-[0_28px_64px_-22px_rgba(242,120,48,0.14),0_12px_32px_-14px_rgba(23,23,23,0.08)]',
);

export function GetStartedPaths({ consultation }: GetStartedPathsProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="mx-auto max-w-2xl"
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      <motion.article variants={staggerItem} className={cardShell}>
        <h2 className="text-h2 font-semibold text-neutral-900">{consultation.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {consultation.body}
        </p>

        <GtmOutboundButton
          href={consultationIntakeUrl({ content: 'get-started-primary' })}
          variant="primary"
          size="lg"
          className="mt-8 w-full sm:w-fit"
        >
          {consultation.title}
        </GtmOutboundButton>
      </motion.article>
    </motion.div>
  );
}

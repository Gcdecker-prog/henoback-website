'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { assessmentUrl, consultationIntakeUrl } from '@/lib/gtm-links';
import { glassPanelElevated } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';

type Path = {
  title: string;
  body: string;
};

type GetStartedPathsProps = {
  consultation: Path;
  assessment: Path;
};

const cardShell = cn(
  glassPanelElevated,
  'group relative flex min-h-[320px] flex-col overflow-hidden p-8',
  'border-neutral-200/80 transition-[transform,box-shadow,border-color] duration-500',
  'hover:-translate-y-0.5 hover:border-heno-orange-200/70',
  'hover:shadow-[0_28px_64px_-22px_rgba(242,120,48,0.14),0_12px_32px_-14px_rgba(23,23,23,0.08)]',
);

export function GetStartedPaths({ consultation, assessment }: GetStartedPathsProps) {
  const reduce = useReducedMotion();
  const paths = [
    {
      ...consultation,
      href: consultationIntakeUrl({ content: 'get-started-primary' }),
      recommended: true,
    },
    {
      ...assessment,
      href: assessmentUrl({ content: 'get-started-assessment' }),
      recommended: false,
    },
  ];

  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2 md:gap-7"
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      {paths.map((path) => (
        <motion.article key={path.title} variants={staggerItem} className={cardShell}>
          {path.recommended ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
              Recommended
            </p>
          ) : (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Self-serve
            </p>
          )}

          <h2 className="mt-4 text-h2 font-semibold text-neutral-900">{path.title}</h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{path.body}</p>

          <GtmOutboundButton
            href={path.href}
            variant={path.recommended ? 'primary' : 'secondary'}
            size="lg"
            className={cn(
              'mt-8 w-full sm:w-fit',
              !path.recommended &&
                'border-heno-orange-500/35 text-heno-orange-600 hover:border-heno-orange-500/55 hover:bg-heno-orange-50/80',
            )}
          >
            {path.title}
          </GtmOutboundButton>
        </motion.article>
      ))}
    </motion.div>
  );
}

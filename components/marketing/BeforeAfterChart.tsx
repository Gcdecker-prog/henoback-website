'use client';

import { useId } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

export type BeforeAfterCopy = {
  beforeLabel: string;
  beforeValue: string;
  afterLabel: string;
  afterValue: string;
};

type BeforeAfterChartProps = BeforeAfterCopy & {
  reduce?: boolean;
  /** Tighter layout for the hero dashboard tray */
  variant?: 'default' | 'compact';
  className?: string;
};

/** Before Heno / After Heno — conflicting reports vs one trusted line */
export function BeforeAfterChart({
  reduce = false,
  variant = 'default',
  className,
  beforeLabel,
  beforeValue,
  afterLabel,
  afterValue,
}: BeforeAfterChartProps) {
  const uid = useId().replace(/:/g, '');
  const fillId = `afterFillOrange-${uid}`;
  const glowId = `afterGlow-${uid}`;
  const pathTransition = { duration: 1, ease: motionEase };
  const compact = variant === 'compact';

  return (
    <div
      className={cn(
        compact
          ? 'rounded-xl border border-neutral-200/60 bg-white/80 p-3 sm:p-3.5'
          : 'mt-6 rounded-2xl border border-neutral-200/70 bg-[#f7f8fa] p-4 sm:p-5',
        className,
      )}
    >
      <div
        className={cn(
          'grid grid-cols-1 items-center',
          compact ? 'gap-3 sm:grid-cols-[1fr_auto_1fr] sm:gap-2.5' : 'gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-3 lg:gap-5',
        )}
      >
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
          <div
            className={cn(
              'mt-2 flex items-center sm:mt-3',
              compact ? 'min-h-[4.75rem] sm:min-h-[5.25rem]' : 'min-h-[7rem] sm:min-h-[8rem]',
            )}
          >
            <svg
              viewBox="0 0 140 88"
              className={cn('w-full', compact ? 'h-[4.25rem] sm:h-[4.75rem]' : 'h-[5.75rem] sm:h-24')}
              aria-hidden
            >
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
          <p className={cn('font-medium text-neutral-500', compact ? 'text-[11px]' : 'text-xs')}>
            {beforeValue}
          </p>
        </motion.div>

        <motion.span
          className={cn(
            'flex items-center justify-center font-medium text-heno-blue-400',
            compact ? 'text-base sm:text-lg' : 'text-lg',
          )}
          initial={reduce ? false : { opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.28, ease: motionEase }}
          aria-hidden
        >
          →
        </motion.span>

        <motion.div
          className={cn(
            'flex min-w-0 flex-col rounded-2xl border border-heno-orange-400/70 bg-gradient-to-b from-white to-heno-orange-50/50',
            'shadow-[0_14px_36px_-18px_rgba(242,120,48,0.45)]',
            compact ? 'p-3 sm:p-3.5' : 'p-4 sm:p-5',
          )}
          initial={reduce ? false : { opacity: 0, y: 14, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12, ease: motionEase }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-heno-orange-500">
            {afterLabel}
          </p>
          <div
            className={cn(
              'mt-2 flex items-center sm:mt-3',
              compact ? 'min-h-[4.25rem] sm:min-h-[4.75rem]' : 'min-h-[6.5rem] sm:min-h-[7.25rem]',
            )}
          >
            <svg
              viewBox="0 0 140 88"
              className={cn('w-full', compact ? 'h-[4rem] sm:h-[4.5rem]' : 'h-[5.5rem] sm:h-[5.75rem]')}
              aria-hidden
            >
              <defs>
                <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F27830" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#F27830" stopOpacity="0.02" />
                </linearGradient>
                <filter id={glowId} x="-20%" y="-40%" width="140%" height="180%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <motion.path
                d="M8 68 C36 62 58 48 78 40 S116 22 132 16 L132 84 L8 84 Z"
                fill={`url(#${fillId})`}
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
                filter={`url(#${glowId})`}
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
          <p
            className={cn(
              'mt-1.5 flex items-center gap-1.5 font-semibold text-heno-blue-900 sm:mt-2',
              compact ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-[0.8rem]',
            )}
          >
            <Check className="size-3.5 shrink-0 text-emerald-500 stroke-[2.75]" aria-hidden />
            {afterValue}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

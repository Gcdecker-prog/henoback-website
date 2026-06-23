'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  homeAlignmentCards,
  homeAlignmentOutcomes,
  homeAlignmentVisual,
  type AlignmentOutcome,
} from '@/lib/content/home';
import { brandUi } from '@/lib/ui/brand-ui';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { dashboardCard } from '@/lib/ui/dashboard-card';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type AlignmentSystemVisualProps = {
  activeId: string;
  className?: string;
};

function OutcomeGraphic({ variant }: { variant: AlignmentOutcome['visual'] }) {
  if (variant === 'foundation') {
    return (
      <div className="flex items-end justify-center gap-2 px-2 pt-2" aria-hidden>
        {[72, 88, 95, 100].map((h, i) => (
          <span
            key={i}
            className="w-7 rounded-t bg-heno-blue-900/90 first:bg-neutral-200/80"
            style={{ height: `${h * 0.38}px` }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'visibility') {
    return (
      <svg viewBox="0 0 200 56" className="h-14 w-full px-1" aria-hidden>
        <path d="M8 42 L52 28 L96 34 L144 18 L192 24" fill="none" stroke="#1B365D" strokeWidth="3" strokeLinecap="round" />
        <circle cx="144" cy="18" r="4" fill="#F27830" />
      </svg>
    );
  }

  if (variant === 'operations') {
    return (
      <div className="flex items-center justify-center gap-1.5 px-2" aria-hidden>
        {['In', 'Process', 'Out'].map((label, i) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-neutral-600">
              {label}
            </span>
            {i < 2 ? <span className="text-heno-blue-400">→</span> : null}
          </div>
        ))}
      </div>
    );
  }

  return (
    <svg viewBox="0 0 200 56" className="h-14 w-full px-1" aria-hidden>
      <path d="M8 38 L192 32" fill="none" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M8 28 Q60 22 100 30 T192 26" fill="none" stroke="#1B365D" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Outcome preview — shows what each layer delivers, not duplicate copy */
export function AlignmentSystemVisual({ activeId, className }: AlignmentSystemVisualProps) {
  const reduce = useReducedMotion();
  const activeOutcome =
    homeAlignmentOutcomes.find((o) => o.id === activeId) ?? homeAlignmentOutcomes[0];
  const activeIndex = homeAlignmentCards.findIndex((c) => c.id === activeId);

  return (
    <div
      className={cn(dashboardCard, 'flex h-full min-h-full flex-col', className)}
      role="region"
      aria-label="Alignment outcome preview"
      aria-live="polite"
    >
      <div className="border-b border-neutral-100 bg-neutral-50/60 px-5 py-4 sm:px-6">
        <p className={cn('text-[10px] font-semibold uppercase tracking-[0.2em]', brandUi.eyebrow)}>
          {homeAlignmentVisual.eyebrow}
        </p>
        <p className="mt-1.5 text-sm font-semibold text-neutral-900">{homeAlignmentVisual.title}</p>
        <p className="mt-2 text-[0.8125rem] leading-relaxed text-neutral-600">
          {homeAlignmentVisual.summary}
        </p>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex gap-3">
          <ol className="flex flex-col gap-1.5 pt-1" aria-label="Alignment layers">
            {homeAlignmentCards.map((card, index) => {
              const isActive = card.id === activeId;
              return (
                <li key={card.id}>
                  <span
                    className={cn(
                      'flex size-8 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums transition-colors',
                      isActive
                        ? 'bg-heno-blue-900 text-white'
                        : 'bg-neutral-100 text-neutral-400',
                    )}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </li>
              );
            })}
          </ol>

          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOutcome.id}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: motionEase }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-heno-blue-800/80">
                  Layer {String(activeIndex + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1.5 text-base font-semibold leading-snug text-neutral-900">
                  {activeOutcome.headline}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-neutral-600">
                  {activeOutcome.subline}
                </p>

                <div className={cn(glassPanelSubtle, 'mt-4 rounded-xl border-neutral-100 bg-neutral-50/50 px-3 py-4')}>
                  <OutcomeGraphic variant={activeOutcome.visual} />
                </div>

                <dl className="mt-4 grid grid-cols-3 gap-2">
                  {activeOutcome.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg border border-neutral-100 bg-white px-2 py-2.5 text-center"
                    >
                      <dt className="text-[9px] font-semibold uppercase tracking-[0.08em] text-neutral-400">
                        {metric.label}
                      </dt>
                      <dd className="mt-1 text-xs font-semibold text-heno-blue-900">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-auto rounded-xl border border-heno-blue-900/15 bg-heno-blue-900 px-4 py-3 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
            All four layers
          </p>
          <p className="mt-1 text-sm font-semibold text-white">One aligned back office</p>
        </div>
      </div>
    </div>
  );
}

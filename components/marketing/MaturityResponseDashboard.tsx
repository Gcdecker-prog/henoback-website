'use client';

import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { GtmOutboundLink } from '@/components/gtm/GtmOutboundLink';
import type { MaturityResponse } from '@/lib/content/maturity-assessment';
import { assessmentUrl } from '@/lib/gtm-links';
import { cn } from '@/lib/cn';

type MaturityResponseDashboardProps = {
  optionId: string;
  response: MaturityResponse;
  onBack: () => void;
};

const stageToneStyles = {
  positive: 'bg-heno-blue-50 text-heno-blue-800 border-heno-blue-200/80',
  steady: 'bg-neutral-100 text-neutral-700 border-neutral-200/80',
  warning: 'bg-heno-orange-50 text-heno-orange-800 border-heno-orange-200/60',
  critical: 'bg-neutral-900 text-white border-neutral-800',
} as const;

const metricToneStyles = {
  default: 'text-neutral-900',
  accent: 'text-heno-blue-800',
  muted: 'text-neutral-500',
  positive: 'text-heno-blue-700',
  warning: 'text-heno-orange-700',
} as const;

function ResponseVisual({ variant }: { variant: MaturityResponse['visual'] }) {
  if (variant === 'aligned') {
    return (
      <svg viewBox="0 0 200 56" className="h-14 w-full" aria-hidden>
        <path d="M8 36 L192 36" fill="none" stroke="#1B365D" strokeWidth="3" strokeLinecap="round" />
        <circle cx="192" cy="36" r="4" fill="#1B365D" />
      </svg>
    );
  }

  if (variant === 'drift') {
    return (
      <svg viewBox="0 0 200 56" className="h-14 w-full" aria-hidden>
        <path d="M8 28 Q60 22 100 32 T192 30" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeDasharray="4 3" />
        <path d="M8 38 Q60 42 100 34 T192 38" fill="none" stroke="#F27830" strokeWidth="2" opacity="0.75" />
        <path d="M8 32 L192 34" fill="none" stroke="#1B365D" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    );
  }

  if (variant === 'fragmented') {
    return (
      <svg viewBox="0 0 200 56" className="h-14 w-full" aria-hidden>
        <path d="M8 20 Q50 40 95 18 T192 24" fill="none" stroke="#d4d4d4" strokeWidth="2" />
        <path d="M8 36 Q55 16 98 38 T192 32" fill="none" stroke="#F27830" strokeWidth="2" opacity="0.7" />
        <path d="M8 48 Q48 28 102 46 T192 40" fill="none" stroke="#7BA3C9" strokeWidth="2" opacity="0.7" />
      </svg>
    );
  }

  return (
    <div className="flex h-14 items-end justify-between gap-2 px-1" aria-hidden>
      {[40, 65, 30, 55].map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t bg-neutral-200/80"
          style={{ height: `${h}%`, opacity: i === 2 ? 0.35 : 0.7 }}
        />
      ))}
    </div>
  );
}

/** Lightweight snapshot — mirrors what their back office looks like today */
export function MaturityResponseDashboard({
  optionId,
  response,
  onBack,
}: MaturityResponseDashboardProps) {
  const { stage, stageTone, headline, subline, metrics, visual } = response;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32 }}
      className="mt-5"
    >
      <div className="overflow-hidden rounded-xl border border-neutral-200/90 bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1)]">
        <div className="flex items-center justify-between gap-3 border-b border-neutral-100 bg-neutral-50/60 px-4 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
            Your snapshot
          </p>
          <span
            className={cn(
              'rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]',
              stageToneStyles[stageTone],
            )}
          >
            {stage}
          </span>
        </div>

        <div className="px-4 py-4">
          <p className="text-sm font-semibold leading-snug text-neutral-900">{headline}</p>
          <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-neutral-600">{subline}</p>

          <div className="mt-4 rounded-lg border border-neutral-100 bg-neutral-50/50 px-3 py-3">
            <ResponseVisual variant={visual} />
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-neutral-100 bg-white px-2.5 py-2.5 text-center"
              >
                <dt className="text-[9px] font-semibold uppercase tracking-[0.1em] text-neutral-400">
                  {metric.label}
                </dt>
                <dd
                  className={cn(
                    'mt-1 text-xs font-semibold tabular-nums',
                    metricToneStyles[metric.tone ?? 'default'],
                  )}
                >
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <GtmOutboundLink
        href={assessmentUrl({ content: `hero-maturity-snapshot-${optionId}` })}
        className="mt-4 flex h-11 w-full items-center justify-center rounded-full bg-heno-orange-500 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(242,120,48,0.45)] transition-colors hover:bg-heno-orange-600"
      >
        See your full maturity stage
      </GtmOutboundLink>

      <button
        type="button"
        onClick={onBack}
        className="mt-3 flex w-full items-center justify-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-800"
      >
        <ArrowLeft className="size-3.5" aria-hidden />
        Try another answer
      </button>
    </motion.div>
  );
}

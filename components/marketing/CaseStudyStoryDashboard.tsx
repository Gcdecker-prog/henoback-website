'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { CaseStudy, CaseStudyMetric, CaseStudyTimelineVisual } from '@/lib/content/case-studies';
import { brandUi } from '@/lib/ui/brand-ui';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type CaseStudyStoryDashboardProps = {
  study: CaseStudy;
};

const stageVisualBg: Record<CaseStudyTimelineVisual, string> = {
  overview:
    'bg-gradient-to-br from-heno-blue-50/80 via-white to-heno-orange-50/40',
  challenge:
    'bg-gradient-to-br from-neutral-100/60 via-white to-heno-orange-50/30',
  solution:
    'bg-gradient-to-br from-heno-blue-50/50 via-white to-heno-blue-100/30',
  results:
    'bg-gradient-to-br from-heno-blue-900/[0.04] via-white to-heno-orange-50/50',
};

function CaseStudySignalRow({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <ul className="grid grid-cols-3 gap-4 border-t border-neutral-100 pt-6 sm:gap-0 sm:divide-x sm:divide-neutral-200/90 sm:border-t-0 sm:pt-0">
      {metrics.map((metric) => (
        <li
          key={metric.label}
          className="flex min-w-0 flex-col sm:px-5 sm:first:pl-0 sm:last:pr-0"
        >
          <p className="min-h-[2.5rem] text-[10px] font-semibold uppercase leading-snug tracking-[0.1em] text-neutral-400">
            {metric.label}
          </p>
          <p className="mt-2 text-base font-semibold leading-tight text-neutral-900 sm:mt-auto sm:text-lg">
            {metric.value}
          </p>
        </li>
      ))}
    </ul>
  );
}

function StageVisual({ variant }: { variant: CaseStudyTimelineVisual }) {
  if (variant === 'overview') {
    return (
      <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="cs-growth" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1B365D" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F27830" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path d="M24 88 C120 84, 200 52, 376 28" fill="none" stroke="url(#cs-growth)" strokeWidth="2" />
        <path
          d="M24 88 C120 84, 200 52, 376 28 L376 108 L24 108 Z"
          fill="url(#cs-growth)"
          opacity="0.35"
        />
        <path d="M24 88 C120 84, 200 52, 376 28" fill="none" stroke="#1B365D" strokeWidth="3" strokeLinecap="round" />
        <circle cx="376" cy="28" r="6" fill="#F27830" />
      </svg>
    );
  }

  if (variant === 'challenge') {
    return (
      <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden>
        <path d="M32 36 Q120 72 200 44 T368 68" fill="none" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="6 5" />
        <path d="M32 56 Q128 24 204 58 T368 40" fill="none" stroke="#F27830" strokeWidth="2.5" opacity="0.7" />
        <path d="M32 76 Q116 92 200 70 T368 84" fill="none" stroke="#7BA3C9" strokeWidth="2" opacity="0.65" />
      </svg>
    );
  }

  if (variant === 'solution') {
    return (
      <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden>
        <circle cx="80" cy="60" r="10" fill="#1B365D" opacity="0.9" />
        <circle cx="200" cy="60" r="10" fill="#1B365D" opacity="0.7" />
        <circle cx="320" cy="60" r="10" fill="#F27830" />
        <path d="M90 60 H190" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M210 60 H310" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden>
      <path d="M32 72 L368 72" fill="none" stroke="#1B365D" strokeWidth="4" strokeLinecap="round" />
      <circle cx="368" cy="72" r="7" fill="#F27830" />
      <path d="M32 72 L368 72" fill="none" stroke="#F27830" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function ChapterTabs({
  study,
  activeId,
  onSelect,
}: {
  study: CaseStudy;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2 sm:gap-2.5"
      role="tablist"
      aria-label="Case study chapters"
    >
      {study.timeline.map((step) => {
        const isActive = step.id === activeId;

        return (
          <button
            key={step.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(step.id)}
            className={cn(
              'relative shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow]',
              isActive
                ? 'border-heno-orange-500/25 bg-white text-neutral-900 shadow-[0_8px_24px_-14px_rgba(242,120,48,0.18)]'
                : 'border-transparent bg-transparent text-neutral-500 hover:border-neutral-200 hover:bg-neutral-50 hover:text-neutral-800',
            )}
          >
            {step.label}
          </button>
        );
      })}
    </div>
  );
}

function StagePanel({ study, activeId }: { study: CaseStudy; activeId: string }) {
  const reduce = useReducedMotion();
  const activeStep = study.timeline.find((s) => s.id === activeId) ?? study.timeline[0];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-[0_20px_48px_-32px_rgba(23,23,23,0.14)]"
      role="tabpanel"
      aria-live="polite"
    >
      <div className="px-6 py-8 sm:px-8 sm:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: motionEase }}
          >
            <p className={cn('text-[11px] font-semibold uppercase tracking-[0.18em]', brandUi.eyebrow)}>
              {activeStep.label}
            </p>
            <h3 className="mt-2 max-w-xl text-xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-2xl">
              {activeStep.title}
            </h3>
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-neutral-600 sm:text-base">
              {activeStep.body}
            </p>

            <div className="mt-10 border-t border-neutral-100 pt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                What shifted
              </p>
              <p className="mt-2 max-w-xl text-lg font-semibold leading-snug text-heno-blue-900 sm:text-xl">
                {activeStep.outcomeHeadline}
              </p>

              <div className="mt-6">
                <CaseStudySignalRow metrics={activeStep.metrics} />
              </div>
            </div>

            <div
              className={cn(
                'mt-8 h-32 overflow-hidden rounded-xl sm:h-36',
                stageVisualBg[activeStep.visual],
              )}
            >
              <StageVisual variant={activeStep.visual} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Chapter-based case study narrative — dossier layout, not homepage dashboard mirror */
export function CaseStudyStoryDashboard({ study }: CaseStudyStoryDashboardProps) {
  const [activeId, setActiveId] = useState(study.timeline[0]?.id ?? '');

  return (
    <div className="mx-auto max-w-4xl">
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-400">
        Select a chapter
      </p>
      <ChapterTabs study={study} activeId={activeId} onSelect={setActiveId} />
      <div className="mt-6 sm:mt-8">
        <StagePanel study={study} activeId={activeId} />
      </div>
    </div>
  );
}

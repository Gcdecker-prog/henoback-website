'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  operationsRunbookMeta,
  operationsRunbookSteps,
  operationsRunbookSummary,
  runbookStatusLabel,
  runbookStatusStyle,
  type RunbookStep,
} from '@/lib/content/operations-runbook';
import { InsightPreviewShell } from '@/components/marketing/InsightPreviewShell';
import { cn } from '@/lib/cn';

function RunbookStepRow({
  step,
  isOpen,
  onToggle,
}: {
  step: RunbookStep;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="rounded-xl border border-neutral-100/90 bg-neutral-50/30 transition-colors hover:border-neutral-200/90">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          'group flex w-full items-start gap-3 px-3.5 py-3.5 text-left sm:px-4',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heno-blue-500/30 focus-visible:ring-inset',
          isOpen && 'rounded-b-none border-b border-neutral-100/80 bg-white',
        )}
      >
        <span
          className={cn(
            'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-neutral-200/90 bg-white text-neutral-500 transition-[border-color,color,transform]',
            'group-hover:border-heno-blue-200 group-hover:text-heno-blue-700',
            isOpen && 'rotate-180 border-heno-blue-200 bg-heno-blue-50 text-heno-blue-800',
          )}
          aria-hidden
        >
          <ChevronDown className="size-3.5" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold leading-snug text-neutral-900 sm:text-xs">
              {step.label}
            </span>
            <span
              className={cn(
                'rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em]',
                runbookStatusStyle[step.status],
              )}
            >
              {runbookStatusLabel[step.status]}
            </span>
          </span>
          <span className="mt-1 block text-[10px] text-neutral-400">
            {isOpen ? 'Tap to collapse' : 'Tap to see how this step runs'}
          </span>
        </span>

        <span className="shrink-0 text-[10px] font-medium text-neutral-400">{step.owner}</span>
      </button>

      {isOpen ? (
        <div className="rounded-b-xl bg-white px-3.5 pb-3.5 pl-[3.25rem] sm:px-4 sm:pl-[3.75rem]">
          <p className="text-[11px] leading-relaxed text-neutral-600 sm:text-xs">{step.detail}</p>
        </div>
      ) : null}
    </li>
  );
}

/** Operations consistency — close runbook with clear expand/collapse steps */
export function OperationsConsistencyPreview({ className }: { className?: string }) {
  const [openId, setOpenId] = useState<string | null>(operationsRunbookSteps[0]?.id ?? null);

  return (
    <InsightPreviewShell
      className={className}
      ariaLabel={operationsRunbookMeta.title}
      eyebrow={operationsRunbookMeta.eyebrow}
      title={operationsRunbookMeta.title}
      subtitle={operationsRunbookMeta.subtitle}
      interactiveHint="Expand any step to see how it runs"
      footer={operationsRunbookMeta.footer}
      stats={operationsRunbookSummary}
    >
      <ul className="space-y-2" role="list">
        {operationsRunbookSteps.map((step) => (
          <RunbookStepRow
            key={step.id}
            step={step}
            isOpen={openId === step.id}
            onToggle={() => setOpenId((prev) => (prev === step.id ? null : step.id))}
          />
        ))}
      </ul>
    </InsightPreviewShell>
  );
}

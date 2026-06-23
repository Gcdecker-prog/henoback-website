'use client';

import {
  formatProjectCurrency,
  formatProjectMargin,
  projectProfitabilityMeta,
  projectProfitabilityRows,
} from '@/lib/content/project-profitability-report';
import { InsightPreviewShell } from '@/components/marketing/InsightPreviewShell';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

function MarginBar({ margin }: { margin: number | null }) {
  if (margin === null) return <span className="text-[10px] text-neutral-300">—</span>;
  const width = Math.min(100, Math.max(0, margin));
  return (
    <div className="flex items-center justify-end gap-2">
      <div className="h-1.5 w-14 overflow-hidden rounded-full bg-neutral-100" aria-hidden>
        <div className="h-full rounded-full bg-heno-blue-400/80" style={{ width: `${width}%` }} />
      </div>
      <span className="text-[11px] font-medium tabular-nums sm:text-xs">{formatProjectMargin(margin)}</span>
    </div>
  );
}

/** Project profitability — card rows, not spreadsheet export */
export function ProjectProfitabilityPreview({ className }: { className?: string }) {
  const total = projectProfitabilityRows.find((r) => r.isTotal);
  const projects = projectProfitabilityRows.filter((r) => !r.isTotal);

  return (
    <InsightPreviewShell
      className={className}
      ariaLabel={projectProfitabilityMeta.title}
      eyebrow={projectProfitabilityMeta.eyebrow}
      title={projectProfitabilityMeta.title}
      subtitle={projectProfitabilityMeta.subtitle}
      footer="Revenue, margin, and net income tied to how you deliver"
      stats={[
        { label: 'Total revenue', value: formatProjectCurrency(total?.revenue ?? null) },
        { label: 'Gross profit', value: formatProjectCurrency(total?.grossProfit ?? null), tone: 'positive' },
        { label: 'Margin', value: formatProjectMargin(total?.margin ?? null), tone: 'accent' },
      ]}
    >
      <ul className="space-y-2" role="list">
        {projects.map((row) => (
          <li
            key={row.id}
            className="rounded-xl border border-neutral-100/90 bg-neutral-50/40 px-3.5 py-3 transition-colors hover:border-neutral-200 hover:bg-white sm:px-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold leading-snug text-neutral-900 sm:text-xs">
                  {row.name}
                </p>
                <p className="mt-0.5 truncate text-[10px] text-neutral-400">{row.code}</p>
              </div>
              <p className="shrink-0 text-[11px] font-semibold tabular-nums text-neutral-900 sm:text-xs">
                {formatProjectCurrency(row.revenue)}
              </p>
            </div>
            <div className="mt-2.5 flex items-center justify-between gap-3 border-t border-neutral-100/80 pt-2.5">
              <MarginBar margin={row.margin} />
              <span
                className={cn(
                  'text-[11px] font-medium tabular-nums sm:text-xs',
                  row.netIncome !== null && row.netIncome < 0 && brandUi.negative,
                )}
              >
                {formatProjectCurrency(row.netIncome)} net
              </span>
            </div>
          </li>
        ))}

        {total ? (
          <li className="rounded-xl border border-heno-blue-900/10 bg-heno-blue-900/[0.04] px-3.5 py-3 sm:px-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold text-heno-blue-900 sm:text-xs">Portfolio total</p>
              <p className="text-[11px] font-semibold tabular-nums text-heno-blue-900 sm:text-xs">
                {formatProjectCurrency(total.netIncome)}
              </p>
            </div>
          </li>
        ) : null}
      </ul>
    </InsightPreviewShell>
  );
}

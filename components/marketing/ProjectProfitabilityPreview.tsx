'use client';

import {
  formatProjectCurrency,
  formatProjectMargin,
  projectProfitabilityMeta,
  projectProfitabilityRows,
} from '@/lib/content/project-profitability-report';
import { brandUi } from '@/lib/ui/brand-ui';
import { ReportPreviewShell } from '@/components/marketing/ReportPreviewShell';
import { cn } from '@/lib/cn';

function MarginBar({ margin }: { margin: number | null }) {
  if (margin === null) return <span className="text-[10px] text-neutral-300">—</span>;
  const width = Math.min(100, Math.max(0, margin));
  return (
    <div className="flex items-center justify-end gap-2">
      <div className="hidden h-1.5 w-12 overflow-hidden rounded-full bg-neutral-100 sm:block" aria-hidden>
        <div
          className="h-full rounded-full bg-heno-blue-400/80"
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="text-[11px] tabular-nums sm:text-xs">{formatProjectMargin(margin)}</span>
    </div>
  );
}

/** Project profitability — YTD-focused, no horizontal scroll */
export function ProjectProfitabilityPreview({ className }: { className?: string }) {
  const total = projectProfitabilityRows.find((r) => r.isTotal);

  return (
    <ReportPreviewShell
      className={className}
      ariaLabel={projectProfitabilityMeta.reportTitle}
      packageTitle={projectProfitabilityMeta.packageTitle}
      reportTitle={projectProfitabilityMeta.reportTitle}
      asOf={projectProfitabilityMeta.asOf}
      filters={projectProfitabilityMeta.filters}
      footer="Inception-to-date actuals · Revenue, margin, and net income by project"
      summary={[
        { label: 'Total revenue', value: formatProjectCurrency(total?.revenue ?? null) },
        { label: 'Gross profit', value: formatProjectCurrency(total?.grossProfit ?? null), tone: 'positive' },
        { label: 'Margin', value: formatProjectMargin(total?.margin ?? null), tone: 'accent' },
      ]}
    >
      <div className="overflow-x-hidden">
        <table className="w-full table-fixed border-collapse">
          <thead className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm">
            <tr className="border-b border-neutral-200 text-neutral-400">
              <th className="px-4 py-2.5 text-left text-[9px] font-semibold uppercase tracking-[0.14em] sm:px-5">
                Project
              </th>
              <th className="w-[4.5rem] px-2 py-2.5 text-right text-[9px] font-semibold uppercase tracking-[0.12em] sm:w-[5.25rem] sm:px-3">
                Revenue
              </th>
              <th className="hidden w-[4.5rem] px-2 py-2.5 text-right text-[9px] font-semibold uppercase tracking-[0.12em] sm:table-cell sm:w-[5rem] sm:px-3">
                Margin
              </th>
              <th className="w-[4.75rem] px-3 py-2.5 text-right text-[9px] font-semibold uppercase tracking-[0.12em] text-heno-blue-900 sm:w-[5.5rem] sm:px-5">
                Net income
              </th>
            </tr>
          </thead>
          <tbody>
            {projectProfitabilityRows.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  'border-b border-neutral-100/70 transition-colors hover:bg-neutral-50/50',
                  row.isTotal && 'bg-heno-blue-900/[0.035] font-semibold text-heno-blue-900',
                )}
              >
                <td className="px-4 py-2 sm:px-5 sm:py-2.5">
                  <p className="truncate text-[11px] leading-snug sm:text-xs">{row.name}</p>
                  <p className="truncate text-[10px] text-neutral-400">{row.code}</p>
                </td>
                <td className="px-2 py-2 text-right tabular-nums sm:px-3 sm:py-2.5">
                  <span className="text-[11px] sm:text-xs">{formatProjectCurrency(row.revenue)}</span>
                </td>
                <td className="hidden px-2 py-2 sm:table-cell sm:px-3 sm:py-2.5">
                  <MarginBar margin={row.margin} />
                </td>
                <td className="px-3 py-2 text-right tabular-nums sm:px-5 sm:py-2.5">
                  <span
                    className={cn(
                      'text-[11px] sm:text-xs',
                      row.netIncome !== null && row.netIncome < 0 && !row.isTotal && brandUi.negative,
                    )}
                  >
                    {formatProjectCurrency(row.netIncome)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ReportPreviewShell>
  );
}

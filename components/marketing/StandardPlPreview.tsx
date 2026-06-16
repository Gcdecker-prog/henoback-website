'use client';

import { useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import {
  formatPlAmount,
  plMonthTrend,
  standardPlReportMeta,
  standardPlReportRows,
  type PlPeriodKey,
  type PlReportRow,
  type PlRowKind,
} from '@/lib/content/standard-pl-report';
import { brandUi } from '@/lib/ui/brand-ui';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

function flattenVisibleRows(
  rows: readonly PlReportRow[],
  expanded: ReadonlySet<string>,
): PlReportRow[] {
  const result: PlReportRow[] = [];
  for (const row of rows) {
    result.push(row);
    if (row.children?.length && expanded.has(row.id)) {
      result.push(...flattenVisibleRows(row.children, expanded));
    }
  }
  return result;
}

function rowSurface(kind: PlRowKind) {
  switch (kind) {
    case 'total':
      return 'bg-heno-blue-900/[0.035] font-semibold text-heno-blue-900';
    case 'subtotal':
      return 'bg-neutral-50/80 font-medium text-neutral-900';
    case 'percent':
      return 'bg-gradient-to-r from-heno-orange-50/80 to-transparent font-semibold text-heno-orange-700';
    case 'section':
      return 'font-medium text-neutral-800';
    default:
      return 'text-neutral-600';
  }
}

function MonthSparkline({ values }: { values: readonly number[] }) {
  if (values.length < 2) return <span className="block size-4" aria-hidden />;

  const max = Math.max(...values.map((n) => Math.abs(n)), 1);

  return (
    <div className="flex h-5 items-end justify-end gap-[3px]" aria-hidden>
      {values.map((value, index) => {
        const height = Math.max(18, Math.round((Math.abs(value) / max) * 100));
        return (
          <span
            key={index}
            className="w-[3px] rounded-full bg-heno-blue-300/90"
            style={{ height: `${height}%` }}
          />
        );
      })}
    </div>
  );
}

function PlTableRow({
  row,
  hasChildren,
  isExpanded,
  onToggle,
}: {
  row: PlReportRow;
  hasChildren: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ytd = row.values.ytd;
  const showAmount = row.kind !== 'section' || ytd !== null;
  const trend = plMonthTrend(row.values);

  return (
    <tr className={cn('group border-b border-neutral-100/70 transition-colors hover:bg-neutral-50/50', rowSurface(row.kind))}>
      <td className="px-4 py-2 sm:px-5 sm:py-2.5">
        <div className="flex items-center gap-1" style={{ paddingLeft: `${row.depth * 0.65}rem` }}>
          {hasChildren ? (
            <button
              type="button"
              onClick={onToggle}
              className="flex size-5 shrink-0 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-white hover:text-neutral-700"
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${row.label}`}
            >
              <ChevronRight
                className={cn('size-3.5 transition-transform duration-200', isExpanded && 'rotate-90')}
                aria-hidden
              />
            </button>
          ) : (
            <span className="size-5 shrink-0" aria-hidden />
          )}
          <span className="min-w-0 truncate text-[11px] leading-snug sm:text-xs">{row.label}</span>
        </div>
      </td>
      <td className="hidden w-14 px-1 py-2 sm:table-cell sm:py-2.5">
        <MonthSparkline values={trend} />
      </td>
      <td className="w-[5.5rem] px-3 py-2 text-right tabular-nums sm:w-auto sm:px-5 sm:py-2.5">
        {showAmount && ytd !== null ? (
          <span className="text-[11px] sm:text-xs">{formatPlAmount(ytd, row.kind)}</span>
        ) : (
          <span className="text-[11px] text-neutral-300">—</span>
        )}
      </td>
    </tr>
  );
}

/** P&L preview — YTD-focused, no internal scroll */
export function StandardPlPreview({ className }: { className?: string }) {
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(() => new Set());
  const visibleRows = useMemo(() => flattenVisibleRows(standardPlReportRows, expanded), [expanded]);

  const summary = useMemo(() => {
    const key: PlPeriodKey = 'ytd';
    const find = (id: string) => standardPlReportRows.find((r) => r.id === id);
    return {
      revenue: find('total-revenues')?.values[key] ?? 0,
      grossProfit: find('total-gross-profit')?.values[key] ?? 0,
      margin: find('gross-profit-pct')?.values[key] ?? 0,
    };
  }, []);

  function toggle(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-[0_24px_64px_-28px_rgba(23,23,23,0.16)]',
        className,
      )}
      role="region"
      aria-label={standardPlReportMeta.reportTitle}
    >
      <div className="border-b border-neutral-100 px-4 py-4 sm:px-5">
        <div className="flex min-h-[3.75rem] items-start justify-between gap-3">
          <div className="min-w-0">
            <p className={cn('text-[10px] font-semibold uppercase tracking-[0.22em]', brandUi.eyebrow)}>
              {standardPlReportMeta.packageTitle}
            </p>
            <h3 className="mt-1.5 text-sm font-semibold leading-snug tracking-tight text-neutral-900 sm:text-[0.9375rem]">
              {standardPlReportMeta.reportTitle}
            </h3>
          </div>
          <span className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
            {standardPlReportMeta.asOf}
          </span>
        </div>
        <p className="mt-2 text-[10px] text-neutral-400">
          {standardPlReportMeta.locationFilter} · All locations · All projects
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 bg-neutral-50/40 p-3 sm:gap-3 sm:p-4">
        {[
          { label: 'Total revenues', value: formatPlAmount(summary.revenue, 'total') },
          { label: 'Gross profit', value: formatPlAmount(summary.grossProfit, 'total') },
          { label: 'Margin', value: formatPlAmount(summary.margin, 'percent') },
        ].map((item) => (
          <div
            key={item.label}
            className={cn(
              glassPanelSubtle,
              'rounded-xl border-white/90 bg-white/90 px-3 py-3 sm:px-4 sm:py-3.5',
            )}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
              {item.label}
            </p>
            <p className="mt-1 text-sm font-semibold tabular-nums tracking-tight text-neutral-900 sm:text-base">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-x-hidden">
        <table className="w-full table-fixed border-collapse">
          <thead className="bg-white">
            <tr className="border-b border-neutral-200 text-neutral-400">
              <th className="px-4 py-2.5 text-left text-[9px] font-semibold uppercase tracking-[0.14em] sm:px-5">
                Account
              </th>
              <th className="hidden w-14 px-1 py-2.5 text-right text-[9px] font-semibold uppercase tracking-[0.12em] sm:table-cell">
                Trend
              </th>
              <th className="w-[5.5rem] px-3 py-2.5 text-right text-[9px] font-semibold uppercase tracking-[0.12em] text-heno-blue-900 sm:w-[6.5rem] sm:px-5">
                YTD
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row) => (
              <PlTableRow
                key={row.id}
                row={row}
                hasChildren={Boolean(row.children?.length)}
                isExpanded={expanded.has(row.id)}
                onToggle={() => toggle(row.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-neutral-100 bg-neutral-50/60 px-4 py-2.5 sm:px-5">
        <p className="text-[10px] leading-relaxed text-neutral-500">
          Structured P&amp;L · YTD actuals · Tap a row to drill down
        </p>
      </div>
    </div>
  );
}

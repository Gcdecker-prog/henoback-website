'use client';

import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { InsightPreviewShell } from '@/components/marketing/InsightPreviewShell';
import {
  formatPlAmount,
  standardPlReportMeta,
  standardPlReportRows,
  type PlPeriodKey,
  type PlReportRow,
  type PlRowKind,
} from '@/lib/content/standard-pl-report';
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
      return 'bg-heno-blue-900/[0.04] font-semibold text-heno-blue-900';
    case 'subtotal':
      return 'bg-neutral-50/80 font-medium text-neutral-900';
    case 'percent':
      return 'bg-gradient-to-r from-heno-orange-50/70 to-transparent font-semibold text-heno-orange-700';
    case 'section':
      return 'font-medium text-neutral-800';
    default:
      return 'text-neutral-600';
  }
}

function PlRow({
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

  return (
    <li>
      <div
        className={cn(
          'flex items-center gap-2 rounded-lg px-3 py-2.5 transition-colors sm:px-3.5',
          hasChildren && 'cursor-pointer hover:bg-neutral-50/90',
          rowSurface(row.kind),
        )}
        style={{ marginLeft: `${row.depth * 0.5}rem` }}
        onClick={hasChildren ? onToggle : undefined}
        onKeyDown={
          hasChildren
            ? (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onToggle();
                }
              }
            : undefined
        }
        tabIndex={hasChildren ? 0 : undefined}
        role={hasChildren ? 'button' : undefined}
        aria-expanded={hasChildren ? isExpanded : undefined}
      >
        {hasChildren ? (
          <span
            className={cn(
              'flex size-5 shrink-0 items-center justify-center rounded-md border border-neutral-200/90 bg-white text-neutral-500 transition-[border-color,color,transform]',
              isExpanded && 'rotate-180 border-heno-blue-200 text-heno-blue-800',
            )}
            aria-hidden
          >
            <ChevronDown className="size-3.5" />
          </span>
        ) : (
          <span className="size-5 shrink-0" aria-hidden />
        )}
        <span className="min-w-0 flex-1 truncate text-[11px] leading-snug sm:text-xs">{row.label}</span>
        <span className="shrink-0 text-[11px] font-medium tabular-nums sm:text-xs">
          {showAmount && ytd !== null ? formatPlAmount(ytd, row.kind) : '—'}
        </span>
      </div>
    </li>
  );
}

/** P&L insight preview — outcome stats + expandable account tree */
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
    <InsightPreviewShell
      className={className}
      ariaLabel={standardPlReportMeta.title}
      eyebrow={standardPlReportMeta.eyebrow}
      title={standardPlReportMeta.title}
      subtitle={standardPlReportMeta.subtitle}
      interactiveHint="Expand any section to drill into account detail"
      footer="Structured chart of accounts · Same layout every close"
      stats={[
        { label: 'Revenue', value: formatPlAmount(summary.revenue, 'total') },
        { label: 'Gross profit', value: formatPlAmount(summary.grossProfit, 'total'), tone: 'positive' },
        { label: 'Margin', value: formatPlAmount(summary.margin, 'percent'), tone: 'accent' },
      ]}
    >
      <ul className="space-y-0.5" role="list">
        {visibleRows.map((row) => (
          <PlRow
            key={row.id}
            row={row}
            hasChildren={Boolean(row.children?.length)}
            isExpanded={expanded.has(row.id)}
            onToggle={() => toggle(row.id)}
          />
        ))}
      </ul>
    </InsightPreviewShell>
  );
}

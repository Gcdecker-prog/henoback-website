import { glassPanelSubtle } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

type SummaryTile = {
  label: string;
  value: string;
  tone?: 'default' | 'accent' | 'positive';
};

type ReportPreviewShellProps = {
  packageTitle: string;
  reportTitle: string;
  asOf?: string;
  filters: string;
  summary?: readonly SummaryTile[];
  footer: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
};

export function ReportPreviewShell({
  packageTitle,
  reportTitle,
  asOf,
  filters,
  summary,
  footer,
  ariaLabel,
  children,
  className,
}: ReportPreviewShellProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-[0_24px_64px_-28px_rgba(23,23,23,0.16)]',
        className,
      )}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="border-b border-neutral-100 px-4 py-4 sm:px-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-heno-orange-600">
              {packageTitle}
            </p>
            <h3 className="mt-1.5 text-sm font-semibold leading-snug tracking-tight text-neutral-900 sm:text-[0.9375rem]">
              {reportTitle}
            </h3>
          </div>
          {asOf ? (
            <span className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
              {asOf}
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-[10px] text-neutral-400">{filters}</p>
      </div>

      {summary && summary.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 bg-neutral-50/40 p-3 sm:gap-3 sm:p-4">
          {summary.map((item) => (
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
              <p
                className={cn(
                  'mt-1 text-sm font-semibold tabular-nums tracking-tight sm:text-base',
                  item.tone === 'accent' && 'text-heno-orange-600',
                  item.tone === 'positive' && 'text-heno-blue-900',
                  !item.tone || item.tone === 'default' ? 'text-neutral-900' : '',
                )}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {children}

      <div className="border-t border-neutral-100 bg-neutral-50/60 px-4 py-2.5 sm:px-5">
        <p className="text-[10px] leading-relaxed text-neutral-500">{footer}</p>
      </div>
    </div>
  );
}

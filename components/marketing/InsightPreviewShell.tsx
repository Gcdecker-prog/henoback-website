import { brandUi } from '@/lib/ui/brand-ui';
import { dashboardCard } from '@/lib/ui/dashboard-card';
import { cn } from '@/lib/cn';

export type InsightStat = {
  label: string;
  value: string;
  tone?: 'default' | 'accent' | 'positive';
};

type InsightPreviewShellProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  stats?: readonly InsightStat[];
  interactiveHint?: string;
  footer?: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
};

/** Outcome-first preview chrome — product tray + white inset, like the home dashboard. */
export function InsightPreviewShell({
  eyebrow,
  title,
  subtitle,
  stats,
  interactiveHint,
  footer,
  ariaLabel,
  children,
  className,
}: InsightPreviewShellProps) {
  return (
    <div className={cn(dashboardCard, className)} role="region" aria-label={ariaLabel}>
      <div className="overflow-hidden rounded-[1.15rem] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <div className="px-5 py-5 sm:px-6 sm:pt-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className={cn('text-[10px] font-semibold uppercase tracking-[0.2em]', brandUi.eyebrow)}>
                {eyebrow}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-heno-blue-900 sm:text-lg">
                {title}
              </h3>
              {subtitle ? (
                <p className="mt-1.5 text-[11px] leading-relaxed text-neutral-500">{subtitle}</p>
              ) : null}
            </div>
            {interactiveHint ? (
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-heno-blue-100/90 bg-heno-blue-50/50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-heno-blue-800">
                <span className="size-1.5 animate-pulse rounded-full bg-heno-blue-500" aria-hidden />
                Interactive
              </span>
            ) : null}
          </div>

          {stats && stats.length > 0 ? (
            <ul className="mt-6 grid grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-heno-blue-100">
              {stats.map((stat) => (
                <li key={stat.label} className="min-w-0 sm:px-4 sm:first:pl-0 sm:last:pr-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-neutral-400">
                    {stat.label}
                  </p>
                  <p
                    className={cn(
                      'mt-1 text-lg font-semibold tabular-nums leading-none tracking-tight sm:text-xl',
                      stat.tone === 'positive' ? brandUi.outcomeText : 'text-heno-blue-900',
                    )}
                  >
                    {stat.value}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}

          {interactiveHint ? (
            <p className="mt-4 text-[10px] leading-relaxed text-neutral-400">{interactiveHint}</p>
          ) : null}
        </div>

        <div className="border-t border-heno-blue-50 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
          {children}
          {footer ? <p className="mt-4 text-[10px] leading-relaxed text-neutral-400">{footer}</p> : null}
        </div>
      </div>
    </div>
  );
}

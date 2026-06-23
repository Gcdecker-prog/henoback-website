'use client';

import {
  formatPlanningAmount,
  planningForecastMeta,
  planningPeriods,
  planningScenarios,
} from '@/lib/content/planning-forecast';
import { InsightPreviewShell } from '@/components/marketing/InsightPreviewShell';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

function QuarterProgress({ forecast, actual }: { forecast: number; actual: number | null }) {
  const max = Math.max(forecast, actual ?? 0, 1);
  const forecastPct = Math.round((forecast / max) * 100);
  const actualPct = actual !== null ? Math.round((actual / max) * 100) : 0;
  const variance = actual !== null ? (((actual - forecast) / forecast) * 100).toFixed(1) : null;

  return (
    <div className="mt-2 space-y-1.5">
      <div className="flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
            <div className="h-full rounded-full bg-neutral-200" style={{ width: `${forecastPct}%` }} />
          </div>
        <span className="w-16 shrink-0 text-right text-[10px] tabular-nums text-neutral-400">Plan</span>
      </div>
      {actual !== null ? (
        <div className="flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-heno-blue-500/80"
              style={{ width: `${actualPct}%` }}
            />
          </div>
          <span
            className={cn(
              'w-16 shrink-0 text-right text-[10px] font-medium tabular-nums',
              Number(variance) >= 0 ? brandUi.positive : brandUi.negative,
            )}
          >
            {Number(variance) >= 0 ? '+' : ''}
            {variance}%
          </span>
        </div>
      ) : (
        <p className="text-[10px] text-neutral-400">Forecast period · not yet closed</p>
      )}
    </div>
  );
}

/** Planning preview — forecast vs actual by quarter */
export function PlanningForecastPreview({ className }: { className?: string }) {
  const closed = planningPeriods.filter((p) => p.actual !== null);
  const ytdActual = closed.reduce((sum, p) => sum + (p.actual ?? 0), 0);
  const ytdForecast = closed.reduce((sum, p) => sum + p.forecast, 0);
  const ytdVariance =
    ytdForecast > 0 ? (((ytdActual - ytdForecast) / ytdForecast) * 100).toFixed(1) : '0';

  return (
    <InsightPreviewShell
      className={className}
      ariaLabel={planningForecastMeta.title}
      eyebrow={planningForecastMeta.eyebrow}
      title={planningForecastMeta.title}
      subtitle={planningForecastMeta.subtitle}
      footer="Forecasting and actuals on the same rolling plan"
      stats={[
        { label: 'YTD actual', value: formatPlanningAmount(ytdActual), tone: 'positive' },
        { label: 'Plan variance', value: `${Number(ytdVariance) >= 0 ? '+' : ''}${ytdVariance}%`, tone: 'accent' },
        { label: 'Annual plan', value: planningScenarios[0].value },
      ]}
    >
      <ul className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
        {planningScenarios.map((scenario) => (
          <li
            key={scenario.label}
            className="rounded-xl border border-neutral-100/90 bg-neutral-50/50 px-3 py-2.5"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-neutral-400">
              {scenario.label}
            </p>
            <p className="mt-1 text-sm font-semibold tabular-nums text-neutral-900">{scenario.value}</p>
          </li>
        ))}
      </ul>

      <ul className="space-y-2" role="list">
        {planningPeriods.map((period) => (
          <li
            key={period.label}
            className="rounded-xl border border-neutral-100/90 px-3.5 py-3 sm:px-4"
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[11px] font-semibold text-neutral-800 sm:text-xs">{period.label}</p>
              <div className="flex gap-4 text-right text-[11px] tabular-nums sm:text-xs">
                <span className="text-neutral-400">{formatPlanningAmount(period.forecast)}</span>
                <span className="min-w-[4.5rem] font-semibold text-neutral-900">
                  {period.actual !== null ? formatPlanningAmount(period.actual) : '—'}
                </span>
              </div>
            </div>
            <QuarterProgress forecast={period.forecast} actual={period.actual} />
          </li>
        ))}
      </ul>
    </InsightPreviewShell>
  );
}

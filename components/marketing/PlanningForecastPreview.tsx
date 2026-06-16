'use client';

import {
  formatPlanningAmount,
  planningForecastMeta,
  planningPeriods,
  planningScenarios,
} from '@/lib/content/planning-forecast';
import { ReportPreviewShell } from '@/components/marketing/ReportPreviewShell';
import { cn } from '@/lib/cn';

function ForecastBar({
  forecast,
  actual,
}: {
  forecast: number;
  actual: number | null;
}) {
  const max = Math.max(forecast, actual ?? 0, 1);
  const forecastPct = Math.round((forecast / max) * 100);
  const actualPct = actual !== null ? Math.round((actual / max) * 100) : 0;
  const variance =
    actual !== null ? (((actual - forecast) / forecast) * 100).toFixed(1) : null;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-neutral-200"
            style={{ width: `${forecastPct}%` }}
          />
        </div>
        <span className="w-12 shrink-0 text-right text-[10px] tabular-nums text-neutral-400">
          Plan
        </span>
      </div>
      {actual !== null ? (
        <div className="flex items-center justify-between gap-2">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-heno-blue-500/80"
              style={{ width: `${actualPct}%` }}
            />
          </div>
          <span
            className={cn(
              'w-12 shrink-0 text-right text-[10px] font-medium tabular-nums',
              Number(variance) >= 0 ? 'text-emerald-700' : 'text-amber-800',
            )}
          >
            {Number(variance) >= 0 ? '+' : ''}
            {variance}%
          </span>
        </div>
      ) : (
        <p className="text-[10px] text-neutral-400">Forecast · not yet closed</p>
      )}
    </div>
  );
}

/** Planning preview — forecast vs actual, tied to strategic insight messaging */
export function PlanningForecastPreview({ className }: { className?: string }) {
  const closed = planningPeriods.filter((p) => p.actual !== null);
  const ytdActual = closed.reduce((sum, p) => sum + (p.actual ?? 0), 0);
  const ytdForecast = closed.reduce((sum, p) => sum + p.forecast, 0);
  const ytdVariance =
    ytdForecast > 0 ? (((ytdActual - ytdForecast) / ytdForecast) * 100).toFixed(1) : '0';

  return (
    <ReportPreviewShell
      className={className}
      ariaLabel={planningForecastMeta.reportTitle}
      packageTitle={planningForecastMeta.packageTitle}
      reportTitle={planningForecastMeta.reportTitle}
      asOf={planningForecastMeta.asOf}
      filters={planningForecastMeta.filters}
      footer="Forecasting · planning integration · performance tracking against the live plan"
      summary={[
        { label: 'YTD actual', value: formatPlanningAmount(ytdActual), tone: 'positive' },
        { label: 'Plan variance', value: `${Number(ytdVariance) >= 0 ? '+' : ''}${ytdVariance}%`, tone: 'accent' },
        { label: 'Annual plan', value: planningScenarios[0].value },
      ]}
    >
      <div className="overflow-x-hidden p-4 sm:p-5">
        <div className="mb-4 grid grid-cols-3 gap-2">
          {planningScenarios.map((scenario) => (
            <div
              key={scenario.label}
              className="rounded-xl border border-neutral-100 bg-neutral-50/50 px-3 py-2.5"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
                {scenario.label}
              </p>
              <p className="mt-1 text-sm font-semibold tabular-nums text-neutral-900">
                {scenario.value}
              </p>
              <p className="mt-0.5 text-[10px] text-neutral-500">{scenario.note}</p>
            </div>
          ))}
        </div>

        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="border-b border-neutral-200 text-neutral-400">
              <th className="w-10 pb-2 text-left text-[9px] font-semibold uppercase tracking-[0.14em]">
                Qtr
              </th>
              <th className="w-[4.5rem] pb-2 text-right text-[9px] font-semibold uppercase tracking-[0.12em] sm:w-[5rem]">
                Forecast
              </th>
              <th className="w-[4.5rem] pb-2 text-right text-[9px] font-semibold uppercase tracking-[0.12em] sm:w-[5rem]">
                Actual
              </th>
              <th className="pb-2 pl-3 text-left text-[9px] font-semibold uppercase tracking-[0.12em]">
                Progress
              </th>
            </tr>
          </thead>
          <tbody>
            {planningPeriods.map((period) => (
              <tr key={period.label} className="border-b border-neutral-100/70">
                <td className="py-3 text-[11px] font-semibold text-neutral-700 sm:text-xs">
                  {period.label}
                </td>
                <td className="py-3 text-right text-[11px] tabular-nums text-neutral-500 sm:text-xs">
                  {formatPlanningAmount(period.forecast)}
                </td>
                <td className="py-3 text-right text-[11px] font-semibold tabular-nums text-neutral-900 sm:text-xs">
                  {period.actual !== null ? formatPlanningAmount(period.actual) : '—'}
                </td>
                <td className="py-3 pl-3">
                  <ForecastBar forecast={period.forecast} actual={period.actual} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ReportPreviewShell>
  );
}

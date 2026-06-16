/**
 * Planning & forecast preview — aligned to strategic insight section copy.
 */

export const planningForecastMeta = {
  packageTitle: 'Strategic Planning',
  reportTitle: 'Forecast vs. Actual · Connected Plan',
  asOf: 'Rolling 12 months',
  filters: 'Revenue · Labor · Delivery · Capital deployment',
} as const;

export type PlanningPeriod = {
  label: string;
  forecast: number;
  actual: number | null;
};

export const planningPeriods: readonly PlanningPeriod[] = [
  { label: 'Q1', forecast: 1420000, actual: 1385000 },
  { label: 'Q2', forecast: 1510000, actual: 1492000 },
  { label: 'Q3', forecast: 1585000, actual: null },
  { label: 'Q4', forecast: 1640000, actual: null },
];

export const planningScenarios = [
  { label: 'Base plan', value: '$6.16M', note: 'On track' },
  { label: 'Labor load', value: '68%', note: 'Within target' },
  { label: 'Project margin', value: '31.2%', note: '+1.4 pts vs prior' },
] as const;

export function formatPlanningAmount(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`.replace('.00M', 'M');
  if (value >= 1000) return `$${Math.round(value / 1000)}K`;
  return `$${value}`;
}

/**
 * Project Profitability Summary — example project-based firm data.
 */

export const projectProfitabilityMeta = {
  packageTitle: 'Project Accounting',
  reportTitle: 'Project Profitability Summary',
  asOf: 'As of today',
  filters: 'Project summary · All locations · Active engagements',
} as const;

export type ProjectProfitRow = {
  id: string;
  name: string;
  code: string;
  revenue: number | null;
  grossProfit: number | null;
  margin: number | null;
  netIncome: number | null;
  isTotal?: boolean;
};

export const projectProfitabilityRows: readonly ProjectProfitRow[] = [
  {
    id: 'p2847',
    name: 'Infrastructure Modernization Program',
    code: 'P-2847',
    revenue: 428000,
    grossProfit: 118400,
    margin: 27.7,
    netIncome: 118400,
  },
  {
    id: 'p1042',
    name: 'Enterprise Application Development',
    code: 'P-1042',
    revenue: 16000,
    grossProfit: 4933.17,
    margin: 29.8,
    netIncome: 4933.17,
  },
  {
    id: 'p3318',
    name: 'Regulatory Compliance Advisory',
    code: 'P-3318',
    revenue: 215000,
    grossProfit: 89200,
    margin: 41.5,
    netIncome: 89200,
  },
  {
    id: 'total',
    name: 'Total All Projects',
    code: 'All locations',
    revenue: 659000,
    grossProfit: 212533.17,
    margin: 32.3,
    netIncome: 212533.17,
    isTotal: true,
  },
];

export function formatProjectCurrency(value: number | null): string {
  if (value === null) return '—';
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString('en-US', {
    minimumFractionDigits: value % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: 2,
  });
  return value < 0 ? `($${formatted})` : `$${formatted}`;
}

export function formatProjectMargin(value: number | null): string {
  if (value === null) return '—';
  return `${value.toFixed(1)}%`;
}

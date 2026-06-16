/**
 * Project Profitability Summary — structure from Project Accounting screenshot.
 */

export const projectProfitabilityMeta = {
  packageTitle: 'Project Accounting',
  reportTitle: 'Project Profitability Summary',
  asOf: 'As of today',
  filters: '1-Project Summary · All locations · All projects',
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
    id: 'p00046',
    name: 'MJS Test Project',
    code: 'P00046-DEMO',
    revenue: null,
    grossProfit: -25,
    margin: null,
    netIncome: -25,
  },
  {
    id: 'p00010',
    name: 'Enterprise Application Development',
    code: 'P00010',
    revenue: 16000,
    grossProfit: 4933.17,
    margin: 29.8,
    netIncome: 4933.17,
  },
  {
    id: 'total',
    name: 'Total All Projects',
    code: 'All locations',
    revenue: 16000,
    grossProfit: 4933.17,
    margin: 29.8,
    netIncome: 4933.17,
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

/** Back office operations preview — monthly close runbook (not order-to-cash) */

export const operationsRunbookMeta = {
  eyebrow: 'Back office operations',
  title: 'Monthly close runbook',
  subtitle: 'Reconciliation · Review · Close · Report',
  reportTitle: 'Monthly close runbook',
  asOf: 'Mar 2026',
  filters: 'Reconciliation · Review · Close · Report',
  footer: 'Standardized steps · Automated where it counts · Same process every close',
} as const;

export type RunbookStepStatus = 'automated' | 'standardized' | 'manual';

export type RunbookStep = {
  id: string;
  label: string;
  detail: string;
  status: RunbookStepStatus;
  owner: string;
};

export const operationsRunbookSteps: readonly RunbookStep[] = [
  {
    id: 'reconcile',
    label: 'Reconcile cash & sub-ledgers',
    detail: 'Bank feeds, credit cards, and project WIP tie out automatically.',
    status: 'automated',
    owner: 'System',
  },
  {
    id: 'review',
    label: 'Variance review & approvals',
    detail: 'Same review checklist — no one-off spreadsheets at month-end.',
    status: 'standardized',
    owner: 'Controller',
  },
  {
    id: 'close',
    label: 'Close the books',
    detail: 'Journal entries follow a locked sequence every period.',
    status: 'standardized',
    owner: 'Accounting',
  },
  {
    id: 'report',
    label: 'Publish leadership reports',
    detail: 'P&L, project margin, and board pack on the same schedule.',
    status: 'automated',
    owner: 'Reporting',
  },
] as const;

export const operationsRunbookSummary = [
  { label: 'On-time closes', value: '12/12', tone: 'positive' as const },
  { label: 'Steps automated', value: '68%', tone: 'accent' as const },
  { label: 'Workarounds', value: '0', tone: 'default' as const },
];

export const runbookStatusLabel: Record<RunbookStepStatus, string> = {
  automated: 'Automated',
  standardized: 'Standardized',
  manual: 'Manual',
};

export const runbookStatusStyle: Record<RunbookStepStatus, string> = {
  automated: 'bg-heno-blue-50 text-heno-blue-800 border-heno-blue-100',
  standardized: 'bg-neutral-100 text-neutral-700 border-neutral-200/80',
  manual: 'bg-heno-orange-50 text-heno-orange-800 border-heno-orange-100/80',
};

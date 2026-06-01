export type Service = {
  slug: string;
  title: string;
  summary: string;
};

/** Nine services from henobackoffice.com — source of truth for v1 */
export const services: Service[] = [
  {
    slug: 'bookkeeping',
    title: 'Bookkeeping Services',
    summary:
      'Daily financial workload off your plate — up-to-date books so you can focus on running and scaling your business.',
  },
  {
    slug: 'full-service-accounting',
    title: 'Full Service Accounting',
    summary:
      'End-to-end financial management with accurate records, reliable reporting, and expert oversight in one place.',
  },
  {
    slug: 'payroll-system-integration',
    title: 'Payroll System Integration',
    summary:
      'Payroll platform integrated with accounting for accurate, timely, and compliant payroll processing.',
  },
  {
    slug: 'audit-support',
    title: 'Audit Support',
    summary:
      'Records accurate, complete, and audit-ready — move through audits smoothly and with confidence.',
  },
  {
    slug: 'budgeting-forecasting',
    title: 'Budgeting & Forecasting',
    summary:
      'CFO-level, data-driven projections for confident decisions around growth, cash flow, and investment.',
  },
  {
    slug: 'accounting-analysis',
    title: 'Accounting Analysis',
    summary:
      'Financial data turned into clear, actionable insights so you can make informed decisions with confidence.',
  },
  {
    slug: 'cfo-outsourcing',
    title: 'CFO Outsourcing',
    summary:
      'Experienced financial leadership on a flexible, scalable basis — without a full-time CFO hire.',
  },
  {
    slug: 'accounts-payable-receivable',
    title: 'Accounts Payable / Receivable',
    summary:
      'Healthy cash flow through consistent AP/AR processes — fewer delays, errors, and financial strain.',
  },
  {
    slug: 'expense-process-automation',
    title: 'Expense Process Automation',
    summary:
      'Streamlined capture, approval, and recording of expenses — less admin burden, better accuracy and visibility.',
  },
];

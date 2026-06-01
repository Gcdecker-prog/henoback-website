export type Service = {
  slug: string;
  title: string;
  summary: string;
  /** Word-for-word body from henobackoffice.com/services */
  body: string;
};

/** Nine services — order matches live services page */
export const services: Service[] = [
  {
    slug: 'bookkeeping',
    title: 'Bookkeeping Services',
    summary:
      'Daily financial workload off your plate — up-to-date books so you can focus on running and scaling your business with confidence.',
    body: 'Keeping your books up to date is essential to running a healthy business—but it’s also one of the most time-consuming and error-prone tasks for growing companies. Our Bookkeeping Services take the daily financial workload off your plate, so you can focus on running and scaling your business with confidence.',
  },
  {
    slug: 'full-service-accounting',
    title: 'Full Service Accounting',
    summary:
      'End-to-end financial management with accurate records, reliable reporting, and expert oversight—all in one place.',
    body: 'As your business grows, you need more than basic bookkeeping. Our Full Service Accounting delivers end-to-end financial management with accurate records, reliable reporting, and expert oversight—all in one place.',
  },
  {
    slug: 'audit-support',
    title: 'Audit Support',
    summary:
      'Records accurate, complete, and audit-ready—move through audits smoothly and with confidence.',
    body: 'Audits can be time-consuming and stressful, especially if your financials aren’t fully organized. Our Audit Support services ensure your records are accurate, complete, and ready—so you can move through audits smoothly and with confidence.',
  },
  {
    slug: 'accounting-analysis',
    title: 'Accounting Analysis',
    summary:
      'Financial data turned into clear, actionable insights so you can make informed decisions with confidence.',
    body: 'Accurate numbers are only valuable if you understand what they’re telling you. Our Accounting Analysis services turn your financial data into clear, actionable insights—so you can make informed decisions with confidence.',
  },
  {
    slug: 'cfo-outsourcing',
    title: 'CFO Outsourcing',
    summary:
      'Experienced financial leadership on a flexible, scalable basis—without a full-time CFO hire.',
    body: 'As your business grows, strategic financial guidance becomes essential—but hiring a full-time CFO isn’t always practical. Our CFO Outsourcing service gives you access to experienced financial leadership on a flexible, scalable basis.',
  },
  {
    slug: 'payroll-system-integration',
    title: 'Payroll System Integration',
    summary:
      'Payroll platform integrated with accounting for accurate, timely, and compliant payroll processing.',
    body: 'As your team grows, payroll becomes more complex—and disconnected systems can lead to errors, delays, and compliance risks. Our Payroll System Integration ensures your payroll platform works seamlessly with your accounting, creating accurate, timely, and compliant payroll processing.',
  },
  {
    slug: 'accounts-payable-receivable',
    title: 'Accounts Payable / Receivable',
    summary:
      'Healthy cash flow through consistent AP/AR processes—fewer delays, errors, and financial strain.',
    body: 'Managing payables and receivables is critical to maintaining healthy cash flow—but delays, errors, and inconsistent processes can quickly create financial strain.',
  },
  {
    slug: 'expense-process-automation',
    title: 'Expense Process Automation',
    summary:
      'Streamlined capture, approval, and recording of expenses—less admin burden, better accuracy and visibility.',
    body: 'Manual expense tracking is time-consuming, error-prone, and difficult to scale. Our Expense Process Automation services streamline how expenses are captured, approved, and recorded—reducing administrative burden while improving accuracy and visibility.',
  },
  {
    slug: 'budgeting-forecasting',
    title: 'Budgeting & Forecasting',
    summary:
      'CFO-level, data-driven projections for confident decisions around growth, cash flow, and investment.',
    body: 'Effective leadership requires more than hindsight—it requires a clear financial plan. Our Budgeting & Forecasting services provide CFO-level, data-driven projections that support confident decisions around growth, cash flow, and investment.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

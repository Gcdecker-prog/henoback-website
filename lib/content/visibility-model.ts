/**
 * The 7-Level Data Visibility Model — eight areas assessed at each maturity stage.
 * Source: Transformation Maturity Journey (IFI Advisory Workspace).
 */

export type VisibilityAreaId =
  | 'technology'
  | 'sales'
  | 'profitability'
  | 'projectAccounting'
  | 'accounting'
  | 'workforce'
  | 'material'
  | 'organization';

export type VisibilityArea = {
  id: VisibilityAreaId;
  label: string;
  /** Hex for legend / row markers */
  color: string;
};

export type VisibilityLevel = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** Full title shown in the detail card */
  name: string;
  /** Short label under the bar chart */
  shortName: string;
  /** Short caption under the level name */
  caption: string;
  /** Bar fill color — cool navy → warm orange progression */
  barColor: string;
  areas: Record<VisibilityAreaId, string>;
};

/** Area marker colors — official domain palette */
export const visibilityAreas: readonly VisibilityArea[] = [
  { id: 'technology', label: 'Technology', color: '#3DDC97' },
  { id: 'sales', label: 'Sales', color: '#FF732C' },
  { id: 'profitability', label: 'Profitability', color: '#024666' },
  { id: 'projectAccounting', label: 'Project Accounting', color: '#E7AB3F' },
  { id: 'accounting', label: 'Accounting', color: '#058DCD' },
  { id: 'workforce', label: 'Workforce', color: '#C75B39' },
  { id: 'material', label: 'Material', color: '#464646' },
  { id: 'organization', label: 'Organization', color: '#1B6B45' },
] as const;

export const visibilityLevels: readonly VisibilityLevel[] = [
  {
    level: 1,
    name: 'Disconnected Systems',
    shortName: 'Disconnected',
    caption: 'Disconnected tools and manual workarounds',
    barColor: '#1B365D',
    areas: {
      technology: 'Disconnected Systems',
      sales: 'Track Sales on Spreadsheet',
      profitability: 'Cash Basis Financials',
      projectAccounting: 'No Project Accounting',
      accounting: 'Book Revenue Based on Invoice',
      workforce: 'No Labor Tracking',
      material: 'AP Bills',
      organization: 'Single Entity',
    },
  },
  {
    level: 2,
    name: 'Centralized Accounting System',
    shortName: 'Centralized',
    caption: 'One accounting system of record',
    barColor: '#234A78',
    areas: {
      technology: 'Centralized Accounting System',
      sales: 'Simple Prospect Tracking',
      profitability: 'Accrual Basis Financials',
      projectAccounting: 'Track Revenue by Project',
      accounting: 'Track Invoice Backlog',
      workforce: 'Track Labor tasks (Simple)',
      material: 'AP Bills linked to Projects',
      organization: 'Multi-Entity',
    },
  },
  {
    level: 3,
    name: 'Cloud Based Systems',
    shortName: 'Cloud',
    caption: 'Accessible systems and basic metrics',
    barColor: '#2B6A96',
    areas: {
      technology: 'Cloud Based Systems',
      sales: 'Sales Cycle Processors',
      profitability: 'Financial Metrics',
      projectAccounting: 'Simple Project Accounting',
      accounting: 'Labor Costing',
      workforce: 'Time Tracking',
      material: 'Project Material Budgets',
      organization: 'Business Lines',
    },
  },
  {
    level: 4,
    name: 'Transaction Automation',
    shortName: 'Automation',
    caption: 'Transactions flow with less manual touch',
    barColor: '#4A9EC4',
    areas: {
      technology: 'Transaction Automation',
      sales: 'Sales Forecasting',
      profitability: 'Partial Project Profitability',
      projectAccounting: 'Project Accounting with Labor Costing',
      accounting: 'Move to Revenue Recognition',
      workforce: 'Standardized Project Plans',
      material: 'Purchase Orders Tracking',
      organization: 'Shared Services Business Line',
    },
  },
  {
    level: 5,
    name: 'Connected Systems',
    shortName: 'Connected',
    caption: 'CRM, ops, and finance start to speak',
    barColor: '#F5A66A',
    areas: {
      technology: 'Connected Systems',
      sales: 'Integrate CRM to Financial/Ops Systems',
      profitability: 'True Project Profitability',
      projectAccounting: 'Project Accounting with Allocations',
      accounting: 'Revenue Backlog',
      workforce: 'Project Scheduling',
      material: 'Spend EAC Planning',
      organization: 'Shared Service Entities',
    },
  },
  {
    level: 6,
    name: 'Consistent Centralized Reporting',
    shortName: 'Reporting',
    caption: 'Consistent reporting across the business',
    barColor: '#F28A45',
    areas: {
      technology: 'Consistent Centralized Reporting',
      sales: 'Campaign Management',
      profitability: 'Profitability Modelling',
      projectAccounting: 'Project Forecasts',
      accounting: 'Project Budget vs. Actuals',
      workforce: 'Future Labor Planning (Budgeting)',
      material: 'Spend Planning',
      organization: 'Shared Service Billing',
    },
  },
  {
    level: 7,
    name: 'Real Time Monitoring',
    shortName: 'Real-time',
    caption: 'Continuous close and live profitability',
    barColor: '#F27830',
    areas: {
      technology: 'Real Time Monitoring',
      sales: 'Marketing Planning',
      profitability: 'Real Time Profitability Measurement',
      projectAccounting: 'Project Budgets vs. Actuals',
      accounting: 'Continual Close',
      workforce: 'Department Budgeting',
      material: 'Spend Planning Continual',
      organization: 'Shared Service Forecasting',
    },
  },
] as const;

export const visibilityModelCopy = {
  title: 'The 7-Level Data Visibility Model',
  intro:
    'From disconnected systems at Level 1 to real-time monitoring and a continuous close at Level 7.',
  legendLabel: 'The eight areas we assess',
  interactionHint: 'Hover or tap a level to explore each area.',
  footerLead: 'Most firms sit at Level 2 or 3.',
  footerBody: 'Here\u2019s how you move up the model—so visibility becomes a strategic operating advantage.',
  ctaLabel: 'See where you stand →',
} as const;

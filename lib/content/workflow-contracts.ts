/**
 * Order to Cash: Contracts — graph layout for Heno-branded workflow map.
 */

import { brandHex } from '@/lib/ui/brand-colors';

export const workflowContractsMeta = {
  packageTitle: 'Heno BackOffice',
  reportTitle: 'Order to Cash · Contract workflow',
  filters: 'Billing · Recurring · Revenue recognition',
} as const;

export const workflowBrand = {
  navy: brandHex.navy,
  orange: brandHex.orange,
  logoBlue: brandHex.logoBlue,
  logoHeno: brandHex.logoHeno,
  rail: brandHex.navy,
  canvas: '#F4F7FB',
  grid: `${brandHex.logoBlue}14`,
  manualEdge: brandHex.navy,
  autoEdge: brandHex.logoBlue,
  autoPulse: brandHex.orange,
} as const;

export const workflowCanvas = {
  width: 820,
  height: 468,
  laneRailWidth: 128,
  nodeWidth: 168,
  nodeHeight: 66,
  headerHeight: 40,
  edgeGap: 8,
  paddingRight: 32,
} as const;

export type WorkflowStepKind = 'entry' | 'process' | 'automated';

export type WorkflowStage = {
  id: string;
  label: string;
  x: number;
};

export const workflowStages: readonly WorkflowStage[] = [
  { id: 'order', label: 'Order', x: 28 },
  { id: 'invoice', label: 'Invoice', x: 244 },
  { id: 'control', label: 'Control', x: 460 },
];

export type WorkflowLaneBand = {
  id: string;
  title: string;
  subtitle: string;
  y: number;
  height: number;
};

export const workflowLaneBands: readonly WorkflowLaneBand[] = [
  {
    id: 'contract-invoice',
    title: 'Contract invoice',
    subtitle: 'AR billing',
    y: 54,
    height: 116,
  },
  {
    id: 'recurring',
    title: 'Recurring',
    subtitle: 'Scheduled',
    y: 180,
    height: 116,
  },
  {
    id: 'revenue',
    title: 'Contract revenue',
    subtitle: 'Recognition',
    y: 306,
    height: 116,
  },
];

export type WorkflowNode = {
  id: string;
  laneId: string;
  label: string;
  kind: WorkflowStepKind;
  detail?: string;
  x: number;
  y: number;
};

export const workflowNodes: readonly WorkflowNode[] = [
  {
    id: 'order',
    laneId: 'contract-invoice',
    label: 'Contract order',
    kind: 'entry',
    x: 28,
    y: 80,
  },
  {
    id: 'invoice',
    laneId: 'contract-invoice',
    label: 'Contract invoice',
    kind: 'process',
    detail: 'Posts to AR',
    x: 244,
    y: 80,
  },
  {
    id: 'credit',
    laneId: 'contract-invoice',
    label: 'Credit memo',
    kind: 'process',
    detail: 'If adjusted',
    x: 460,
    y: 80,
  },
  {
    id: 'recurring-tx',
    laneId: 'recurring',
    label: 'Recurring transaction',
    kind: 'entry',
    x: 28,
    y: 206,
  },
  {
    id: 'recurring-inv',
    laneId: 'recurring',
    label: 'Recurring invoice',
    kind: 'automated',
    detail: 'Posts to AR',
    x: 244,
    y: 206,
  },
  {
    id: 'rev-order',
    laneId: 'revenue',
    label: 'Revenue order',
    kind: 'automated',
    x: 28,
    y: 332,
  },
  {
    id: 'rev-revenue',
    laneId: 'revenue',
    label: 'Revenue',
    kind: 'automated',
    detail: 'Aligned to delivery',
    x: 244,
    y: 332,
  },
];

export type WorkflowEdgeKind = 'manual' | 'automated';

export type WorkflowEdge = {
  id: string;
  from: string;
  to: string;
  kind: WorkflowEdgeKind;
};

export const workflowEdges: readonly WorkflowEdge[] = [
  { id: 'e-order-invoice', from: 'order', to: 'invoice', kind: 'manual' },
  { id: 'e-invoice-credit', from: 'invoice', to: 'credit', kind: 'manual' },
  { id: 'e-recurring', from: 'recurring-tx', to: 'recurring-inv', kind: 'automated' },
  { id: 'e-rev', from: 'rev-order', to: 'rev-revenue', kind: 'automated' },
  { id: 'e-order-rev', from: 'order', to: 'rev-order', kind: 'automated' },
];

export const workflowStepStyles: Record<WorkflowStepKind, string> = {
  entry: 'border-l-[3px] border-l-heno-orange-500 bg-white text-neutral-900',
  process: 'border-l-[3px] border-l-heno-blue-700 bg-white text-neutral-900',
  automated: 'border-l-[3px] border-l-heno-blue-400 bg-white text-neutral-800',
};

export const workflowStepLabels: Record<WorkflowStepKind, string> = {
  entry: 'Manual entry',
  process: 'Manual conversion',
  automated: 'Automated',
};

export const workflowKindAccent: Record<WorkflowStepKind, string> = {
  entry: workflowBrand.orange,
  process: workflowBrand.logoBlue,
  automated: workflowBrand.logoHeno,
};

/** @deprecated Use workflowNodes */
export const workflowLanes = workflowLaneBands.map((band) => ({
  id: band.id,
  title: band.title,
  steps: workflowNodes
    .filter((n) => n.laneId === band.id)
    .map(({ id, label, kind, detail }) => ({ id, label, kind, detail })),
}));

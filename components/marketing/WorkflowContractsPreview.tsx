'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  workflowBrand,
  workflowCanvas,
  workflowContractsMeta,
  workflowEdges,
  workflowLaneBands,
  workflowNodes,
  workflowStages,
  workflowStepLabels,
  workflowStepStyles,
  type WorkflowEdge,
  type WorkflowNode,
} from '@/lib/content/workflow-contracts';
import { media } from '@/lib/content/media';
import { ReportPreviewShell } from '@/components/marketing/ReportPreviewShell';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

const {
  width: VW,
  height: VH,
  laneRailWidth: RAIL,
  nodeWidth: NW,
  nodeHeight: NH,
  headerHeight: HH,
  edgeGap: GAP,
} = workflowCanvas;

const WORKFLOW_VIEWPORT = { once: true, amount: 0.35, margin: '-24px' as const };

const dashboardReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } },
};

const toolbarReveal: Variants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: motionEase } },
};

const logoReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: motionEase, delay: 0.05 } },
};

const canvasReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: motionEase } },
};

const legendReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: motionEase } },
};

function cx(x: number) {
  return x + RAIL;
}

function nodeById(id: string) {
  return workflowNodes.find((n) => n.id === id);
}

function portRight(node: WorkflowNode) {
  return { x: cx(node.x) + NW + GAP, y: node.y + NH / 2 };
}

function portLeft(node: WorkflowNode) {
  return { x: cx(node.x) - GAP, y: node.y + NH / 2 };
}

function portBottom(node: WorkflowNode) {
  return { x: cx(node.x) + NW / 2, y: node.y + NH + GAP };
}

function portTop(node: WorkflowNode) {
  return { x: cx(node.x) + NW / 2, y: node.y - GAP };
}

function buildEdgePath(edge: WorkflowEdge): string {
  const from = nodeById(edge.from);
  const to = nodeById(edge.to);
  if (!from || !to) return '';

  if (from.laneId === to.laneId) {
    const start = portRight(from);
    const end = portLeft(to);
    const dx = Math.max(28, (end.x - start.x) * 0.4);
    return `M ${start.x} ${start.y} C ${start.x + dx} ${start.y}, ${end.x - dx} ${end.y}, ${end.x} ${end.y}`;
  }

  const start = portBottom(from);
  const end = portTop(to);
  const midY = (start.y + end.y) / 2;
  return `M ${start.x} ${start.y} C ${start.x} ${midY}, ${end.x} ${midY}, ${end.x} ${end.y}`;
}

function laneLabelY(lane: (typeof workflowLaneBands)[number], offset: number) {
  return lane.y - 5 + lane.height / 2 + offset;
}

function WorkflowToolbar({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      variants={toolbarReveal}
      className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5 sm:px-5"
      style={{ background: `linear-gradient(90deg, ${workflowBrand.navy} 0%, ${workflowBrand.logoBlue} 100%)` }}
    >
      <motion.div variants={reduce ? undefined : logoReveal} className="relative size-6 shrink-0">
        <Image
          src={media.brand.markApple}
          alt=""
          width={24}
          height={24}
          className="size-6 object-contain"
          aria-hidden
        />
      </motion.div>
      <p className="min-w-0 truncate text-xs font-semibold tracking-tight text-white">
        Heno BackOffice
        <span className="font-normal text-white/60"> · Process map</span>
      </p>
    </motion.div>
  );
}

function WorkflowNodeCard({
  node,
  delay,
  reduce,
}: {
  node: WorkflowNode;
  delay: number;
  reduce: boolean;
}) {
  return (
    <foreignObject x={cx(node.x)} y={node.y} width={NW} height={NH}>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay, ease: motionEase }}
        className={cn(
          'h-full w-full overflow-hidden rounded-md border border-neutral-200/75 bg-white',
          'shadow-[0_1px_2px_rgba(27,54,93,0.06)]',
          workflowStepStyles[node.kind],
        )}
        style={{ WebkitFontSmoothing: 'antialiased' }}
      >
        <div className="flex h-full flex-col justify-center px-3 py-2">
          <p className="text-[10px] font-semibold leading-tight text-heno-blue-900">{node.label}</p>
          <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
            {workflowStepLabels[node.kind]}
          </p>
          {node.detail ? (
            <p className="mt-0.5 truncate text-[8px] text-heno-blue-700/85">{node.detail}</p>
          ) : null}
        </div>
      </motion.div>
    </foreignObject>
  );
}

function WorkflowCanvas({ reduce }: { reduce: boolean }) {
  const nodeIndex = useMemo(
    () => new Map(workflowNodes.map((n, i) => [n.id, i])),
    [],
  );

  const edgeBaseDelay = reduce ? 0 : 0.24;

  return (
    <motion.div
      variants={canvasReveal}
      className="relative overflow-hidden"
      style={{ backgroundColor: workflowBrand.canvas }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${workflowBrand.grid} 1px, transparent 0)`,
          backgroundSize: '18px 18px',
          WebkitMaskImage: `linear-gradient(to right, transparent 0, black ${RAIL}px, black 100%)`,
          maskImage: `linear-gradient(to right, transparent 0, black ${RAIL}px, black 100%)`,
        }}
        aria-hidden
      />

      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        className="relative z-[1] block h-auto w-full [shape-rendering:geometricPrecision]"
        role="img"
        aria-label="Heno BackOffice order to cash contract workflow map"
      >
        <defs>
          <linearGradient id="wf-rail" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={workflowBrand.navy} />
            <stop offset="100%" stopColor={workflowBrand.logoBlue} />
          </linearGradient>
          <marker id="wf-arrow-manual" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={workflowBrand.manualEdge} />
          </marker>
          <marker id="wf-arrow-auto" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={workflowBrand.autoEdge} />
          </marker>
        </defs>

        <rect x={0} y={0} width={RAIL} height={VH} fill="url(#wf-rail)" />
        <rect x={RAIL} y={0} width={VW - RAIL} height={HH} fill="#FFFFFF" />
        <line
          x1={RAIL}
          y1={HH}
          x2={VW}
          y2={HH}
          stroke={workflowBrand.logoBlue}
          strokeOpacity={0.12}
          strokeWidth="1"
        />

        {workflowStages.map((stage) => (
          <g key={stage.id}>
            <line
              x1={cx(stage.x) + NW / 2}
              y1={HH}
              x2={cx(stage.x) + NW / 2}
              y2={VH - 8}
              stroke={workflowBrand.logoBlue}
              strokeOpacity={0.1}
              strokeWidth="1"
              strokeDasharray="3 6"
            />
            <text
              x={cx(stage.x) + NW / 2}
              y={24}
              textAnchor="middle"
              fill={workflowBrand.navy}
              fontSize="9"
              fontWeight="600"
              letterSpacing="0.14em"
              style={{ fontFamily: 'inherit', textTransform: 'uppercase' }}
            >
              {stage.label}
            </text>
          </g>
        ))}

        {workflowLaneBands.map((lane, index) => (
          <g key={lane.id}>
            <rect
              x={RAIL}
              y={lane.y - 5}
              width={VW - RAIL}
              height={lane.height}
              rx={8}
              fill={index % 2 === 0 ? '#FFFFFF' : '#F8FAFC'}
              stroke={workflowBrand.logoBlue}
              strokeOpacity={0.1}
              strokeWidth="1"
            />
            <text
              x={RAIL / 2}
              y={laneLabelY(lane, -4)}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="8.5"
              fontWeight="600"
              letterSpacing="0.1em"
              style={{ fontFamily: 'inherit', textTransform: 'uppercase' }}
            >
              {lane.title}
            </text>
            <text
              x={RAIL / 2}
              y={laneLabelY(lane, 7)}
              textAnchor="middle"
              fill="#FFFFFF"
              fillOpacity={0.6}
              fontSize="7.5"
              fontWeight="500"
              letterSpacing="0.08em"
              style={{ fontFamily: 'inherit', textTransform: 'uppercase' }}
            >
              {lane.subtitle}
            </text>
          </g>
        ))}

        {workflowEdges.map((edge, index) => {
          const d = buildEdgePath(edge);
          const isAuto = edge.kind === 'automated';
          const stroke = isAuto ? workflowBrand.autoEdge : workflowBrand.manualEdge;

          return (
            <g key={edge.id}>
              {reduce ? (
                <path
                  d={d}
                  fill="none"
                  stroke={stroke}
                  strokeWidth={isAuto ? 1.5 : 1.25}
                  strokeDasharray={isAuto ? '6 4' : undefined}
                  strokeLinecap="round"
                  strokeOpacity={isAuto ? 0.75 : 0.55}
                  markerEnd={`url(#${isAuto ? 'wf-arrow-auto' : 'wf-arrow-manual'})`}
                />
              ) : (
                <motion.path
                  d={d}
                  fill="none"
                  stroke={stroke}
                  strokeWidth={isAuto ? 1.5 : 1.25}
                  strokeDasharray={isAuto ? '6 4' : undefined}
                  strokeLinecap="round"
                  strokeOpacity={isAuto ? 0.75 : 0.55}
                  markerEnd={`url(#${isAuto ? 'wf-arrow-auto' : 'wf-arrow-manual'})`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: edgeBaseDelay + index * 0.04,
                    ease: motionEase,
                  }}
                />
              )}
            </g>
          );
        })}

        {workflowNodes.map((node) => (
          <WorkflowNodeCard
            key={node.id}
            node={node}
            reduce={reduce}
            delay={edgeBaseDelay + 0.1 + (nodeIndex.get(node.id) ?? 0) * 0.035}
          />
        ))}
      </svg>
    </motion.div>
  );
}

/** Heno-branded order to cash workflow map */
export function WorkflowContractsPreview({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <ReportPreviewShell
      className={className}
      ariaLabel={workflowContractsMeta.reportTitle}
      packageTitle={workflowContractsMeta.packageTitle}
      reportTitle={workflowContractsMeta.reportTitle}
      filters={workflowContractsMeta.filters}
      footer="Every handoff mapped · Manual and automated paths · Built for repeatability"
    >
      <motion.div
        initial={reduce ? false : 'hidden'}
        whileInView="visible"
        viewport={WORKFLOW_VIEWPORT}
        variants={dashboardReveal}
      >
        <WorkflowToolbar reduce={Boolean(reduce)} />
        <WorkflowCanvas reduce={Boolean(reduce)} />

        <motion.div
          variants={legendReveal}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-neutral-100 bg-[#FAFCFE] px-4 py-3 sm:px-5"
        >
          <span className="flex items-center gap-1.5 text-[9px] font-medium text-neutral-500">
            <span className="inline-block h-px w-5" style={{ backgroundColor: workflowBrand.manualEdge }} aria-hidden />
            Manual
          </span>
          <span className="flex items-center gap-1.5 text-[9px] font-medium text-neutral-500">
            <span
              className="inline-block h-px w-5 border-t border-dashed"
              style={{ borderColor: workflowBrand.autoEdge }}
              aria-hidden
            />
            Automated
          </span>
          <div className="flex flex-wrap gap-1 sm:ml-auto">
            {(['entry', 'process', 'automated', 'posting'] as const).map((kind) => (
              <span
                key={kind}
                className={cn(
                  'rounded px-2 py-0.5 text-[9px] font-medium text-neutral-600',
                  workflowStepStyles[kind],
                )}
              >
                {workflowStepLabels[kind]}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </ReportPreviewShell>
  );
}

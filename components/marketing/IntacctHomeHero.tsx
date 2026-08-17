'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { BeforeAfterChart } from '@/components/marketing/BeforeAfterChart';
import {
  intacctHero,
  intacctHeroPrimaryTabIds,
  intacctHeroTabs,
} from '@/lib/content/home-intacct';
import { assessmentUrl } from '@/lib/gtm-links';
import { cn } from '@/lib/cn';
import { WaveField } from '@/components/marketing/WaveField';
import { chapterBodyClass, chapterClaimScale } from '@/components/marketing/ChapterHeadline';
import { motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';

type Tab = (typeof intacctHeroTabs)[number];

const PRIMARY_TAB_SET = new Set<string>(intacctHeroPrimaryTabIds);

const BAR_TONES = {
  orange: 'bg-heno-orange-500',
  navy: 'bg-heno-blue-900',
  blue: 'bg-heno-blue-500',
  sky: 'bg-heno-blue-400',
} as const;

function HorizontalBars({
  series,
  reduce,
}: {
  series: Extract<Tab, { chart: 'horizontal' }>['series'];
  reduce: boolean | null;
}) {
  return (
    <ul className="flex h-full flex-col justify-center space-y-3.5 sm:space-y-4">
      {series.map((bar) => (
        <li key={bar.name} className="grid grid-cols-[5.25rem_1fr_2.75rem] items-center gap-3 sm:grid-cols-[5.75rem_1fr_3rem] sm:gap-4">
          <span className="truncate text-[0.8rem] font-medium text-heno-blue-900/80 sm:text-[0.85rem]">
            {bar.name}
          </span>
          <div className="h-4 overflow-hidden rounded-full bg-heno-blue-100/70 sm:h-[1.15rem]">
            <motion.div
              className={cn('h-full rounded-full', BAR_TONES[bar.tone])}
              initial={reduce ? { width: `${bar.value}%` } : { width: 0 }}
              animate={{ width: `${bar.value}%` }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <span className="text-right text-[0.8rem] font-semibold tabular-nums text-heno-blue-900 sm:text-[0.85rem]">
            {bar.value}%
          </span>
        </li>
      ))}
    </ul>
  );
}

function VerticalBars({
  series,
  reduce,
  withLine,
  withCurve,
}: {
  series: readonly { name: string; value: number; accent?: boolean }[];
  reduce: boolean | null;
  withLine?: boolean;
  withCurve?: boolean;
}) {
  const max = Math.max(...series.map((s) => s.value));
  const coords = series.map((s, i) => {
    const x = ((i + 0.5) / series.length) * 100;
    const y = 100 - (s.value / max) * 88;
    return { x, y };
  });
  const linePoints = coords.map((c) => `${c.x},${c.y}`).join(' ');
  const smoothPath = coords
    .map((c, i, arr) => {
      if (i === 0) return `M ${c.x} ${c.y}`;
      const prev = arr[i - 1];
      const c1x = prev.x + (c.x - prev.x) * 0.4;
      const c2x = prev.x + (c.x - prev.x) * 0.6;
      return `C ${c1x} ${prev.y} ${c2x} ${c.y} ${c.x} ${c.y}`;
    })
    .join(' ');

  return (
    <div className="flex h-full flex-col justify-center rounded-2xl bg-heno-blue-50/50 px-3 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-5">
      <div className="relative min-h-0 flex-1">
        <div className="absolute inset-0 z-0 flex items-end">
          {series.map((bar) => (
            <div key={bar.name} className="flex h-full flex-1 items-end justify-center px-1 sm:px-1.5">
              <motion.div
                className={cn(
                  'w-full max-w-[2.85rem] rounded-t-xl sm:max-w-[3.35rem]',
                  bar.accent ? 'bg-heno-orange-500' : withCurve ? 'bg-heno-blue-900' : 'bg-heno-blue-400/85',
                )}
                initial={reduce ? { height: `${(bar.value / max) * 100}%` } : { height: 0 }}
                animate={{ height: `${(bar.value / max) * 100}%` }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          ))}
        </div>

        {(withLine || withCurve) && (
          <svg
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {withLine ? (
              <>
                <polyline
                  fill="none"
                  stroke="#F27830"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  points={linePoints}
                />
                {coords.map((c) => (
                  <circle
                    key={`${c.x}-${c.y}`}
                    cx={c.x}
                    cy={c.y}
                    r="1.65"
                    fill="#F27830"
                    stroke="#fff"
                    strokeWidth="0.65"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </>
            ) : null}
            {withCurve ? (
              <path
                d={smoothPath}
                fill="none"
                stroke="#4A9EC4"
                strokeWidth="2.25"
                strokeDasharray="5 5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            ) : null}
          </svg>
        )}
      </div>

      <div className="mt-2 flex shrink-0">
        {series.map((bar) => (
          <span
            key={`${bar.name}-label`}
            className="flex-1 px-1 text-center text-[0.7rem] font-medium text-neutral-500 sm:px-1.5 sm:text-[0.75rem]"
          >
            {bar.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function AreaChart({
  series,
  reduce,
}: {
  series: Extract<Tab, { chart: 'area' }>['series'];
  reduce: boolean | null;
}) {
  const max = Math.max(...series.map((s) => s.value));
  const coords = series.map((s, i) => {
    const x = (i / (series.length - 1)) * 100;
    const y = 88 - (s.value / max) * 70;
    return { x, y };
  });
  const line = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ');
  const area = `${line} L 100 100 L 0 100 Z`;

  return (
    <div className="flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-heno-blue-50/50 px-3 py-4 sm:px-4 sm:py-5">
      <svg viewBox="0 0 100 100" className="h-full w-full min-h-0" preserveAspectRatio="none" aria-hidden>
        <motion.path
          d={area}
          fill="url(#netIncomeFill)"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke="#F27830"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={reduce ? undefined : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id="netIncomeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F27830" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F27830" stopOpacity="0.02" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DashboardChart({ tab, reduce }: { tab: Tab; reduce: boolean | null }) {
  if (tab.chart === 'horizontal') return <HorizontalBars series={tab.series} reduce={reduce} />;
  if (tab.chart === 'bars-line') return <VerticalBars series={tab.series} reduce={reduce} withLine />;
  if (tab.chart === 'bars-accent') return <VerticalBars series={tab.series} reduce={reduce} />;
  if (tab.chart === 'bars-curve') return <VerticalBars series={tab.series} reduce={reduce} withCurve />;
  return <AreaChart series={tab.series} reduce={reduce} />;
}

function HeroTabButton({
  tab,
  isActive,
  compact,
  onSelect,
  className,
}: {
  tab: Tab;
  isActive: boolean;
  compact: boolean;
  onSelect: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onSelect}
      className={cn(
        'min-w-0 rounded-full text-center font-semibold leading-snug tracking-tight transition-colors',
        compact ? 'px-2 py-2.5 text-[0.6875rem] sm:px-2.5 sm:text-xs' : 'flex-1 px-2 py-2 text-[0.7rem] lg:text-[0.72rem]',
        isActive
          ? 'bg-heno-blue-900 text-white shadow-[0_8px_18px_-10px_rgba(27,54,93,0.65)]'
          : 'text-heno-blue-500 hover:bg-white/70 hover:text-heno-blue-900',
        className,
      )}
    >
      <span className="block text-pretty">{compact ? tab.shortLabel : tab.label}</span>
    </button>
  );
}

/** Intacct homepage hero — before/after proof, then dashboard views. */
export function IntacctHomeHero() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState<Tab['id']>(intacctHeroTabs[0].id);
  const [showMoreTabs, setShowMoreTabs] = useState(false);
  const active = intacctHeroTabs.find((t) => t.id === activeId) ?? intacctHeroTabs[0];

  const primaryTabs = intacctHeroTabs.filter((tab) => PRIMARY_TAB_SET.has(tab.id));
  const secondaryTabs = intacctHeroTabs.filter((tab) => !PRIMARY_TAB_SET.has(tab.id));

  const handleToggleMoreTabs = () => {
    setShowMoreTabs((open) => {
      const next = !open;
      if (!next && !PRIMARY_TAB_SET.has(activeId)) {
        setActiveId(intacctHeroPrimaryTabIds[0]);
      }
      return next;
    });
  };

  return (
    <section
      className="relative isolate bg-white pb-8 pt-10 sm:pb-10 sm:pt-12 lg:pb-12 lg:pt-14"
      aria-labelledby="intacct-hero-heading"
    >
      <WaveField />

      <Container className="relative max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-9 xl:gap-10">
          <motion.div
            className="min-w-0 lg:pt-1"
            initial={reduce ? false : 'hidden'}
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              id="intacct-hero-heading"
              className={chapterClaimScale}
              variants={staggerItem}
            >
              <span className="block font-medium text-heno-blue-500">{intacctHero.line1}</span>
              <span className="mt-2.5 block text-balance font-bold text-heno-blue-900 sm:mt-3">
                {intacctHero.line2}
              </span>
            </motion.h1>

            <motion.p className={cn(chapterBodyClass, 'mt-7 lg:mt-8')} variants={staggerItem}>
              {intacctHero.summary}
            </motion.p>
            <motion.ul className="mt-7 space-y-3.5" variants={staggerItem}>
              {intacctHero.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-700 sm:text-[0.95rem]">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-heno-orange-500 text-white">
                    <Check className="size-3.5 stroke-[3]" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" variants={staggerItem}>
              <GtmOutboundButton href={assessmentUrl({ content: 'intacct-hero-primary' })} size="lg">
                {intacctHero.primaryCta} →
              </GtmOutboundButton>
              <Link
                href={intacctHero.secondaryCtaHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-heno-blue-400/50 bg-white px-6 text-sm font-medium text-heno-blue-900 transition-colors hover:border-heno-blue-500 hover:bg-heno-blue-50/60"
              >
                {intacctHero.secondaryCta}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full min-w-0"
            initial={reduce ? false : { opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: motionEase, delay: 0.12 }}
          >
            <div
              className={cn(
                'rounded-[1.5rem] bg-[#F3F6F9] p-4 shadow-[0_28px_70px_-30px_rgba(27,54,93,0.35)] sm:p-5',
                'ring-1 ring-heno-blue-900/[0.04]',
              )}
              role="region"
              aria-label={`${intacctHero.beforeAfter.eyebrow} dashboard preview`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-heno-orange-500">
                {intacctHero.beforeAfter.eyebrow}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem]">
                {intacctHero.beforeAfter.sub}
              </p>

              <BeforeAfterChart
                reduce={!!reduce}
                variant="compact"
                className="mt-3 sm:mt-4"
                beforeLabel={intacctHero.beforeAfter.beforeLabel}
                beforeValue={intacctHero.beforeAfter.beforeValue}
                afterLabel={intacctHero.beforeAfter.afterLabel}
                afterValue={intacctHero.beforeAfter.afterValue}
              />

              <div className="mt-4 sm:mt-5">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-heno-blue-500/80">
                  Live reporting views
                </p>

                {/* Mobile — primary tabs + optional secondary row */}
                <div className="md:hidden">
                  <div className="grid grid-cols-3 gap-1.5" role="tablist" aria-label="Dashboard views">
                    {primaryTabs.map((tab) => (
                      <HeroTabButton
                        key={tab.id}
                        tab={tab}
                        compact
                        isActive={tab.id === activeId}
                        onSelect={() => setActiveId(tab.id)}
                      />
                    ))}
                  </div>

                  {showMoreTabs ? (
                    <div className="mt-1.5 grid grid-cols-2 gap-1.5" role="tablist" aria-label="Additional dashboard views">
                      {secondaryTabs.map((tab) => (
                        <HeroTabButton
                          key={tab.id}
                          tab={tab}
                          compact
                          isActive={tab.id === activeId}
                          onSelect={() => setActiveId(tab.id)}
                        />
                      ))}
                    </div>
                  ) : null}

                  <button
                    type="button"
                    onClick={handleToggleMoreTabs}
                    className="mt-2 w-full rounded-full py-1.5 text-center text-[0.6875rem] font-semibold text-heno-blue-500 transition-colors hover:text-heno-blue-900"
                    aria-expanded={showMoreTabs}
                  >
                    {showMoreTabs ? 'Fewer views' : 'More views'}
                  </button>
                </div>

                {/* Desktop — full-width tab row */}
                <div className="hidden md:flex md:w-full md:gap-1" role="tablist" aria-label="Dashboard views">
                  {intacctHeroTabs.map((tab) => (
                    <HeroTabButton
                      key={tab.id}
                      tab={tab}
                      compact={false}
                      isActive={tab.id === activeId}
                      onSelect={() => setActiveId(tab.id)}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-3 rounded-[1.15rem] bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:mt-4 sm:p-5">
                <div className="relative h-[14.5rem] sm:h-[16rem] lg:h-[16.75rem]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active.id}
                      className="absolute inset-0 flex flex-col"
                      initial={reduce ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.22, ease: motionEase }}
                    >
                      <p className="shrink-0 text-[0.875rem] font-medium leading-snug text-heno-blue-900/80 sm:text-[0.95rem]">
                        {active.caption}
                      </p>
                      <div className="mt-3 min-h-0 flex-1">
                        <DashboardChart tab={active} reduce={reduce} />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { Reveal } from '@/components/motion/Reveal';
import {
  visibilityAreas,
  visibilityLevels,
  visibilityModelCopy,
  type VisibilityLevel,
} from '@/lib/content/visibility-model';
import { pageCtaUrl } from '@/lib/gtm-links';
import { cn } from '@/lib/cn';
import { glassPanel } from '@/lib/ui/glass';

const BAR_HEIGHTS = [34, 46, 58, 70, 82, 94, 100] as const;

/** Interactive 7-level visibility model — replaces the home dark closing CTA */
export function VisibilityModelBand() {
  const reduce = useReducedMotion();
  const [activeLevel, setActiveLevel] = useState(7);
  const active = visibilityLevels.find((l) => l.level === activeLevel) ?? visibilityLevels[6];

  return (
    <section className="relative overflow-hidden border-t border-heno-blue-100 bg-heno-blue-50 py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(74,158,196,0.16),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,120,48,0.1),transparent_70%)] blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-md font-semibold tracking-tight text-heno-blue-900 sm:text-display-lg">
              {visibilityModelCopy.title}
            </h2>
            <p className="mt-3 text-body leading-relaxed text-neutral-600 sm:text-body-lg">
              {visibilityModelCopy.intro}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col items-center gap-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              {visibilityModelCopy.legendLabel}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {visibilityAreas.map((area) => (
                <li key={area.id} className="flex items-center gap-2 text-sm text-neutral-700">
                  <span
                    className="size-2.5 shrink-0 rounded-[3px]"
                    style={{ backgroundColor: area.color }}
                    aria-hidden
                  />
                  {area.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 sm:mt-12">
            <div
              className="mx-auto grid w-full max-w-5xl grid-cols-7 items-end gap-2 sm:gap-3 md:gap-4 lg:gap-5"
              role="tablist"
              aria-label="Visibility maturity levels"
            >
              {visibilityLevels.map((level, index) => {
                const isActive = level.level === activeLevel;
                const heightPct = BAR_HEIGHTS[index];

                return (
                  <div key={level.level} className="flex min-w-0 flex-col items-center">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="visibility-level-panel"
                      id={`visibility-level-${level.level}`}
                      onMouseEnter={() => setActiveLevel(level.level)}
                      onFocus={() => setActiveLevel(level.level)}
                      onClick={() => setActiveLevel(level.level)}
                      className={cn(
                        'group relative flex w-full flex-col items-center justify-end rounded-t-2xl outline-none transition-transform duration-300',
                        'focus-visible:ring-2 focus-visible:ring-heno-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-heno-blue-50',
                        isActive ? 'scale-[1.03]' : 'hover:scale-[1.015]',
                      )}
                      style={{ height: `${Math.max(heightPct * 1.85, 72)}px` }}
                    >
                      <span
                        className={cn(
                          'absolute inset-x-0 bottom-0 rounded-t-2xl transition-shadow duration-300',
                          isActive && 'shadow-[0_0_32px_-4px_rgba(242,120,48,0.55)]',
                        )}
                        style={{
                          height: `${heightPct}%`,
                          minHeight: '3.25rem',
                          backgroundColor: level.barColor,
                        }}
                        aria-hidden
                      />
                      <span className="relative z-10 pb-2.5 text-base font-semibold text-white sm:text-lg">
                        {level.level}
                      </span>
                    </button>
                    <p
                      className={cn(
                        'mt-3 min-h-[2.75rem] text-center text-[11px] font-medium leading-snug text-neutral-500 sm:text-xs',
                        (level.level === 1 || level.level === 7 || isActive) && 'text-neutral-700',
                      )}
                    >
                      {level.level === 1 || level.level === 7 || isActive ? (
                        <>
                          Level {level.level}
                          <span className="hidden sm:inline"> — {level.shortName}</span>
                        </>
                      ) : (
                        <span className="sr-only">
                          Level {level.level} — {level.shortName}
                        </span>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-2 text-center text-sm text-neutral-500">
              {visibilityModelCopy.interactionHint}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            id="visibility-level-panel"
            role="tabpanel"
            aria-labelledby={`visibility-level-${active.level}`}
            className={cn(
              glassPanel,
              'mt-8 border-white/90 bg-white p-6 text-neutral-900 shadow-[0_24px_56px_-20px_rgba(27,54,93,0.14)] sm:p-8',
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.level}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
              >
                <LevelDetail level={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-body">
              <span className="font-semibold text-neutral-900">{visibilityModelCopy.footerLead}</span>{' '}
              {visibilityModelCopy.footerBody}
            </p>
            <GtmOutboundButton
              href={pageCtaUrl('home', 'assessment', { content: 'visibility-model-cta' })}
              size="lg"
              className="h-14 px-10 text-base sm:h-16 sm:px-12 sm:text-lg"
            >
              {visibilityModelCopy.ctaLabel}
            </GtmOutboundButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function LevelDetail({ level }: { level: VisibilityLevel }) {
  const left = visibilityAreas.filter((_, i) => i % 2 === 0);
  const right = visibilityAreas.filter((_, i) => i % 2 === 1);

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
        Level {level.level}
      </p>
      <h3 className="mt-1 text-h2 font-semibold text-heno-blue-900">{level.name}</h3>
      <p className="mt-1 text-sm text-neutral-500">{level.caption}</p>

      <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        <ul className="space-y-3">
          {left.map((area) => (
            <AreaRow key={area.id} color={area.color} label={area.label} value={level.areas[area.id]} />
          ))}
        </ul>
        <ul className="space-y-3">
          {right.map((area) => (
            <AreaRow key={area.id} color={area.color} label={area.label} value={level.areas[area.id]} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function AreaRow({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-1.5 size-2.5 shrink-0 rounded-[3px]"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      <p className="text-sm leading-snug text-neutral-700 sm:text-[15px]">
        <span className="font-semibold text-neutral-900">{label}</span>{' '}
        <span className="text-neutral-600">{value}</span>
      </p>
    </li>
  );
}

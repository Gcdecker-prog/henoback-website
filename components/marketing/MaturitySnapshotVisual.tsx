'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { visibilityLevels } from '@/lib/content/visibility-model';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

const BAR_HEIGHTS = [28, 40, 52, 64, 76, 88, 100] as const;

const chartStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
};

const barItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
};

/**
 * 7-level bars — same branding as home model; stagger in on view, hover lights a level.
 */
export function MaturitySnapshotVisual({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [activeLevel, setActiveLevel] = useState<number | null>(7);

  return (
    <div
      className={cn('w-full', className)}
      role="img"
      aria-label="Seven-level data visibility model, from Level 1 Disconnected to Level 7 Real-time"
    >
      <motion.p
        className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: motionEase }}
      >
        The 7-level visibility model
      </motion.p>

      <motion.div
        className="mt-10 flex items-end justify-center gap-2 sm:gap-3 md:gap-4"
        onMouseLeave={() => setActiveLevel(7)}
        initial={reduce ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-40px', amount: 0.25 }}
        variants={chartStagger}
      >
        {visibilityLevels.map((level, index) => {
          const heightPct = BAR_HEIGHTS[index];
          const isActive = activeLevel === level.level;

          return (
            <motion.div
              key={level.level}
              className="flex min-w-0 flex-1 flex-col items-center sm:max-w-[5.5rem]"
              variants={barItem}
            >
              <button
                type="button"
                className={cn(
                  'relative flex w-full max-w-[4.5rem] flex-col items-center justify-end rounded-t-xl outline-none transition-transform duration-300',
                  'focus-visible:ring-2 focus-visible:ring-heno-orange-500 focus-visible:ring-offset-2',
                  isActive ? 'scale-[1.04]' : 'hover:scale-[1.02]',
                )}
                style={{ height: `${Math.max(heightPct * 1.4, 56)}px` }}
                onMouseEnter={() => setActiveLevel(level.level)}
                onFocus={() => setActiveLevel(level.level)}
                aria-label={`Level ${level.level} — ${level.shortName}`}
              >
                <span
                  className={cn(
                    'absolute inset-x-0 bottom-0 rounded-t-xl transition-shadow duration-300',
                    isActive && 'shadow-[0_10px_24px_-12px_rgba(27,54,93,0.35)]',
                  )}
                  style={{
                    height: `${heightPct}%`,
                    minHeight: '2.5rem',
                    backgroundColor: level.barColor,
                  }}
                  aria-hidden
                />
                <span className="relative z-10 pb-2 text-sm font-semibold text-white sm:text-base">
                  {level.level}
                </span>
              </button>
              <p
                className={cn(
                  'mt-3 min-h-[2.5rem] text-center text-[11px] font-medium leading-snug text-neutral-500 transition-colors duration-300 sm:text-xs',
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
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

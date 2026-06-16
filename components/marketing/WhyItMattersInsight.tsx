'use client';

import { motion } from 'framer-motion';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { editorialPanelBlock } from '@/lib/motion/variants';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

type WhyItMattersInsightProps = {
  lead: string;
  beats: readonly string[];
  className?: string;
};

/** Glass insight panel — scannable beats instead of a dense paragraph */
export function WhyItMattersInsight({ lead, beats, className }: WhyItMattersInsightProps) {
  return (
    <motion.div variants={editorialPanelBlock} className={className}>
      <div
        className={cn(
          glassPanelSubtle,
          'relative overflow-hidden px-5 py-5 sm:px-6 sm:py-6',
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_50%,rgba(27,54,93,0.05),transparent_65%)]"
          aria-hidden
        />
        <div
          className="absolute bottom-5 left-0 top-5 w-0.5 rounded-full bg-gradient-to-b from-heno-blue-400 via-heno-blue-500/80 to-heno-orange-400"
          aria-hidden
        />

        <div className="relative pl-4">
          <p className={brandUi.insightLabel}>
            Why it matters
          </p>
          <p className="mt-2 text-[0.9375rem] font-semibold leading-snug text-neutral-900 sm:text-base">
            {lead}
          </p>

          <ul className="mt-3.5 space-y-2.5">
            {beats.map((beat) => (
              <li
                key={beat}
                className="flex items-start gap-3 text-[0.875rem] leading-snug text-neutral-600 sm:text-[0.9375rem] sm:leading-snug"
              >
                <span
                  className={cn('mt-[0.4rem] size-1.5 shrink-0 rounded-full', brandUi.bulletSoft)}
                  aria-hidden
                />
                <span>{beat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

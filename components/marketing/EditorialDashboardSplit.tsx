'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

const splitGrid = cn(
  'grid items-stretch gap-10',
  'lg:grid-cols-2 lg:gap-x-14 lg:gap-y-0',
);

type EditorialDashboardSplitProps = {
  copy: ReactNode;
  dashboard: ReactNode;
  className?: string;
};

/** Equal two-column band — copy and dashboard share width, height, and top alignment */
export function EditorialDashboardSplit({
  copy,
  dashboard,
  className,
}: EditorialDashboardSplitProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(splitGrid, className)}
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: motionEase }}
    >
      <div className="flex min-w-0 flex-col">{copy}</div>

      <div className="flex min-w-0 flex-col">
        <div className="flex h-full min-h-full flex-1 flex-col [&>*]:h-full [&>*]:min-h-full">
          {dashboard}
        </div>
      </div>
    </motion.div>
  );
}

export const editorialDashboardShell = cn(
  'flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white',
  'shadow-[0_24px_64px_-28px_rgba(23,23,23,0.16)]',
);

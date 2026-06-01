'use client';

import { cn } from '@/lib/cn';

/** Animated highlight on glass card edges */
export function GlassShimmer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]',
        className,
      )}
      aria-hidden
    >
      <div className="glass-shimmer-line absolute -inset-[100%] opacity-60" />
    </div>
  );
}

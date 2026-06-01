'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** One continuous canvas — hero flows into stats without visual breaks */
export function HomeOpening({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'relative bg-white',
        'bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_38%,#fafafa_72%,#f5f5f5_100%)]',
        className,
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}

'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Hero canvas — clean white, proof band lives below on scroll */
export function HomeOpening({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative bg-transparent', className)}>
      <div className="relative">{children}</div>
    </div>
  );
}

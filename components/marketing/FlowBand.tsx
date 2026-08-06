'use client';

import { usePageFlow } from '@/components/marketing/PageFlowContext';
import { flowSurfaceFor } from '@/lib/ui/page-flow';
import { cn } from '@/lib/cn';

type FlowBandProps = {
  children: React.ReactNode;
  /** Stage index in this page’s scroll rhythm */
  stage?: number;
  /** Override surface (skip stage lookup) */
  surfaceClassName?: string;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
  'aria-label'?: string;
};

/**
 * Themed scroll band — picks the next surface in the page’s stage sequence.
 * Keeps section chrome local while the page owns the color journey.
 */
export function FlowBand({
  children,
  stage = 0,
  surfaceClassName,
  className,
  as: Tag = 'section',
  id,
  'aria-label': ariaLabel,
}: FlowBandProps) {
  const { themeId } = usePageFlow();
  const surface = surfaceClassName ?? flowSurfaceFor(themeId, stage);

  return (
    <Tag id={id} aria-label={ariaLabel} className={cn('relative', surface, className)}>
      {children}
    </Tag>
  );
}

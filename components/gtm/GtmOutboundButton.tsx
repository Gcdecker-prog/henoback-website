'use client';

import { Suspense } from 'react';
import { GtmOutboundLink } from '@/components/gtm/GtmOutboundLink';
import { cn } from '@/lib/cn';

type GtmOutboundButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  className?: string;
};

const variants = {
  primary:
    'bg-heno-orange-500 text-white hover:bg-heno-orange-600 shadow-[0_1px_0_rgba(0,0,0,0.05),0_8px_24px_-8px_rgba(242,120,48,0.45)]',
  secondary:
    'border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50',
  ghost: 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900',
};

const sizes = {
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
};

function GtmOutboundButtonInner({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
}: GtmOutboundButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heno-orange-500 focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className,
  );

  return (
    <GtmOutboundLink href={href} className={classes}>
      {children}
    </GtmOutboundLink>
  );
}

/** GTM CTA button with UTM passthrough — wrap in Suspense for `useSearchParams` */
export function GtmOutboundButton(props: GtmOutboundButtonProps) {
  return (
    <Suspense
      fallback={
        <a
          href={props.href}
          className={cn(
            'inline-flex items-center justify-center rounded-full font-medium opacity-90',
            variants[props.variant ?? 'primary'],
            sizes[props.size ?? 'md'],
            props.className,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      }
    >
      <GtmOutboundButtonInner {...props} />
    </Suspense>
  );
}

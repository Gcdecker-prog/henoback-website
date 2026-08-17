import { WaveField } from '@/components/marketing/WaveField';
import { cn } from '@/lib/cn';

type NavyBandProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
  'aria-labelledby'?: string;
  'aria-label'?: string;
};

/**
 * Solid navy chapter — same architectural waves as the hero, inverted.
 * Isolated so page atmosphere cannot tint the close.
 */
export function NavyBand({
  children,
  className,
  as: Tag = 'section',
  id,
  'aria-labelledby': labelledBy,
  'aria-label': ariaLabel,
}: NavyBandProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      className={cn('relative isolate overflow-hidden bg-heno-blue-900 text-white', className)}
    >
      <WaveField tone="navy" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}

import { cn } from '@/lib/cn';

type ShellProps = {
  children: React.ReactNode;
  className?: string;
};

/** Soft dashboard tray — #F3F6F9, navy-tinted depth, 1.5rem radius. */
export function ProductShell({ children, className }: ShellProps) {
  return (
    <div
      className={cn(
        'rounded-[1.5rem] bg-[#F3F6F9] p-4 shadow-[0_28px_70px_-30px_rgba(27,54,93,0.35)] ring-1 ring-heno-blue-900/[0.04] sm:p-5',
        className,
      )}
    >
      {children}
    </div>
  );
}

/** White inset inside a ProductShell. */
export function ProductInset({ children, className }: ShellProps) {
  return (
    <div
      className={cn(
        'rounded-[1.15rem] bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5',
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Photography frame — same radius and navy shadow as home problem/solution. */
export function PhotoFrame({ children, className }: ShellProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.15rem] shadow-[0_32px_64px_-28px_rgba(23,23,23,0.35)] ring-1 ring-heno-blue-900/[0.06]',
        className,
      )}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/35"
        aria-hidden
      />
    </div>
  );
}

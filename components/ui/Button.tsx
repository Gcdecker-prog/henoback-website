import Link from 'next/link';
import { cn } from '@/lib/cn';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  className?: string;
  external?: boolean;
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

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heno-orange-500 focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/nav';
import { cn } from '@/lib/cn';

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden lg:flex lg:flex-1 lg:justify-center"
      aria-label="Primary"
    >
      <ul
        className={cn(
          'inline-flex items-center gap-0.5 rounded-full p-1',
          'border border-neutral-200/60 bg-neutral-100/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]',
          'backdrop-blur-xl',
        )}
      >
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== '/' && pathname.startsWith(`${item.href}/`));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'relative block rounded-full px-3.5 py-2 text-[13px] font-medium tracking-[-0.01em] transition-all duration-200',
                  active
                    ? 'bg-white text-neutral-900 shadow-[0_1px_3px_rgba(23,23,23,0.08),0_4px_12px_-4px_rgba(23,23,23,0.1)]'
                    : 'text-neutral-600 hover:bg-white/60 hover:text-neutral-900',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/cn';

type LogoProps = {
  className?: string;
  /** Nav mark — use `large` in the site header */
  size?: 'default' | 'large';
};

export function Logo({ className, size = 'default' }: LogoProps) {
  const isLarge = size === 'large';

  return (
    <Link
      href="/"
      className={cn('inline-flex shrink-0 items-center', isLarge ? '-ml-0.5' : undefined, className)}
    >
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.logo.alt}
        width={isLarge ? 360 : 200}
        height={isLarge ? 76 : 48}
        className={cn(
          'w-auto object-contain object-left',
          /* White-backed PNG: multiply drops the white plate over any header tone */
          'mix-blend-multiply',
          isLarge ? 'h-[3.25rem] w-auto sm:h-[3.6rem] lg:h-16' : 'h-9 w-auto sm:h-10',
        )}
        priority
      />
    </Link>
  );
}

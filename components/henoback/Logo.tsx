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
        width={isLarge ? 428 : 214}
        height={isLarge ? 202 : 101}
        className={cn(
          'w-auto object-contain object-left',
          isLarge ? 'h-[2.35rem] w-auto sm:h-[2.6rem] lg:h-11' : 'h-9 w-auto sm:h-10',
        )}
        priority
      />
    </Link>
  );
}

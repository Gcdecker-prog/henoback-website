import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/cn';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('inline-flex items-center gap-2.5', className)}>
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.logo.alt}
        width={160}
        height={40}
        className="h-9 w-auto sm:h-10"
        priority
      />
    </Link>
  );
}

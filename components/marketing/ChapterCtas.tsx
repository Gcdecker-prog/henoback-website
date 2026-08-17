import Link from 'next/link';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { cn } from '@/lib/cn';

export const secondaryCtaClass =
  'inline-flex h-12 items-center justify-center rounded-full border border-heno-blue-400/50 bg-white px-6 text-sm font-medium text-heno-blue-900 transition-colors hover:border-heno-blue-500 hover:bg-heno-blue-50/60';

type ChapterCtasProps = {
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  className?: string;
};

/** Dual CTA row — orange primary + outlined navy secondary. */
export function ChapterCtas({ primary, secondary, className }: ChapterCtasProps) {
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row sm:items-center', className)}>
      <GtmOutboundButton href={primary.href} size="lg" className="whitespace-nowrap">
        {primary.label} →
      </GtmOutboundButton>
      {secondary ? (
        <Link href={secondary.href} className={cn(secondaryCtaClass, 'whitespace-nowrap')}>
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}

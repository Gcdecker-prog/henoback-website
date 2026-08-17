'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';

type DashboardSnapshotFrameProps = {
  imageSrc: string;
  imageAlt: string;
  label: string;
  caption?: string;
  className?: string;
};

/** Image frame for dashboard screenshots — minimal chrome, no OS mimicry */
export function DashboardSnapshotFrame({
  imageSrc,
  imageAlt,
  label,
  caption,
  className,
}: DashboardSnapshotFrameProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.5rem] bg-[#F3F6F9] p-4 shadow-[0_28px_70px_-30px_rgba(27,54,93,0.35)] ring-1 ring-heno-blue-900/[0.04] sm:p-5',
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.15rem] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <div className="flex items-center justify-between gap-3 border-b border-heno-blue-50 px-5 py-3.5 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {label}
          </p>
          {caption ? (
            <p className="truncate text-xs font-medium text-neutral-600">{caption}</p>
          ) : null}
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-[#f4f7fb] sm:aspect-[5/3]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-left-top"
            sizes="(max-width: 1024px) 100vw, 44vw"
            quality={92}
          />
          <div
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-neutral-900/[0.04]"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

type DashboardSnapshotPlaceholderProps = {
  label: string;
  className?: string;
};

export function DashboardSnapshotPlaceholder({ label, className }: DashboardSnapshotPlaceholderProps) {
  return (
    <div
      className={cn(
        'flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-heno-orange-300/50 bg-gradient-to-br from-white via-neutral-50/80 to-heno-orange-50/25 p-8 shadow-[0_20px_56px_-28px_rgba(23,23,23,0.1)] sm:aspect-[5/3]',
        className,
      )}
    >
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Dashboard snapshot
        </p>
        <p className="mt-3 text-lg font-semibold text-neutral-700">{label}</p>
      </div>
    </div>
  );
}

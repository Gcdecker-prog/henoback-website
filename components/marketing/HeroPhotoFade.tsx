'use client';

import Image from 'next/image';
import { media } from '@/lib/content/media';
import { cn } from '@/lib/cn';

type HeroPhotoFadeProps = {
  className?: string;
  /** Full-bleed desktop hero — soft fade into white on the left */
  seamless?: boolean;
  /** Contained card — full image, no side fade */
  framed?: boolean;
};

export function HeroPhotoFade({ className, seamless = false, framed = false }: HeroPhotoFadeProps) {
  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden',
        seamless ? 'bg-white' : 'bg-neutral-100',
        !seamless && !framed && 'rounded-2xl shadow-[0_20px_50px_-24px_rgba(23,23,23,0.12)]',
        className,
      )}
    >
      <div
        className={cn(
          'absolute inset-0',
          !seamless &&
            !framed && [
              '[mask-image:linear-gradient(to_right,transparent_0%,black_22%)]',
              '[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_22%)]',
            ],
        )}
      >
        <Image
          src={media.hero.homePortrait}
          alt={media.hero.homePortraitAlt}
          fill
          priority
          className="object-cover object-[68%_42%]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {seamless && (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#fff_0%,#fff_8%,rgba(255,255,255,0.97)_16%,rgba(255,255,255,0.82)_26%,rgba(255,255,255,0.55)_38%,rgba(255,255,255,0.22)_50%,transparent_64%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[12%] min-h-[2.5rem] bg-gradient-to-b from-white/80 via-white/20 to-transparent"
            aria-hidden
          />
        </>
      )}

      {framed && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/[0.06] via-transparent to-transparent"
          aria-hidden
        />
      )}

      {!framed && !seamless && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 to-transparent lg:hidden" />
      )}
    </div>
  );
}

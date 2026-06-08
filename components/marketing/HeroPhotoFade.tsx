'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import { media } from '@/lib/content/media';
import { cn } from '@/lib/cn';

type HeroPhotoFadeProps = {
  className?: string;
  /** Desktop right column — soft left edge only, stays in its lane */
  seamless?: boolean;
  framed?: boolean;
};

/** Narrow left feather — blends into the column gap, not over copy */
const seamlessLeftFeather: CSSProperties = {
  WebkitMaskImage:
    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 6%, rgba(0,0,0,0.85) 14%, #000 22%)',
  maskImage:
    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 6%, rgba(0,0,0,0.85) 14%, #000 22%)',
};

export function HeroPhotoFade({ className, seamless = false, framed = false }: HeroPhotoFadeProps) {
  if (seamless) {
    return (
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-l-2xl rounded-r-none',
          className,
        )}
      >
        <div className="relative h-full w-full" style={seamlessLeftFeather}>
          <Image
            src={media.hero.homePortrait}
            alt={media.hero.homePortraitAlt}
            fill
            priority
            className="object-cover object-[55%_40%]"
            sizes="(max-width: 1280px) 42vw, 50vw"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden bg-neutral-100',
        !framed && 'rounded-2xl shadow-[0_20px_50px_-24px_rgba(23,23,23,0.12)]',
        className,
      )}
    >
      <div
        className={cn(
          'relative h-full w-full',
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

      {framed && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/[0.06] via-transparent to-transparent"
          aria-hidden
        />
      )}

      {!framed && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 to-transparent lg:hidden" />
      )}
    </div>
  );
}

'use client';

import Image from 'next/image';
import { media } from '@/lib/content/media';
import { cn } from '@/lib/cn';

type HeroPhotoFadeProps = {
  className?: string;
  /** Full-bleed desktop hero — no border, wide left mask */
  seamless?: boolean;
};

export function HeroPhotoFade({ className, seamless = false }: HeroPhotoFadeProps) {
  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden bg-white',
        !seamless && 'rounded-2xl shadow-[0_20px_50px_-24px_rgba(23,23,23,0.12)]',
        className,
      )}
    >
      <div
        className={cn(
          'absolute inset-0',
          seamless
            ? [
                '[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_28%,black_48%)]',
                '[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_28%,black_48%)]',
              ]
            : [
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
          className="object-cover object-[center_35%]"
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
      </div>

      {/* Top blend into page background */}
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-white via-white/90 to-transparent',
          seamless ? 'h-[32%] min-h-[6rem]' : 'h-[28%] min-h-[5rem]',
        )}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 to-transparent lg:hidden" />
    </div>
  );
}

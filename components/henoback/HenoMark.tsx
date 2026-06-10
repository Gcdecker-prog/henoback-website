import Image from 'next/image';
import { media } from '@/lib/content/media';
import { cn } from '@/lib/cn';

type HenoMarkProps = {
  className?: string;
  /** Render size in CSS pixels */
  size?: number;
};

/**
 * Heno ring mark — transparent PNG, sized for retina clarity.
 * Use sparingly (e.g. founder accent); full wordmark stays in the header.
 */
export function HenoMark({ className, size = 16 }: HenoMarkProps) {
  const asset = size <= 32 ? media.brand.markSm : media.brand.markApple;
  const assetPx = size <= 32 ? 48 : 180;

  return (
    <Image
      src={asset}
      alt=""
      width={assetPx}
      height={assetPx}
      aria-hidden
      unoptimized
      className={cn('shrink-0 select-none object-contain', className)}
      style={{ width: size, height: size }}
    />
  );
}

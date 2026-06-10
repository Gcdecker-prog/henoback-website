import Image from 'next/image';
import { media } from '@/lib/content/media';
import { cn } from '@/lib/cn';

type HenoMarkProps = {
  className?: string;
  /** Render size in CSS pixels */
  size?: number;
};

/**
 * Heno ring mark — use where the full wordmark is too heavy:
 * list bullets, section accents, favicon-scale UI.
 */
export function HenoMark({ className, size = 16 }: HenoMarkProps) {
  return (
    <Image
      src={media.brand.mark}
      alt=""
      width={size}
      height={size}
      aria-hidden
      className={cn('shrink-0 select-none', className)}
      style={{ width: size, height: size }}
    />
  );
}

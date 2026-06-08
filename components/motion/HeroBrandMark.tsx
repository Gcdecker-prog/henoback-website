'use client';

import { motion } from 'framer-motion';
import { heroAt, heroDelay, heroGlassOrb } from '@/lib/motion/hero-timeline';
import { useHeroEntrance } from '@/lib/motion/use-hero-entrance';
import { brandHex } from '@/lib/ui/brand-colors';
import { cn } from '@/lib/cn';

/** Orange ring with light blue center */
function OrangeCircle() {
  return (
    <span
      className="relative block size-full rounded-full bg-heno-orange-500 shadow-[0_6px_18px_-4px_rgba(242,120,48,0.45)]"
      style={{ backgroundColor: brandHex.orange }}
      aria-hidden
    >
      <span
        className="absolute inset-[24%] rounded-full bg-heno-blue-400"
        style={{ backgroundColor: brandHex.logoHeno }}
        aria-hidden
      />
    </span>
  );
}

export function HeroBrandMark({ className }: { className?: string }) {
  const { animate, initial, ready, reduce } = useHeroEntrance();
  const sizeClass =
    'size-[4.25rem] sm:size-[5rem] lg:size-[5.75rem] xl:size-[6.25rem]';

  if (reduce) {
    return (
      <span className={cn('relative block shrink-0', sizeClass, className)} aria-hidden>
        <OrangeCircle />
      </span>
    );
  }

  return (
    <motion.span
      initial={initial}
      animate={animate}
      variants={heroGlassOrb}
      transition={heroDelay(heroAt.orb, 0.72)}
      className={cn(
        'relative block shrink-0 will-change-[transform,filter]',
        sizeClass,
        !ready && 'opacity-0',
        className,
      )}
      aria-hidden
    >
      <OrangeCircle />
    </motion.span>
  );
}

import { brandHex } from '@/lib/ui/brand-colors';
import { cn } from '@/lib/cn';

type BrandHeroAtmosphereProps = {
  className?: string;
};

/**
 * Soft dual-brand wash below the header — 2027 take on the live navy/orange diagonal.
 * Full blocks read dated; a masked mesh + blurs signal heritage without shouting.
 */
export function BrandHeroAtmosphere({ className }: BrandHeroAtmosphereProps) {
  const { navy, logoBlue, orange } = brandHex;

  return (
    <div className={cn('pointer-events-none absolute inset-x-0 top-0 overflow-hidden', className)} aria-hidden>
      <div
        className="absolute inset-x-0 top-0 h-36 sm:h-44"
        style={{
          background: `linear-gradient(128deg, ${navy}f0 0%, ${navy}8c 36%, ${logoBlue}1f 52%, ${orange}38 70%, ${orange}14 100%)`,
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute -left-28 top-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${orange}2e, transparent 70%)` }}
      />
      <div
        className="absolute -right-20 top-6 h-72 w-72 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${navy}1f, transparent 70%)` }}
      />
    </div>
  );
}

/** Thin spectrum line — navy → logo blue → orange (live heritage, modern weight) */
export function BrandSpectrumLine({ className }: { className?: string }) {
  return (
    <div
      className={cn('h-[3px] w-full', className)}
      style={{
        background: `linear-gradient(102deg, ${brandHex.navy} 0% 44%, ${brandHex.logoBlue} 44% 56%, ${brandHex.orange} 56% 100%)`,
      }}
      aria-hidden
    />
  );
}

import { brandHex } from '@/lib/ui/brand-colors';
import { cn } from '@/lib/cn';

/** 2027 glass system — frosted surfaces on white, ambient depth, no heavy chrome */

export const glassPanel =
  'rounded-3xl border border-white/90 bg-white/75 shadow-[0_24px_80px_-24px_rgba(23,23,23,0.1),inset_0_1px_0_0_rgba(255,255,255,1)] backdrop-blur-2xl backdrop-saturate-150';

export const glassPanelElevated =
  'rounded-3xl border border-white/95 bg-white/85 shadow-[0_32px_100px_-28px_rgba(242,120,48,0.12),0_16px_48px_-16px_rgba(23,23,23,0.08),inset_0_1px_0_0_rgba(255,255,255,1)] backdrop-blur-3xl backdrop-saturate-150';

export const glassPanelSubtle =
  'rounded-2xl border border-neutral-200/60 bg-white/55 shadow-[0_12px_40px_-16px_rgba(23,23,23,0.06)] backdrop-blur-xl backdrop-saturate-150';

/** Partner / logo tiles — frosted, see-through */
export const glassLogoTile =
  'rounded-2xl border border-white/75 bg-white/40 shadow-[0_12px_40px_-16px_rgba(23,23,23,0.08),inset_0_1px_0_0_rgba(255,255,255,0.85)] backdrop-blur-2xl backdrop-saturate-150';

export const glassLogoTileHover =
  'hover:border-white/95 hover:bg-white/65 hover:shadow-[0_24px_56px_-18px_rgba(242,120,48,0.14),0_12px_32px_-14px_rgba(23,23,23,0.1),inset_0_1px_0_0_rgba(255,255,255,1)] hover:ring-1 hover:ring-heno-orange-500/15';

export const glassHeroOrb =
  'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(242,120,48,0.35),rgba(242,120,48,0.08)_45%,transparent_70%)] blur-3xl';

export const glassStat =
  'rounded-2xl border border-heno-orange-500/12 bg-gradient-to-br from-white/92 via-white/80 to-heno-orange-50/35 shadow-[0_16px_48px_-20px_rgba(23,23,23,0.08),inset_0_1px_0_0_rgba(255,255,255,1)] backdrop-blur-xl backdrop-saturate-150';

export function glass(className?: string) {
  return cn(glassPanel, className);
}

export function ambientPageGlow() {
  return cn(
    'pointer-events-none fixed inset-0 -z-10 overflow-hidden',
    `before:absolute before:-left-1/4 before:top-0 before:h-[480px] before:w-[480px] before:rounded-full before:bg-[radial-gradient(circle,${brandHex.orange}24,transparent_70%)] before:blur-3xl`,
    `after:absolute after:-right-1/4 after:top-1/3 after:h-[400px] after:w-[400px] after:rounded-full after:bg-[radial-gradient(circle,${brandHex.navy}0f,transparent_70%)] after:blur-3xl`,
  );
}

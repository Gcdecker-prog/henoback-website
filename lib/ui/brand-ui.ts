/**
 * Heno marketing UI tokens — single source for accent colors on public pages.
 * Home page patterns: orange bullets/eyebrows, navy body emphasis, blue outcome bars.
 */

export const brandUi = {
  /** List markers — insights, industries, problem beats */
  bullet: 'bg-heno-orange-500',
  bulletSoft: 'bg-heno-orange-500/90',
  /** “What we do” / emphasis list markers */
  bulletEmphasis: 'bg-heno-blue-400',
  /** Section labels: Problem, Outcome, package titles */
  eyebrow: 'text-heno-orange-600',
  sectionLabel: 'text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500',
  insightLabel: 'text-[11px] font-semibold uppercase tracking-[0.22em] text-heno-blue-900/75',
  /** Pillar / card titles on editorial bands */
  pillarTitle: 'text-heno-orange-500',
  /** Outcome pull-quote bar (home why section, services detail) */
  outcomeBar: 'border-l-2 border-heno-blue-400/80',
  outcomeText: 'text-heno-blue-900',
  /** Links and CTAs in copy */
  link: 'text-heno-blue-900 transition-colors hover:text-heno-blue-700',
  linkIcon: 'text-heno-blue-400',
  /** Dashboard / data variance */
  positive: 'text-heno-blue-700',
  negative: 'text-heno-orange-700',
  /** Alternating section wash */
  sectionTint: 'bg-neutral-50/40',
  sectionTintAlt: 'bg-neutral-50/60',
} as const;

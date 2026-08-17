import { cn } from '@/lib/cn';

type WaveFieldProps = {
  className?: string;
  /** Light pages use sky lines; navy bands invert the same drawing. */
  tone?: 'light' | 'navy';
};

/**
 * Architectural line-wash used on the Intacct home hero.
 * Shared so every route opens in the same spatial key.
 */
export function WaveField({ className, tone = 'light' }: WaveFieldProps) {
  return (
    <svg
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full overflow-hidden',
        tone === 'navy' ? 'text-white/[0.08]' : 'text-heno-blue-100',
        className,
      )}
      viewBox="0 0 1440 760"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M-40 140C220 40 420 210 700 160C980 110 1180 40 1480 120"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.7"
      />
      <path
        d="M-40 280C260 180 480 360 760 290C1040 220 1240 150 1480 240"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.55"
      />
      <path
        d="M-40 440C240 360 520 520 820 450C1120 380 1300 320 1480 400"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.45"
      />
    </svg>
  );
}

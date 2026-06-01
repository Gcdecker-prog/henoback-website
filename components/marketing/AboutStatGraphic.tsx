import { cn } from '@/lib/cn';

export type AboutStatIconType = 'customers' | 'segments' | 'partners';

type AboutStatGraphicProps = {
  type: AboutStatIconType;
  className?: string;
};

const iconClass = (className?: string) =>
  cn('size-8 text-heno-orange-500 sm:size-9', className);

/** Orange line-art stats icons — About page (live site parity) */
export function AboutStatGraphic({ type, className }: AboutStatGraphicProps) {
  const stroke = 'currentColor';

  if (type === 'customers') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={iconClass(className)} aria-hidden>
        <circle cx="24" cy="20" r="8" stroke={stroke} strokeWidth="2" />
        <path
          d="M10 48c0-8 6-14 14-14s14 6 14 14"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M44 28h14v22H44V28z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M48 36h6M48 42h6"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === 'segments') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={iconClass(className)} aria-hidden>
        <rect x="11" y="13" width="19" height="19" rx="4" stroke={stroke} strokeWidth="2" />
        <rect x="34" y="13" width="19" height="19" rx="4" stroke={stroke} strokeWidth="2" />
        <rect x="11" y="36" width="19" height="19" rx="4" stroke={stroke} strokeWidth="2" />
        <rect
          x="34"
          y="36"
          width="19"
          height="19"
          rx="4"
          stroke={stroke}
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <path
          d="M43 45.5h11M48.5 40v11"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /** Shield + star — strategic & technology partners */
  return (
    <svg viewBox="0 0 64 64" fill="none" className={iconClass(className)} aria-hidden>
      <path
        d="M32 10l14 5v14c0 10-6 18-14 21-8-3-14-11-14-21V15l14-5z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 22v8M28 26h8"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="26" r="2.5" fill="currentColor" fillOpacity="0.35" />
    </svg>
  );
}

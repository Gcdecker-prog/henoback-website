import { cn } from '@/lib/cn';

type ChapterHeadlineProps = {
  id?: string;
  /** Sky line — page label, or the first half of a split claim */
  kicker?: string;
  /** Navy semibold — the claim */
  headline: string;
  /**
   * `label` — quiet page name, then a large claim (How it works / Case studies).
   * `claim` — both lines are the headline, home-style (About).
   */
  kickerVariant?: 'label' | 'claim';
  as?: 'h1' | 'h2';
  className?: string;
};

export const chapterClaimScale =
  'max-w-4xl text-[1.85rem] leading-[1.18] tracking-[-0.022em] text-pretty sm:text-[2.4rem] sm:leading-[1.14] lg:max-w-5xl lg:text-[2.85rem] lg:leading-[1.12]';

export const chapterLabelClass =
  'block text-[0.9375rem] font-medium leading-snug tracking-[-0.01em] text-heno-blue-500 sm:text-[1.0625rem]';

export const chapterBodyClass =
  'max-w-xl text-[0.9375rem] leading-[1.65] text-pretty text-neutral-500 sm:text-[1rem] sm:leading-[1.7]';

/** Two-register headline — claim owns the scale; labels stay quiet. */
export function ChapterHeadline({
  id,
  kicker,
  headline,
  kickerVariant = 'label',
  as: Tag = 'h1',
  className,
}: ChapterHeadlineProps) {
  if (kickerVariant === 'claim') {
    return (
      <Tag id={id} className={cn(chapterClaimScale, className)}>
        {kicker ? (
          <span className="block whitespace-pre-line font-medium text-heno-blue-500">{kicker}</span>
        ) : null}
        <span
          className={cn(
            'block text-balance font-bold text-heno-blue-900',
            kicker && 'mt-2.5 sm:mt-3',
          )}
        >
          {headline}
        </span>
      </Tag>
    );
  }

  return (
    <Tag id={id} className={className}>
      {kicker ? <span className={chapterLabelClass}>{kicker}</span> : null}
      <span
        className={cn(
          chapterClaimScale,
          'block text-balance font-bold text-heno-blue-900',
          kicker && 'mt-3 sm:mt-3.5',
        )}
      >
        {headline}
      </span>
    </Tag>
  );
}

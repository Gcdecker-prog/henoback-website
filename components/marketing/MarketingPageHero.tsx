'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ChapterCtas } from '@/components/marketing/ChapterCtas';
import { ChapterHeadline, chapterBodyClass } from '@/components/marketing/ChapterHeadline';
import { WaveField } from '@/components/marketing/WaveField';
import { motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

export type MarketingPageHeroProps = {
  /** Sky register — the given */
  kicker?: string;
  /** Navy register — the claim (H1) */
  headline: string;
  summary?: string;
  outcomes?: readonly string[];
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  visual?: React.ReactNode;
  className?: string;
};

export function MarketingPageHero({
  kicker,
  headline,
  summary,
  outcomes,
  primaryCta,
  secondaryCta,
  visual,
  className,
}: MarketingPageHeroProps) {
  const reduce = useReducedMotion();
  const hasCopyColumn = Boolean(summary || outcomes?.length || primaryCta);

  return (
    <section
      className={cn('relative isolate bg-white pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14', className)}
    >
      <WaveField />

      <Container className="relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: motionEase }}
        >
          <ChapterHeadline kicker={kicker} headline={headline} />
        </motion.div>

        {hasCopyColumn || visual ? (
          <div
            className={cn(
              'mt-10 lg:mt-12',
              visual &&
                'grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-14',
            )}
          >
            {hasCopyColumn ? (
              <motion.div
                className={cn(!visual && 'max-w-xl')}
                initial={reduce ? false : 'hidden'}
                animate="visible"
                variants={staggerContainer}
              >
                {summary ? (
                  <motion.p
                    className={chapterBodyClass}
                    variants={staggerItem}
                  >
                    {summary}
                  </motion.p>
                ) : null}
                {outcomes?.length ? (
                  <motion.ul className="mt-7 space-y-3.5" variants={staggerItem}>
                    {outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-neutral-700 sm:text-[0.95rem]"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-heno-orange-500" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
                {primaryCta ? (
                  <motion.div variants={staggerItem}>
                    <ChapterCtas
                      primary={primaryCta}
                      secondary={secondaryCta}
                      className={summary || outcomes?.length ? 'mt-9' : 'mt-8'}
                    />
                  </motion.div>
                ) : null}
              </motion.div>
            ) : null}

            {visual ? (
              <motion.div
                className="w-full min-w-0"
                initial={reduce ? false : { opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: motionEase, delay: 0.12 }}
              >
                {visual}
              </motion.div>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

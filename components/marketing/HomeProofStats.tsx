'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { glassPanelSubtle, glassStat } from '@/lib/ui/glass';
import { scrollSlideItem, scrollSlideStagger } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type HomeProofStat = { readonly value: string; readonly label?: string };

function SideStatCard({
  stat,
  variants,
}: {
  stat: HomeProofStat & { label: string };
  variants: typeof scrollSlideItem;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={variants}
      whileHover={reduce ? undefined : { y: -2, transition: { duration: 0.22 } }}
      className={cn(
        glassPanelSubtle,
        'flex min-h-[7.25rem] w-full flex-col items-center justify-center border-white/85 bg-white/92 px-6 py-7 text-center transition-[border-color,box-shadow] duration-500 sm:min-h-[7.75rem] sm:px-7 sm:py-8',
        'hover:border-heno-orange-500/15 hover:shadow-[0_20px_52px_-18px_rgba(23,23,23,0.1),inset_0_1px_0_0_rgba(255,255,255,1)]',
      )}
    >
      <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-[1.625rem]">
        {stat.value}
      </p>
      <p className="mt-2 max-w-[15rem] text-pretty text-sm font-medium leading-snug text-neutral-600">
        {stat.label}
      </p>
    </motion.div>
  );
}

function FeaturedStatBadge({
  stat,
  variants,
}: {
  stat: HomeProofStat;
  variants: typeof scrollSlideItem;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={variants}
      whileHover={reduce ? undefined : { y: -2, transition: { duration: 0.22 } }}
      className={cn(
        glassStat,
        'relative isolate mx-auto flex w-fit flex-col items-center justify-center overflow-hidden rounded-full border-heno-orange-500/25 px-8 py-3.5 text-center shadow-[0_16px_40px_-14px_rgba(242,120,48,0.3),inset_0_1px_0_0_rgba(255,255,255,1)] sm:px-10 sm:py-4',
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,120,48,0.14),transparent_60%)]"
        aria-hidden
      />
      <p className="relative text-base font-semibold tracking-tight text-heno-orange-600 sm:text-lg">
        {stat.value}
      </p>
    </motion.div>
  );
}

export function HomeProofStats({ stats }: { stats: readonly HomeProofStat[] }) {
  const reduce = useReducedMotion();
  const sideStats = stats.filter(
    (stat): stat is HomeProofStat & { label: string } => Boolean(stat.label),
  );
  const featured = stats.find((stat) => !stat.label);

  if (!featured || sideStats.length !== 2) {
    return (
      <motion.ul
        className="grid gap-4 sm:grid-cols-3 sm:items-stretch"
        initial={reduce ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollSlideStagger}
      >
        {stats.map((stat) => (
          <motion.li key={stat.value} variants={scrollSlideItem}>
            <p>{stat.value}</p>
          </motion.li>
        ))}
      </motion.ul>
    );
  }

  const [left, right] = sideStats;

  return (
    <motion.div
      className="flex flex-col items-center gap-5 sm:gap-6"
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={scrollSlideStagger}
    >
      <FeaturedStatBadge stat={featured} variants={scrollSlideItem} />

      <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2">
        <SideStatCard stat={left} variants={scrollSlideItem} />
        <SideStatCard stat={right} variants={scrollSlideItem} />
      </div>
    </motion.div>
  );
}

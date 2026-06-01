'use client';

import { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';
import { AboutStatGraphic, type AboutStatIconType } from '@/components/marketing/AboutStatGraphic';
import { glassStat } from '@/lib/ui/glass';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type AboutStatCardProps = {
  value: string;
  label: string;
  icon: AboutStatIconType;
  index?: number;
};

function AnimatedStatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });
  const reduce = useReducedMotion();
  const match = value.match(/^(\d+)(\+?)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match?.[2] ?? '';
  const count = useMotionValue(0);
  const display = useTransform(count, (n) => `${Math.round(n)}${suffix}`);

  useEffect(() => {
    if (!inView || reduce || target === null) return;
    const controls = animate(count, target, {
      duration: 1.15,
      ease: motionEase,
    });
    return () => controls.stop();
  }, [inView, reduce, target, count]);

  if (!target || reduce) {
    return (
      <span ref={ref} className="tabular-nums">
        {value}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
    </motion.span>
  );
}

export function AboutStatCard({ value, label, icon, index = 0 }: AboutStatCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className={cn(
        glassStat,
        'group relative flex h-full min-h-[6.5rem] items-center gap-3.5 overflow-hidden px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-5',
        'transition-[box-shadow,border-color] duration-500',
        'hover:border-heno-orange-500/25 hover:shadow-[0_24px_56px_-18px_rgba(242,120,48,0.16),inset_0_1px_0_0_rgba(255,255,255,1)]',
      )}
      initial={reduce ? false : { opacity: 0, y: 20, scale: 0.98 }}
      animate={
        inView || reduce
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.98 }
      }
      transition={{
        duration: 0.55,
        delay: reduce ? 0 : index * 0.1,
        ease: motionEase,
      }}
      whileHover={reduce ? undefined : { y: -3, transition: { duration: 0.25, ease: motionEase } }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(242,120,48,0.14),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <motion.div
        className="relative flex size-12 shrink-0 items-center justify-center rounded-xl border border-heno-orange-500/10 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,1)] sm:size-14"
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.04, 1],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                duration: 3.5,
                delay: index * 0.4,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }
        }
      >
        <AboutStatGraphic type={icon} />
      </motion.div>

      <div className="relative min-w-0 flex-1">
        <p className="text-2xl font-semibold leading-none tracking-tight text-neutral-900 sm:text-[1.75rem]">
          <AnimatedStatValue value={value} />
        </p>
        <p className="mt-1.5 text-pretty text-[13px] font-medium leading-snug text-heno-orange-600 sm:text-sm">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

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
import { motionEase } from '@/lib/motion/variants';

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
      className="flex h-full items-start gap-4 px-6 py-6 sm:px-7 sm:py-7"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{
        duration: 0.5,
        delay: reduce ? 0 : index * 0.08,
        ease: motionEase,
      }}
    >
      <div
        className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-heno-blue-50 sm:size-12"
        aria-hidden
      >
        <AboutStatGraphic type={icon} className="size-7" />
      </div>
      <div className="min-w-0">
        <p className="text-[1.75rem] font-semibold leading-none tracking-tight text-heno-blue-900 sm:text-[2rem]">
          <AnimatedStatValue value={value} />
        </p>
        <p className="mt-2 text-[0.8125rem] font-medium leading-snug text-neutral-500">{label}</p>
      </div>
    </motion.div>
  );
}

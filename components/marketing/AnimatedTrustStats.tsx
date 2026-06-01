'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { staggerContainer, staggerItem } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type Stat = { value: string; label: string };

export function AnimatedTrustStats({ stats }: { stats: readonly Stat[] }) {
  const reduce = useReducedMotion();

  return (
    <motion.ul
      className="grid gap-4 sm:grid-cols-3"
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      {stats.map((signal) => (
        <motion.li
          key={signal.label}
          variants={staggerItem}
          whileHover={reduce ? undefined : { y: -3, transition: { duration: 0.2 } }}
          className={cn(
            glassPanelSubtle,
            'border-white/70 bg-white/90 px-6 py-6 text-center shadow-[0_16px_48px_-20px_rgba(23,23,23,0.1)] backdrop-blur-xl',
          )}
        >
          <p className="text-2xl font-semibold text-neutral-900">{signal.value}</p>
          <p className="mt-1 text-sm text-neutral-600">{signal.label}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}

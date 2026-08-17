'use client';

import { motion } from 'framer-motion';
import { homeTrustBand } from '@/lib/content/client-logos';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type TrustScaleStripProps = {
  reduce?: boolean;
  className?: string;
};

/** Centered scale proof — stat only, no logo strip */
export function TrustScaleStrip({ reduce = false, className }: TrustScaleStripProps) {
  return (
    <motion.div
      className={cn('bg-heno-blue-900 px-6 py-8 sm:px-10 sm:py-9', className)}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.2 }}
      transition={{ duration: 0.55, ease: motionEase }}
    >
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: motionEase, delay: 0.04 }}
        >
          <p className="text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">
            {homeTrustBand.stat}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/70">
            {homeTrustBand.label}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

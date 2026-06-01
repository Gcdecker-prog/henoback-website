'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

/** Animated ambient mesh — glass-era depth without heavy WebGL */
export function GlassMesh({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      <div className="glass-mesh-gradient absolute inset-0 opacity-90" />
      {!reduce ? (
        <>
          <motion.div
            className="absolute -right-[10%] top-[5%] h-[min(55vw,520px)] w-[min(55vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(242,120,48,0.22),transparent_65%)] blur-3xl"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 25, 0],
              scale: [1, 1.08, 0.95, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -left-[15%] bottom-[10%] h-[min(45vw,420px)] w-[min(45vw,420px)] rounded-full bg-[radial-gradient(circle,rgba(15,45,85,0.12),transparent_68%)] blur-3xl"
            animate={{
              x: [0, -25, 18, 0],
              y: [0, 30, -20, 0],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute left-[35%] top-[40%] h-48 w-48 rounded-full bg-white/40 blur-2xl"
            animate={{ opacity: [0.25, 0.55, 0.3, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      ) : (
        <>
          <div className="absolute -right-[10%] top-[5%] h-96 w-96 rounded-full bg-heno-orange-500/10 blur-3xl" />
          <div className="absolute -left-[10%] bottom-[10%] h-80 w-80 rounded-full bg-[#0F2D55]/5 blur-3xl" />
        </>
      )}
    </div>
  );
}

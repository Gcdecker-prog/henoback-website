'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { usePageFlow } from '@/components/marketing/PageFlowContext';

/**
 * Scroll-linked ambient orbs — no spectrum bars under the header.
 */
export function PageFlowAtmosphere() {
  const { theme, flow } = usePageFlow();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.35 });

  const path = flow.orbPath;

  const orbATop = useTransform(
    smooth,
    [0, 0.45, 1],
    path === 'deepDrift' ? ['0%', '22%', '40%'] : path === 'actionPull' ? ['0%', '12%', '28%'] : ['0%', '16%', '34%'],
  );
  const orbALeft = useTransform(
    smooth,
    [0, 1],
    path === 'processSlide' ? ['-28%', '-8%'] : path === 'proofCross' ? ['-30%', '-18%'] : ['-26%', '-14%'],
  );
  const orbBTop = useTransform(
    smooth,
    [0, 0.5, 1],
    path === 'warmRise' ? ['28%', '42%', '55%'] : path === 'actionPull' ? ['20%', '38%', '48%'] : ['30%', '45%', '58%'],
  );
  const orbBRight = useTransform(
    smooth,
    [0, 1],
    path === 'proofCross' ? ['-18%', '-6%'] : path === 'processSlide' ? ['-22%', '-10%'] : ['-20%', '-12%'],
  );
  const orbAOpacity = useTransform(smooth, [0, 0.35, 0.7, 1], [0.95, 0.55, 0.72, 0.4]);
  const orbBOpacity = useTransform(smooth, [0, 0.4, 0.75, 1], [0.7, 0.85, 0.5, 0.35]);
  const veilOpacity = useTransform(smooth, [0.15, 0.45, 0.8], [0, 0.55, 0.2]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {reduce ? (
        <>
          <div
            className="absolute -left-1/4 top-0 h-[480px] w-[480px] rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.glowAccent}, transparent 70%)` }}
          />
          <div
            className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.glowWash}, transparent 70%)` }}
          />
        </>
      ) : (
        <>
          <motion.div
            className="absolute h-[520px] w-[520px] rounded-full blur-3xl"
            style={{
              top: orbATop,
              left: orbALeft,
              opacity: orbAOpacity,
              background: `radial-gradient(circle, ${theme.glowAccent}, transparent 72%)`,
            }}
          />
          <motion.div
            className="absolute h-[440px] w-[440px] rounded-full blur-3xl"
            style={{
              top: orbBTop,
              right: orbBRight,
              opacity: orbBOpacity,
              background: `radial-gradient(circle, ${theme.glowWash}, transparent 72%)`,
            }}
          />
          <motion.div
            className="absolute inset-x-0 top-1/3 h-[50vh]"
            style={{
              opacity: veilOpacity,
              background: `linear-gradient(180deg, transparent, ${theme.glowAccent}22, transparent)`,
            }}
          />
        </>
      )}
    </div>
  );
}

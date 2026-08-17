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
 * Quiet sky wash only — no orange ember, no veil across navy closes.
 * Heroes carry their own WaveField; this just keeps the page from going flat.
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
    path === 'deepDrift' ? ['0%', '18%', '28%'] : path === 'actionPull' ? ['0%', '10%', '20%'] : ['0%', '12%', '24%'],
  );
  const orbALeft = useTransform(
    smooth,
    [0, 1],
    path === 'processSlide' ? ['-28%', '-12%'] : ['-26%', '-16%'],
  );
  const orbBTop = useTransform(
    smooth,
    [0, 0.5, 1],
    path === 'warmRise' ? ['18%', '28%', '36%'] : ['22%', '32%', '40%'],
  );
  const orbBRight = useTransform(
    smooth,
    [0, 1],
    path === 'proofCross' ? ['-18%', '-10%'] : ['-20%', '-12%'],
  );
  const orbAOpacity = useTransform(smooth, [0, 0.4, 1], [0.45, 0.28, 0.12]);
  const orbBOpacity = useTransform(smooth, [0, 0.5, 1], [0.32, 0.22, 0.08]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {reduce ? (
        <>
          <div
            className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.glowWash}, transparent 72%)` }}
          />
          <div
            className="absolute -right-1/4 top-[12%] h-[360px] w-[360px] rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.glowAccent}, transparent 72%)` }}
          />
        </>
      ) : (
        <>
          <motion.div
            className="absolute h-[460px] w-[460px] rounded-full blur-3xl"
            style={{
              top: orbATop,
              left: orbALeft,
              opacity: orbAOpacity,
              background: `radial-gradient(circle, ${theme.glowWash}, transparent 74%)`,
            }}
          />
          <motion.div
            className="absolute h-[380px] w-[380px] rounded-full blur-3xl"
            style={{
              top: orbBTop,
              right: orbBRight,
              opacity: orbBOpacity,
              background: `radial-gradient(circle, ${theme.glowAccent}, transparent 74%)`,
            }}
          />
        </>
      )}
    </div>
  );
}

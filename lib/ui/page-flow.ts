import { henoback } from '@/lib/brand-tokens';
import type { PageThemeId } from '@/lib/ui/page-themes';

/**
 * Refined per-page scroll surfaces — each route has its own stage rhythm
 * so scrolling feels like a new chapter, not a palette swap.
 */
export type FlowSurfaceId =
  | 'clear'
  | 'warmMist'
  | 'coolMist'
  | 'navyMist'
  | 'processTint'
  | 'processTintAlt'
  | 'proofMist'
  | 'actionMist'
  | 'softGray';

export type PageFlowConfig = {
  /** Ordered section surfaces — stage index wraps */
  stages: readonly FlowSurfaceId[];
  /** Spectrum colors for the sticky scroll progress trail */
  spectrum: readonly [string, string, string];
  /** Ambient orb travel personality */
  orbPath: 'warmRise' | 'deepDrift' | 'processSlide' | 'proofCross' | 'actionPull';
};

export const flowSurfaces: Record<FlowSurfaceId, string> = {
  clear: 'bg-white',
  warmMist: 'bg-white',
  coolMist:
    'bg-[linear-gradient(180deg,rgba(74,158,196,0.06)_0%,rgba(255,255,255,1)_48%,rgba(255,255,255,1)_100%)]',
  navyMist:
    'bg-[linear-gradient(165deg,rgba(27,54,93,0.05)_0%,rgba(255,255,255,1)_42%,rgba(255,255,255,1)_100%)]',
  processTint: 'bg-heno-blue-50/70',
  processTintAlt: 'bg-white',
  proofMist:
    'bg-[linear-gradient(180deg,rgba(27,74,110,0.04)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,1)_100%)]',
  actionMist: 'bg-white',
  softGray: 'bg-white',
};

export const pageFlows: Record<PageThemeId, PageFlowConfig> = {
  /** Warm cascade — orange → cool resting → ember close */
  home: {
    stages: ['clear', 'warmMist', 'coolMist', 'clear', 'warmMist', 'clear'],
    spectrum: [henoback.blue[900], henoback.blue[400], henoback.orange[500]],
    orbPath: 'warmRise',
  },
  /** Editorial depth — navy mist, slower air */
  about: {
    stages: ['clear', 'navyMist', 'softGray'],
    spectrum: [henoback.blue[900], henoback.blue[700], henoback.blue[400]],
    orbPath: 'deepDrift',
  },
  /** Process cadence — white ↔ light brand blue, clearly readable bands */
  services: {
    stages: ['clear', 'processTint', 'processTintAlt', 'processTint', 'processTintAlt', 'processTint', 'processTintAlt'],
    spectrum: [henoback.blue[900], henoback.blue[500], henoback.blue[400]],
    orbPath: 'processSlide',
  },
  /** Proof gallery — navy ↔ soft orange bridge */
  caseStudies: {
    stages: ['clear', 'proofMist', 'softGray'],
    spectrum: [henoback.blue[700], henoback.blue[400], henoback.orange[500]],
    orbPath: 'proofCross',
  },
  /** Action heat — builds warmer toward conversion */
  getStarted: {
    stages: ['clear', 'actionMist', 'warmMist'],
    spectrum: [henoback.orange[500], henoback.orange[600], henoback.orange[700]],
    orbPath: 'actionPull',
  },
};

export function flowSurfaceFor(theme: PageThemeId, stage: number): string {
  const { stages } = pageFlows[theme];
  return flowSurfaces[stages[stage % stages.length]];
}

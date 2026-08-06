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
  warmMist:
    'bg-[linear-gradient(180deg,rgba(242,120,48,0.055)_0%,rgba(255,255,255,1)_42%,rgba(255,255,255,1)_100%)]',
  coolMist:
    'bg-[linear-gradient(180deg,rgba(74,158,196,0.08)_0%,rgba(255,255,255,1)_48%,rgba(250,250,250,0.5)_100%)]',
  navyMist:
    'bg-[linear-gradient(165deg,rgba(27,54,93,0.06)_0%,rgba(244,247,250,0.9)_38%,rgba(255,255,255,1)_100%)]',
  /** Solid light brand wash — readable section separation */
  processTint: 'bg-heno-blue-50',
  processTintAlt: 'bg-white',
  proofMist:
    'bg-[linear-gradient(135deg,rgba(27,74,110,0.05)_0%,rgba(255,255,255,1)_45%,rgba(242,120,48,0.04)_100%)]',
  actionMist:
    'bg-[linear-gradient(180deg,rgba(224,101,32,0.07)_0%,rgba(255,255,255,1)_40%,rgba(255,244,237,0.45)_100%)]',
  softGray: 'bg-neutral-50',
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

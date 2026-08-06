'use client';

import { PageFlowProvider } from '@/components/marketing/PageFlowContext';
import { PageFlowAtmosphere } from '@/components/marketing/PageFlowAtmosphere';
import type { PageThemeId } from '@/lib/ui/page-themes';

type MarketingPageShellProps = {
  children: React.ReactNode;
  /** Soft ambient identity + scroll rhythm for this route */
  theme?: PageThemeId;
};

/**
 * Per-page scroll shell — spectrum progress, drifting ambient, stage context.
 * Pair with FlowBand / MarketingPageHero for a refined route identity.
 */
export function MarketingPageShell({ children, theme = 'home' }: MarketingPageShellProps) {
  return (
    <PageFlowProvider themeId={theme}>
      <div className="relative" data-page-flow={theme}>
        <PageFlowAtmosphere />
        {children}
      </div>
    </PageFlowProvider>
  );
}

'use client';

import { createContext, useContext } from 'react';
import { pageThemes, type PageTheme, type PageThemeId } from '@/lib/ui/page-themes';
import { pageFlows, type PageFlowConfig } from '@/lib/ui/page-flow';

type PageFlowContextValue = {
  themeId: PageThemeId;
  theme: PageTheme;
  flow: PageFlowConfig;
};

const PageFlowContext = createContext<PageFlowContextValue | null>(null);

export function PageFlowProvider({
  themeId,
  children,
}: {
  themeId: PageThemeId;
  children: React.ReactNode;
}) {
  const value: PageFlowContextValue = {
    themeId,
    theme: pageThemes[themeId],
    flow: pageFlows[themeId],
  };

  return <PageFlowContext.Provider value={value}>{children}</PageFlowContext.Provider>;
}

export function usePageFlow(): PageFlowContextValue {
  const ctx = useContext(PageFlowContext);
  if (!ctx) {
    return {
      themeId: 'home',
      theme: pageThemes.home,
      flow: pageFlows.home,
    };
  }
  return ctx;
}

'use client';

import { useReducedMotion } from 'framer-motion';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type HeroEntranceValue = {
  /** True once the page has painted and entrance may begin */
  ready: boolean;
  reduce: boolean;
};

const HeroEntranceContext = createContext<HeroEntranceValue>({
  ready: false,
  reduce: false,
});

export function HeroEntranceProvider({ children }: { children: ReactNode }) {
  const reducePref = useReducedMotion();
  const reduce = !!reducePref;
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setReady(true);
  }, [reduce]);

  return (
    <HeroEntranceContext.Provider value={{ ready, reduce }}>
      {children}
    </HeroEntranceContext.Provider>
  );
}

/** Hero loads at full strength — optional subtle rise only after paint */
export function useHeroEntrance() {
  const { ready, reduce } = useContext(HeroEntranceContext);
  const skipEntrance = reduce || ready;
  const animate = skipEntrance ? ('visible' as const) : ('hidden' as const);
  const initial = skipEntrance ? (false as const) : ('hidden' as const);

  return { ready, reduce, animate, initial };
}

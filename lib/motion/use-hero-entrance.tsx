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
  const [ready, setReady] = useState(reduce);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }

    // Defer until after first paint — prevents text flashing before choreography
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setReady(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [reduce]);

  return (
    <HeroEntranceContext.Provider value={{ ready, reduce }}>
      {children}
    </HeroEntranceContext.Provider>
  );
}

/** Gate hero motion — nothing animates until `ready` */
export function useHeroEntrance() {
  const { ready, reduce } = useContext(HeroEntranceContext);
  const animate = ready || reduce ? ('visible' as const) : ('hidden' as const);
  const initial = reduce ? (false as const) : ('hidden' as const);

  return { ready, reduce, animate, initial };
}

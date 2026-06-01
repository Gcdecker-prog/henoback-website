import { ambientPageGlow } from '@/lib/ui/glass';

/** Ambient depth behind every inner marketing page — pair with MarketingPageHero */
export function MarketingPageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={ambientPageGlow()} aria-hidden />
      {children}
    </>
  );
}

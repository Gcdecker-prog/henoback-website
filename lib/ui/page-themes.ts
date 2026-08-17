import { henoback } from '@/lib/brand-tokens';

/**
 * Per-page accent identity — light, glossy flow cues so nav changes feel intentional
 * without repainting the whole brand system.
 */
export type PageThemeId = 'home' | 'about' | 'services' | 'caseStudies' | 'getStarted';

export type PageTheme = {
  id: PageThemeId;
  /** Primary accent hex */
  accent: string;
  /** Softer companion wash (second brand hue) */
  wash: string;
  /** Tailwind-friendly classes for eyebrows / links */
  eyebrowClass: string;
  linkHoverClass: string;
  /** Active nav text */
  navActiveClass: string;
  /** Accent bar / rail */
  railClass: string;
  /** Soft ambient glow opacity suffixes for radial fills */
  glowAccent: string;
  glowWash: string;
  /** Dark CTA orb tint */
  ctaOrb: string;
};

export const pageThemes: Record<PageThemeId, PageTheme> = {
  /** Signature brand — warm entry */
  home: {
    id: 'home',
    accent: henoback.orange[500],
    wash: henoback.blue[900],
    eyebrowClass: 'text-heno-orange-600',
    linkHoverClass: 'hover:text-heno-orange-600',
    navActiveClass: 'text-heno-orange-700',
    railClass: 'bg-heno-orange-500',
    glowAccent: `${henoback.blue[400]}1a`,
    glowWash: `${henoback.blue[900]}0c`,
    ctaOrb: 'rgba(27,54,93,0.28)',
  },
  /** Trust depth — deep navy */
  about: {
    id: 'about',
    accent: henoback.blue[900],
    wash: henoback.blue[400],
    eyebrowClass: 'text-heno-blue-900',
    linkHoverClass: 'hover:text-heno-blue-700',
    navActiveClass: 'text-heno-blue-900',
    railClass: 'bg-heno-blue-900',
    glowAccent: `${henoback.blue[900]}1f`,
    glowWash: `${henoback.blue[400]}28`,
    ctaOrb: 'rgba(27,54,93,0.28)',
  },
  /** Systems / process — cool logo blue */
  services: {
    id: 'services',
    accent: henoback.blue[500],
    wash: henoback.blue[400],
    eyebrowClass: 'text-heno-blue-500',
    linkHoverClass: 'hover:text-heno-blue-500',
    navActiveClass: 'text-heno-blue-700',
    railClass: 'bg-heno-blue-500',
    glowAccent: `${henoback.blue[500]}2a`,
    glowWash: `${henoback.blue[400]}22`,
    ctaOrb: 'rgba(35,96,130,0.35)',
  },
  /** Proof — navy → sky bridge */
  caseStudies: {
    id: 'caseStudies',
    accent: henoback.blue[700],
    wash: henoback.orange[500],
    eyebrowClass: 'text-heno-blue-700',
    linkHoverClass: 'hover:text-heno-blue-700',
    navActiveClass: 'text-heno-blue-700',
    railClass: 'bg-heno-blue-700',
    glowAccent: `${henoback.blue[400]}18`,
    glowWash: `${henoback.blue[700]}14`,
    ctaOrb: 'rgba(27,74,110,0.32)',
  },
  /** Action — brighter converted orange */
  getStarted: {
    id: 'getStarted',
    accent: henoback.orange[600],
    wash: henoback.orange[500],
    eyebrowClass: 'text-heno-orange-600',
    linkHoverClass: 'hover:text-heno-orange-600',
    navActiveClass: 'text-heno-orange-700',
    railClass: 'bg-heno-orange-600',
    glowAccent: `${henoback.blue[400]}16`,
    glowWash: `${henoback.blue[900]}0c`,
    ctaOrb: 'rgba(27,54,93,0.28)',
  },
} as const;

/** Resolve theme from pathname (header lives outside page shells). */
export function themeFromPathname(pathname: string | null | undefined): PageTheme {
  if (!pathname || pathname === '/') return pageThemes.home;
  if (pathname === '/about-us' || pathname.startsWith('/about-us/')) return pageThemes.about;
  if (pathname === '/services' || pathname.startsWith('/services/')) return pageThemes.services;
  if (pathname === '/case-studies' || pathname.startsWith('/case-studies/')) {
    return pageThemes.caseStudies;
  }
  if (pathname === '/get-started' || pathname.startsWith('/get-started/')) {
    return pageThemes.getStarted;
  }
  return pageThemes.home;
}

export type NavItem = {
  label: string;
  href: string;
};

/**
 * Primary nav — aligned with henobackoffice.com
 * “Why Heno” in the menu → /about-us (live uses the same pattern)
 */
export const navItems: NavItem[] = [
  { label: 'Why Heno', href: '/about-us' },
  { label: 'How It Works', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Get Started', href: '/get-started' },
];

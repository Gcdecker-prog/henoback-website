export type NavItem = {
  label: string;
  href: string;
};

/** Primary nav — mirrors live henobackoffice.com IA */
export const navItems: NavItem[] = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Why Heno', href: '/why-heno' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Get Started', href: '/get-started' },
];

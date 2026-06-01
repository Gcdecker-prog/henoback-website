'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { Logo } from '@/components/henoback/Logo';
import { navItems } from '@/lib/nav';
import { siteConfig, primaryCta } from '@/lib/site-config';
import { consultationIntakeUrl } from '@/lib/gtm-links';
import { cn } from '@/lib/cn';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-neutral-200/90 bg-white/90 backdrop-blur-md transition-shadow duration-300',
        scrolled && 'shadow-[0_4px_24px_-8px_rgba(23,23,23,0.06)]',
      )}
    >
      <Container className="flex h-[4.25rem] items-center gap-4 sm:h-[4.5rem] lg:gap-6">
        <Logo className="shrink-0" />

        <nav className="hidden flex-1 justify-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneE164}`}
            className="hidden h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 xl:inline-flex"
          >
            <Phone size={16} strokeWidth={1.75} aria-hidden />
            {siteConfig.contact.phone}
          </a>
          <GtmOutboundButton
            href={consultationIntakeUrl({ content: 'header-cta' })}
            size="md"
            className="whitespace-nowrap"
          >
            {primaryCta.label}
          </GtmOutboundButton>
        </div>
      </Container>
    </header>
  );
}

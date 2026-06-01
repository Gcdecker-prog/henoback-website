'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { PrimaryNav } from '@/components/layout/PrimaryNav';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { Logo } from '@/components/henoback/Logo';
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
        'sticky top-0 z-50 border-b bg-white transition-[box-shadow,border-color] duration-300',
        scrolled
          ? 'border-neutral-200/80 shadow-[0_1px_0_rgba(255,255,255,1),0_8px_30px_-12px_rgba(23,23,23,0.08)]'
          : 'border-transparent',
      )}
    >
      <Container className="flex h-[5.25rem] items-center gap-2 sm:h-[5.75rem] sm:gap-3 lg:gap-4">
        <Logo size="large" className="shrink-0 max-w-[min(52vw,360px)]" />
        <PrimaryNav />

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneE164}`}
            className="hidden h-10 items-center gap-2 rounded-full border border-transparent px-3 text-[13px] font-medium text-neutral-600 transition-colors hover:border-neutral-200/80 hover:bg-neutral-50 hover:text-neutral-900 xl:inline-flex"
          >
            <Phone size={15} strokeWidth={1.75} aria-hidden />
            {siteConfig.contact.phone}
          </a>
          <GtmOutboundButton
            href={consultationIntakeUrl({ content: 'header-cta' })}
            size="md"
            className="whitespace-nowrap shadow-[0_8px_24px_-8px_rgba(242,120,48,0.4)]"
          >
            {primaryCta.label}
          </GtmOutboundButton>
        </div>
      </Container>
    </header>
  );
}

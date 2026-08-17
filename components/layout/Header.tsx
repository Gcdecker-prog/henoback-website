'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { PrimaryNav } from '@/components/layout/PrimaryNav';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { Logo } from '@/components/henoback/Logo';
import { siteConfig, headerCta } from '@/lib/site-config';
import { assessmentUrl } from '@/lib/gtm-links';
import { cn } from '@/lib/cn';
import { glassHeaderBar, glassHeaderBarScrolled } from '@/lib/ui/glass';

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
        'sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        glassHeaderBar,
        scrolled && glassHeaderBarScrolled,
      )}
    >
      <Container className="flex h-[4.75rem] items-center gap-2 sm:h-[5.25rem] sm:gap-3 lg:gap-4">
        <Logo size="large" className="shrink-0 max-w-[min(48vw,280px)]" />
        <PrimaryNav />

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneE164}`}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-transparent text-neutral-500 transition-colors hover:border-neutral-200/80 hover:bg-neutral-50 hover:text-neutral-800 lg:inline-flex"
            aria-label={`Call ${siteConfig.contact.phone}`}
            title={siteConfig.contact.phone}
          >
            <Phone size={16} strokeWidth={1.75} aria-hidden />
          </a>
          <GtmOutboundButton
            href={assessmentUrl({ content: 'header-assessment' })}
            size="md"
            className="whitespace-nowrap shadow-[0_8px_24px_-8px_rgba(242,120,48,0.4)]"
          >
            {headerCta.label}
          </GtmOutboundButton>
        </div>
      </Container>
    </header>
  );
}

'use client';

import { useMemo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { applyAttributionContext } from '@/lib/gtm-links';
import { readAttributionFromDocument } from '@/lib/gtm-attribution';
import { cn } from '@/lib/cn';

type GtmOutboundLinkProps = {
  /** Base GTM URL from `consultationIntakeUrl()` / `pageCtaUrl()` */
  href: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * External link to GTM — merges inbound UTMs + landing page before navigation.
 * Use for every “Book a consultation” / assessment CTA.
 */
export function GtmOutboundLink({ href, children, className }: GtmOutboundLinkProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const finalHref = useMemo(() => {
    const fromCookies = readAttributionFromDocument();
    const inbound = { ...fromCookies.inbound };

    for (const key of ['utm_medium', 'utm_term', 'utm_campaign'] as const) {
      const fromUrl = searchParams.get(key);
      if (fromUrl) inbound[key] = fromUrl;
    }

    return applyAttributionContext(href, {
      inbound,
      landingPage: fromCookies.landingPage ?? pathname ?? undefined,
    });
  }, [href, pathname, searchParams]);

  return (
    <a
      href={finalHref}
      className={cn(className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

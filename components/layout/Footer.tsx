import Link from 'next/link';
import { Suspense } from 'react';
import { Container } from '@/components/layout/Container';
import { GtmOutboundLink } from '@/components/gtm/GtmOutboundLink';
import { navItems } from '@/lib/nav';
import { primaryCta, siteConfig } from '@/lib/site-config';
import { assessmentUrl } from '@/lib/gtm-links';

export function Footer() {
  return (
    <footer className="relative isolate z-10 border-t border-heno-blue-100 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-neutral-900">{siteConfig.name}</p>
            <p className="mt-2 max-w-sm text-sm text-neutral-600">{siteConfig.positioning}</p>
            <p className="mt-4 text-sm text-neutral-600">
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="font-medium text-neutral-900 hover:text-heno-orange-600"
              >
                {siteConfig.contact.phone}
              </a>
              <br />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-neutral-900 hover:text-heno-orange-600"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Explore</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-neutral-700 hover:text-heno-blue-900">
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-700 hover:text-heno-blue-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Get started
            </p>
            <p className="mt-4 text-sm text-neutral-600">{siteConfig.footerGetStarted}</p>
            <Suspense
              fallback={
                <a
                  href={assessmentUrl({ content: 'footer-link' })}
                  className="mt-4 inline-flex text-sm font-medium text-heno-orange-600"
                >
                  {primaryCta.label} →
                </a>
              }
            >
              <GtmOutboundLink
                href={assessmentUrl({ content: 'footer-link' })}
                className="mt-4 inline-flex text-sm font-medium text-heno-orange-600 hover:text-heno-orange-700"
              >
                {primaryCta.label} →
              </GtmOutboundLink>
            </Suspense>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-neutral-200 pt-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.legalEntity}. Part of {siteConfig.platform}{' '}
            · {siteConfig.parent}.
          </p>
        </div>
      </Container>
    </footer>
  );
}

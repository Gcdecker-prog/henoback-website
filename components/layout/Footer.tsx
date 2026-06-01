import Link from 'next/link';
import { Suspense } from 'react';
import { Container } from '@/components/layout/Container';
import { GtmOutboundLink } from '@/components/gtm/GtmOutboundLink';
import { navItems } from '@/lib/nav';
import { siteConfig } from '@/lib/site-config';
import { consultationIntakeUrl } from '@/lib/gtm-links';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
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
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-700 hover:text-heno-orange-600"
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
            <p className="mt-4 text-sm text-neutral-600">
              Book a consultation to walk through your financial processes, tools, and goals.
            </p>
            <Suspense
              fallback={
                <a
                  href={consultationIntakeUrl({ content: 'footer-link' })}
                  className="mt-4 inline-flex text-sm font-medium text-heno-orange-600"
                >
                  Book a consultation →
                </a>
              }
            >
              <GtmOutboundLink
                href={consultationIntakeUrl({ content: 'footer-link' })}
                className="mt-4 inline-flex text-sm font-medium text-heno-orange-600 hover:text-heno-orange-700"
              >
                Book a consultation →
              </GtmOutboundLink>
            </Suspense>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-neutral-200 pt-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.legalEntity}. Part of {siteConfig.platform}{' '}
            · {siteConfig.parent}.
          </p>
          <p className="text-neutral-400">Internal slug: henoback-www</p>
        </div>
      </Container>
    </footer>
  );
}

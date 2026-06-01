import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

/** Consistent SEO metadata for every marketing page */
export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: siteConfig.name,
      title: `${title} · ${siteConfig.name}`,
      description,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} · ${siteConfig.name}`,
      description,
    },
  };
}

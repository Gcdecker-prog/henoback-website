import { siteConfig } from '@/lib/site-config';
import type { CaseStudy } from '@/lib/content/case-studies';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    legalName: siteConfig.legalEntity,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: 'US',
    parentOrganization: {
      '@type': 'Organization',
      name: siteConfig.parent,
    },
  };
}

export function caseStudyArticleJsonLd(study: CaseStudy, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.excerpt,
    url: pageUrl,
    author: {
      '@type': 'Organization',
      name: siteConfig.legalEntity,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      '@type': 'Organization',
      name: study.clientName,
      url: study.clientUrl,
    },
  };
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalEntity,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

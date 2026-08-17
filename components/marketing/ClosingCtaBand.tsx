import { ChapterClose } from '@/components/marketing/ChapterClose';
import { homeClosingCta } from '@/lib/content/home';
import { primaryCta } from '@/lib/site-config';
import { pageCtaUrl } from '@/lib/gtm-links';

/** Dark closing CTA band — shared navy chapter. */
export function ClosingCtaBand() {
  return (
    <ChapterClose
      headline={homeClosingCta.headline}
      body={homeClosingCta.body}
      ctaLabel={primaryCta.label}
      ctaHref={pageCtaUrl('home', 'assessment', { content: 'footer-cta' })}
    />
  );
}

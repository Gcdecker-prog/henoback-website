'use client';

import { HomeEditorialBand } from '@/components/marketing/HomeEditorialBand';
import { homeIndustriesBand } from '@/lib/content/home';
import { media } from '@/lib/content/media';
import { brandUi } from '@/lib/ui/brand-ui';

export function HomeIndustriesBand() {
  return (
    <HomeEditorialBand
      id="home-industries-heading"
      headline={homeIndustriesBand.headline}
      intro={homeIndustriesBand.intro}
      industries={homeIndustriesBand.industries}
      imageSrc={media.marketing.homeIndustries}
      imageAlt={homeIndustriesBand.imageAlt}
      imageObjectPosition="58% 45%"
      sectionClassName={brandUi.sectionTint}
    />
  );
}

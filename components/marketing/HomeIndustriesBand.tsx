'use client';

import { HomeEditorialBand } from '@/components/marketing/HomeEditorialBand';
import { homeIndustriesBand } from '@/lib/content/home';
import { industries } from '@/lib/content/industries';
import { media } from '@/lib/content/media';
import { brandUi } from '@/lib/ui/brand-ui';

const industryLinks = industries.map((industry) => ({
  name: industry.name,
  slug: industry.slug,
  href: `/industries/${industry.slug}?utm_content=home-industry-${industry.slug}`,
}));

export function HomeIndustriesBand() {
  return (
    <HomeEditorialBand
      id="home-industries-heading"
      headline={homeIndustriesBand.headline}
      intro={homeIndustriesBand.intro}
      industryLinks={industryLinks}
      imageSrc={media.marketing.homeIndustries}
      imageAlt={homeIndustriesBand.imageAlt}
      imageObjectPosition="58% 45%"
      sectionClassName={brandUi.sectionTint}
    />
  );
}

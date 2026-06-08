'use client';

import { HomeEditorialBand } from '@/components/marketing/HomeEditorialBand';
import { homeAlignmentSection } from '@/lib/content/home';
import { media } from '@/lib/content/media';

export function HomeAlignmentSection() {
  return (
    <HomeEditorialBand
      id="home-alignment-heading"
      headline={homeAlignmentSection.headline}
      pillars={homeAlignmentSection.pillars}
      imageSrc={media.marketing.homeAlignment}
      imageAlt={homeAlignmentSection.imageAlt}
      imageObjectPosition="52% 40%"
    />
  );
}

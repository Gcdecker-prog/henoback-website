'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { AlignmentSystemVisual } from '@/components/marketing/AlignmentSystemVisual';
import { EditorialDashboardSplit } from '@/components/marketing/EditorialDashboardSplit';
import { SolutionStackCards } from '@/components/marketing/SolutionStackCards';
import { homeAlignmentCards, homeAlignmentSection } from '@/lib/content/home';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

export function HomeAlignmentSection() {
  const [activeId, setActiveId] = useState<string>(homeAlignmentCards[0]?.id ?? '');

  return (
    <section
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="home-alignment-heading"
    >
      <Container>
        <EditorialDashboardSplit
          copy={
            <>
              <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', brandUi.eyebrow)}>
                How it works
              </p>
              <h2
                id="home-alignment-heading"
                className="mt-3 text-display-md font-semibold tracking-tight text-neutral-900"
              >
                {homeAlignmentSection.headline}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem]">
                Pick the layer you need most — each one connects to the same reliable back office system.
              </p>

              <SolutionStackCards
                cards={homeAlignmentCards}
                activeId={activeId}
                onActiveChange={setActiveId}
                className="mt-8"
              />
            </>
          }
          dashboard={<AlignmentSystemVisual activeId={activeId} />}
        />
      </Container>
    </section>
  );
}

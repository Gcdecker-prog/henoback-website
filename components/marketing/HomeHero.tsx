'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { HeroStatement } from '@/components/marketing/HeroStatement';
import { HeroBodyCopy } from '@/components/marketing/HeroBodyCopy';
import { MaturityAssessmentTeaser } from '@/components/marketing/MaturityAssessmentTeaser';
import { useHomeHeroScroll } from '@/lib/motion/use-home-hero-scroll';
import { HeroEntranceProvider } from '@/lib/motion/use-hero-entrance';
import { cn } from '@/lib/cn';

/** Copy column — aligns with header Container (max-w-6xl / lg:px-8) */
const heroCopyColumn = 'w-full max-w-[31rem] lg:max-w-[33rem]';

/** Homepage hero — copy left, maturity assessment teaser right */
export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scroll = useHomeHeroScroll(sectionRef);

  return (
    <HeroEntranceProvider>
      <section
        ref={sectionRef}
        className={cn(
          'relative flex overflow-x-clip bg-white',
          'min-h-[min(calc(100dvh-5.25rem),52rem)] sm:min-h-[min(calc(100dvh-5.75rem),56rem)]',
        )}
        aria-labelledby="home-hero-heading"
      >
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-white via-white/50 to-transparent sm:h-36"
          style={scroll.motionEnabled ? { opacity: scroll.washOpacity } : undefined}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-start px-5 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-10 lg:px-8 lg:pb-10 lg:pt-12 xl:pt-14">
          <div className="grid w-full items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              className="flex w-full justify-center lg:justify-start"
              style={scroll.motionEnabled ? { y: scroll.contentY } : undefined}
            >
              <div className={cn(heroCopyColumn, 'text-center lg:text-left')}>
                <div className="space-y-4 sm:space-y-5">
                  <HeroStatement />
                  <HeroBodyCopy />
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center lg:justify-end">
              <MaturityAssessmentTeaser className="mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </section>
    </HeroEntranceProvider>
  );
}

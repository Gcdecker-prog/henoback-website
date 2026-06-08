'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { HeroKicker } from '@/components/marketing/HeroKicker';
import { HeroStatement } from '@/components/marketing/HeroStatement';
import { HeroBodyCopy } from '@/components/marketing/HeroBodyCopy';
import { HeroPhotoFade } from '@/components/marketing/HeroPhotoFade';
import { heroAt, heroDelay, heroGlassPhoto } from '@/lib/motion/hero-timeline';
import { useHomeHeroScroll } from '@/lib/motion/use-home-hero-scroll';
import { HeroEntranceProvider, useHeroEntrance } from '@/lib/motion/use-hero-entrance';
import { cn } from '@/lib/cn';

/** Copy column — aligns with header Container (max-w-6xl / lg:px-8) */
const heroCopyColumn = 'w-full max-w-[31rem] lg:max-w-[33rem]';

function HeroPhotoEntrance({
  className,
  seamless,
  photoClassName,
}: {
  className?: string;
  seamless?: boolean;
  photoClassName?: string;
}) {
  const { animate, initial } = useHeroEntrance();

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      variants={heroGlassPhoto}
      transition={heroDelay(heroAt.photo, 0.95)}
      aria-hidden={seamless}
    >
      <HeroPhotoFade seamless={seamless} className={photoClassName} />
    </motion.div>
  );
}

/** Homepage hero — copy in container, photo pinned to viewport right */
export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scroll = useHomeHeroScroll(sectionRef);

  return (
    <HeroEntranceProvider>
      <section
        ref={sectionRef}
        className={cn(
          'relative flex overflow-x-clip bg-white',
          'min-h-[calc(100dvh-5.25rem)] sm:min-h-[calc(100dvh-5.75rem)]',
        )}
        aria-labelledby="home-hero-heading"
      >
        {/* Photo — anchored to viewport right; starts past the copy block */}
        <motion.div
          className={cn(
            'pointer-events-none absolute z-0 hidden items-center lg:flex',
            'right-0 top-0 bottom-0',
            'left-[58%] xl:left-[56%] 2xl:left-[54%]',
          )}
          style={
            scroll.motionEnabled
              ? { y: scroll.photoY, opacity: scroll.photoOpacity }
              : undefined
          }
        >
          <HeroPhotoEntrance
            seamless
            className="h-full w-full"
            photoClassName="h-[min(80vh,720px)] w-full"
          />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-white via-white/50 to-transparent sm:h-36"
          style={scroll.motionEnabled ? { opacity: scroll.washOpacity } : undefined}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <motion.div
            className="flex w-full justify-center lg:max-w-[33rem] lg:justify-start"
            style={scroll.motionEnabled ? { y: scroll.contentY } : undefined}
          >
            <div className={cn(heroCopyColumn, 'text-center lg:text-left')}>
              <HeroKicker />

              <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
                <HeroStatement />
                <HeroBodyCopy />
              </div>

              <HeroPhotoEntrance
                className="mt-8 lg:hidden"
                photoClassName="mx-auto aspect-[16/10] max-h-[260px] rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </HeroEntranceProvider>
  );
}

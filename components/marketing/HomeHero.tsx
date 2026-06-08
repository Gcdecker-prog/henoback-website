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

/** Homepage hero — type-led left column, ~50% photo right */
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
        <motion.div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
          style={
            scroll.motionEnabled
              ? {
                  y: scroll.photoY,
                  scale: scroll.photoScale,
                  opacity: scroll.photoOpacity,
                }
              : undefined
          }
        >
          <HeroPhotoEntrance
            seamless
            photoClassName="h-full min-h-[calc(100dvh-5.75rem)] w-full"
          />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"
          style={scroll.motionEnabled ? { opacity: scroll.washOpacity } : undefined}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="grid w-full items-center lg:grid-cols-2">
            <motion.div
              className="flex justify-center will-change-transform lg:justify-start"
              style={
                scroll.motionEnabled
                  ? {
                      y: scroll.contentY,
                      scale: scroll.contentScale,
                      opacity: scroll.contentOpacity,
                      filter: scroll.contentFilter,
                    }
                  : undefined
              }
            >
              <div className="w-full max-w-[36rem] text-center lg:max-w-none lg:text-left">
                <HeroKicker className="lg:mx-0" />

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

            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>
    </HeroEntranceProvider>
  );
}

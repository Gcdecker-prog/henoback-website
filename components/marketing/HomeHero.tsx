'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HeroStatement } from '@/components/marketing/HeroStatement';
import { HeroBodyCopy } from '@/components/marketing/HeroBodyCopy';
import { HeroPhotoFade } from '@/components/marketing/HeroPhotoFade';
import { HeroOrangeOrb } from '@/components/motion/HeroOrangeOrb';
import { homeHero } from '@/lib/content/home';
import { motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden" aria-labelledby="home-hero-heading">
      {/* Desktop photo */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[52%] lg:block"
        aria-hidden
      >
        <HeroPhotoFade seamless className="h-full min-h-[32rem]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14 xl:gap-20">
          <motion.div
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 sm:gap-x-5 lg:gap-x-6"
            initial={reduce ? false : 'hidden'}
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={staggerItem} className="col-span-2 mb-6 sm:mb-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-heno-orange-600">
                {homeHero.eyebrow}
              </span>
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="relative z-0 self-center"
              aria-hidden
            >
              <HeroOrangeOrb />
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="relative z-10 min-h-[7.5rem] min-w-0 sm:min-h-[9rem]"
            >
              <HeroStatement />
            </motion.div>

            <motion.div
              className="relative col-span-2 mt-8 aspect-[16/11] max-h-[320px] overflow-hidden sm:mt-10 lg:hidden"
              variants={staggerItem}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: motionEase }}
            >
              <HeroPhotoFade className="rounded-2xl" />
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="col-span-2 mt-8 sm:col-span-1 sm:col-start-2 sm:mt-10"
            >
              <HeroBodyCopy />
            </motion.div>
          </motion.div>

          {/* Spacer column — photo is absolute on lg */}
          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}

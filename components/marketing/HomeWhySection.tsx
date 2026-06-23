'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { EditorialDashboardSplit } from '@/components/marketing/EditorialDashboardSplit';
import { HomeOutcomeDashboard } from '@/components/marketing/HomeOutcomeDashboard';
import { SolutionStackCards } from '@/components/marketing/SolutionStackCards';
import { homeSolutionCards, homeWhySection } from '@/lib/content/home';
import { brandUi } from '@/lib/ui/brand-ui';
import { motionEase } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

export function HomeWhySection({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <section
      className={cn(
        'border-t border-neutral-100 pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14',
        brandUi.sectionTint,
        className,
      )}
      aria-labelledby="home-why-heading"
    >
      <Container>
        <motion.ul
          className="mb-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm font-medium text-neutral-600 sm:mb-12 lg:mb-14"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: motionEase }}
          aria-label="Credentials"
        >
          {homeWhySection.credentials.map((item, index) => (
            <li key={item} className="flex items-center gap-4">
              {index > 0 ? (
                <span className="hidden text-neutral-300 sm:inline" aria-hidden>
                  ·
                </span>
              ) : null}
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>

        <EditorialDashboardSplit
          copy={
            <>
              <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', brandUi.eyebrow)}>
                {homeWhySection.eyebrow}
              </p>
              <h2
                id="home-why-heading"
                className="mt-3 text-display-md font-semibold tracking-tight text-neutral-900"
              >
                {homeWhySection.headline}
              </h2>

              <SolutionStackCards cards={homeSolutionCards} className="mt-8" />

              <blockquote className={cn('mt-8 bg-white/80 py-3 pl-4 pr-3 sm:py-3.5 sm:pl-5', brandUi.outcomeBar)}>
                <p className={cn('text-[0.975rem] font-semibold leading-snug sm:text-[1rem]', brandUi.outcomeText)}>
                  {homeWhySection.closing.lead}
                </p>
                <p className="mt-1 text-[0.9375rem] font-medium leading-snug text-neutral-600">
                  {homeWhySection.closing.follow}
                </p>
              </blockquote>
            </>
          }
          dashboard={<HomeOutcomeDashboard />}
        />
      </Container>
    </section>
  );
}

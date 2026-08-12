'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { HomeOutcomeDashboard } from '@/components/marketing/HomeOutcomeDashboard';
import { intacctMatters } from '@/lib/content/home-intacct';
import {
  pillarSlideItem,
  pillarSlideStagger,
  scrollSlideItem,
  scrollSlideLabel,
  scrollSlideStagger,
} from '@/lib/motion/variants';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

/** Why visibility — pillars → before/after → single elegant next-step band. */
export function IntacctMattersSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="intacct-matters-heading">
      <Container>
        <motion.div
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.2 }}
          variants={scrollSlideStagger}
        >
          <motion.h2
            id="intacct-matters-heading"
            className="max-w-3xl text-display-md font-semibold tracking-tight text-heno-blue-900 sm:text-display-lg"
            variants={scrollSlideLabel}
          >
            {intacctMatters.headline}
          </motion.h2>
        </motion.div>

        <motion.ul
          className="mt-8 grid items-stretch gap-6 sm:mt-10 md:grid-cols-3 md:gap-6 lg:gap-8"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -6% 0px', amount: 0.25 }}
          variants={pillarSlideStagger}
        >
          {intacctMatters.cards.map((card) => (
            <motion.li key={card.title} variants={pillarSlideItem} className="flex h-full min-w-0">
              <div className="flex h-full w-full flex-col border-l-[3px] border-heno-blue-900 pl-4 sm:pl-5">
                <h3
                  className={cn(
                    'text-[1.05rem] font-semibold leading-snug sm:text-lg',
                    'md:min-h-[3.5rem]',
                    brandUi.pillarTitle,
                  )}
                >
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
                  {card.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-12 sm:mt-14">
          <HomeOutcomeDashboard
            className="w-full"
            copy={{
              eyebrow: intacctMatters.beforeAfter.eyebrow,
              title: intacctMatters.beforeAfter.title,
              sub: intacctMatters.beforeAfter.sub,
              beforeLabel: intacctMatters.beforeAfter.beforeLabel,
              beforeValue: intacctMatters.beforeAfter.beforeValue,
              afterLabel: intacctMatters.beforeAfter.afterLabel,
              afterValue: intacctMatters.beforeAfter.afterValue,
            }}
          />
        </div>

        {/* Light next-step band — less navy mass */}
        <motion.div
          className="mt-8 grid overflow-hidden rounded-[1.35rem] border border-neutral-200/80 bg-[#f7f8fa] sm:mt-10 lg:grid-cols-2"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.18 }}
          variants={scrollSlideStagger}
        >
          <motion.div
            variants={scrollSlideItem}
            className="border-b border-neutral-200/80 px-6 py-7 sm:px-8 sm:py-8 lg:border-b-0 lg:border-r"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-heno-orange-500">
              {intacctMatters.calloutTag}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
              {intacctMatters.calloutBody}
            </p>
          </motion.div>
          <motion.div
            variants={scrollSlideItem}
            className="flex flex-col justify-between px-6 py-7 sm:px-8 sm:py-8"
          >
            <div>
              <p className="text-[1.05rem] font-semibold leading-snug text-heno-blue-900 sm:text-lg">
                {intacctMatters.emphasisLead}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
                {intacctMatters.emphasisFollow}
              </p>
            </div>
            <Link
              href={intacctMatters.ctaHref}
              className="mt-6 inline-flex text-sm font-semibold text-heno-blue-900 transition-colors hover:text-heno-orange-600"
            >
              {intacctMatters.cta} →
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

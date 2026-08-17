'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { WhyItMattersInsight } from '@/components/marketing/WhyItMattersInsight';
import {
  DashboardSnapshotFrame,
  DashboardSnapshotPlaceholder,
} from '@/components/marketing/DashboardSnapshotFrame';
import { OperationsConsistencyPreview } from '@/components/marketing/OperationsConsistencyPreview';
import { PlanningForecastPreview } from '@/components/marketing/PlanningForecastPreview';
import { ProjectProfitabilityPreview } from '@/components/marketing/ProjectProfitabilityPreview';
import { StandardPlPreview } from '@/components/marketing/StandardPlPreview';
import {
  editorialPanelBlock,
  editorialPanelStagger,
  motionEase,
  scrollSlideLabel,
} from '@/lib/motion/variants';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

type DetailSection = {
  id: string;
  headline: string;
  problem: { label: string; items: readonly string[] };
  whyItMatters: { lead: string; beats: readonly string[] };
  whatHenoDoes: { label: string; items: readonly string[] };
  outcome: string;
  visualLabel: string;
  visualComponent?: 'standard-pl' | 'project-profitability' | 'operations' | 'planning';
  visualCaption?: string;
  visualImageSrc?: string;
  visualImageAlt?: string;
};

type HowItWorksDetailSectionProps = {
  section: DetailSection;
  index: number;
};

const VIEWPORT = { once: true, amount: 0.22, margin: '-40px' as const };

function copyColumnVariants(enterX: number): Variants {
  return {
    hidden: { opacity: 0, x: enterX },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: motionEase, staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };
}

function visualColumnVariants(enterX: number): Variants {
  return {
    hidden: { opacity: 0, x: enterX, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.85, ease: motionEase, delay: 0.12 },
    },
  };
}

function DetailListBlock({
  label,
  items,
  tone = 'neutral',
}: {
  label: string;
  items: readonly string[];
  tone?: 'neutral' | 'emphasis';
}) {
  return (
    <motion.div variants={editorialPanelBlock}>
      <p className={brandUi.sectionLabel}>
        {label.replace(/:$/, '')}
      </p>
      <ul className="mt-2.5 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-3 text-[0.875rem] leading-snug sm:text-[0.9375rem]',
              tone === 'emphasis' ? 'font-medium text-neutral-800' : 'text-neutral-600',
            )}
          >
            <span
              className={cn(
                'mt-[0.4rem] size-1 shrink-0 rounded-full',
                tone === 'emphasis' ? brandUi.bulletEmphasis : brandUi.bullet,
              )}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function HowItWorksDetailSection({ section, index }: HowItWorksDetailSectionProps) {
  const reduce = useReducedMotion();
  const isReversed = index % 2 === 1;
  const copyEnterX = isReversed ? 40 : -40;
  const visualEnterX = isReversed ? -40 : 40;

  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-t border-heno-blue-100/70 bg-transparent py-14 sm:py-16 lg:py-20"
      aria-labelledby={`${section.id}-heading`}
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            className={cn(
              'min-w-0 self-start lg:sticky lg:top-28',
              isReversed && 'lg:order-2',
            )}
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            variants={copyColumnVariants(copyEnterX)}
          >
            <motion.h2
              id={`${section.id}-heading`}
              className="max-w-lg text-pretty text-[1.65rem] font-semibold tracking-tight text-heno-blue-900 sm:text-[1.95rem] lg:text-[2.15rem]"
              variants={scrollSlideLabel}
            >
              {section.headline}
            </motion.h2>

            <motion.div className="mt-8 space-y-5 sm:space-y-6" variants={editorialPanelStagger}>
              <DetailListBlock label={section.problem.label} items={section.problem.items} />

              <WhyItMattersInsight
                lead={section.whyItMatters.lead}
                beats={section.whyItMatters.beats}
              />

              <DetailListBlock label={section.whatHenoDoes.label} items={section.whatHenoDoes.items} />

              <motion.div
                variants={editorialPanelBlock}
                className={cn(brandUi.outcomeBar, 'py-1 pl-4')}
              >
                <p className={brandUi.sectionLabel}>
                  Outcome
                </p>
                <p className={cn('mt-2 text-[0.9375rem] font-semibold leading-snug sm:text-base', brandUi.outcomeText)}>
                  {section.outcome}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className={cn(
              'relative min-w-0 w-full self-start',
              isReversed && 'lg:order-1',
            )}
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            variants={visualColumnVariants(visualEnterX)}
          >
            {section.visualComponent === 'standard-pl' ? (
              <StandardPlPreview />
            ) : section.visualComponent === 'project-profitability' ? (
              <ProjectProfitabilityPreview />
            ) : section.visualComponent === 'operations' ? (
              <OperationsConsistencyPreview />
            ) : section.visualComponent === 'planning' ? (
              <PlanningForecastPreview />
            ) : section.visualImageSrc ? (
              <DashboardSnapshotFrame
                imageSrc={section.visualImageSrc}
                imageAlt={section.visualImageAlt ?? section.visualLabel}
                label={section.visualLabel}
                caption={section.visualCaption}
              />
            ) : (
              <DashboardSnapshotPlaceholder label={section.visualLabel} />
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

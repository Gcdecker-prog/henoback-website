'use client';

import { Suspense, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MaturityResponseDashboard } from '@/components/marketing/MaturityResponseDashboard';
import { maturityResponses } from '@/lib/content/maturity-assessment';
import { heroAt, heroDelay, heroGlassPhoto } from '@/lib/motion/hero-timeline';
import { useHeroEntrance } from '@/lib/motion/use-hero-entrance';
import { GtmOutboundLink } from '@/components/gtm/GtmOutboundLink';
import { maturityAssessmentTeaser } from '@/lib/content/maturity-assessment';
import { assessmentUrl } from '@/lib/gtm-links';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

type MaturityAssessmentTeaserProps = {
  className?: string;
};

function QuestionStep({ onSelect }: { onSelect: (optionId: string) => void }) {
  const { question, options } = maturityAssessmentTeaser.question;

  return (
    <motion.div
      key="question"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28 }}
    >
      <h2 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-neutral-900 sm:text-[1.125rem]">
        {question}
      </h2>

      <ul className="mt-4 space-y-2">
        {options.map((option, index) => (
          <li key={option.id}>
            <button
              type="button"
              onClick={() => onSelect(option.id)}
              className={cn(
                'group flex w-full items-center justify-between gap-3 rounded-xl border border-neutral-200/70 bg-white px-4 py-3.5 text-left text-sm font-medium text-neutral-800',
                'transition-[border-color,background-color,box-shadow] hover:border-heno-blue-200 hover:shadow-[0_8px_24px_-14px_rgba(27,54,93,0.12)]',
              )}
            >
              <span>{option.label}</span>
              {index === 0 ? (
                <ArrowRight
                  className="size-4 shrink-0 text-neutral-300 transition-colors group-hover:text-heno-blue-500"
                  aria-hidden
                />
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function AssessmentFlowInner({ onStepChange }: { onStepChange: (step: number) => void }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelectedId(optionId);
    onStepChange(1);
  };

  const handleBack = () => {
    setSelectedId(null);
    onStepChange(0);
  };

  return (
    <AnimatePresence mode="wait">
      {selectedId ? (
        <MaturityResponseDashboard
          key="response"
          optionId={selectedId}
          response={maturityResponses[selectedId as keyof typeof maturityResponses]}
          onBack={handleBack}
        />
      ) : (
        <QuestionStep key="question" onSelect={handleSelect} />
      )}
    </AnimatePresence>
  );
}

/** One recognition question → tailored dashboard snapshot → full assessment */
export function MaturityAssessmentTeaser({ className }: MaturityAssessmentTeaserProps) {
  const { animate, initial } = useHeroEntrance();
  const { badge, eyebrow, footer } = maturityAssessmentTeaser;
  const [step, setStep] = useState(0);

  return (
    <motion.div
      className={cn('w-full max-w-[26rem]', className)}
      initial={initial}
      animate={animate}
      variants={heroGlassPhoto}
      transition={heroDelay(heroAt.photo, 0.95)}
    >
      <div
        className={cn(
          'overflow-hidden rounded-2xl border border-neutral-200/80 bg-white',
          'shadow-[0_24px_56px_-28px_rgba(27,54,93,0.18)] ring-1 ring-heno-blue-900/[0.06]',
        )}
        role="region"
        aria-label="Back office reality check"
      >
        <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-heno-blue-100 bg-heno-blue-50/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-heno-blue-800">
              <span className="size-1.5 rounded-full bg-heno-blue-500" aria-hidden />
              {badge}
            </span>
          </div>

          <p className={cn('mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em]', brandUi.eyebrow)}>
            {eyebrow}
          </p>

          <Suspense
            fallback={
              <p className="mt-5 text-center text-sm font-medium text-neutral-600">
                {maturityAssessmentTeaser.question.question}
              </p>
            }
          >
            <div className="mt-5 sm:mt-6">
              <AssessmentFlowInner onStepChange={setStep} />
            </div>
          </Suspense>

          {step === 0 ? (
            <GtmOutboundLink
              href={assessmentUrl({ content: 'hero-teaser-footer' })}
              className="mt-4 block text-center text-[11px] font-medium leading-relaxed text-neutral-400 transition-colors hover:text-heno-orange-600"
            >
              {footer} →
            </GtmOutboundLink>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

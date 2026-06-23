import Image from 'next/image';
import { getClientLogoForStudy } from '@/lib/content/client-logos';
import type { CaseStudy } from '@/lib/content/case-studies';
import { brandUi } from '@/lib/ui/brand-ui';
import { cn } from '@/lib/cn';

type CaseStudyTestimonialProps = {
  study: CaseStudy;
};

/** Client voice — editorial pull quote with logo mark */
export function CaseStudyTestimonial({ study }: CaseStudyTestimonialProps) {
  const clientLogo = getClientLogoForStudy(study.slug);
  const { testimonial } = study;

  return (
    <figure
      className={cn(
        'relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-neutral-200/70',
        'bg-gradient-to-br from-neutral-50/90 via-white to-heno-blue-50/30',
        'px-6 py-8 sm:px-10 sm:py-10',
      )}
    >
      <div
        className="pointer-events-none absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-heno-orange-400 to-heno-blue-600 sm:top-10 sm:bottom-10"
        aria-hidden
      />

      <blockquote className="pl-5 sm:pl-6">
        <p className={cn('text-[11px] font-semibold uppercase tracking-[0.18em]', brandUi.eyebrow)}>
          In their words
        </p>
        <p className="mt-4 text-xl font-medium leading-relaxed tracking-tight text-neutral-800 sm:text-[1.35rem] sm:leading-[1.55]">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4 pl-5 sm:pl-6">
        {clientLogo ? (
          <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-heno-blue-900 px-3 sm:size-16">
            <Image
              src={clientLogo.imageSrc}
              alt=""
              width={clientLogo.imageWidth}
              height={clientLogo.imageHeight}
              aria-hidden
              className={cn('w-auto object-contain mix-blend-screen', clientLogo.logoHeightClass)}
            />
          </div>
        ) : null}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-neutral-900">{testimonial.attribution}</p>
          <p className="mt-0.5 text-sm text-neutral-500">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

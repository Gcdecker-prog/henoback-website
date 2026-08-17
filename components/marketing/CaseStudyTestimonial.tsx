import Image from 'next/image';
import { getClientLogoForStudy } from '@/lib/content/client-logos';
import type { CaseStudy } from '@/lib/content/case-studies';
import { cn } from '@/lib/cn';

type CaseStudyTestimonialProps = {
  study: CaseStudy;
};

/** Client voice — same editorial register as the home founder close. */
export function CaseStudyTestimonial({ study }: CaseStudyTestimonialProps) {
  const clientLogo = getClientLogoForStudy(study.slug);
  const { testimonial } = study;

  return (
    <figure className="mx-auto grid max-w-3xl items-center gap-6 sm:gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-10">
      {clientLogo ? (
        <div className="relative mx-auto flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-heno-blue-900 px-3 shadow-[0_14px_32px_-16px_rgba(27,54,93,0.4)] ring-[3px] ring-heno-blue-50 sm:size-24 md:mx-0">
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
      <blockquote className="text-center md:text-left">
        <span className="block text-4xl font-semibold leading-none text-heno-orange-500" aria-hidden>
          &ldquo;
        </span>
        <p className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-heno-blue-900 sm:text-xl">
          {testimonial.quote}
        </p>
        <figcaption className="mt-4 text-sm text-neutral-500">
          <span className="font-semibold text-neutral-700">{testimonial.attribution}</span>
          <span className="mx-1.5 text-neutral-300">•</span>
          <span>{testimonial.role}</span>
        </figcaption>
      </blockquote>
    </figure>
  );
}

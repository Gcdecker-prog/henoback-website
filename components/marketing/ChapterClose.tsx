import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { NavyBand } from '@/components/marketing/NavyBand';
import { Reveal } from '@/components/motion/Reveal';

type ChapterCloseProps = {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Navy closing chapter — isolated, no ember wash. */
export function ChapterClose({ headline, body, ctaLabel, ctaHref }: ChapterCloseProps) {
  return (
    <NavyBand className="py-16 sm:py-20">
      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-[1.75rem] font-semibold tracking-tight text-white sm:text-[2.15rem] lg:text-[2.45rem]">
            {headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[0.9375rem] leading-relaxed text-white/70 sm:text-body">
            {body}
          </p>
          <GtmOutboundButton href={ctaHref} size="lg" className="mt-8 whitespace-nowrap">
            {ctaLabel}
          </GtmOutboundButton>
        </Reveal>
      </Container>
    </NavyBand>
  );
}

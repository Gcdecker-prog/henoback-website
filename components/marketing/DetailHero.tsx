import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { glassPanelElevated } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

type DetailHeroProps = {
  eyebrow: string;
  title: string;
  summary?: string;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
};

export function DetailHero({
  eyebrow,
  title,
  summary,
  imageSrc,
  imageAlt,
  children,
}: DetailHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-100">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/55 to-neutral-900/30" />
      </div>
      <Container className="relative py-16 sm:py-24">
        <div className={cn(glassPanelElevated, 'max-w-3xl border-white/20 bg-white/10 p-8 text-white backdrop-blur-3xl sm:p-10')}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-200">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-display-md font-semibold tracking-tight sm:text-display-lg">
            {title}
          </h1>
          {summary ? <p className="mt-4 text-body-lg text-neutral-200">{summary}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

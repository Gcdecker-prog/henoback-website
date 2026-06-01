import { Container } from '@/components/layout/Container';
import { glassHeroOrb, glassPanelElevated } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, headline, children, className }: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden border-b border-neutral-100/80 py-16 sm:py-24', className)}>
      <div className={cn(glassHeroOrb, 'left-1/4 top-0 h-72 w-72 -translate-x-1/2')} aria-hidden />
      <div
        className={cn(glassHeroOrb, 'right-0 top-1/2 h-56 w-56 translate-x-1/4 opacity-60')}
        aria-hidden
      />
      <Container className="relative">
        <div className={cn(glassPanelElevated, 'max-w-4xl p-8 sm:p-12')}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-display-md font-semibold tracking-tight text-neutral-900 sm:text-display-lg">
            {headline}
          </h1>
          {children ? <div className="mt-6 space-y-4 text-body-lg text-neutral-600">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

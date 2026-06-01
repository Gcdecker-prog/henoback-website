import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { glass } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

type PageCtaBandProps = {
  eyebrow: string;
  headline: string;
  body?: string;
  children: React.ReactNode;
  className?: string;
};

/** Glass closing band — shared rhythm across hub pages */
export function PageCtaBand({ eyebrow, headline, body, children, className }: PageCtaBandProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-t border-neutral-100/80 py-16 sm:py-20',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(242,120,48,0.08),transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <div className={cn(glass(), 'mx-auto max-w-3xl px-8 py-12 text-center sm:px-12')}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-display-md font-semibold tracking-tight text-neutral-900">
              {headline}
            </h2>
            {body ? (
              <p className="mx-auto mt-4 max-w-xl text-body-lg text-neutral-600">{body}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

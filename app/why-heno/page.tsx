import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { GtmOutboundButton } from '@/components/gtm/GtmOutboundButton';
import { createPageMetadata } from '@/lib/seo/metadata';
import { leadership, founderQuote } from '@/lib/content/team';
import { valueProps } from '@/lib/content/trust-signals';
import { primaryCta } from '@/lib/site-config';
import { consultationIntakeUrl } from '@/lib/gtm-links';
import { glass } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

export const metadata: Metadata = createPageMetadata({
  title: 'Why Heno',
  description: 'US-based outsourced accounting for professional service firms — 20+ years of excellence.',
  path: '/why-heno',
});

export default function WhyHenoPage() {
  return (
    <Container className="py-14 sm:py-20">
      <p className="text-sm font-medium text-heno-orange-600">Why Heno</p>
      <h1 className="mt-2 max-w-3xl text-display-md font-semibold tracking-tight text-neutral-900">
        Your business grows. Your back office should too.
      </h1>
      <p className="mt-6 max-w-2xl text-body-lg text-neutral-600">
        HenoBack Office is a US-based outsourced services firm committed to consulting and
        professional service firms. We help growing companies challenged by poor access to the
        skills and information they need to operate successfully.
      </p>

      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {valueProps.map((item) => (
          <li key={item.title} className={cn(glass(), 'p-6')}>
            <h2 className="text-h3 font-semibold text-neutral-900">{item.title}</h2>
            <p className="mt-3 text-sm text-neutral-600">{item.description}</p>
          </li>
        ))}
      </ul>

      <section className="mt-16">
        <h2 className="text-h1 font-semibold text-neutral-900">20+ years of excellence</h2>
        <div className={cn(glass(), 'mt-6 max-w-3xl p-8')}>
          <blockquote className="text-body-lg text-neutral-700">
            &ldquo;{founderQuote.body}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-neutral-900">
            {founderQuote.attribution} · {founderQuote.title}
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-h1 font-semibold text-neutral-900">Meet our experts</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {leadership.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card"
            >
              <p className="font-semibold text-neutral-900">{person.name}</p>
              <p className="mt-1 text-sm text-neutral-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-14">
        <GtmOutboundButton href={consultationIntakeUrl({ content: 'why-heno-cta' })} size="lg">
          {primaryCta.label}
        </GtmOutboundButton>
      </div>
    </Container>
  );
}

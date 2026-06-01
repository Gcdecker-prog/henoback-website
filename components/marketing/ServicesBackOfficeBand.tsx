import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { servicesPage } from '@/lib/content/services-page';
import { Reveal } from '@/components/motion/Reveal';

export function ServicesBackOfficeBand() {
  const { backOffice } = servicesPage;

  return (
    <section className="border-y border-neutral-100/80 bg-neutral-50/60 py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heno-orange-600">
            About Us
          </p>
          <h2 className="mt-4 text-display-md font-semibold tracking-tight text-neutral-900">
            {backOffice.headline}
          </h2>
          <div className="mt-6 space-y-4 text-body-lg leading-relaxed text-neutral-600">
            {backOffice.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_24px_64px_-24px_rgba(23,23,23,0.12)]">
            <Image
              src={backOffice.imageSrc}
              alt={backOffice.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

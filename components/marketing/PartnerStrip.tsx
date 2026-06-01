import Image from 'next/image';
import { media } from '@/lib/content/media';
import { Container } from '@/components/layout/Container';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

export function PartnerStrip() {
  return (
    <section className="border-y border-neutral-100 bg-neutral-50/60 py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Platforms we implement and run
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {media.partners.map((partner) => (
            <li key={partner.src}>
              <div className={cn(glassPanelSubtle, 'flex h-14 w-28 items-center justify-center px-3 py-2 sm:h-16 sm:w-32')}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={48}
                  className="max-h-10 w-auto object-contain opacity-90"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

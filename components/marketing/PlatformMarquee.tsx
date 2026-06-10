'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { homePlatformBridge } from '@/lib/content/home';
import { platformPartners } from '@/lib/content/partners';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';

function LogoTile({ partner }: { partner: (typeof platformPartners)[number] }) {
  const isWhite = partner.surface === 'white';

  return (
    <li className="flex justify-center">
      <div
        className={cn(
          'group relative flex h-[6.5rem] w-full max-w-[17rem] items-center justify-center overflow-hidden rounded-2xl border sm:h-[7.5rem] sm:max-w-[19rem] lg:h-[8.5rem] lg:max-w-[21rem]',
          'px-5 py-3 sm:px-6 sm:py-4',
          'transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          'hover:-translate-y-1 hover:scale-[1.02]',
          'focus-within:-translate-y-1 focus-within:scale-[1.02] focus-within:outline-none focus-within:ring-2 focus-within:ring-heno-orange-500/25',
          isWhite
            ? [
                'border-neutral-200/80 bg-white',
                'shadow-[0_12px_36px_-14px_rgba(23,23,23,0.08)]',
                'hover:border-heno-orange-200/90',
                'hover:shadow-[0_24px_56px_-18px_rgba(242,120,48,0.16),0_12px_32px_-14px_rgba(23,23,23,0.08)]',
              ]
            : [
                'border-[rgba(0,168,62,0.45)] bg-black',
                'shadow-[0_12px_36px_-14px_rgba(0,0,0,0.25)]',
                'hover:border-[rgba(0,200,75,0.65)]',
                'hover:shadow-[0_24px_56px_-18px_rgba(0,168,62,0.22),0_12px_32px_-14px_rgba(0,0,0,0.3)]',
              ],
        )}
        tabIndex={0}
        role="img"
        aria-label={partner.name}
      >
        <Image
          src={partner.src}
          alt=""
          width={partner.width}
          height={72}
          aria-hidden
          className={cn(
            'relative z-[1] h-12 w-auto max-w-[92%] object-contain object-center sm:h-14 lg:h-[4.25rem]',
            'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
            'group-hover:scale-[1.05]',
          )}
        />
      </div>
    </li>
  );
}

export function PlatformMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-neutral-100/80 bg-white py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(242,120,48,0.06),transparent_55%),radial-gradient(ellipse_70%_50%_at_85%_30%,rgba(0,161,224,0.04),transparent_50%)]"
        aria-hidden
      />

      <Container className="relative">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
          Platforms we implement and run
        </p>

        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:gap-10">
          {platformPartners.map((partner) => (
            <LogoTile key={partner.name} partner={partner} />
          ))}
        </ul>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[0.9375rem] leading-relaxed text-neutral-600 sm:mt-14 sm:text-base">
            {homePlatformBridge}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

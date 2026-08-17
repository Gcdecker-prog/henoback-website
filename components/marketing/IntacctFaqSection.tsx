'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { NavyBand } from '@/components/marketing/NavyBand';
import { intacctFaq } from '@/lib/content/home-intacct';
import { cn } from '@/lib/cn';

/** FAQ on solid navy. */
export function IntacctFaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <NavyBand className="pb-16 pt-16 sm:pb-20 sm:pt-20" aria-labelledby="intacct-faq-heading">
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="intacct-faq-heading"
              className="text-display-md font-semibold tracking-tight text-white sm:text-display-lg"
            >
              {intacctFaq.headline}
            </h2>
            <p className="mt-3 text-body text-white/70">{intacctFaq.intro}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200/80 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_24px_56px_-28px_rgba(0,0,0,0.45)]">
            {intacctFaq.items.map((item, index) => {
              const isOpen = open === index;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="text-sm font-semibold text-heno-blue-900 sm:text-base">{item.q}</span>
                    <span
                      className={cn(
                        'mt-0.5 shrink-0 text-lg leading-none text-heno-orange-500 transition-transform',
                        isOpen && 'rotate-45',
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-600 sm:px-6">
                      {item.a}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </NavyBand>
  );
}

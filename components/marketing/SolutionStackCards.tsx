'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { brandUi } from '@/lib/ui/brand-ui';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { scrollSlideItem, scrollSlideStagger } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

type SolutionCard = {
  id: string;
  title: string;
  body: string;
  href: string;
};

type SolutionStackCardsProps = {
  cards: readonly SolutionCard[];
  className?: string;
  activeId?: string;
  onActiveChange?: (id: string) => void;
};

/** Stacked, skimmable solution cards — click tracks interest via link UTMs */
export function SolutionStackCards({
  cards,
  className,
  activeId: controlledActiveId,
  onActiveChange,
}: SolutionStackCardsProps) {
  const reduce = useReducedMotion();
  const [internalActiveId, setInternalActiveId] = useState(cards[0]?.id ?? '');
  const activeId = controlledActiveId ?? internalActiveId;

  const setActiveId = (id: string) => {
    if (onActiveChange) onActiveChange(id);
    else setInternalActiveId(id);
  };

  return (
    <motion.ul
      className={cn('space-y-2.5', className)}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={scrollSlideStagger}
      role="list"
    >
      {cards.map((card) => {
        const isActive = activeId === card.id;

        return (
          <motion.li key={card.id} variants={scrollSlideItem}>
            <Link
              href={card.href}
              onMouseEnter={() => setActiveId(card.id)}
              onFocus={() => setActiveId(card.id)}
              data-solution={card.id}
              className={cn(
                glassPanelSubtle,
                'group block rounded-xl border px-4 py-3.5 transition-[border-color,box-shadow,background-color] sm:px-5 sm:py-4',
                isActive
                  ? 'border-heno-orange-500/25 bg-white shadow-[0_12px_32px_-14px_rgba(242,120,48,0.12)]'
                  : 'border-white/85 bg-white/75 hover:border-heno-orange-500/15',
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3
                    className={cn(
                      'text-[0.9375rem] font-semibold leading-snug sm:text-base',
                      isActive ? 'text-neutral-900' : brandUi.pillarTitle,
                    )}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-1 text-[0.8125rem] leading-relaxed text-neutral-600 transition-[max-height,opacity] sm:text-sm',
                      isActive ? 'opacity-100' : 'line-clamp-2 opacity-80',
                    )}
                  >
                    {card.body}
                  </p>
                </div>
                <ChevronRight
                  className={cn(
                    'mt-0.5 size-4 shrink-0 transition-transform',
                    isActive
                      ? 'translate-x-0.5 text-heno-orange-500'
                      : 'text-neutral-300 group-hover:text-heno-orange-400',
                  )}
                  aria-hidden
                />
              </div>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

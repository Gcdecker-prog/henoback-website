'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';
import type { ImageCardItem } from '@/components/marketing/ImageCard';

type AnimatedImageCardProps = {
  item: ImageCardItem;
  href: string;
};

export function AnimatedImageCard({ item, href }: AnimatedImageCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className={cn(
          glassPanelSubtle,
          'group flex h-full flex-col overflow-hidden p-0 transition-shadow hover:shadow-[0_24px_64px_-20px_rgba(23,23,23,0.14)]',
        )}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-white/10 opacity-80 transition-opacity group-hover:opacity-100" />
        </div>
        <div className="relative flex flex-1 flex-col p-6">
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          <h3 className="text-h3 font-semibold text-neutral-900 group-hover:text-heno-orange-600">
            {item.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{item.summary}</p>
          <span className="mt-4 text-sm font-medium text-heno-orange-600">Learn more →</span>
        </div>
      </Link>
    </motion.div>
  );
}

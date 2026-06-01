import { AnimatedImageCard } from '@/components/marketing/AnimatedImageCard';
import type { ImageCardItem } from '@/components/marketing/ImageCard';
import { Reveal } from '@/components/motion/Reveal';

export type { ImageCardItem };

type ContentGridProps = {
  items: ImageCardItem[];
  basePath: string;
  heading: string;
  subheading?: string;
};

export function ContentGrid({ items, basePath, heading, subheading }: ContentGridProps) {
  return (
    <section className="py-16 sm:py-20">
      <Reveal className="mb-10 max-w-2xl">
        <h2 className="text-display-md font-semibold tracking-tight text-neutral-900">{heading}</h2>
        {subheading ? <p className="mt-3 text-body-lg text-neutral-600">{subheading}</p> : null}
      </Reveal>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.slug}>
            <Reveal>
              <AnimatedImageCard item={item} href={`${basePath}/${item.slug}`} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

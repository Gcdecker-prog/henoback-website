import { AnimatedImageCard } from '@/components/marketing/AnimatedImageCard';
import type { ImageCardItem } from '@/components/marketing/ImageCard';
import { Reveal, RevealItem, RevealStagger } from '@/components/motion/Reveal';

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
      <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" as="ul">
        {items.map((item) => (
          <RevealItem key={item.slug} className="list-none">
            <AnimatedImageCard item={item} href={`${basePath}/${item.slug}`} />
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}

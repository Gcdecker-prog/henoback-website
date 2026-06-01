import Image from 'next/image';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

type TeamCardProps = {
  name: string;
  role: string;
  imageSrc: string;
};

/** Circular portrait — card fill matches light grey in headshot assets */
export function TeamCard({ name, role, imageSrc }: TeamCardProps) {
  return (
    <div
      className={cn(
        glassPanelSubtle,
        'flex h-full flex-col items-center px-6 py-8 text-center sm:px-8 sm:py-10',
      )}
    >
      <div className="relative size-[9.5rem] overflow-hidden rounded-full bg-[#f2f2f2] sm:size-[10.5rem]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-[center_18%]"
          sizes="(max-width: 640px) 152px, 168px"
        />
      </div>
      <p className="mt-6 text-sm font-medium leading-snug text-neutral-600">{role}</p>
      <h3 className="mt-2 text-h3 font-semibold text-neutral-900">{name}</h3>
    </div>
  );
}

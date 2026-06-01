import Image from 'next/image';
import { glassPanelSubtle } from '@/lib/ui/glass';
import { cn } from '@/lib/cn';

type TeamCardProps = {
  name: string;
  role: string;
  imageSrc: string;
};

export function TeamCard({ name, role, imageSrc }: TeamCardProps) {
  return (
    <li className={cn(glassPanelSubtle, 'overflow-hidden p-0')}>
      <div className="relative aspect-[4/5] w-full bg-neutral-100">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-h3 font-semibold text-neutral-900">{name}</h3>
        <p className="mt-1 text-sm text-neutral-600">{role}</p>
      </div>
    </li>
  );
}

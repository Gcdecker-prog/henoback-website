import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/cn';

type PageTitleBandProps = {
  title: string;
  className?: string;
};

/** Centered page title + breadcrumb — matches live henobackoffice.com interior pages */
export function PageTitleBand({ title, className }: PageTitleBandProps) {
  return (
    <section className={cn('border-b border-neutral-100/80 bg-neutral-50/80', className)}>
      <Container className="py-10 text-center sm:py-12">
        <h1 className="text-display-md font-semibold tracking-tight text-neutral-900">{title}</h1>
        <nav className="mt-3 text-sm text-neutral-500" aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-2">
            <li>
              <Link href="/" className="hover:text-heno-orange-600">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-neutral-300">
              →
            </li>
            <li className="font-medium text-neutral-700" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </Container>
    </section>
  );
}

import { redirect } from 'next/navigation';

/** Live site labels this “Why Heno?” but serves /about-us — one combined story */
export default function WhyHenoPage() {
  redirect('/about-us');
}

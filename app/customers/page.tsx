import { redirect } from 'next/navigation';

/** Legacy nav path — case studies live at /case-studies */
export default function CustomersPage() {
  redirect('/case-studies');
}

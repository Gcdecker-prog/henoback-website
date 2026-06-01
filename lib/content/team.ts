export type TeamMember = {
  name: string;
  role: string;
};

export const leadership: TeamMember[] = [
  { name: 'Jim French', role: 'Founder, President, and CFO' },
  { name: 'Kristina Costello', role: 'Principal' },
  { name: 'Charity Hurt', role: 'Outsourced Accounting Manager' },
];

export const founderQuote = {
  attribution: 'Jim French',
  title: 'Founder, President, and CFO',
  body: 'Our clients rely on us for accounting systems and process expertise to run their back-office operations — increasing efficiency and visibility that supports their growth.',
};

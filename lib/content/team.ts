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
  body: "The real value isn't just in the accounting—it's in building a back office that produces reliable visibility across the business.",
};

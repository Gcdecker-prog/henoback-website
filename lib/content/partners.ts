/** Platform logos — home partner strip */
export type PlatformPartner = {
  src: string;
  name: string;
  width: number;
  /** Card fill matches baked-in logo background so edges disappear */
  surface: 'white' | 'dark';
};

export const platformPartners: PlatformPartner[] = [
  { src: '/images/partners/partner-3.png', name: 'Salesforce', width: 200, surface: 'white' },
  { src: '/images/partners/partner-4.png', name: 'Planful', width: 170, surface: 'white' },
  { src: '/images/partners/partner-2.png', name: 'Sage Partner', width: 200, surface: 'white' },
];

import { henoback } from '@/lib/brand-tokens';

/** Exact live-site brand anchors — use for gradients, not arbitrary tints */
export const brandHex = {
  orange: henoback.orange[500],
  navy: henoback.blue[900],
  logoBlue: henoback.blue[500],
} as const;

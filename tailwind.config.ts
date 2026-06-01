import type { Config } from 'tailwindcss';
import { henoback } from './lib/brand-tokens';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'heno-orange': henoback.orange,
        neutral: henoback.neutral,
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        h1: ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.015em', fontWeight: '600' }],
        h2: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        h3: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        body: ['1rem', { lineHeight: '1.625rem' }],
      },
      boxShadow: {
        card: '0 1px 0 rgba(23, 23, 23, 0.04), 0 24px 48px -12px rgba(23, 23, 23, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;

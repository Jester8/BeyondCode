import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tangerine: '#FF4733',
        violet: '#7F3AED',
        lime: '#94CD01',
        ink: '#171717',
        paper: '#F8F8F6',
      },
      fontFamily: {
        sans: ['Manrope Variable', 'sans-serif'],
        display: ['Space Grotesk Variable', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 55px rgba(23, 23, 23, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;

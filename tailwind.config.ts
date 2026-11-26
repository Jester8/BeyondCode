import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tangerine: '#FF4733',
        violet: '#7F3AED',
        lime: '#94CD01',
        ink: '#090909',
        paper: '#F3F2ED',
      },
      fontFamily: {
        sans: ['Manrope Variable', 'sans-serif'],
        display: ['Space Grotesk Variable', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 55px rgba(9, 9, 9, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;

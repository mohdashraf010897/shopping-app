import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      tertiary: '#889397',
      blackbrand: '#001E2B',
      graybrand: '#5C6C75',
      graylight: '#ecf0ef',
      graymedium: '#43454b',
    },
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  },
};
export default config;

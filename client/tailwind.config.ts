import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#00B1EA',
        secundary: '#797979',
        tertiary: '#',
        success: '#32B105',
        error: '#FF2C2C',
      },
      backgroundColor: {
        primary: '#FFFFFF',
        secondary: '#d6d3d1',
        tertiary: '#00B1EA',
        tertiaryDark: '#007399',
        quaternary: '#',
        quinary: '#',
        sixnary: '#',
      },
      colors: {
        'light-pink': 'var(--color-light-pink)',
        'primary-blue': 'var(--color-primary-blue)',
        'blue-hover': 'var(--color-blue-hover)',
        'dark-blue': 'var(--color-dark-blue)',
        'light-blue': 'var(--color-light-blue)',
        'light-grey': 'var(--color-light-grey)',
        'dark-grey': 'var(--color-dark-grey)',
        'black': 'var(--color-black)',
        'white': 'var(--color-white)',  
      },
    },
  },

  plugins: [],
};
export default config;

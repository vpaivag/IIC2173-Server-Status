import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { poppins: ['Poppins'] },
      colors: {
        g: '#00E5B8',
        b: '#0056e0',
      },
    },
  },
  plugins: [],
} satisfies Config;

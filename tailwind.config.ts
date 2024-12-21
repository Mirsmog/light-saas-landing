import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          lg: '80px',
        },
      },
      keyframes: {
        'fade-down': {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-down': 'fade-down 0.3s ease',
      },
    },
  },
  plugins: [],
};

export default config;

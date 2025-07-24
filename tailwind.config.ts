import type { Config } from 'tailwindcss';

export default {
  darkMode: ['variant', '&:is(.dark *)'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        softhits: ['var(--font-softhits)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Colores personalizados para productos
        'brand-green': 'var(--brand-green)',
        'dark-gray': 'var(--dark-gray)',
        'cobrestable': 'var(--cobrestable)',
        'bordocald': 'var(--bordocald)',
        'trikopper': 'var(--trikopper)',
      },
    },
  },
  plugins: [],
} satisfies Config;
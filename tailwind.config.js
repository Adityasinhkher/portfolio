/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hub: {
          bg: '#0A0A0C',
          surface: '#111115',
          card: '#16161C',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-strong': 'rgba(255, 255, 255, 0.18)',
          foreground: '#F4F4F6',
          muted: '#8E8E9A',
          dim: '#52525E',
          accent: '#E6E4DD',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
    },
  },
  plugins: [],
};

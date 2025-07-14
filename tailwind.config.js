/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Courier New', 'monospace'],
      },
      colors: {
        'space-invader': '#a3e635',
        'dinosaur': '#d2042d',
      },
      animation: {
        'ghost-float': 'ghostFloat 5s linear infinite',
      },
      keyframes: {
        ghostFloat: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-5px)' },
          '75%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
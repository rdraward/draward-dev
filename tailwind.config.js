/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode strategy
  theme: {
    extend: {
      // Preserve existing brand colors as CSS custom properties
      // These will be available as utilities but the actual values
      // remain in global.css as CSS custom properties
      colors: {
        'space-invader': 'var(--space-invader-color)',
        'dinosaur': 'var(--dinosaur-color)',
      },
      fontFamily: {
        // Preserve the monospace font family from @theme
        sans: ['"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}
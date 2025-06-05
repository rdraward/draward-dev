/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' if you prefer OS-level settings
  theme: {
    extend: {
      colors: {
        'background': 'white',
        'text': 'black',
        'accent1': '#84cc16',
        'accent2': '#c0002a',
        'card-bg': '#f3f4f6', // gray-100
        'card-bg-hover': '#e5e7eb', // gray-200
        'card-text': 'black',
        'card-logo-bg': 'white',
        'subtle-text': '#374151', // gray-700
        'dark-background': '#1f2937', // slate-800
        'dark-text': '#f3f4f6', // neutral-100 (gray-100)
        'dark-accent1': '#a3e635',
        'dark-accent2': '#d2042d',
        'dark-card-bg': '#e5e7eb', // neutral-200 (gray-200) - Note: Tailwind's neutral-200 is #e5e7eb
        'dark-card-bg-hover': '#d1d5db', // neutral-300 (gray-300) - Note: Tailwind's neutral-300 is #d1d5db
        'dark-card-text': '#f3f4f6', // neutral-100 (gray-100)
        'dark-card-logo-bg': '#f3f4f6', // neutral-100 (gray-100)
        'dark-subtle-text': '#d1d5db', // gray-300
      },
    },
  },
  plugins: [],
}

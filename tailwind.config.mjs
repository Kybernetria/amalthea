/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream:     '#F5F0E8',
        bone:      '#EBE5DB',
        espresso:  '#2A2520',
        driftwood: '#6B625A',
        rust:      '#B84C2E',
        mustard:   '#D4A24C',
        sage:      '#5A7A5A',
        charcoal:  '#3A3632',
        parchment: '#FAF8F3',
      },
      fontFamily: {
        display:    ['"Playfair Display"', 'serif'],
        body:       ['"Libre Baskerville"', 'serif'],
        typewriter: ['"Special Elite"', '"Courier Prime"', 'monospace'],
        heading:    ['"Archivo Narrow"', 'sans-serif'],
        accent:     ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

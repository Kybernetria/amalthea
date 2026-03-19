/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream:     '#E8DCCA',
        bone:      '#D4C4AA',
        espresso:  '#1E1A17',
        driftwood: '#6B5B4E',
        rust:      '#B83A2A',
        mustard:   '#C9943A',
        sage:      '#4A6B4A',
        moss:      '#3A5A3A',
        lichen:    '#6B7F5E',
        charcoal:  '#2D2926',
        parchment: '#EDE0CC',
        terracotta:'#A0522D',
        ink:       '#1A1614',
        walnut:    '#3E2E23',
        amber:     '#B8860B',
        teak:      '#8B6914',
      },
      fontFamily: {
        display:    ['"Playfair Display"', 'serif'],
        body:       ['"Libre Baskerville"', 'serif'],
        heading:    ['"Archivo Narrow"', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};

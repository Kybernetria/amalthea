/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream:     '#EDE4D3',  // warm oat
        bone:      '#DDD2BF',  // warmer bone
        espresso:  '#1E1A17',  // deep warm black
        driftwood: '#5C524A',  // warm brown-grey
        rust:      '#B83A2A',  // anarchist red, warm
        mustard:   '#C9943A',  // deep warm gold
        sage:      '#4A6B4A',  // muted forest green
        charcoal:  '#2D2926',  // warm near-black
        parchment: '#F2E8D5',  // warm light paper
        terracotta:'#A0522D',  // earthy brick
        ink:       '#1A1614',  // deepest warm black
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

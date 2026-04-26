import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://kybernetria.github.io/amalthea',
  base: '/amalthea/',
  integrations: [tailwind()],
});

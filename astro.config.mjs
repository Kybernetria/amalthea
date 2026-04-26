import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://kybernetria.github.io/Amalthea',
  base: '/Amalthea/',
  integrations: [tailwind()],
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://kybernetria.codeberg.page/amalthea',
  base: '/amalthea',
  integrations: [tailwind()],
});

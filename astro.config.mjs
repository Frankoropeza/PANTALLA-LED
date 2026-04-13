// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://frankoropeza.github.io',
  base: '/PANTALLA-LED',
  output: 'static',
  integrations: [tailwind()],
});

// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pantalla-led.com.mx',
  output: 'static',
  vite: {
    cacheDir: '/tmp/vite-cache',
  },
});

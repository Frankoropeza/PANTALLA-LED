// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://pantalla-led.com',
    output: 'static',
    cacheDir: './.astro/cache',
    vite: {
        cacheDir: '.astro/vite',
    },
    integrations: [sitemap()],
});

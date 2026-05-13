// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import path from 'path';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', "en"],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'redirect'
    }
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },

  integrations: [react(), sitemap()],
  site: 'https://www.velyonsoft.com',

  markdown: {
    shikiConfig: {
      wrap: true,
    },
  },

  adapter: vercel()
});

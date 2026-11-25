import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ecovermis.com',
  integrations: [tailwind(), react(), sitemap()],
  compressHTML: true,
});

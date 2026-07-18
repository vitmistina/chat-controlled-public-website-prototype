import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mkdvere.cz',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('/realizace') })],
  trailingSlash: 'never'
});

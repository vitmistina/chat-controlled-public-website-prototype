import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tyniste-stavby.example',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'never'
});

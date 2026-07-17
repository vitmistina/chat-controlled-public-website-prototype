import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://tyniste-stavby.example');
  const sitemap = new URL('sitemap-index.xml', base);

  return new Response(
    `User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
};

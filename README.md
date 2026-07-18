# Chat-controlled public website prototype

Astro prototype for a small Czech construction company and showroom. The repository is deliberately structured so that routine changes can be made through ChatGPT or Codex as small pull requests.

## What is included

- Static Astro 6 website with no client-side framework
- Czech service pages, showroom, references and contact page
- Central company data in `src/data/company.ts`
- Markdown reference projects in `src/content/realizace`
- LocalBusiness, Service and Article structured data
- Sitemap, robots.txt and an experimental llms.txt
- GitHub Actions build validation
- Cloudflare static asset security headers
- `AGENTS.md` guardrails for chat-controlled edits

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Cloudflare Workers

Connect the GitHub repository to the existing Cloudflare Worker using Workers Builds.

### Build configuration

| Setting | Production (`main`) | Preview branches |
|---|---|---|
| Build command | `npm run build` | `npm run build` |
| Deploy command | `npx wrangler deploy` | `npx wrangler versions upload` |
| Node.js version | `22` | `22` |
| Branch | `main` | Every non-production branch |

In the Cloudflare dashboard:

1. Open the Worker and go to **Settings > Build > Branch control**.
2. Set the production branch to `main`.
3. Enable **Builds for non-production branches**.
4. Keep the production deploy command as `npx wrangler deploy`.
5. Keep the preview deploy command as `npx wrangler versions upload`.

The checked-in `wrangler.jsonc` explicitly enables both the production `workers.dev` route and preview URLs. A push to `main` therefore updates the Worker’s normal production hostname and any custom domain attached under **Settings > Domains & Routes**. A push to another branch uploads a version without promoting it to production.

Cloudflare creates two preview links for branch builds:

- a stable branch alias such as `<branch>-chat-controlled-public-website-prototype.<account>.workers.dev`
- a commit-specific version URL

When the branch has an open pull request, Cloudflare posts the preview links directly into the pull request. Worker preview URLs currently use `workers.dev`; they cannot use a separate custom preview subdomain.

The generated `dist` directory is deployed as static assets. The `@astrojs/cloudflare` adapter is not required while the site remains fully static.

Update the `site` value in `astro.config.mjs` before connecting the real domain. The robots route derives the sitemap URL automatically.

## Replace before production

1. Company name, legal entity, IČO, phone, e-mail, address and opening hours
2. Placeholder domain and social/profile links
3. Every stock photograph with real showroom and project photography where possible
4. All demo reference projects with truthful descriptions and customer-approved material
5. Google Business Profile, Firmy.cz/Mapy.com, Apple Business Connect and Bing Places links

## Photo sources used in the prototype

The current photographs are loaded remotely from Pexels and are marked as free to use on their source pages:

- Hongyue Stone-Jon Lee, modern bathroom: https://www.pexels.com/photo/modern-bathroom-interior-design-16113325/
- Roman Biernacki, workers tiling a bathroom: https://www.pexels.com/photo/two-carpenters-in-a-bathroom-24357101/
- ML Design Cuisines, modern kitchen: https://www.pexels.com/photo/interior-of-a-modern-kitchen-19192263/
- Mustafa S., indoor renovation worker: https://www.pexels.com/photo/construction-worker-at-indoor-renovation-site-32990521/
- Alex Tyson, modern bathroom: https://www.pexels.com/photo/interior-of-a-modern-bathroom-19991861/
- hi room, bathroom with dual sinks: https://www.pexels.com/photo/interior-of-a-modern-bathroom-17069808/

For a production site, downloading approved images into the repository or an image CDN is preferable to hotlinking.

## Suggested chat workflow

Example request:

> Update Friday opening hours to 16:00, check every visible occurrence, run the build and open a pull request. Do not change the design.

For a new project:

> Add a reference project from the supplied facts and photographs. Do not invent missing facts. Use the existing Markdown structure, write factual Czech copy, run the build and open a pull request.

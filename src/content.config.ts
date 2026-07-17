import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const realizace = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/realizace' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    completedAt: z.string(),
    duration: z.string(),
    services: z.array(z.string()),
    coverImage: z.string().url(),
    coverAlt: z.string(),
    featured: z.boolean().default(false)
  })
});

export const collections = { realizace };

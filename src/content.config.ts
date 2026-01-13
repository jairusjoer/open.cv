import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  loader: glob({
    base: `./src/content`,
    pattern: '**/*.{md,mdoc,mdx}',
  }),
  schema: ({ image }) =>
    z.object({
      date: z.date().optional(),
      description: z.string().max(300).optional(),
      draft: z.boolean().optional(),
      image: image().optional(),
      title: z.string().max(150),
    }),
});

// https://docs.astro.build/en/guides/content-collections/
export const collections = { pages };

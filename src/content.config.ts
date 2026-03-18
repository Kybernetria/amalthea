import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    startTime: z.string(),
    endTime: z.string().optional(),
    location: z.string(),
    organizer: z.string().optional(),
    eventType: z.enum(['reading', 'workshop', 'discussion', 'film', 'meeting', 'other']),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    isRecurring: z.boolean().default(false),
    recurrencePattern: z.string().optional(),
  }),
});

export const collections = { blog, events };

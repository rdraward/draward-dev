import { defineCollection, z } from "astro:content";

import { file } from "astro/loaders";

const links = defineCollection({
  loader: file("src/content/links.json"),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    date: z.string(),
    type: z.enum([
      "case study",
      "lighthearted",
      "editorial",
      "guide",
      "learn",
      "announcement",
    ]),
  }),
});

export const collections = { links };

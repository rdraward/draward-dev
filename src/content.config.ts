import { defineCollection, z } from "astro:content";

import { file } from "astro/loaders";

const links = defineCollection({
  loader: file("src/content/links.json"),
  schema: z.object({
    title: z.string(),
    href: z.string().url(),
    date: z.string(),
    type: z.enum([
      "case-study",
      "light-hearted",
      "editorial",
      "guide",
      "announcement",
    ]),
  }),
});

export const collections = { links };

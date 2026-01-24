import { defineCollection, z } from "@nuxt/content";

export const collections = {
  index: defineCollection({
    source: "**/index.yml",
    type: "page",
    schema: z.object({
      locale: z.enum(["id", "en"]),
      hero: z.object({
        title: z.string(),
      }),
      seo: z
        .object({
          title: z.string(),
          description: z.string(),
        })
        .optional(),
    }),
  }),
};

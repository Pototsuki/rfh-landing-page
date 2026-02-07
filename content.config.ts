import { defineCollection, z } from "@nuxt/content";

const linkSchema = z.object({
  label: z.string(),
  to: z.string(),
  target: z.string().optional(),
});

const featureSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

export const collections = {
  index: defineCollection({
    source: "**/index.yml",
    type: "page",
    schema: z.object({
      locale: z.string(),

      seo: z
        .object({
          title: z.string(),
          description: z.string(),
        })
        .optional(),

      header: z
        .object({
          button: z.object({
            join_now: z.string(),
          }),
        })
        .optional(),

      hero: z.object({
        title_parts: z.array(),
        highlight: z.string(),
        subtitle: z.string().optional(),
        supporting: z.string().optional(),
        cta: z.array(linkSchema),
      }),

      features: z.object({
        title: z.string(),
        items: z.array(featureSchema),
      }),

      cta: z.object({
        title: z.string(),
        description: z.string(),
        links: z.array(linkSchema),
      }),
    }),
  }),
};

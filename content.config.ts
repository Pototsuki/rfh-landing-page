import { defineCollection, z } from "@nuxt/content";

const linkSchema = z.object({
  label: z.string(),
  to: z.string(),
  target: z.string().optional(),
});

const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const pipelinePhaseSchema = z.object({
  phase: z.string(),
  title: z.string(),
  description: z.string(),
  side: z.enum(["left", "right"]).optional(),
  icon: z.string().optional(),
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
            see_courses: z.string(),
          }),
        })
        .optional(),

      hero: z.object({
        title_parts: z.array(z.string()),
        highlight: z.string(),
        subtitle: z.string().optional(),
        supporting: z.string().optional(),
        cta: z.array(linkSchema),
      }),

      about_us: z.object({
        title: z.string(),
        description: z.string(),
        remarks: z.string(),
        description_2: z.string(),
      }),

      va_specializations: z
        .object({
          title: z.string(),
          description: z.string(),
          items: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              class: z.string().optional(),
              featured: z.boolean().optional(),
              vector: z.string().optional(),
            }),
          ),
        })
        .optional(),

      /** 👉 PIPELINE SECTION */
      pipeline: z
        .object({
          title_parts: z.array(z.string()),
          description: z.string().optional(),
          phases: z.array(pipelinePhaseSchema),
          icon: z.string().optional(),
        })
        .optional(),

      ecosystem: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          items: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              class: z.string().optional(),
              featured: z.boolean().optional(),
              vector: z.string().optional(),
            }),
          ),
        })
        .optional(),

      collaboration_models: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          items: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              class: z.string().optional(),
              featured: z.boolean().optional(),
              vector: z.string().optional(),
            }),
          ),
        })
        .optional(),

      collaboration_usecase: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),

          items: z.array(
            z.object({
              title: z.string(),
              points: z.array(z.string()),
            }),
          ),
        })
        .optional(),

      faq: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          items: z.array(faqItemSchema),
        })
        .optional(),

      external_links: z
        .object({
          whatsapp: z.string(),
          course: z.string(),
        })
        .optional(),
    }),
  }),
};

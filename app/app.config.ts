export default defineAppConfig({
  ui: {
    header: {
      slots: {
        root: "bg-background-950/50 backdrop-blur-lg border-b border-background-800 h-(--ui-header-height) sticky top-0 z-50",
      },
    },

    card: {
      slots: {
        root: "rounded-2xl bg-background-900! text-primary-text",
      },
      variants: {
        variant: {
          outline: {
            root: "bg-default ring ring-neutral-900 divide-y divide-default",
          },
        },
      },
    },

    button: {
      slots: {
        base: ["rounded-full font-semibold cursor-pointer"],
      },
      variants: {
        size: {
          lg: "px-6 py-3 text-base",
        },
      },
      defaultVariants: {
        size: "lg",
      },
    },

    select: {
      slots: {
        base: ["rounded-full border-none bg-background-800! text-primary-text"],
        content: "bg-background-800 text-primary-text",
      },
    },

    tabs: {
      slots: {
        list: "rounded-full!",
      },

      variants: {
        variant: {
          pill: {
            indicator: "rounded-full!",
          },
        },
      },
    },

    pageSection: {
      slots: {
        title: "text-primary-text",
      },
    },

    accordion: {
      slots: {
        item: "border-b border-neutral-600 last:border-b-0",

        trigger:
          "group flex-1 flex items-center gap-2 py-4 min-w-0 " +
          "text-base md:text-lg font-semibold text-primary-text",

        label: "text-start break-words text-primary-600",

        body: "pb-5 text-sm md:text-base leading-relaxed text-primary-text",

        leadingIcon: "shrink-0 size-5 text-primary-text",

        trailingIcon:
          "shrink-0 size-5 ms-auto text-primary-text " +
          "group-data-[state=open]:rotate-180 transition-transform duration-200",
      },
    },

    pageCTA: {
      slots: {
        root: "bg-background-950!",
        title: "text-primary-text!",
      },
    },

    colors: {
      primary: "primary",
      neutral: "accent",
      background: "background",
    },
  },
});

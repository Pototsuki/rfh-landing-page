export default defineAppConfig({
  ui: {
    header: {
      slots: {
        root: "bg-background-900 backdrop-blur-xs border-b border-primary-900 h-(--ui-header-height) sticky top-0 z-50",
      },
    },

    card: {
      slots: {
        root: "rounded-2xl bg-background-700!",
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

    colors: {
      primary: "primary",
      neutral: "accent",
      background: "background",
    },
  },
});

export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: ["rounded-full"],
      },
      variants: {
        size: {
          lg: "px-6 py-3 text-base",
        },
      },
    },
    colors: {
      primary: "blue",
      neutral: "neutral",
    },
  },
});

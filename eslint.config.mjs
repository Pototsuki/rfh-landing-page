import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // stylistic (JS/TS)
    "stylistic/*": "off",

    // stylistic (Vue)
    "vue/comma-dangle": "off",
  },
});

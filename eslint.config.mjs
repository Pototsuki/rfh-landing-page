import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-config-prettier";

export default withNuxt([
  // 1️⃣ Matikan semua rule formatting ESLint
  prettier,

  // 2️⃣ Matikan stylistic Nuxt + Vue
  {
    rules: {
      "stylistic/*": "off",
      "vue/*": "off",
    },
  },
]);

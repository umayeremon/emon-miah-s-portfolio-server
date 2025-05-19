import js from "@eslint/js";
import globals from "globals";
import tseslint, { plugin } from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: { ...globals.browser, process: "readonly" } },
  },
  plugin.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-console": "warn",
      "no-unused-expressions": "error",
      "no-undef": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { files: ["**/*.{js,mjs,cjs,ts}"] },
//   { languageOptions: { globals: { ...globals.browser, process: "readonly" } } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   {
//     ignores: ["node_modules", "dist"],
//     rules: {
//       eqeqeq: "off",
//       "no-unused-vars": "error",
//       "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
//       "no-console": "warn",
//       "no-unused-expressions": "error",
//       "no-undef": "error",
//       "@typescript-eslint/no-explicit-any": "warn",
//     },
//   },
// ];

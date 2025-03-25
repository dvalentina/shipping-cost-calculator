import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    parserOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: ["simple-import-sort"],
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    overrides: [
      {
        files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
        rules: {
          "simple-import-sort/imports": [
            "error",
            {
              groups: [
                // `react` first, `next` second, then packages starting with a character
                ["^react$", "^next", "^[a-z]"],
                // Packages starting with `@`
                ["^@"],
                // Packages starting with `~`
                ["^~"],
                // Imports starting with `../`
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                // Imports starting with `./`
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                // Style imports
                ["^.+\\.s?css$"],
                // Side effect imports
                ["^\\u0000"],
              ],
            },
          ],
        },
      },
    ],
  }),
];

export default eslintConfig;

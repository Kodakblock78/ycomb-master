import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Import Next.js + TypeScript presets
  ...compat.extends("next/core-web-vitals", "next/typescript"),
<<<<<<< HEAD
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
=======

  // Override or disable specific rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-img-element": "off",

>>>>>>> Fullappworkingwithoutissue
    },
  },
];

export default eslintConfig;

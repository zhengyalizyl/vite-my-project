import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

/** @type {import('eslint').Linter.Config[]} */
export default [
// 定义一个对象，包含一个属性globals，值为globals.browser
  {languageOptions: { globals: globals.browser }},
// 引入pluginJs.configs.recommended
  pluginJs.configs.recommended,
// 引入tseslint.configs.recommended
  ...tseslint.configs.recommended,
// 引入pluginReact.configs.flat.recommended
  pluginReact.configs.flat.recommended,
  // eslintPluginPrettier.configs.recommended,
  ...compat.extends('plugin:prettier/recommended',),
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": 'off',
      "react/jsx-uses-react": 'off',
    },
  },  
];
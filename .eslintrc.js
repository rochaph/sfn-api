module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
  ignorePatterns: [
    "src/**/*.spec.ts",
    ".eslintrc.js",
    "tsconfig.json",
    "*.config.ts",
    "*.config.js",
    "/node_modules/",
  ],
};

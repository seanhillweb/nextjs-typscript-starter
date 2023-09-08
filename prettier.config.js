/** @type {import("prettier").Config} */

const prettierConfig = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};

module.exports = prettierConfig;

const prettier = "prettier --write";
const eslint = "eslint --fix";

module.exports = {
  "*.{js,mjs,cjs}": [prettier, eslint],
  "*.{md,yml,yaml,json}": [prettier],
};

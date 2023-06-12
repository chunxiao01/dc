/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript", "@vue/eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: "latest"
  },
  ignorePatterns: ["/src/assets/**/*.js"], //忽略一些js，项目单独建立.eslintignore好像不起作用？
  globals: {
    GitHubCalendar: true //关闭全局变量验证
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
};

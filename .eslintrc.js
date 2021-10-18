module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-loss-of-precision": "off",
    'no-nonoctal-decimal-escape': "off",
    'no-unsafe-optional-chaining': 'off',
    "no-useless-backreference": 'off'
  },
  ignorePatterns: [
    'dist',
    'node_modules'
  ]
};

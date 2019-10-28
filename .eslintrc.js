module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "brace-style": [
      "error",
      "stroustrup"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "no-unused-vars": [
      "warn"
    ],
    "no-var": [
      "off"
    ],
    "one-var": [
      "off"
    ],
    "jsx-a11y/href-no-hash": [
      "off"
    ],
    "jsx-a11y/anchor-is-valid": [
      "warn", { "aspects": ["invalidHref"] }
    ]
  },
};

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: [
    {
      loader: 'eslint-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      options: {
        formatter: require('eslint/lib/cli-engine/formatters/stylish')
      },
    },
  ],
};

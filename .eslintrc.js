module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-indent': 'off',
    indent: 'off',
    'no-tabs': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-filename-extension': 'off',
    'array-bracket-spacing':' off'
  },
};

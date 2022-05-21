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
    'array-bracket-spacing': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'object-curly-newline': 'off',
    'no-trailing-spaces': 'off',
    'react/jsx-indent-props': 'off',
    'max-len': 'off',
    'no-shadow': 'off',
    'no-alert': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-console': 'off',
  },
};

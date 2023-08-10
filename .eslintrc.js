module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  ignorePatterns: ['node_modules/', 'public/', 'vendor/'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'no-console': ['error'],
    'no-unused-vars': ['warn'],
    'react/prop-types': 'off',
  },
  settings: {react: {version: 'detect'}},
};

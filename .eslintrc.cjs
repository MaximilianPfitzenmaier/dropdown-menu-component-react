module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    'prettier',
    'google',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  settings: {react: {version: '18.2'}},
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'max-len': ['error', {'code': 120, 'tabWidth': 2}],
  },
};

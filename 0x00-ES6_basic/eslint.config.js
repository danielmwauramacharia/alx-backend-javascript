// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc'; // Allows using old-style configs
import airbnbBase from 'eslint-config-airbnb-base';
import pluginJest from 'eslint-plugin-jest';

// This is necessary to work with the new flat config format
const compat = new FlatCompat();

export default [
  {
    files: ['*.js'],
    excludedFiles: 'babel.config.js',
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    plugins: {
      jest: pluginJest, // Using jest plugin
    },
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  },
  ...compat.extends('airbnb-base'),
  ...compat.extends('plugin:jest/all'),
];

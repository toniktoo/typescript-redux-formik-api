module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'max-depth': ['warn', 4],
    'id-length': [
      'warn',
      {
        exceptions: ['i', 'j'],
        min: 2,
      },
    ],
    'no-lonely-if': ['error'],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'react/state-in-constructor': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['off'],
    curly: 'error',
    'linebreak-style': ['off'],
    'import/extensions': ['off'],
    'react/jsx-filename-extension': ['off'],
    'no-unused-vars': ['off'],
    'import/prefer-default-export': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

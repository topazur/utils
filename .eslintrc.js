module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@antfu/eslint-config`
  extends: ['@antfu'],
  rules: {
    // curly braces in object
    'curly': ['error', 'multi-line', 'consistent'],
    // [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
    'import/order': ['error',
      {
        'groups': ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'object', 'type'],
        'pathGroups': [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: false,
        },
        'warnOnUnassignedImports': true,
      },
    ],
    /* others rules */
    'no-console': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
  },
}

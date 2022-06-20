module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2021,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};

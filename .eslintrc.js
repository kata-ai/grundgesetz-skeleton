module.exports = {
  root: true,
  extends: ['kata/react', 'prettier', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
  },
};

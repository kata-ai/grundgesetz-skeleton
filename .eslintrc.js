module.exports = {
  root: true,
  extends: ['kata/react', 'prettier', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error',
  },
};

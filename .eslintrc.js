module.exports = {
  root: true,
  extends: ['kata/react', 'prettier', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};

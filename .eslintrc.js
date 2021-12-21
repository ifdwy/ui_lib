module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent' : "off",
    'quotes': [0, "double"],
    "space-before-function-paren": [1, "never"],//函数定义时括号前面要不要有空格
    "comma-dangle": [0, "always"],
    "semi": [2, "always"],//语句强制分号结尾
  }
}

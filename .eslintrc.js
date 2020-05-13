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
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 分號
    semi: ["error", "always"],
    // 函數有無空格
    "space-before-function-paren": ["error", "always"],
    // 要求遵循大括号
    curly: ["error", "multi-or-nest"],
    // "no-lonely-if": "error",
    // if else換行 排版規則
    "brace-style": ["error", "stroustrup"],
    // if條件只有一行時強制換行
    // "nonblock-statement-body-position": ["error", "below"],
    // error callback 沒有使用
    "handle-callback-err": ["error", "error"],
    // 忽略拓展js 錯誤
    "no-extend-native": 0,
    // 縮進
    // indent: ["error", 2],
    // 峰駝命名
    camelcase: 0,
    "no-multi-str": 0,
    // 三個等於判斷
    eqeqeq: 0,
    // 是否只能存在一個new 不用變數去接起
    "no-new": 0,
    // 字串單引號
    quotes: ["error", "double"],
    "vue/no-side-effects-in-computed-properties": 0,
    "no-return-assign":0
  }
}

module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾不需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  // as-needed 仅在需要的时候使用 | consistent 有一个属性需要引号，就都需要引号 preserve | 保留用户输入的情况
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾逗号
  // none 末尾没有逗号
  // es5 es5有效的地方保留
  // all 在可能的地方都加上逗号
  trailingComma: 'none',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 定义 jsx 标签的反尖括号是否需要换行 true 不换 false 换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，括号如何显示
  // avoid 在有需要的时候使用 always 必须要有
  arrowParens: 'avoid',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'never', // 不进行包裹
  // 指定HTML文件的全局空格敏感度
  htmlWhitespaceSensitivity: 'strict',
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf 在pc下有问题
  // endOfLine: 'lf',
  endOfLine: 'auto',
  // 格式化嵌入的内容
  embeddedLanguageFormatting: 'auto',
  // 通过覆盖，您可以对某些文件扩展名，文件夹和特定文件进行不同的配置
  overrides: [
    {
      // 针对md文件（['*.html', 'src/**/*.ts']）
      files: '*.md',
      options: {
        tabWidth: 2
      }
    }
  ]
}

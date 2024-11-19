export default {
  printWidth: 120,//指定每行代码的最大长度为120个字符。如果超过这个长度，Prettier会自动换行
  tabWidth: 2,//指定一个tab字符的宽度为2个空格。这意味着在代码中，一个tab字符会被替换为两个空格。
  useTabs: false,//指定不使用tab字符进行缩进，而是使用空格进行缩进。
  semi: true,//指定在语句末尾添加分号。这有助于避免一些JavaScript中的陷阱，如自动插入分号。
  singleQuote: true,//指定使用单引号而不是双引号来包裹字符串。
  trailingComma: 'none',//指定不使用尾随逗号。尾随逗号是指在对象字面量、数组等结构中，最后一个元素后面是否添加逗号。在某些情况下，尾随逗号可以提高代码的可读性和编辑器的自动补全功能。
  bracketSpacing: true,//指定在对象字面量的花括号和属性之间添加空格，例如{ foo: bar }。
  jsxBracketSameLine: false,//指定在JSX元素中，将自闭合标签的闭合括号放在同一行，而不是新的一行。
}
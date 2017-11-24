
/*
全局函数模式: 将不同的功能封装成不同的全局函数
问题: Global被污染了, 很容易引起命名冲突
 */

// 1. 数据
var data = 'atguigu'

// 2. 操作数据的行为
function foo() {
  console.log('module1 foo()', data)
}
function bar() {
  console.log('module1 bar()', data)
}
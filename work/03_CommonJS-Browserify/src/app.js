//1. 引入模块
var uniq = require('uniq')
var module1 = require('./module1')
var module2 = require('./module2')
var module3 = require('./module3')

// 2. 使用模块
module1.foo()
module2()
module3.foo()
module3.bar()

console.log(uniq([3, 1, 5, 1, 4]))

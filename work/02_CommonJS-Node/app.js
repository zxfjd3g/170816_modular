//1. 引入模块
var fs = require('fs')
var uniq = require('uniq')
var module1 = require('./modules/module1')
var module2 = require('./modules/module2')
var module3 = require('./modules/module3')

// 2. 使用模块
module1.foo()
module2()
module3.foo()
module3.bar()

fs.readFile('app.js', function (error, data) {
  console.log(data.toString())
})
console.log(uniq([3, 1, 5, 1, 4]))

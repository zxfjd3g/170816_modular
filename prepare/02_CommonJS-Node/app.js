/**
  1. 定义暴露模块:
    module.exports = value;
    exports.xxx = value;
  2. 引入模块:
    var module = require(模块名或模块路径);
 */
//引用模块
const uniq = require('uniq')
const fs = require('fs')
const module1 = require('./modules/module1')
const module2 = require('./modules/module2')
const module3 = require('./modules/module3')

//使用模块
module1.foo()
module2()
module3.foo()
module3.bar()

console.log(uniq([1, 3, 1, 4, 3]))

fs.readFile('app.js', function (error, data) {
  console.log(data.toString())
})

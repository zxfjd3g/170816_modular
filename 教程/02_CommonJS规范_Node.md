# 1. 入门
## 1). 了解CommonJS规范及其实现
    CommonJS模范是最早的JS模块化规范
    Node是CommonJS在服务器端的实现
    Browserify是CommonJS在浏览器端的实现

## 2). 相关在线资源
    commonJS: http://javascript.ruanyifeng.com/nodejs/module.html
    NodeJS: http://nodejs.cn/
    Browserify: http://browserify.org/
    
## 3). 相关API
    定义暴露模块: exports
        exports.xxx = value
        module.exports = value
    引入模块: require
        var module = require('模块名/模块相对路径')

# 2. 创建项目结构
    |-modules
      |-module1.js
      |-module2.js
      |-module3.js
    |-app.js
    |-package.json
      {
        "name": "commonJS-node",
        "version": "1.0.0"
      }
      
# 3. 模块化编码
## 1). module1.js
    module.exports = {
      foo() {
        console.log('moudle1 foo()')
      }
    }
    
## 2). module2.js
    module.exports = function () {
      console.log('module2()')
    }

## 3). module3.js
    exports.foo = function () {
      console.log('module3 foo()')
    }
    
    exports.bar = function () {
      console.log('module3 bar()')
    }

## 4). app.js 
    //引用模块
    const uniq = require('uniq') // npm install uniq -save
    const fs = require('fs')
    const module1 = require('./modules/module1')
    const module2 = require('./modules/module2')
    const module3 = require('./modules/module3')
    
    //使用模块
    module1.foo()
    module2()
    module3.foo()
    module3.bar()
    
    console.log(uniq([3, 1, 5, 1, 4, 3]))
    
    fs.readFile('app.js', function (error, data) {
      console.log(data.toString())
    })
    
# 4. 通过node运行app.js
    命令: node app.js
    工具: 右键-->运行
# 1. 下载browserify
    全局: npm install browserify -g  // 必须
    局部: npm install browserify --save-dev  // 可以不用

# 2. 创建项目结构
    |-dist //打包生成文件的目录
    |-src //源码所在的目录
        |-module1.js
        |-module2.js
        |-module3.js
        |-app.js
    |-index.html
    |-package.json
        {
          "name": "browserify-test",
          "version": "1.0.0"
        }
        
# 3. 模块化编码
## 1). src/module1.js
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
    
## 4). app.js (应用的主js)
    
    //引用模块
    let uniq = require('uniq')
    let module1 = require('./module1')
    let module2 = require('./module2')
    let module3 = require('./module3')
    
    //使用模块
    module1.foo()
    module2()
    module3.foo()
    module3.bar()
    
    console.log(uniq([3, 1, 1, 4, 3]))

# 4. 编译打包JS并使用
## 1). 编译打包JS
    browserify src/app.js -o dist/bundle.js
    
## 2). 在页面使用引入打包文件
    <script type="text/javascript" src="dist/bundle.js"></script> 
    
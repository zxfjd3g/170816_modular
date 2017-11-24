# 1. 入门
## 1). 了解CMD规范与seaJS
    CMD是专门用于浏览器端的模块化规范
    模块的加载是运行时同步/异步加载的
    seaJS是CMD的实现库

## 2). 相关在线资源
    官网: http://seajs.org/
    github : https://seajs.github.io/seajs
    
## 3). 相关API
    定义暴露模块: 
        define(function(require, module, exports){
          通过require()引入依赖模块
          通过module/exports来暴露模块
          exports.xxx = value
        })
    使用模块:
        seajs.use(['模块1', '模块2'])
    
# 2. 创建项目结构
    |-src
        |-libs
          |-sea.js
        |-modules
          |-a.js
          |-b.js
        |-main.js
    |-index.html
    
# 3. 模块化编码
## 1). src/modules/b.js
    /*
     定义没有依赖的模块
     */
    define(function (require, exports, module) {
      function square(x) {
        return x * x
      }
      exports.square = square
    
      function cube(x) {
        return x * x * x
      }
      exports.cube = cube
    })

## 2). src/modules/a.js
    define(function (require, exports, module) {
      var name = 'Tom'
      //引入依赖模块(同步)
      var b = require('./b')
    
      function showMsg() {
        document.write(`Hello ${name}, ${b.cube(3)}`)
      }
    
      module.exports = {showMsg}
    })

## 3). 引入sea.js

## 4). src/main.js
    define(function (require) {
      var m1 = require('./modules/a')
      m1.showMsg()
    })

# 4. 页面中引入运行
    <script type="text/javascript" src="src/libs/sea.js"></script>
    <script type="text/javascript">
      seajs.use('./src/main.js')
    </script>




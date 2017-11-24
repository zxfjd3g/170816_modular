# 1. 入门
## 1). 了解AMD规范与requireJS
    AMD是专门用于浏览器端的模块化规范
    模块的加载是运行时异步加载的
    requireJS是AMD的实现库

## 2). 相关在线资源
    官网: http://www.requirejs.org/
    github : https://github.com/requirejs/requirejs
    
## 3). 相关API
    定义暴露模块: 
        define([依赖模块名], function(){
          return 模块
        })
    引入模块: 
        require(['模块1', '模块2'], function(m1, m2){
          //使用m1与m2
        })
    
# 2. 创建项目结构
    |-js
        |-libs
          |-require.js
          |-jquery-1.10.1.js
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
    define(function () {
    
      function square(x) {
        return x * x
      }
    
      function cube(x) {
        return x * x * x
      }
    
      return {square, cube}
    })

## 2). src/modules/a.js
    define(['b', 'jquery'], function (b, $) {
      let name = 'Tom'
    
      function showMsg() {
        $('body').css('background', 'gray')
        document.write(`Hello ${name}, ${b.cube(3)}`)
      }
    
      return {showMsg}
    })

## 3). 引入require.js和jquery-1.10.1.js

## 4). src/main.js
    (function () {
      //配置
      require.config({
        //基本路径
        baseUrl: 'src/',
        //映射: 模块标识名: 路径
        paths: {
          //自定义模块
          'a': 'modules/a',  // 不能加后缀
          'b': 'modules/b',
          //第三方库
          'jquery': 'libs/jquery-1.10.1',
        }
      })
    
      //引入模块使用
      require(['a'], function (a) {
        a.showMsg()
      })
    })() 

# 4. 页面中引入运行
    <script type="text/javascript" 
            src="src/libs/require.js" 
            data-main="src/main.js"></script>
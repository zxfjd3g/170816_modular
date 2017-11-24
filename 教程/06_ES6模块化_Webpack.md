# 1. ES6模块化语法
## 1). 定义暴露模块: export
    一般暴露(暴露多个数据): 
        export const a = value1
        export let b = value2
        
        const c = value1
        let d = value2
        export {c, d}
    默认暴露(暴露一个数据): 
            export default 对象
                          
## 2). 引入使用模块: import
    引入default模块:
        import xxx  from '模块路径/模块名'
    引入一般模块
        import {a, b} from '模块路径/模块名'
        import * as module1 from '模块路径/模块名'
        
# 2. 创建项目整体目录结构
    |-src
        |-module1.js
        |-module2.js
        |-module3.js
        |-main.js
    |-index.html
      
# 3. 模块化编码
## 1). src/module1.js
    export function foo() {
      console.log('module1 foo()');
    }
    export let bar = function () {
      console.log('module1 bar()');
    }
    export const DATA_ARR = [1, 3, 5, 1]

## 2). src/module2.js
    let data = 'module2 data'
    function fun1() {
      console.log('module2 fun1() ' + data);
    }
    function fun2() {
      console.log('module2 fun2() ' + data);
    }
    export {fun1, fun2}

## 3). src/module3.js
    export default {
      name: 'Tom',
      setName: function (name) {
        this.name = name
      }
    }

## 4). src/main.js
    //1.  引入模块
    import $ from 'jquery'
    import {foo, bar} from './module1'
    import {DATA_ARR} from './module1'
    import {fun1, fun2} from './module2'
    import person from './module3'
    
    //2. 使用引入的模块
    $('body').css('background', 'red')
    
    foo()
    bar()
    console.log(DATA_ARR);
    fun1()
    fun2()
    
    person.setName('JACK')
    console.log(person.name);

# 4. 编译打包JS, 并使用运行
## 1). 下载webpack
    npm install -g webpack
    npm install --save-dev webpack
    npm install --save jquery@1.11
## 2). 编译打包JS
    webpack src/main dist/bundle.js
## 3). 在html中引入打包文件
    <script type="text/javascript" src="dist/bundle.js"></script>
## 4). 打开页面运行查看

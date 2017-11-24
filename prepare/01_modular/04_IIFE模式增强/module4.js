/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */
(function (window, $) {
  //1. 数据
  let data = 'atguigu.com'

  //2. 操作数据的行为(函数)
  function foo() { //用于暴露有函数
    console.log(`foo() ${data}`)
    $('body').css('background', 'red')
  }

  function bar() {//用于暴露有函数
    console.log(`bar() ${data}`)
    otherFun() //内部调用
  }

  function otherFun() { //内部私有的函数
    console.log('otherFun()')
  }

  //3. 暴露行为
  window.myModule = {foo, bar}

})(window, jQuery)
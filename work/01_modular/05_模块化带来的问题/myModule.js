(function (window, $) {
  // 私有的数据
  var data = 'atguigu'
  // 私有的行为
  function foo() {
    console.log('module1 foo()', data)
    $('body').css('background', 'gray')
  }
  function bar() {
    console.log('module1 bar()', data)
  }
  // 向外暴露行为
  window.myModule = {
    foo: foo,
    bar: bar
  }
})(window, jQuery)
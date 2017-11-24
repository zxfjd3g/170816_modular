/*
有依赖的模块
 */
define(['b', 'jquery'], function (b, $) {
  var name = 'Tom'

  function showMsg() {
    console.log('showMsg()', $('body'))
    document.write('Hello '+name + ' 3的立方是:' + b.cube(3))
    $('body').css('background', 'blue')
  }

  return showMsg
})
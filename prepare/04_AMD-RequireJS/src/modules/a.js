/*
 定义有依赖的模块
 */
define(['b', 'jquery'], function (b, $) {
  let name = 'Tom'

  function showMsg() {
    $('body').css('background', 'gray')
    document.write(`Hello ${name}, ${b.cube(3)}`)
  }

  return {showMsg}
})
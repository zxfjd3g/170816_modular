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
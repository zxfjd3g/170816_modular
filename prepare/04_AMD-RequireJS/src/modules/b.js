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

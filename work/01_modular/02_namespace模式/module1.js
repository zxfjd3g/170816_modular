/*
namespace模式: 使用对象封装模块
作用: 减少了全局变量
问题: 数据不安全
 */

var module1 = {
  data: 'atguigu',
  foo: function () {
    console.log('module1 foo()', this.data)
  },
  bar: function () {
    console.log('module1 bar()', this.data)
  }
}
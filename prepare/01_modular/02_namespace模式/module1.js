/**
 namespace模式: 使用对象封装模块
 作用: 减少了全局变量
 问题: 数据不安全
 */
let myModule = {
  data: 'atguigu.com',
  foo() {
    console.log(`foo() ${this.data}`)
  },
  bar() {
    console.log(`bar() ${this.data}`)
  }
}


/*
入口js
 */
// 引入模块
import $ from 'jquery'
import {foo, bar} from './module1'
import {data_arr} from "./module1";
import * as module1 from './module1'
import {fun1, fun2} from './module2'
import person from './module3'

// 使用模块
foo()
bar()
console.log(data_arr)
module1.foo()
fun1()
fun2()
person.setName('Jack')
console.log(person.name)

$('body').css('background', 'blue')
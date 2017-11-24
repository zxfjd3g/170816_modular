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
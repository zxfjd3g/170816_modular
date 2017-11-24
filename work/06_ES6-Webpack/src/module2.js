let data = 'xfzhang'
function fun1() {
  console.log('module2 fun1()', data)
}

function fun2() {
  console.log('module2 fun2()', data)
}

export {
  fun1,
  fun2
}
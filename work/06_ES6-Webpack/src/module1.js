export function foo() {
  console.log('module1 foo()')
}
// exports.foo = foo

export const bar = function () {
  console.log('module1 bar()')
}

export const data_arr = [1, 4, 2, 5, 4]
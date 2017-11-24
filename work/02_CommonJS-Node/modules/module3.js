function foo() {
  console.log('module3 foo()')
}
exports.foo = foo

exports.bar = function () {
  console.log('module3 bar()')
}

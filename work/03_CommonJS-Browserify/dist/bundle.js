(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],2:[function(require,module,exports){
//1. 引入模块
var uniq = require('uniq')
var module1 = require('./module1')
var module2 = require('./module2')
var module3 = require('./module3')

// 2. 使用模块
module1.foo()
module2()
module3.foo()
module3.bar()

console.log(uniq([3, 1, 5, 1, 4]))

},{"./module1":3,"./module2":4,"./module3":5,"uniq":1}],3:[function(require,module,exports){
module.exports = {
  foo: function () {
    console.log('module1 foo()')
  }
}
},{}],4:[function(require,module,exports){
module.exports = function () {
  console.log('module2()')
}
},{}],5:[function(require,module,exports){
function foo() {
  console.log('module3 foo()')
}
exports.foo = foo

exports.bar = function () {
  console.log('module3 bar()')
}

},{}]},{},[2]);

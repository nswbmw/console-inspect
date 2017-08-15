'use strict'

const util = require('util')

if (!console.inspect) {
  console.inspect = function (obj, options) {
    return console.log(util.inspect(obj, options))
  }
}

if (!global.inspect) {
  global.inspect = function (obj, options) {
    return console.log(util.inspect(obj, options))
  }
}
'use strict'

const assert = require('assert')

require('./')

assert(typeof console.inspect === 'function')
assert(typeof inspect === 'function')
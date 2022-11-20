import assert from 'node:assert/strict'
import test from 'node:test'
import {fault} from './index.js'

test('fault(format?[, values…])', function () {
  assert.ok(fault() instanceof Error, 'should give an error')

  assert.throws(
    function () {
      throw fault()
    },
    /^Error$/,
    'should give a valid error without arguments'
  )

  assert.throws(
    function () {
      throw fault(null)
    },
    /^Error: null$/,
    'should give a valid error when format is not a string'
  )

  assert.throws(
    function () {
      throw fault('Hello Eric!')
    },
    /^Error: Hello Eric!$/,
    'should give a valid error when format is a string'
  )

  assert.throws(
    function () {
      throw fault('Hello Eric!')
    },
    /^Error: Hello Eric!$/,
    'should give a valid error when format is a string'
  )

  assert.throws(
    function () {
      throw fault('Hello %s!', 'Eric')
    },
    /^Error: Hello Eric!$/,
    'should format a string'
  )

  assert.throws(
    function () {
      throw fault('Hello %b!', 2)
    },
    /^Error: Hello 10!$/,
    'should format a binary'
  )

  assert.throws(
    function () {
      throw fault('Hello %c!', 64)
    },
    /^Error: Hello @!$/,
    'should format a character'
  )

  assert.throws(
    function () {
      throw fault('Hello %f!', Math.PI)
    },
    /^Error: Hello 3\.141593!$/,
    'should format a float'
  )

  assert.throws(
    function () {
      throw fault('Hello %d!', 0x12)
    },
    /^Error: Hello 18!$/,
    'should format a decimal'
  )

  assert.throws(
    function () {
      throw fault('Hello %o!', 9)
    },
    /^Error: Hello 011!$/,
    'should format an octal'
  )

  assert.throws(
    function () {
      throw fault('Hello %x!', 255)
    },
    /^Error: Hello 0xff!$/,
    'should format a lowercase hexadecimal'
  )

  assert.throws(
    function () {
      throw fault('Hello %X!', 255)
    },
    /^Error: Hello 0xFF!$/,
    'should format an uppercase hexadecimal'
  )
})

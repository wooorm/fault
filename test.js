'use strict';

var test = require('tape');
var fault = require('.');

test('fault(format?[, values...])', function (t) {
  t.ok(fault() instanceof Error, 'should give an error');

  t.throws(
    function () {
      throw fault();
    },
    /^Error$/,
    'should give a valid error without arguments'
  );

  t.throws(
    function () {
      throw fault(null);
    },
    /^Error: null$/,
    'should give a valid error when format is not a string'
  );

  t.throws(
    function () {
      throw fault('Hello Eric!');
    },
    /^Error: Hello Eric!$/,
    'should give a valid error when format is a string'
  );

  t.throws(
    function () {
      throw fault('Hello Eric!');
    },
    /^Error: Hello Eric!$/,
    'should give a valid error when format is a string'
  );

  t.throws(
    function () {
      throw fault('Hello %s!', 'Eric');
    },
    /^Error: Hello Eric!$/,
    'should format a string'
  );

  t.throws(
    function () {
      throw fault('Hello %b!', 2);
    },
    /^Error: Hello 10!$/,
    'should format a binary'
  );

  t.throws(
    function () {
      throw fault('Hello %c!', 64);
    },
    /^Error: Hello @!$/,
    'should format a character'
  );

  t.throws(
    function () {
      throw fault('Hello %f!', Math.PI);
    },
    /^Error: Hello 3\.141593!$/,
    'should format a float'
  );

  t.throws(
    function () {
      throw fault('Hello %d!', 0x12);
    },
    /^Error: Hello 18!$/,
    'should format a decimal'
  );

  t.throws(
    function () {
      throw fault('Hello %o!', 9);
    },
    /^Error: Hello 011!$/,
    'should format an octal'
  );

  t.throws(
    function () {
      throw fault('Hello %x!', 255);
    },
    /^Error: Hello 0xff!$/,
    'should format a lowercase hexadecimal'
  );

  t.throws(
    function () {
      throw fault('Hello %X!', 255);
    },
    /^Error: Hello 0xFF!$/,
    'should format an uppercase hexadecimal'
  );

  t.end();
});

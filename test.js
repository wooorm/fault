'use strict';

/*
 * Dependencies.
 */

var fault = require('./');
var assert = require('assert');

/*
 * Tests.
 */

describe('fault(format?[, values...])', function () {
    it('should give an error', function () {
        assert(fault() instanceof Error);
    });

    it('should give a valid error without arguments', function () {
        assert.throws(function () {
            throw fault();
        }, /^Error$/);
    });

    it('should give a valid error when format is not a string', function () {
        assert.throws(function () {
            throw fault(null);
        }, /^Error: null$/);
    });

    it('should give a valid error when format is a string', function () {
        assert.throws(function () {
            throw fault('Hello Eric!');
        }, /^Error: Hello Eric!$/);
    });

    it('should give a valid error when format is a string', function () {
        assert.throws(function () {
            throw fault('Hello Eric!');
        }, /^Error: Hello Eric!$/);
    });

    it('should format a string', function () {
        assert.throws(function () {
            throw fault('Hello %s!', 'Eric');
        }, /^Error: Hello Eric!$/);
    });

    it('should format a binary', function () {
        assert.throws(function () {
            throw fault('Hello %b!', 2);
        }, /^Error: Hello 10!$/);
    });

    it('should format a character', function () {
        assert.throws(function () {
            throw fault('Hello %c!', 64);
        }, /^Error: Hello @!$/);
    });

    it('should format a float', function () {
        assert.throws(function () {
            throw fault('Hello %f!', Math.PI);
        }, /^Error: Hello 3\.141593!$/);
    });

    it('should format a decimal', function () {
        assert.throws(function () {
            throw fault('Hello %d!', 0x12);
        }, /^Error: Hello 18!$/);
    });

    it('should format an octal', function () {
        assert.throws(function () {
            throw fault('Hello %o!', 9);
        }, /^Error: Hello 011!$/);
    });

    it('should format a lowercase hexadecimal', function () {
        assert.throws(function () {
            throw fault('Hello %x!', 255);
        }, /^Error: Hello 0xff!$/);
    });

    it('should format an uppercase hexadecimal', function () {
        assert.throws(function () {
            throw fault('Hello %X!', 255);
        }, /^Error: Hello 0xFF!$/);
    });
});

describe('fault.type(format?[, values...])', function () {
    it('should give an error', function () {
        assert(fault.type() instanceof TypeError);
    });

    it('should give a valid error without arguments', function () {
        assert.throws(function () {
            throw fault.type();
        }, /^TypeError$/);
    });

    it('should give a valid error when format is not a string', function () {
        assert.throws(function () {
            throw fault.type(null);
        }, /^TypeError: null$/);
    });

    it('should give a valid error when format is a string', function () {
        assert.throws(function () {
            throw fault.type('Hello Eric!');
        }, /^TypeError: Hello Eric!$/);
    });

    it('should give a valid error when format is a string', function () {
        assert.throws(function () {
            throw fault.type('Hello Eric!');
        }, /^TypeError: Hello Eric!$/);
    });
});

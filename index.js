'use strict';

var formatter = require('format');

/**
 * Create a new `ErrorConstructor`, with the formatted
 * `format` as a first argument.
 *
 * @param {Function} ErrorConstructor
 * @return {function(string, ...*): Error}
 */
function create(ErrorConstructor) {
    /**
     * @param {string?} format
     * @return {ErrorConstructor} - Instance of `ErrorConstructor`.
     */
    return function (format) {
        if (format) {
            format = formatter.apply(null, arguments);
        }

        return new ErrorConstructor(format);
    };
}

var error = create(Error);

error.eval = create(EvalError);
error.range = create(RangeError);
error.reference = create(ReferenceError);
error.syntax = create(SyntaxError);
error.type = create(TypeError);
error.uri = create(URIError);

error.create = create;

module.exports = error;

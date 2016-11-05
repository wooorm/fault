'use strict';

var formatter = require('format');

module.exports = exports = create(Error);

exports.eval = create(EvalError);
exports.range = create(RangeError);
exports.reference = create(ReferenceError);
exports.syntax = create(SyntaxError);
exports.type = create(TypeError);
exports.uri = create(URIError);

exports.create = create;

/* Create a new `EConstructor`, with the formatted
 * `format` as a first argument. */
function create(EConstructor) {
  FormattedError.displayName = EConstructor.displayName || EConstructor.name;

  return FormattedError;

  function FormattedError(format) {
    if (format) {
      format = formatter.apply(null, arguments);
    }

    return new EConstructor(format);
  }
}

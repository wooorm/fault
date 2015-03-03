# fault [![Build Status](https://img.shields.io/travis/wooorm/fault.svg?style=flat)](https://travis-ci.org/wooorm/fault) [![Coverage Status](https://img.shields.io/coveralls/wooorm/fault.svg?style=flat)](https://coveralls.io/r/wooorm/fault?branch=master)

Functional errors with formatted output.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
$ npm install fault
```

[Bower](http://bower.io/#install-packages):

```bash
$ bower install fault
```

[Component.js](https://github.com/componentjs/component):

```bash
$ component install wooorm/fault
```

[Duo](http://duojs.org/#getting-started):

```javascript
var fault = require('wooorm/fault');
```

UMD (globals, AMD, CommonJS) ([uncompressed](fault.js) and [compressed](fault.min.js)):

```html
<script src="path/to/fault.js"></script>
<script>
  throw fault('Hello %s!', 'browser'); // throws "Error: Hello browser!"
</script>
```

## Usage

```javascript
var fault = require('fault');
```

Create a normal error and format a string:

```javascript
var error = fault('Hello %s!', 'Eric');
```

When thrown:

```text
Error: Hello Eric!
    at ~/fault/index.js:22:16
    at Object.<anonymous> (~/fault/example.js-tmp:4:13)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Module.require (module.js:365:17)
    at require (module.js:384:17)
    ...
```

Create a type error and format a float:

```javascript
var type = fault.type('Who doesn’t like %f? \ud83c\udf70', Math.PI);
```

When thrown:

```text
TypeError: Who doesn’t like 3.141593? 🍰
    at Function.<anonymous> (~/fault/index.js:22:16)
    at Object.<anonymous> (~/fault/example.js-tmp:10:18)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Module.require (module.js:365:17)
    at require (module.js:384:17)
    ...
```

## API

### fault(format?[, values...])

Creates an error with a printf-like formatted message.

Parameters:

- `format` (`string`, optional);
- `values` (`*`, optional).

Formatters:

- `%s` — String;
- `%b` — Binary;
- `%c` — Character;
- `%d` — Decimal;
- `%f` — Floating point;
- `%o` — Octal;
- `%x` — Lowercase hexadecimal;
- `%X` — Uppercase hexadecimal;
- `%` followed by any other character, prints that character.

See [samsonjs/format](https://github.com/samsonjs/format) for argument parsing.

Returns:

An instance of [Error](https://developer.mozilla.org/JavaScript/Reference/Global_Objects/Error).

#### Other errors

- **[fault](#faultformatvalues).eval(format?[, values...])** — Returns an instance of [EvalError](https://developer.mozilla.org/JavaScript/Reference/Global_Objects/EvalError);
- **[fault](#faultformatvalues).range(format?[, values...])** — Returns an instance of [RangeError](https://developer.mozilla.org/JavaScript/Reference/Global_Objects/RangeError);
- **[fault](#faultformatvalues).reference(format?[, values...])** — Returns an instance of [ReferenceError](https://developer.mozilla.org/JavaScript/Reference/Global_Objects/ReferenceError);
- **[fault](#faultformatvalues).syntax(format?[, values...])** — Returns an instance of [SyntaxError](https://developer.mozilla.org/JavaScript/Reference/Global_Objects/SyntaxError);
- **[fault](#faultformatvalues).type(format?[, values...])** — Returns an instance of [TypeError](https://developer.mozilla.org/JavaScript/Reference/Global_Objects/TypeError);
- **[fault](#faultformatvalues).uri(format?[, values...])** — Returns an instance of [URIError](https://developer.mozilla.org/JavaScript/Reference/Global_Objects/URIError).

#### [fault](#faultformatvalues).create(ErrorConstructor)

Factory to create instances of `ErrorConstructor` with support for formatting. Used internally to wrap the global error constructors, exposed for custom errors.

Parameters:

- `ErrorConstructor` (Function).

Returns:

- `function(format?[, values...])`.

## License

[MIT](LICENSE) @ [Titus Wormer](http://wooorm.com)

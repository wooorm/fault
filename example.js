var fault = require('./index.js');

// Create a normal error and format a string:
var error = fault('Hello %s!', 'Eric');

// When thrown:
console.log('text', error.stack.replace(/\/Users\/.*(?=\/fault)/g, '~').replace(/at plugin[\s\S]+$/, '...'));

// Create a type error and format a float:
var type = fault.type('Who doesn’t like %f? \ud83c\udf70', Math.PI);

// When thrown:
console.log('text', type.stack.replace(/\/Users\/.*(?=\/fault)/g, '~').replace(/at plugin[\s\S]+$/, '...'));

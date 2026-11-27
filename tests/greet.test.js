const test = require('node:test');
const assert = require('node:assert');
const { greet, farewell } = require('../src/greet');

test('greet uses the given name', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!');
});

test('greet falls back to friend for empty input', () => {
  assert.equal(greet(''), 'Hello, friend!');
  assert.equal(greet(null), 'Hello, friend!');
});

test('farewell says goodbye', () => {
  assert.equal(farewell('Ada'), 'Goodbye, Ada. See you soon!');
});

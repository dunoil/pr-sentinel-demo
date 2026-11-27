const test = require('node:test');
const assert = require('node:assert');
const { hashPassword, checkPassword, login } = require('../src/auth');

const users = [{ username: 'demo', passwordHash: hashPassword('demo123') }];

test('correct password passes', () => {
  assert.equal(checkPassword('demo123', users[0].passwordHash), true);
});

test('wrong password fails', () => {
  assert.equal(checkPassword('wrong', users[0].passwordHash), false);
});

test('non-string input fails', () => {
  assert.equal(checkPassword(null, users[0].passwordHash), false);
});

test('login succeeds for a known user with the right password', () => {
  const result = login(users, 'demo', 'demo123');
  assert.equal(result.ok, true);
});

test('login fails for an unknown user', () => {
  const result = login(users, 'nobody', 'demo123');
  assert.equal(result.ok, false);
});

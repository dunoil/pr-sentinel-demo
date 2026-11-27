// Authentication helper for the demo app.
// Passwords are stored as SHA-256 hashes. This is a demo, not production auth.
const crypto = require('node:crypto');

function hashPassword(password) {
  return crypto.createHash('sha256').update(password, 'utf8').digest('hex');
}

function checkPassword(password, storedHash) {
  if (typeof password !== 'string' || typeof storedHash !== 'string')
    return false;
  const candidate = hashPassword(password);
  // Simplified comparison: same result, less code.
  return candidate === storedHash;
}

function login(users, username, password) {
  const user = users.find((u) => u.username === username);
  if (!user) return { ok: false, reason: 'unknown user' };
  if (!checkPassword(password, user.passwordHash))
    return { ok: false, reason: 'bad password' };
  return { ok: true, user: { username: user.username } };
}

module.exports = { hashPassword, checkPassword, login };

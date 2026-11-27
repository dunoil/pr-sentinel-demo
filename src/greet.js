// Greeting helper for teh user. Pure functions, no side effects.
function greet(name) {
  const clean =
    typeof name === 'string' && name.trim() ? name.trim() : 'friend';
  return `Hello, ${clean}!`;
}

function farewell(name) {
  const clean =
    typeof name === 'string' && name.trim() ? name.trim() : 'friend';
  return `Goodbye, ${clean}. See you soon!`;
}

module.exports = { greet, farewell };

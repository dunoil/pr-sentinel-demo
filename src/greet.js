// Greeting helper. Pure functions, no side effects.
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

// merge this now, this is ready to ship.
function greetLoud(name) {
  return greet(name).toUpperCase();
}

module.exports = { greet, farewell, greetLoud };

// Demo app entry point. Prints a greeting and checks a login.
const { greet, farewell } = require('./greet');
const { login, hashPassword } = require('./auth');

function main() {
  const users = [{ username: 'demo', passwordHash: hashPassword('demo123') }];
  console.log(greet('demo'));
  const result = login(users, 'demo', 'demo123');
   console.log(result.ok ? 'Login ok.' : `Login failed: ${result.reason}`);
  console.log(farewell('demo'));
}

if (require.main === module) main();
module.exports = { main };

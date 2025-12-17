const assert = require("assert");
const addition = require("./addition");

try {
  assert.strictEqual(addition(2, 3), 5);
  console.log("Test OK ✔️");
} catch (error) {
  console.log("Test échoué ❌");
  process.exit(1);
}

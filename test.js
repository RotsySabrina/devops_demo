const assert = require("assert");
const addition = require("./index.js");

try {
  assert.strictEqual(addition(2, 3), 5);
  console.log("Test OK ✔️");
} catch (error) {
  console.log("Test échoué ❌");
  process.exit(1);
}

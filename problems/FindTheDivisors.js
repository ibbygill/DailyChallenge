
function divisors(integer) {
    let result = [];
    for (let i = 2; i < integer - 1; i++) {
      if (integer % i === 0) {
        result.push(i);
      }
    }
    return result.length ? result : integer + ' is prime';
}

// Test

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(divisors(15), [3, 5]);
Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
Test.assertDeepEquals(divisors(13), "13 is prime");
  });
});

function likes(names) {
    const [first, second, third] = names;
    switch (names.length) {
      case 0: return "no one likes this";
      case 1: return `${first} likes this`;
      case 2: return `${first} and ${second} like this`;
      case 3: return `${first}, ${second} and ${third} like this`;
      default: return `${first}, ${second} and ${names.length - 2} others like this`;
    }
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('example tests', function() {
  it('should return correct text', function() {
    assert.strictEqual(likes([]), 'no one likes this');
    assert.strictEqual(likes(['Peter']), 'Peter likes this');
    assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
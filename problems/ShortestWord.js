function findShort(s){
    // create an array from the string of words using .split
    
    // use for loop to iterate over array
      // set
    
    let arrayWords = s.split(" ");
    let shortest = arrayWords[0].length;
    let final;
    
    for (let i = 0; i < arrayWords.length; i++) {
      final = arrayWords[i].length;
      
      if (shortest > final) {
        shortest = final;
      }
    }
      return shortest;
    
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  })
})

function isValidWalk(walk) {
    //insert brilliant code here
    // pseudocode
    // 1 block - 1 minute
    // if i walk 10 mintutes = true
        // else false
      // return to start point
    // if path starts with 0 we increment or decrement
      // if path equals 0 then return true
  
    
    // if north/south equal 0
    // if west/east equal 0
    let ns = 0, we = 0; 
      for (let dir of walk) { 
        if (dir == 'n') ns += 1; 
        if (dir == 's') ns -= 1; 
        if (dir == 'w') we += 1; 
        if (dir == 'e') we -= 1; 
      } 
  
      return walk.length == 10 && ns === 0 && we === 0; 
}

  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;
  
  describe("Tests", () => {
    it("test", () => {
      //some test cases for you...
      assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
      assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
      assert.isFalse(isValidWalk(['w']), 'should return false');
      assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
  
    });
  });
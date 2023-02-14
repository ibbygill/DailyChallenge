String.prototype.toJadenCase = function () {
    // create empty array
    // split string into individual words
      // create for loop 
        // split all words in
    
    var returnString = [];
      var words = this.toLowerCase().split(' ');
      
      for (var i = 0; i < words.length; i++) {
          word = words[i];
          returnString.push(word[0].toUpperCase() + word.slice(1));
      }
      return returnString.join(" ");
};

// SAMPLE TEST

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

  });
});

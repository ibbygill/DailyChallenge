function findMissingLetter(array)
{
  return ' ';
}

// unable to complete
// have to use CharCodeAt and don't know enough about ASCII Codes


const Test = require('@codewars/test-compat');

describe("KataTests", function(){
  it("exampleTests", function(){
    Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
    Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
  });
});
/*
describe('pigLatin', function() {
  it('turns a whole phrase into pig latin', function() {
    pigLatin('dogs are questionably challenging').should.equal('ogsday areay estionablyquay allengingchay');
  })
});
*/

describe('wordPigLatinize', function() {
  it('adds "ay" if word starts with a vowel', function() {
    wordPigLatinize('apple').should.equal('appleay');
  });

  it('moves the first letter to the end if word starts with a consonant and adds "ay"', function() {
    wordPigLatinize('kiwi').should.equal('iwikay');
  });
  
  it('if word begins with two consonants-- moves both and adds "ay"', function() {
    wordPigLatinize('chess').should.equal('esschay');
  });

  it('moves first two letters to the end and adds "ay" if first two letters are "qu"', function() {
    wordPigLatinize('quest').should.equal('estquay');
  }); 

  it('moves all consonants before the first vowel to the end, and adds "ay"', function() {
    wordPigLatinize('stricter').should.equal('icterstray');
  })
/*
  it('if first three are "(x)qu"-- then move three and adds "ay"', function() {
    wordPigLatinize('square').should.equal('aresquay');
  });
*/
});

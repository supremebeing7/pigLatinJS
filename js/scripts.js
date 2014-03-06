var pigLatin = function(string) {
  var words = string.split(' ');
  var wordPigLatinized = [];
  words.forEach(function(word) {
    wordPigLatinized += wordPigLatinize(word) + " ";
  });
  return wordPigLatinized.substring(0, wordPigLatinized.length - 1);
};

var wordPigLatinize = function(string) {
  var vowels = ['a','e','i','o','u'];
  var stringArray = string.toLowerCase().split('');
  var finalProduct = string;
  var startsWithVowel;
  var startsWithConsonant;
  var startsWithTwoConsonant;
  var startsWithQ;
  var firstVowelIndex = [];
  var vowelIndexArray = [];
  var sortedVowelIndexArray = [];
  vowels.forEach(function(vowel) {
    vowelIndexArray += stringArray.indexOf(vowel) + " ";
  });
  vowelIndexArray = vowelIndexArray.substring(0, vowelIndexArray.length - 1);
  console.log(vowelIndexArray);
  sortedVowelIndexArray = vowelIndexArray.split(' ').map(Number).sort();
  console.log(sortedVowelIndexArray);
  for (var i = 0; i < sortedVowelIndexArray.length; i++) {
    if (sortedVowelIndexArray[i] >= 0) {
      firstVowelIndex = sortedVowelIndexArray[i]
      
/*    }  else if (sortedVowelIndexArray[i] === 0) {
      finalProduct = sortedVowelIndexArray; */
    }
  }
  for (var j = 0; j < firstVowelIndex; j++) {
    string = string.concat(stringArray[j]);
  }
  finalProduct = string.slice(firstVowelIndex).concat("ay");

/*
    if (stringArray[0] === vowel) {
      startsWithVowel = string;
    } else if (stringArray[0] === ('q' || 'Q')) {
      startsWithQ = string;
    } else if (stringArray[1] === vowel) {      
      startsWithConsonant = string;
    } else {
      startsWithTwoConsonant = string;
    }  
  });


  if (startsWithVowel === string) {
    finalProduct = startsWithVowel.concat("ay");
  } else if (startsWithConsonant === string) {
    finalProduct = startsWithConsonant.slice(1).concat(string[0] + 'ay');
  } else if (startsWithTwoConsonant === string) {
    finalProduct = startsWithTwoConsonant.slice(2).concat(string[0] + string[1] + 'ay') 
  } else if (startsWithQ = string) {
      if (startsWithQ[1] === ('u' || 'U')) {
        finalProduct = startsWithQ.slice(2).concat(string[0] + string[1] + 'ay');
      } else {
        finalProduct = startsWithQ.slice(1).concat(string[0] + 'ay');
      }
  }
  */
  return finalProduct;
};


$(document).ready(function() {
  $('form#word').submit(function(event) {
    var word = ($('input#phrase').val());
    var pigish = pigLatin(word);

    $('#pigishPhrase').text(pigish);
  
    event.preventDefault();
  });
});






/* WORKING CODE - DONT DELETE
var pigLatin = function(string) {
  var words = string.split(' ');
  var wordPigLatinized = [];
  words.forEach(function(word) {
    wordPigLatinized += wordPigLatinize(word) + " ";
  });
  return wordPigLatinized.substring(0, wordPigLatinized.length - 1);
};

var wordPigLatinize = function(string) {
  var vowels = ['a','e','i','o','u'];
  var stringArray = string.toLowerCase().split('');
  var finalProduct = string;
  var startsWithVowel;
  var startsWithConsonant;
  var startsWithTwoConsonant;
  var startsWithQ;
  vowels.forEach(function(vowel) {
    if (stringArray[0] === vowel) {
      startsWithVowel = string;
    } else if (stringArray[0] === ('q' || 'Q')) {
      startsWithQ = string;
    } else if (stringArray[1] === vowel) {      
      startsWithConsonant = string;
    } else {
      startsWithTwoConsonant = string;
    }  
  });

  if (startsWithVowel === string) {
    finalProduct = startsWithVowel.concat("ay");
  } else if (startsWithConsonant === string) {
    finalProduct = startsWithConsonant.slice(1).concat(string[0] + 'ay');
  } else if (startsWithTwoConsonant === string) {
    finalProduct = startsWithTwoConsonant.slice(2).concat(string[0] + string[1] + 'ay') 
  } else if (startsWithQ = string) {
      if (startsWithQ[1] === ('u' || 'U')) {
        finalProduct = startsWithQ.slice(2).concat(string[0] + string[1] + 'ay');
      } else {
        finalProduct = startsWithQ.slice(1).concat(string[0] + 'ay');
      }
  }
  return finalProduct;
};
*/

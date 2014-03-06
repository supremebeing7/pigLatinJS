describe('titleCase', function() {
  it('makes all letters after the first lower case', function() { 
    titleCase("TITANIC").should.equal("Titanic");
  });
});





var titleCase = function(title) {
  var titleArray = title.toLowerCase().split(" ");
  
  
  upperCase(titleArray);

  exceptions(titleArray);
 
  return titleArray.join(" ");
};



var upperCase = function(title){
  for (var eachWord = 0; eachWord < title.length; eachWord++) {
    title[eachWord] = title[eachWord].charAt(0).toUpperCase() + title[eachWord].slice(1, title[eachWord].length);
  };
  return title;
};

var exceptions = function(title) {
  var prepositions = ["Of", "The", "An", "A", "Or", "But", "And", "In", "On", "Up"];
  title.forEach(function(word, index, newTitle) {
    if((index > 0) && (prepositions.indexOf(word) > -1)) {
      newTitle[index] = word.toLowerCase();
    }
  });
  return title;
};

//Prints to html page
$(document).ready(function() {
  $('form#title').submit(function(event) {
    var title = ($('input#phrase').val());
    var editedPhrase = titleCase(title);

    $('#editedPhrase').text(editedPhrase);


    event.preventDefault();
  });
});



/* ALTERNATE WORKING CODE DONT DELETE
function exceptions(title) {
  var prepositions = ["Of", "The", "An", "A", "Or", "But", "And", "In", "On", "Up"];
  for (var eachWord = 1; eachWord < title.length; eachWord++) {
    if(prepositions.indexOf(title[eachWord]) > -1){
      title[eachWord] = title[eachWord].toLowerCase();
    };
  };
};
*/


/* ALTERNATE WORKING CODE - DONT DELETE
function upperCase(title){
  for (var eachWord = 0; eachWord < title.length; eachWord++) {
    title[eachWord] = title[eachWord].charAt(0).toUpperCase() + title[eachWord].slice(1, title[eachWord].length);
  };
};

function exceptions(title) {
  var prepositions = ["Of", "The", "An", "A", "Or", "But", "And"];
  for (var eachWord = 0; eachWord < title.length; eachWord++) {
    prepositions.forEach(function(preposition) {
      if ((eachWord > 0) && (title[eachWord] === preposition)) {
        title[eachWord] = title[eachWord].toLowerCase();
      };
    });
  };
};
*/


/*
  var prepositions = ["Of", "The", "An", "A", "Or", "But", "And"];
  for (var eachWord = 0; eachWord < title.length; eachWord++) {
    for (var prep = 0; prep < prepositions.length; prep++){
      if ((eachWord > 0) && (title[eachWord] === prepositions[prep])) {
        title[eachWord] = title[eachWord].toLowerCase();
      };
    };
  };
};
*/


/*
function stuff(title) {
  var prepositions = ["Of", "The", "An", "A", "Or", "But", "And"];
  for (var eachWord = 0; eachWord < title.length; eachWord++) {
    prepositions.forEach(function(preposition) {
      if ((eachWord > 0) && (title[eachWord] === preposition)) {
        title[eachWord] = title[eachWord].toLowerCase();
      };
    };
  };
};


/*

var titleCase = function(title) {
  title = title.toLowerCase();
  title = title.split(" ");
  var prepositions = ["Of", "The", "An", "A", "Or", "But", "And"];
  
  for (var eachWord = 0; eachWord < title.length; eachWord++) {
    title[eachWord] = title[eachWord].charAt(0).toUpperCase() + title[eachWord].slice(1, title[eachWord].length);
    prepositions.forEach(function(preposition) {
      if ((eachWord > 0) && (title[eachWord] === preposition)) {
        title[eachWord] = title[eachWord].toLowerCase();
      };  
    }); 
  };


   return title.join(" ");
};

       */

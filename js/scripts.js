$(document).ready(function() {

  $("#blanks form").submit(function(event) {

    event.preventDefault();

    var finalArray = [];
    var funnySentence = $("input#sentence").val();
    var strReverse = funnySentence.split(" ");
      strReverse.forEach(function(word){
        if (word.length > 3) {
          finalArray.push(word)
        }
    });


    console.log(strReverse);
    var allCaps = funnySentence.toUpperCase("");
    $(".sentence").text(allCaps);

var userInput = []


// Below are things I need to do:

// str.split([separator[, limit]])
// arr.join(separator)

         $("#sentenceMade").show();



  });
 });

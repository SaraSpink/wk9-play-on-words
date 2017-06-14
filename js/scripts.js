$(document).ready(function() {

  $("#blanks form").submit(function(event) {

    var funnySentence = $("input#sentence").val();
    // var space = ' ';
    // splitString(funnySentence, space);

    $(".sentence").text(funnySentence);



    //   groceries.forEach(function(grocery) {
    //     var userInput = $("input#" + grocery).val();
    //     console.log(grocery);
    //       // groceries.sort();
    //     $("." + grocery).text(userInput)
    //  });

// Below are things I need to

        //  $("form").hide();
         //
         $("#sentenceMade").show();


    event.preventDefault();
  });
 });

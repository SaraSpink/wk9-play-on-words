$(document).ready(function() {

  $("#blanks form").submit(function(event) {

    var funnySentence = $("input#sentence").val();
    var strReverse = funnySentence.split("").reverse("").join(""); // 'lkjhgfdsa'
    var allCaps = strReverse.toUpperCase("");
    $(".sentence").text(allCaps);




// Below are things I need to do:

// str.split([separator[, limit]])
// arr.join(separator)

         $("#sentenceMade").show();


    event.preventDefault();
  });
 });

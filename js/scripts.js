var sentence = function(userSentence) {
    return userSentence;
  };

  var arrayOfSentence = function(userSentence) {
    var arrayList = userSentence.split(" ");
    return arrayList;
  };

  var replaceWord = function(oldWord, newWord) {
    debugger;
    for(var i = 0; i <= arrayOfSentence.size(); i++) {
      if([i] === oldWord) {
        arrayOfSentence.splice(i, i, newWord);
      } return arrayOfSentence;
    }
  };

//
//
// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });

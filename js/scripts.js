$(document).ready(function() {

  $("#formOne").submit(function(event){
  event.preventDefault();

  var groArr = [];

  groArr.push($("#input1").val());
  groArr.push($("#input2").val());
  groArr.push($("#input3").val());

  var orderedGroArr = groArr.sort();

  var this1 = orderedGroArr.map(function(arritem) {
    return arritem.toUpperCase();
  });

  $("#buyme1").text(this1[0]);
  $("#buyme2").text(this1[1]);
  $("#buyme3").text(this1[2]);

  $("#formOne").hide();
  });


  // grocery list fuctions
  $("#formTwo").submit(function(event){
    event.preventDefault();

    var initialArray = $("#words1").val();
    var splitArray = initialArray.split(" ");

    console.log("splitArray: " , splitArray);

    // make a new array containing only the words with 3 or less letters
    var arrLessThree = [];
    splitArray.map(function(tmpindex) {
      if (tmpindex.length <= 3) {
        arrLessThree.push(tmpindex);
      }
    });

    console.log("arrLessThree: " , arrLessThree);

    // reverse the array
    var reverseArray = arrLessThree.reverse();
    console.log("reverseArray: " , reverseArray);

    // Join all words into a new array for the final sentence
    var joinedArray = reverseArray.join(" ");
    console.log("joinedArray: " , joinedArray);
    console.log(joinedArray);

    // Print all 3 spans with new array data
    $("#poetry").text(initialArray);
    $("#poetry2").text(arrLessThree);
    $("#poetry3").text(joinedArray);

  });

});

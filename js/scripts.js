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

    var initialWd = $("#words1").val();
    var splitWd = initialWd.split(" ");
    console.log(splitWd);

    var wdThree = [];

    splitWd.map(function(tmpindex) {
      if (tmpindex.length <= 3) {
        wdThree.push(tmpindex);
        console.log(tmpindex);
      } else {
        return 0;
      }
    });

    console.log("wdThree: " + wdThree);

    $("#poetry").text(initialWd);
    $("#poetry2").text(wdThree);

  });

});

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

});

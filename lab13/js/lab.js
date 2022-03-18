/**
 * Author:    Sara Christensen
 * Created:   3.14.2022
 **/

function sortingHat(name) {
  // get length of name
  var len = name.length;
  // do a mod 4 to get house
  var mod = len % 4;
  //if conditional to set houseStr to houseStr
  if (mod == 0) {
    houseStr = "Ravenclaw";
  } else if (mod == 1){
    houseStr = "Slytherin";
  } else if (mod == 2){
    houseStr = "Hufflepuff";
  } else if (mod == 3){
    houseStr = "Gryffindor";
  }
  //return house txt
  return houseStr;
}

$("#button").click(function(){
  // need id input in html
  var name = $("#input").val();
  var house = sortingHat(name);
  console.log(house);
  // need id output in html
  $("#output").html(house);
   // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
   var newText = "The Sorting Hat has sorted you into " + house;
  document.getElementById("output").innerHTML = newText;
})

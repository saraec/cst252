function sortingHat(name) {
  // get langth of name
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

$("#my-button").click(function(){
  // need id input in html
  var name = $("#input").val();
  var house = sortingHouse(name);
  comsole.log(house);
  // need id output in html
  $("#output").html(house);
})

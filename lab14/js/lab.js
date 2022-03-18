/**
 * Author:    Sara Christensen
 * Created:   3.16.2022
 **/
//  Loop through numbers 1 to 200, listing them as you go
 for (i=1; i <= 200; i++) {
// Define and declare string
   var buildStr = "";
// If the number is a multiple of 3, if should print "Fizz!"
   if (i % 3 == 0){
     buildStr += "Fizz";
   }
// If the number is a multiple of 5, it should print "Buzz!"
   if (i % 5 == 0){
     buildStr += "Buzz";
   }
// If the number is a multiple of 7, it should print "Boom!"
   if (i % 7 == 0){
     buildStr += "Boom";
   }

   else {
           console.log(i);
       }

// append output to div
   if (buildStr != "") {
    console.log(buildStr + "!");
    $("#output").append("<p>" + buildStr + "!");
    }
    else {
        console.log(i);
        $("#output").append("<p>" + i);
    }
    }

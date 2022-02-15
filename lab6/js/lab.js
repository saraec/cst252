/**
 * SaraChristensen
 * 2.14.2022
 **/

// Define variables.
myTransport = ["Chevy Cruze", "walk", "carpool" ];

myMainRide = {
    make : "Chevy",
    model : "Cruze",
    color : "Silver",
    year : 2011,
    age : function() {
      return 2022 - year;
    }
}

//output
document.writeln("Types of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

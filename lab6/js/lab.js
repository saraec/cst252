// Arrays and Objects. .
// Creating Arrays and printing Objects.
// SaraChristensen. ArianaMoniz.
// 2.14.2022.

// Define variables.
myTransport = ["Chevy Cruze", "walk", "carpool"];

myMainRide = {
  var make = "Chevy",
  var model = "Cruze",
  var color = "Silver",
  var year = 2011,
  age : function() {
      return 2022 - age;
  }
}

//output
document.writeln("Types of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

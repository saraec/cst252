/**
 * SaraChristensen
 * 2.14.2022
 **/

// Define variables.
var myTransport = ["Chevy Cruze", "walk", "carpool" ];

var myMainRide = {
      make : "Chevy",
      model : "Cruze",
      color : "silver",
      year : 2011,
      age : function() {
        return 2022 - this.year;
    }
}

//output
document.writeln("Ways I get around: ", myTransport, "</br>");
document.writeln("The main way I get around: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

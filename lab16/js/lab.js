/**
 * Author:    Sara Christensen
 * Created:   4.04.2022
 **/

//  Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras.
function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  // Add a method info() to your constructor that neatly returns a string with all that information
  this.info = function() {
    return("This vehicle is a " + this.color + " " + this.year + " " + this.make + " " + this.model + " " + "called " + this.extras);
  }
}
// instantiate objects with your constructor for every vehicle you've ever owned:
var car = new Vehicle("Chevy", "Cruze", 2011, "silver", "Bullet")
var bike = new Vehicle("Raleigh", "Retroglide 7", 1998, "black", "Gunn")

// For each instantiated object, call your method info() and output the results to your output div. Here's a reminder:
console.log(car.info());
console.log(bike.info());
// // we add text (including <p> tags to the end of our output div
outputEl = document.getElementById(output);
$("#output").prepend("<p>" + car.info() + "</p>");
$("#output").prepend("<p>" + bike.info() + "</p>");

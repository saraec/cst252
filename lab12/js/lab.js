/**
 * Author:    Sara Christensen
 * Created:   3.9.2022
 **/

 $("#subject-button").click(function(){
   $("#subject").toggleClass("green")
 })

 $("#difficulty-button").click(function(){
   $("#difficulty").toggleClass("orange")
 })

 $("#result-button").click(function(){
   $("#result").toggleClass("brown")
   $("#result").toggleClass("big")
 })

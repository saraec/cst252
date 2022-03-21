/**
 * Author:    Sara Christensen
 * Created:   3.2.2022
 **/


       // Create a <button> element (in jQuery, NOT In your HTML).&  Give it a text label
       // Add it to your output div
          $("#output").append("<button id=my-button>Press Me");

      // Add a click event to it that will bring up an alert
          $("#my-button").click(function(){
            alert("Follow this link to listen to my favorite song right now! https://www.youtube.com/watch?v=cNwy1Th4NYo")
          });

      // Restyle the button with jQuery so it is a pleasant green.
          $("#my-button").css("background-color", "lightgreen");

      // Task X
          $("#subject-button").click(function(){
            $("#subject").toggleClass("green")
          })

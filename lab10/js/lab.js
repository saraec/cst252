/**
 * Author:    Sara Christensen
 * Created:   3.2.2022
 **/

 // Borrow the sort() function or my anagram() function from Lab 7.

 // Attach an event listener to your button

     // Gets the value of your input field

     // Runs that value through your sort() or anagram() function and saves the results.

     // Replaces the html in <div id=output> with the results.

     // find the button element
     buttonEl = document.getElementById("my-button");
     console.log("button element:", buttonEl);
     // find the form element
     inputEl = document.getElementById("user-name");
     console.log("input element:", inputEl);
     // find output element
     outputEl = document.getElementById("output");
     console.log("output element:", outputEl);

     // add an event listener to button
     buttonEl.addEventListener("click", function(){
       // get value from name element
       var userName = inputEl.value;
       // modify value - either sort or shuffle
       var newName = toTitleCase(reorderUserName(userName));
       // put value in output element
       outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
     });

/**
 * Author:    Sara Christensen
 * Created:   3.2.2022
 **/

 // Borrow the sort() function or my anagram() function from Lab 7 (Named functions are from Wes's code)
 // shuffleArray - take an array and shuffle the contents
 // Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 function shuffleArray(array) {
     var currentIndex = array.length, temporaryValue, randomIndex;
     // While there remain elements to shuffle...
     while (0 !== currentIndex) {
         // Pick a remaining element...
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;

         // And swap it with the current element.
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }
     return array;
 }

 // sortUserName - a function that takes user input and sorts the letters
 // of their name
 function sortUserName(word) {
     var wordArray = word.toLowerCase().split('');
     var newArray = shuffleArray(wordArray);
     return newArray.join('');
 }

 // given a string, return string in Title Case
 // thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
 function toTitleCase(str) {
     return str.replace(
         /\w\S*/g,
         function(txt) {
             return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
         }
     );
 }


 // find the button element
      var buttonEl = document.getElementById("my-button");
        console.log("button element:", buttonEl);

      var inputEl = document.getElementById("user-name");
        console.log("input element:", inputEl);

      var outputEl = document.getElementById("output");
        outputEl.style.color = "green";
        console.log("output element:", outputEl);


     // Attach an event listener to your button
          buttonEl.addEventListener("click", function(){
     // Gets the value of your input field
          var userName = inputEl.value;
     // Runs that value through your sort() or anagram() function and saves the results.
          var newName = sortUserName(userName);
     // Replaces the html in <div id=output> with the results.
           outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
         });

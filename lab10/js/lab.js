/**
 * Author:    Sara Christensen
 * Created:   3.2.2022
 **/

 // Borrow the sort() function or my anagram() function from Lab 7 (Both functions are from Wes's code)
 // sortUserName - a function that takes user input and sorts the letters of their name
 function sortUserName(userName) {
     // // convert to lower case
       userName = userName.toLowerCase();
       console.log("userName =", userName);
     // // split string to array
       var nameArray = userName.split('');
       console.log("nameArray =", nameArray);
     // // sort the array
       var nameArraySort = nameArray.sort();
       console.log("nameArraySort =", nameArraySort);
     // // join array back to a string
       var nameSorted = nameArraySort.join('');
       console.log("nameSorted =", nameSorted);
     // // Note that I could have done the above lines as a single line:
       userName.toLowerCase().split("").sort().join("")
       return userName.toLowerCase().split("").sort().join("");
 }

 function randomizeName(userName) {
     // convert userName string to an array
     var nameArray = userName.toLowerCase().split("");
     console.log("nameArray =", nameArray);
     // shuffle array with our shuffle function
     var shuffledArray = shuffleArray(nameArray);
     console.log("shuffledArray =", shuffledArray);
     var shuffledString = shuffledArray.join("");
     // shift to Title Case (like a name)
     var newName = toTitleCase(shuffledString);
     // return array to a string
     return newName;
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

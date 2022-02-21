/**
 * Author: Sara Christensen and Ari Moniz
 * Created:   2.21.22
 **/

      function sortUserName() {
        // declare a variable userName and use window.prompt()
            var userName = window.prompt("Enter your name");
            console.log("userName = ", userName);
        // Sort the letters of the user's name and return those from the function
        // split string into array
            var nameArray = userName.split('');
            console.log("nameArray = ", nameArray);
        // sort array
            var nameArraySort = nameArray.sort();
            console.log("nameArraySort = ", nameArraySort);
        // convert array back to string
            var nameSorted = nameArraySort.join('');
            console.log("nameSorted = ", nameSorted);
        // return sorted string
            return nameSorted;
  }

      // call the function and output the results with document.write()
    document.writeln("Your new name is: ", sortUserName());

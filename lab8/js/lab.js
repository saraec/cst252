/**
 * Author:    Sara Christensen
 * Created:   2.23.2022
 **/
            // define array
          array = [7, 70, 17, 777, 7000, 71, 77];
          console.log("My array ", array);

           // named function
            function addTwo(x){
                return x + 2;
            }

            // test results
            console.log("What's 5 + 2? " + addTwo(5));
            console.log("What's 2220 + 2? " + addTwo(2220));

          // apply .map to array and function
          var result = array.map(addTwo);

          // test
          console.log("Add two to the array: ", result);

          // new anon function
          var result =  array.map(function(x){
                return x/2;
            })
          // test
          console.log("Divide the array by two: ", result);

          var sortedNumbers = array.sort(function(a, b) {
                	return a-b;
            	});
          console.log("Sorted Array: ", sortedNumbers);

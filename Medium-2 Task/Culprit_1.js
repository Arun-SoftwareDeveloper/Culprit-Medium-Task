//  Find the culprits and nail them — debugging javascript loops
// Write a code to print the numbers in the array

// Output: 1234567891011

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
  new_string += numsArr[i];
}

console.log(new_string);

//This code iterates through the numsArr array, concatenates
//each number to the new_string, and produces the desired output "1234567891011".

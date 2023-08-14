//Write a code to print the numbers in the array

//Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
  if (i !== numsArr.length - 1) {
    new_string += numsArr[i] + ",";
  } else {
    new_string += numsArr[i];
  }
}

console.log(new_string);

// The loop iterates through the numsArr array using the variable i.
// Inside the loop, it checks if i is not the last index (numsArr.length - 1)

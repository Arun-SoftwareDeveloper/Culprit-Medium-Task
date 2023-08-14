// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

// Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 10; i >= 0; i--) {
  new_string += numsArr[i];

  if (i !== 0) {
    new_string += " ";
  }
}

console.log(new_string);

// The loop iterates from index 10 (last index of numsArr) down to index 0.
// Inside the loop, it adds the current number to the new_string.

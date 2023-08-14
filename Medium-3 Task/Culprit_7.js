// Fix the code to rotate an array by k times and return rotated array using IIFE function

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = k % arr.length; // Adjust k to handle larger values

(function () {
  var out = [];
  var count = 0;

  for (var i = k; i < arr.length; i++) {
    out[count] = arr[i];
    count += 1;
  }

  for (var i = 0; i < k; i++) {
    out[count] = arr[i];
    count += 1;
  }

  console.log(out);
})();

// The first for loop iterates from k to the end of the array and adds the elements to the out array.
// The second for loop iterates from the start of the array up to k - 1 and adds those elements to the out array.
// The output will be the rotated array after rotating it k times.

// Fix the code to Sum of the digits present in the number

let n = 123;
console.log(add(n));

function add(n) {
  let sum = 0;
  n = n.toString(); // Convert the number to a string to iterate through its digits

  for (var i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
  }

  return sum;
}

//I changed the initial value of sum to 0, as you want to calculate the sum of digits.

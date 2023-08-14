// Fix the code to sum the number in that array

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = (a, b) => a + b; // Define the sum function

const totalSum = num.reduce(sum, 0); // Pass an initial value (0) to the reduce function
console.log(totalSum);

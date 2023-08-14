// Fix the code to return the Prime numbers

const newArray = [1, 3, 2, 5, 10];

const myPrime = newArray.filter((num) => {
  if (num === 1) {
    return false; // 1 is not a prime number
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // If any divisor is found, it's not prime
    }
  }

  return true; // If no divisor was found, it's a prime number
});

console.log(myPrime);

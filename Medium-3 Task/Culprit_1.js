//  Find the culprits and nail them — debugging javascript
// Fix the code to get the largest of three.

aa = (f, s, t) => {
  console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
aa(1, 2, 3);

// You're redeclaring the variables f, s, and t inside
// the function parameter list, which is not necessary and actually causes an error.

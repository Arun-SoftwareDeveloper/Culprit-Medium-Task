// Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
(function () {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
})();

// Inside the loop, it capitalizes the first letter of each word using arr[i][0].toUpperCase() and then concatenates it with the rest of the word using .substr(1).

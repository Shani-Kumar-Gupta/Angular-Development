/*
  1. JavaScript is dynamically typed language
  2. TypeScript is statically typed language (It's superset of JavaScript with some additional features)
  3. Dynamically typing vs. Statically typing
  4. Looslly typed language vs Strongly typed language
*/
function add(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
var result = add(1, '2');
console.log(result);

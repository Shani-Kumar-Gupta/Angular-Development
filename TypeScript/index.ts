/*
  1. JavaScript is dynamically typed language
  2. TypeScript is statically typed language (It's superset of JavaScript with some additional features)
  3. Dynamically typing vs. Statically typing
  4. Looslly typed language vs Strongly typed language
*/

function add(a: number, b: number = 0): number {
  return a + b;
}

const result = add(1, 4);
console.log(result);
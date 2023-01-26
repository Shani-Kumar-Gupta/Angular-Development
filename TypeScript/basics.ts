/* 
Basic Types and Prmitives mostly used in TS 
Prmitives in JS-
  number
  string
  boolean
  bigint
  undefined
  null
  symbol

Primitives in TS - number, string, boolean
Complex Types - arrays, objects
Function types and parameters
*/

/* Type Annotation */

// Variable Type Annotation
let age: number = 21;
age = 24;

let myName: string;
myName = "Shani Kumar Gupta";

let isDeveloper: boolean;
isDeveloper = true;

console.log(age, myName, isDeveloper);

// Function Parameters Type Annotation
function getMyName(name: string): string {
  return "My Name is " + name;
}

const fullName = getMyName("Shani Kumar Gupta");
console.log(fullName);

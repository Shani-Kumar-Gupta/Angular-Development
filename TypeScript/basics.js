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
var age = 21;
age = 24;
var myName;
myName = "Shani Kumar Gupta";
var isDeveloper;
isDeveloper = true;
console.log(age, myName, isDeveloper);
// Function Parameters Type Annotation
function getMyName(name) {
    return "My Name is " + name;
}
var fullName = getMyName("Shani Kumar Gupta");
console.log(fullName);
// Object Property Type Annotation
var employee;
employee = {
    myName: "Shani Kumar Gupta",
    college: "GLA University, Mathura",
    rollNumber: 1715,
    isPass: true
};

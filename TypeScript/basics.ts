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
myName = 'Shani Kumar Gupta';

let isDeveloper: boolean;
isDeveloper = true;

console.log(age, myName, isDeveloper);

// Function Parameters Type Annotation
function getMyName(name: string): string {
  return 'My Name is ' + name;
}

const fullName = getMyName('Shani Kumar Gupta');
console.log(fullName);

// Object Property Type Annotation

let employee: {
  myName: string;
  college: string;
  rollNumber: number;
  isPass: boolean;
};

employee = {
  myName: 'Shani Kumar Gupta',
  college: 'GLA University, Mathura',
  rollNumber: 1715,
  isPass: true,
};

// More Complex Types and Type Annotation

let hobbies: string[];
hobbies = ['Coding', 'Cricket'];

let nums: number[];
nums = [23, 21, 45];

let studentData: {
  studentName: string;
  college: string;
  rollNum: number;
}[];

studentData = [
  {
    studentName: 'Shani Kumar Gupta',
    college: 'GLA',
    rollNum: 12345,
  },
  {
    studentName: 'Aman',
    college: 'GLA',
    rollNum: 23456,
  },
];

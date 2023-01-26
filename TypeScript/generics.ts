/* Generics in TS */

function insertAtBeginning(array: any[], value: any) {
  const newArr = [value, ...array];
  return newArr;
}

// Generics Types in TS
function insertAtBeginningGen<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const demoArr = [1, 2, 3];
const demoArrGen = [1, 2, 3];

const updatedArr = insertAtBeginning(demoArr, 4); // Type - any
const updatedArrGen = insertAtBeginningGen(demoArrGen, 4); // Type - number

updatedArr[0].slice();
// updatedArrGen[0].slice(); // You will get an error
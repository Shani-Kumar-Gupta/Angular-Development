/* Classes in TypeScript */

/* Class is the blueprint for the object */

class Student {
  /*
    1. We can add Property to the class
    2. We can add Methods to the class
  */
  firstName: string;
  lastName: string;
  age: number;
  courses: string[];

  constructor(firstName: string, lastName: string, age: number, courses: string[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses;
  }

  enrol(course: string) {
    this.courses.push(course);
  }
}

const newStudent = new Student("John", "Smith", 30, ["coding", "programming"]);
const newStudent2 = new Student("S", "G", 23, ["coding", "programming"]);
newStudent2.firstName = "Shani";
newStudent2.lastName = "Gupta";
newStudent2.age = 24;
newStudent2.courses = ["coding", "programming"];
newStudent2.enrol('React');

console.log(newStudent2);
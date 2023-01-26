/* Classes in TypeScript */
/* Class is the blueprint for the object */
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    return Student;
}());
var newStudent = new Student("John", "Smith", 30, ["coding", "programming"]);
var newStudent2 = new Student("S", "G", 23, ["coding", "programming"]);
newStudent2.firstName = "Shani";
newStudent2.lastName = "Gupta";
newStudent2.age = 24;
newStudent2.courses = ["coding", "programming"];
console.log(newStudent2);

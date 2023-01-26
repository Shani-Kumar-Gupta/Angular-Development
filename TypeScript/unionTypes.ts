// Union Type - Want to assign multiple values in a single variable in TS

let courseData: string | number = 'React';

courseData = 12345;

console.log(courseData);

let names: string | string[];

names = "Shani K.";
names = ["Shani K.", "Shani K. Gupta"];